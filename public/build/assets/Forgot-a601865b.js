import{r as C,T as V,q as $,R,c as r,a as e,e as p,f as y,u as n,t as c,k as g,g as A,b as x,n as B,o as i,l as w}from"./app-43851608.js";import{_ as M}from"./FormInput-4a309017.js";import{u as N,a as j}from"./ReCaptcha-55f58cbf.js";const S={class:"flex h-screen justify-center"},T={class:"flex justify-center"},F={class:"w-[20em] mt-40"},Z={class:"flex justify-center mb-5"},E=["src","alt"],L={key:1,class:"text-2xl mb-2"},U={class:"text-2xl text-center"},q={class:"text-center text-sm text-slate-500"},z={key:0,class:"text-sm bg-[green] text-white mb-2 py-2 px-1 text-center rounded"},D={key:1,class:"form-error text-[#b91c1c] text-xs"},K={class:"mt-6"},P={key:0,type:"submit",class:"rounded-md bg-primary px-3 py-3 text-sm text-white shadow-sm w-full"},G={key:1,type:"button",class:"rounded-md bg-primary px-3 py-3 text-sm text-white shadow-sm w-full flex justify-center"},H=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})])],-1),I=[H],W={__name:"Forgot",props:["flash","config","companyConfig"],setup(v){const a=v,d=C(!1),o=V({email:null,recaptcha_response:null}),l=t=>{const s=a.config.find(m=>m.key===t);return s?s.value:""},b=async()=>{if(d.value=!0,l("recaptcha_active")==="1"){const t=await k();o.recaptcha_response=t}o.post("forgot-password",{preserveScroll:!0,onFinish:()=>{d.value=!1}})},k=()=>new Promise(t=>{grecaptcha.ready(()=>{grecaptcha.execute(l("recaptcha_site_key"),{action:"submit"}).then(s=>{t(s)})})});return $(()=>{l("recaptcha_active")==="1"&&N(l("recaptcha_site_key"))}),R(()=>{j(l("recaptcha_site_key"))}),(t,s)=>{var m,u,h,f;return i(),r("div",S,[e("div",T,[e("div",F,[e("div",Z,[p(n(w),{href:"/"},{default:y(()=>[a.companyConfig.logo?(i(),r("img",{key:0,class:"max-w-[180px]",src:"/media/"+a.companyConfig.logo,alt:a.companyConfig.company_name},null,8,E)):(i(),r("h4",L,c(a.companyConfig.company_name),1))]),_:1})]),e("h1",U,c(t.$t("Reset password")),1),e("div",q,[g(c(t.$t("Remembered password?"))+" ",1),p(n(w),{href:"login",class:"text-sm text-primary-600 dark:text-primary-500 border-b hover:border-gray-500"},{default:y(()=>[g(c(t.$t("Login")),1)]),_:1})]),e("form",{onSubmit:s[1]||(s[1]=A(_=>b(),["prevent"])),class:"mt-5"},[(u=(m=a.flash)==null?void 0:m.status)!=null&&u.message?(i(),r("div",z,[e("span",null,c((f=(h=a.flash)==null?void 0:h.status)==null?void 0:f.message),1)])):x("",!0),p(M,{modelValue:n(o).email,"onUpdate:modelValue":s[0]||(s[0]=_=>n(o).email=_),name:t.$t("Email"),error:n(o).errors.email,type:"email",class:B("sm:col-span-6")},null,8,["modelValue","name","error"]),n(o).errors.recaptcha_response?(i(),r("div",D,c(n(o).errors.recaptcha_response),1)):x("",!0),e("div",K,[d.value?(i(),r("button",G,I)):(i(),r("button",P,c(t.$t("Send password reset link")),1))])],32)])])])}}};export{W as default};
