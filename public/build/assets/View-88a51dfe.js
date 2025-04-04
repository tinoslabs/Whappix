import{T as _,i as x,g as p,o as n,a as t,t as e,f as b,k,u as a,l as w,c as d,h as y,n as $,b as f,e as C,F as S,O as V}from"./app-a39c937f.js";import{_ as B}from"./App-c36b28d4.js";import"./index-8758cb17.js";import{_ as L}from"./FormTextArea-e893dff2.js";import"./Sidebar-cfdf4c27.js";import"./Menu-bdf286ac.js";import"./Modal-df1e3aae.js";import"./transition-37a067aa.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./micro-task-89dcd6af.js";import"./ProfileModal-61a09d92.js";import"./FormInput-4b7fa008.js";import"./FormPhoneInput-1c9c9926.js";/* empty css                      */import"./FormSelect-c7672027.js";import"./tabs-86fdd039.js";import"./LangToggle-edfcdcaa.js";import"./index-80d9f634.js";import"./MobileSidebar-d61cbb69.js";/* empty css              */import"./pusher-4059f127.js";const N={class:"bg-white md:bg-inherit pt-0 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] overflow-y-scroll"},T={class:"flex justify-between mt-8 md:mt-0"},j={class:"text-xl mb-1"},z={class:"grid grid-cols-2 md:flex gap-x-6 mt-4 md:mt-10"},A={class:"col-span-2 md:order-1 md:w-[70%]"},D={class:"bg-white border py-5 px-5 rounded-[0.5rem] mb-4 text-sm"},U={class:"text-xl"},F={class:"border border-dashed py-2 px-2 mt-8 bg-slate-100"},I={key:0,class:"bg-white border py-5 px-5 rounded-[0.5rem] mb-4"},M={type:"submit",class:"mb-2 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"},H={class:"flex space-x-4 text-sm"},O={class:"bg-slate-100 rounded-full h-12 w-12 p-4 flex justify-center items-center"},E={class:"space-x-4 mb-1"},P={class:"col-span-2 w-[100%] md:order-2 md:w-[30%]"},R={class:"bg-white border p-4 text-sm rounded-[0.5rem]"},Z={class:"bg-slate-100 p-2 rounded mb-2 space-x-3"},q={class:"capitalize"},G={class:"bg-slate-100 p-2 rounded mb-2 space-x-3"},J={class:"capitalize"},K={class:"bg-slate-100 p-2 rounded mb-2 space-x-3"},Q={class:"capitalize"},W={class:"bg-slate-100 p-2 rounded mb-2 space-x-3"},X={key:0,class:"flex grid grid-cols-2 space-x-2 mt-4"},kt={__name:"View",props:["ticket"],setup(h){const o=h,l=_({message:null}),m=s=>{const i={month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(s).toLocaleString("en-US",i)},v=(s,i)=>{const r=s.charAt(0).toUpperCase(),c=i.charAt(0).toUpperCase();return`${r}${c}`},g=()=>{l.post("/support/"+o.ticket.uuid+"/comment",{preserveScroll:!0,onSuccess:()=>l.reset()})},u=s=>{V.post("/support/"+o.ticket.uuid+"/status",{status:s})};return(s,i)=>(n(),x(B,null,{default:p(()=>[t("div",N,[t("div",T,[t("div",null,[t("h2",j,e(s.$t("Ticket ref"))+": "+e(o.ticket.reference),1)]),t("div",null,[b(a(w),{href:"/support",class:"flex items-center space-x-4 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:p(()=>[i[4]||(i[4]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},[t("path",{fill:"currentColor","fill-rule":"evenodd",d:"M5.841 5.28a.75.75 0 0 0-1.06-1.06L1.53 7.47L1 8l.53.53l3.25 3.25a.75.75 0 0 0 1.061-1.06l-1.97-1.97H24.25a.75.75 0 0 0 0-1.5H3.871l1.97-1.97Z","clip-rule":"evenodd"})],-1)),k(" "+e(s.$t("Back")),1)]),_:1})])]),t("div",z,[t("div",A,[t("div",D,[t("h2",U,e(s.$t("Subject"))+": "+e(o.ticket.subject),1),t("div",F,e(o.ticket.message),1)]),o.ticket.status==="open"||o.ticket.status==="pending"?(n(),d("div",I,[t("form",{onSubmit:i[1]||(i[1]=y(r=>g(),["prevent"]))},[b(L,{modelValue:a(l).message,"onUpdate:modelValue":i[0]||(i[0]=r=>a(l).message=r),name:s.$t("Comment"),type:"text",showLabel:!0,error:a(l).errors.message,textAreaRows:3,class:$("sm:col-span-6 mb-5")},null,8,["modelValue","name","error"]),t("button",M,e(s.$t("Add comment")),1)],32)])):f("",!0),(n(!0),d(S,null,C(o.ticket.comments_with_user,(r,c)=>(n(),d("div",{key:c,class:"bg-white border py-5 px-5 rounded-[0.5rem] mb-2"},[t("div",H,[t("div",null,[t("div",O,e(v(r.user.first_name,r.user.last_name)),1)]),t("div",null,[t("div",E,[t("span",null,e(r.user.first_name+" "+r.user.last_name),1),t("span",null,e(m(r.created_at)),1)]),t("div",null,e(r.message),1)])])]))),128))]),t("div",P,[t("div",R,[t("div",Z,[t("span",null,e(s.$t("Category"))+":",1),t("span",q,e(o.ticket.category.name),1)]),t("div",G,[t("span",null,e(s.$t("Status"))+":",1),t("span",J,e(o.ticket.status),1)]),t("div",K,[t("span",null,e(s.$t("Priority"))+":",1),t("span",Q,e(o.ticket.priority??s.$t("Not set")),1)]),t("div",W,[t("span",null,e(s.$t("Date created"))+":",1),t("span",null,e(m(o.ticket.created_at)),1)]),o.ticket.status==="open"||o.ticket.status==="pending"?(n(),d("div",X,[t("button",{onClick:i[2]||(i[2]=r=>u("closed")),class:"mb-2 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"},e(s.$t("Close ticket")),1),t("button",{onClick:i[3]||(i[3]=r=>u("resolved")),class:"mb-2 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"},e(s.$t("Mark as resolved")),1)])):f("",!0)])])])])]),_:1}))}};export{kt as default};
