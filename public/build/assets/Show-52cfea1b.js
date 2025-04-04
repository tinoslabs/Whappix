import{T as g,r as w,i as y,g as h,o as n,a as s,c as d,t as a,f as m,k,u as i,l as q,h as $,n as c}from"./app-a39c937f.js";import V from"./App-dead54de.js";import{_}from"./FormTextArea-e893dff2.js";import{_ as S}from"./FormSelect-c7672027.js";import"./Sidebar-8911f1a5.js";import"./Menu-ed0b9fc4.js";import"./ProfileModal-61a09d92.js";import"./FormInput-4b7fa008.js";import"./FormPhoneInput-1c9c9926.js";/* empty css                      */import"./transition-37a067aa.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./micro-task-89dcd6af.js";import"./tabs-86fdd039.js";import"./LangToggle-edfcdcaa.js";import"./MobileSidebar-d784e66f.js";import"./index-80d9f634.js";/* empty css              */import"./index-8758cb17.js";const A={class:"p-8 rounded-[5px] text-[#000] overflow-y-scroll"},B={class:"flex justify-between"},C={key:0,class:"text-xl mb-1"},F={key:1,class:"text-xl mb-1"},Q={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},U={key:0,class:"ml-1 mt-1"},j={key:1,class:"ml-1 mt-1"},N={class:"sm:flex border-b py-5"},D={class:"hidden sm:block sm:w-[40%] mb-1"},M={class:"text-sm text-gray-500 tracking-[0px]"},O={class:"sm:w-[60%] sm:flex space-x-6"},R={class:"sm:w-[80%] grid gap-x-6 gap-y-4 sm:grid-cols-6"},T={class:"sm:flex border-b py-5"},Z={class:"hidden sm:block sm:w-[40%] mb-1"},z={class:"text-sm text-gray-500 tracking-[0px]"},E={class:"sm:w-[60%] sm:flex space-x-6"},H={class:"sm:w-[80%] grid gap-x-6 gap-y-4 sm:grid-cols-6"},G={class:"sm:flex border-b py-5"},I={class:"hidden sm:block w-[40%] mb-1"},J={class:"text-sm text-gray-500 tracking-[0px]"},K={class:"sm:w-[60%] sm:flex space-x-6"},L={class:"sm:w-[80%] grid gap-x-6 gap-y-4 sm:grid-cols-1"},P={class:"py-6"},W={type:"submit",class:"float-right flex items-center space-x-4 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},xs={__name:"Show",props:{title:String,faq:Object},setup(v){var p,u,f;const l=v,e=g({question:(p=l.faq)==null?void 0:p.question,answer:(u=l.faq)==null?void 0:u.answer,status:(f=l.faq)==null?void 0:f.status}),x=w([{value:0,label:"Hide"},{value:1,label:"Display"}]),b=async()=>{const t=l.faq?window.location.pathname:"/admin/faqs";e[l.faq?"put":"post"](t,{preserveScroll:!0})};return(t,o)=>(n(),y(V,null,{default:h(()=>[s("div",A,[s("div",B,[s("div",null,[l.faq===null?(n(),d("h1",C,a(t.$t("Create FAQ")),1)):(n(),d("h1",F,a(t.$t("Update FAQ")),1)),s("p",Q,[o[4]||(o[4]=s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),l.faq===null?(n(),d("span",U,a(t.$t("Create FAQ")),1)):(n(),d("span",j,a(t.$t("Update FAQ")),1))])]),s("div",null,[m(i(q),{href:"/admin/faqs",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:h(()=>[k(a(t.$t("Back")),1)]),_:1})])]),s("form",{onSubmit:o[3]||(o[3]=$(r=>b(),["prevent"])),class:"bg-white border py-5 px-5 rounded-[0.5rem]"},[s("div",N,[s("div",D,[s("h1",M,a(t.$t("Question")),1)]),s("div",O,[s("div",R,[m(_,{modelValue:i(e).question,"onUpdate:modelValue":o[0]||(o[0]=r=>i(e).question=r),name:"",error:i(e).errors.question,type:"text",textAreaRows:4,class:c("sm:col-span-6")},null,8,["modelValue","error"])])])]),s("div",T,[s("div",Z,[s("h1",z,a(t.$t("Answer")),1)]),s("div",E,[s("div",H,[m(_,{modelValue:i(e).answer,"onUpdate:modelValue":o[1]||(o[1]=r=>i(e).answer=r),name:"",error:i(e).errors.answer,type:"text",textAreaRows:4,class:c("sm:col-span-6")},null,8,["modelValue","error"])])])]),s("div",G,[s("div",I,[s("h1",J,a(t.$t("Status")),1)]),s("div",K,[s("div",L,[m(S,{modelValue:i(e).status,"onUpdate:modelValue":o[2]||(o[2]=r=>i(e).status=r),options:x.value,error:i(e).errors.status,name:"",class:c("sm:col-span-3"),placeholder:t.$t("Select status")},null,8,["modelValue","options","error","placeholder"])])])]),s("div",P,[s("button",W,a(t.$t("Save")),1)])],32)])]),_:1}))}};export{xs as default};
