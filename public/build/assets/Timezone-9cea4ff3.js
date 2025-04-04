import{r as _,T as v,f as b,g as w,o as f,a as t,t as l,j as d,u as o,n as a,c,k as h}from"./app-63c352f8.js";import V from"./App-eb72ec5a.js";import{_ as p}from"./FormSelect-51609345.js";import"./App-ab3770eb.js";import"./Sidebar-7ba13270.js";import"./Menu-a985a654.js";import"./ProfileModal-7fdd08ae.js";import"./FormInput-a9577592.js";import"./FormPhoneInput-ba9f060e.js";/* empty css                      */import"./transition-513441a0.js";import"./hidden-1ba5fb48.js";import"./use-text-value-34fc6a1a.js";import"./micro-task-89dcd6af.js";import"./tabs-14de339e.js";import"./LangToggle-130b0b55.js";import"./index-245abe8c.js";import"./MobileSidebar-b0e564de.js";import"./index-445d2961.js";/* empty css              */import"./Sidebar-960147ab.js";const x={class:"text-xl mb-1"},z={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},k={class:"ml-1 mt-1"},$={class:"space-y-12"},A={class:"pb-12"},C={class:"grid gap-6 grid-cols-2 pb-10 border-b md:w-2/3"},B={class:"mt-6 flex items-center justify-end gap-x-6 md:w-2/3"},T={type:"button",class:"text-sm leading-6 text-gray-900"},j=["disabled"],q={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Z={key:1},te={__name:"Timezone",props:{config:{type:Object,required:!0},timezones:{type:Array,required:!0},date_formats:{type:Array,required:!0},time_formats:{type:Array,required:!0},currencies:{type:Array,required:!0}},setup(y){const i=y,m=s=>{const e=i.config.find(n=>n.key===s);return e?e.value:""},u=_(!1),r=v({timezone:m("timezone"),currency:m("currency"),date_format:m("date_format"),time_format:m("time_format")}),g=async()=>{r.put("/admin/settings?type=timezone",{preserveScroll:!0})};return(s,e)=>(f(),b(V,null,{default:w(()=>[t("div",null,[t("h2",x,l(s.$t("Timezone and currency")),1),t("p",z,[e[5]||(e[5]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),t("span",k,l(s.$t("Configure timezone, date and time formats and currency")),1)])]),t("form",{onSubmit:e[4]||(e[4]=h(n=>g(),["prevent"]))},[t("div",$,[t("div",A,[t("div",C,[d(p,{modelValue:o(r).timezone,"onUpdate:modelValue":e[0]||(e[0]=n=>o(r).timezone=n),name:s.$t("Timezone"),type:"text",options:i.timezones,error:o(r).errors.timezone,class:a("col-span-2")},null,8,["modelValue","name","options","error"]),d(p,{modelValue:o(r).date_format,"onUpdate:modelValue":e[1]||(e[1]=n=>o(r).date_format=n),name:s.$t("Date format"),type:"text",options:i.date_formats,error:o(r).errors.date_format,class:a("col-span-1")},null,8,["modelValue","name","options","error"]),d(p,{modelValue:o(r).time_format,"onUpdate:modelValue":e[2]||(e[2]=n=>o(r).time_format=n),name:s.$t("Time format"),type:"text",options:i.time_formats,error:o(r).errors.time_format,class:a("col-span-1")},null,8,["modelValue","name","options","error"]),d(p,{modelValue:o(r).currency,"onUpdate:modelValue":e[3]||(e[3]=n=>o(r).currency=n),name:s.$t("Currency"),type:"text",options:i.currencies,error:o(r).errors.currency,class:a("col-span-2")},null,8,["modelValue","name","options","error"])]),t("div",B,[t("button",T,l(s.$t("Cancel")),1),t("button",{class:a(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":u.value}]),disabled:u.value},[u.value?(f(),c("svg",q,e[6]||(e[6]=[t("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),t("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[t("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(f(),c("span",Z,l(s.$t("Save")),1))],10,j)])])])],32)]),_:1}))}};export{te as default};
