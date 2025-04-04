import{r as k,T as x,i as $,g as C,o as d,a as l,t as u,f as a,u as r,n as i,c as p,b as c,h}from"./app-a39c937f.js";import M from"./App-6bb12c29.js";import{_ as m}from"./FormInput-4b7fa008.js";import{_ as U}from"./FormSelect-c7672027.js";import"./App-dead54de.js";import"./Sidebar-8911f1a5.js";import"./Menu-ed0b9fc4.js";import"./ProfileModal-61a09d92.js";import"./FormPhoneInput-1c9c9926.js";/* empty css                      */import"./transition-37a067aa.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./micro-task-89dcd6af.js";import"./tabs-86fdd039.js";import"./LangToggle-edfcdcaa.js";import"./MobileSidebar-d784e66f.js";import"./index-80d9f634.js";/* empty css              */import"./Sidebar-69e6d10e.js";import"./index-8758cb17.js";const S={class:"text-xl mb-1"},A={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},j={class:"ml-1 mt-1"},B={class:"space-y-12"},N={class:"pb-12"},Z={class:"pb-10"},E={class:"grid gap-6 grid-cols-2 pb-6 md:w-2/3"},L={key:0,class:"grid gap-6 grid-cols-2 pb-10 md:w-2/3"},P={key:1,class:"grid gap-6 grid-cols-2 pb-6 md:w-2/3"},R={key:2,class:"grid gap-6 grid-cols-2 pb-6 md:w-2/3"},T={class:"grid gap-6 grid-cols-2 pb-3 md:w-2/3"},W={class:"grid grid-cols-2 pb-6 border-b md:w-2/3"},q={class:"relative flex gap-x-3 mt-4 col-span-2"},z={class:"flex items-center"},O={class:"relative flex gap-x-3 mt-4 col-span-2"},D={class:"flex items-center"},F={class:"mt-1 flex items-center justify-end gap-x-6 md:w-2/3 pt-2"},H={type:"button",class:"text-sm leading-6 text-gray-900"},J=["disabled"],K={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},G={key:1},ve={__name:"Email",props:{config:{type:Object,required:!0}},setup(y){const w=y,f=t=>{const o=w.config.find(s=>s.key===t);return o?o.value:""},n=t=>{const o=JSON.parse(f("mail_config"));return o!==null&&typeof o=="object"&&!Array.isArray(o)?o[t]??null:null},g=k(!1),e=x({mail_config:{driver:n("driver")??void 0,from_address:n("from_address")??void 0,from_name:n("from_name")??void 0,reply_to_name:n("reply_to_name")??void 0,reply_to_address:n("reply_to_address")??void 0,mg_domain:n("mg_domain")??void 0,mg_secret:n("mg_secret")??void 0,ses_key:n("ses_key")??void 0,ses_secret:n("ses_secret")??void 0,ses_region:n("ses_region")??void 0,port:n("port")??void 0,host:n("host")??void 0,username:n("username")??void 0,password:n("password")??void 0,mail_config:n("password")??void 0},smtp_email_active:f("smtp_email_active")==="1",verify_email:f("verify_email")==="1"}),V=[{label:"SMTP",value:"smtp"},{label:"Mailgun",value:"mailgun"},{label:"Amazon SES",value:"ses"}],_=()=>{e.smtp_email_active=!e.smtp_email_active},v=()=>{e.verify_email=!e.verify_email},b=async()=>{e.put("/admin/settings?type=email",{preserveScroll:!0})};return(t,o)=>(d(),$(M,null,{default:C(()=>[l("div",null,[l("h2",S,u(t.$t("Mailer settings")),1),l("p",A,[o[19]||(o[19]=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[l("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),l("span",j,u(t.$t("Configure email accounts")),1)])]),l("form",{onSubmit:o[18]||(o[18]=h(s=>b(),["prevent"]))},[l("div",B,[l("div",N,[l("div",Z,[l("div",E,[a(U,{modelValue:r(e).mail_config.driver,"onUpdate:modelValue":o[0]||(o[0]=s=>r(e).mail_config.driver=s),name:t.$t("Method"),type:"text",options:V,class:i("col-span-2")},null,8,["modelValue","name"])]),r(e).mail_config.driver==="mailgun"?(d(),p("div",L,[a(m,{modelValue:r(e).mail_config.mg_domain,"onUpdate:modelValue":o[1]||(o[1]=s=>r(e).mail_config.mg_domain=s),error:r(e).errors["mail_config.mg_domain"],name:t.$t("Mailgun domain"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"]),a(m,{modelValue:r(e).mail_config.mg_secret,"onUpdate:modelValue":o[2]||(o[2]=s=>r(e).mail_config.mg_secret=s),error:r(e).errors["mail_config.mg_secret"],name:t.$t("Mailgun secret"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"])])):r(e).mail_config.driver==="ses"?(d(),p("div",P,[a(m,{modelValue:r(e).mail_config.ses_key,"onUpdate:modelValue":o[3]||(o[3]=s=>r(e).mail_config.ses_key=s),error:r(e).errors["mail_config.ses_key"],name:t.$t("AWS access key id"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"]),a(m,{modelValue:r(e).mail_config.ses_secret,"onUpdate:modelValue":o[4]||(o[4]=s=>r(e).mail_config.ses_secret=s),error:r(e).errors["mail_config.ses_secret"],name:t.$t("AWS secret access key"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"]),a(m,{modelValue:r(e).mail_config.ses_region,"onUpdate:modelValue":o[5]||(o[5]=s=>r(e).mail_config.ses_region=s),error:r(e).errors["mail_config.ses_region"],name:t.$t("AWS default region"),type:"text",class:i("col-span-2")},null,8,["modelValue","error","name"])])):r(e).mail_config.driver==="smtp"?(d(),p("div",R,[a(m,{modelValue:r(e).mail_config.host,"onUpdate:modelValue":o[6]||(o[6]=s=>r(e).mail_config.host=s),error:r(e).errors["mail_config.host"],name:t.$t("Host"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"]),a(m,{modelValue:r(e).mail_config.port,"onUpdate:modelValue":o[7]||(o[7]=s=>r(e).mail_config.port=s),error:r(e).errors["mail_config.port"],name:t.$t("Port"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"]),a(m,{modelValue:r(e).mail_config.username,"onUpdate:modelValue":o[8]||(o[8]=s=>r(e).mail_config.username=s),error:r(e).errors["mail_config.username"],name:t.$t("Username"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"]),a(m,{modelValue:r(e).mail_config.password,"onUpdate:modelValue":o[9]||(o[9]=s=>r(e).mail_config.password=s),error:r(e).errors["mail_config.password"],name:t.$t("Password"),type:"password",class:i("col-span-1")},null,8,["modelValue","error","name"])])):c("",!0),l("div",T,[a(m,{modelValue:r(e).mail_config.from_name,"onUpdate:modelValue":o[10]||(o[10]=s=>r(e).mail_config.from_name=s),name:t.$t("Mail from name"),error:r(e).errors["mail_config.from_name"],type:"text",class:i("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:r(e).mail_config.from_address,"onUpdate:modelValue":o[11]||(o[11]=s=>r(e).mail_config.from_address=s),name:t.$t("Mail from address"),error:r(e).errors["mail_config.from_address"],type:"email",class:i("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:r(e).mail_config.reply_to_name,"onUpdate:modelValue":o[12]||(o[12]=s=>r(e).mail_config.reply_to_name=s),name:t.$t("Reply to name"),error:r(e).errors["mail_config.reply_to_name"],type:"text",class:i("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:r(e).mail_config.reply_to_address,"onUpdate:modelValue":o[13]||(o[13]=s=>r(e).mail_config.reply_to_address=s),name:t.$t("Reply to address"),error:r(e).errors["mail_config.reply_to_address"],type:"email",class:i("col-span-1")},null,8,["modelValue","name","error"])]),l("div",W,[l("div",q,[l("div",z,[l("label",{onClick:o[14]||(o[14]=s=>_()),for:"myCheckbox",class:"cursor-pointer"},[l("div",{class:i(["w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center",r(e).smtp_email_active?"bg-[#000]":""])},[r(e).smtp_email_active?(d(),p("svg",{key:0,class:i(["w-4 h-4",r(e).smtp_email_active?"text-white":""]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o[20]||(o[20]=[l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)]),2)):c("",!0)],2)]),l("span",{onClick:o[15]||(o[15]=s=>_()),class:"ml-2 text-[14px] cursor-pointer"},u(t.$t("Activate email")),1)])]),l("div",O,[l("div",D,[l("label",{onClick:o[16]||(o[16]=s=>v()),for:"myCheckbox",class:"cursor-pointer"},[l("div",{class:i(["w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center",{"bg-[#000]":r(e).verify_email}])},[r(e).verify_email?(d(),p("svg",{key:0,class:i(["w-4 h-4",r(e).verify_email?"text-white":""]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o[21]||(o[21]=[l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)]),2)):c("",!0)],2)]),l("span",{onClick:o[17]||(o[17]=s=>v()),class:"ml-2 text-[14px] cursor-pointer"},u(t.$t("Require email verification for new accounts")),1)])])]),l("div",F,[l("button",H,u(t.$t("Cancel")),1),l("button",{class:i(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":g.value}]),disabled:g.value},[g.value?(d(),p("svg",K,o[22]||(o[22]=[l("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),l("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[l("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(d(),p("span",G,u(t.$t("Save")),1))],10,J)])])])])],32)]),_:1}))}};export{ve as default};
