<?php

namespace App\Services;

use App\Http\Resources\SubscriptionPlanResource;
use App\Models\PaymentGateway;
use App\Models\SubscriptionPlan;
use App\Services\StripeService;
use DB;

class SubscriptionPlanService
{
    /**
     * Get all subscription plans based on the provided request filters.
     *
     * @param Request $request
     * @return mixed
     */
    public function get(object $request)
    {
        $subscriptionPlans = (new SubscriptionPlan)->listAll($request->query('search'));

        return SubscriptionPlanResource::collection($subscriptionPlans);
    }

    /**
     * Retrieve a subscription plan by its UUID.
     *
     * @param string $uuid
     * @return \App\Models\SubscriptionPlan
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function getByUuid($uuid = null)
    {
        return SubscriptionPlan::where('uuid', $uuid)->first();
    }

    /**
     * Store a new subscription plan based on the provided request data.
     *
     * @param Request $request
     */
    public function store(Object $request)
    {
        $newSubscriptionPlan = SubscriptionPlan::create([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'period' => $request->input('period'),
            'status' => $request->input('status'),
            'metadata' => json_encode([
                'campaign_limit' => $request->input('campaign_limit'),
                'message_limit' => $request->input('message_limit'),
                'contacts_limit' => $request->input('contacts_limit'),
                'canned_replies_limit' => $request->input('canned_replies_limit'),
                'team_limit' => $request->input('team_limit'),
                'receive_messages_after_expiration' => $request->input('receive_messages_after_expiration') == true ? 1 : 0,
                'addons' => $request->input('addons', [])
            ]),
        ]);

        $stripe = PaymentGateway::where('name', 'Stripe')->first();

        if($stripe->is_active == '1'){
            //Create product in Stripe
            (new StripeService)->createProduct($newSubscriptionPlan);
        }
    
        return $newSubscriptionPlan;
    }

    /**
     * Update an existing subscription plan based on the provided request data.
     *
     * @param Request $request
     */
    public function update(Object $request, $uuid)
    {
        $plan = SubscriptionPlan::where('uuid', $uuid)->firstOrFail();
        $metadata = json_decode($plan->metadata, true);
        $metadata['campaign_limit'] = $request->input('campaign_limit');
        $metadata['message_limit'] = $request->input('message_limit');
        $metadata['contacts_limit'] = $request->input('contacts_limit');
        $metadata['canned_replies_limit'] = $request->input('canned_replies_limit');
        $metadata['team_limit'] = $request->input('team_limit');
        $metadata['receive_messages_after_expiration'] = $request->input('receive_messages_after_expiration') == true ? 1 : 0;
        $metadata['addons'] = $request->input('addons', []);

        $plan->name = $request->input('name');
        $plan->price = $request->input('price');
        $plan->metadata = json_encode($metadata);
        $plan->period = $request->input('period');
        $plan->status = $request->input('status');

        $plan->save();

        $stripe = PaymentGateway::where('name', 'Stripe')->first();

        if($stripe->is_active == '1'){
            //Update product in Stripe
            (new StripeService)->updateProduct($plan);
        }

        return $plan;
    }

    /**
     * Destroy (delete) an existing subscription plan based on the provided request data.
     *
     * @param Request $request
     */
    public function destroy($uuid)
    {
        $subscriptionPlan = SubscriptionPlan::where('uuid', $uuid)->firstOrFail();
        $subscriptionPlan->update(['deleted_at' => now()]);

        $stripe = PaymentGateway::where('name', 'Stripe')->first();

        if($stripe->is_active == '1'){
            //Update product in Stripe
            (new StripeService)->deleteProduct($subscriptionPlan);
        }
    }
}