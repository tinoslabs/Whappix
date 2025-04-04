import{_ as ae}from"./App-c36b28d4.js";import{r as _,T as le,o as n,c as u,a as o,t as p,i as b,g as x,k as w,u as t,l as $,h as oe,f as m,n as d,F as k,e as K,b as g,O as se}from"./app-a39c937f.js";import{_ as Q}from"./FormCheckbox-f7d4efc1.js";import{_ as v}from"./FormInput-4b7fa008.js";import{_ as re}from"./FormPhoneInput-1c9c9926.js";import{_ as U}from"./FormSelect-c7672027.js";import{_ as W}from"./FormTextArea-e893dff2.js";import{t as ne}from"./index-8758cb17.js";import{_ as de,a as ie}from"./ContactTable-deb45b34.js";import{_ as me}from"./ContactInfo-62d15806.js";import"./Sidebar-cfdf4c27.js";import"./Menu-bdf286ac.js";import"./Modal-df1e3aae.js";import"./transition-37a067aa.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./micro-task-89dcd6af.js";import"./ProfileModal-61a09d92.js";import"./tabs-86fdd039.js";import"./LangToggle-edfcdcaa.js";/* empty css                      */import"./index-80d9f634.js";import"./MobileSidebar-d61cbb69.js";/* empty css              */import"./pusher-4059f127.js";import"./debounce-c94e6f72.js";import"./_baseGetTag-fe27dbe8.js";import"./Dropdown-3f09e41f.js";import"./use-tree-walker-d82ec41e.js";import"./DropdownItem-de9e1f1f.js";import"./Pagination-10a3ee54.js";import"./_plugin-vue_export-helper-c27b6911.js";const ce={class:"h-20 bg-white border-b border-1 md:flex items-center justify-between px-10 hidden"},ue={key:0,class:"text-xl"},pe={key:1,class:"text-xl"},fe={class:"flex justify-center md:h-[90vh] md:overflow-y-scroll"},be={class:"flex justify-center items-center"},ye={class:"rounded-full w-40 h-40 m-4"},ge={key:0,class:"text-gray-500",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},ve=["src"],Ve={for:"file-upload",class:"cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},he={class:"grid gap-x-6 gap-y-4 sm:grid-cols-6 pb-6 border-b"},xe={key:0,class:"grid gap-x-6 gap-y-4 sm:grid-cols-2 mt-4 pb-6 border-b"},$e={class:"grid gap-x-6 gap-y-4 sm:grid-cols-6 pt-4 pb-6"},_e={key:1,class:"grid gap-x-6 gap-y-4 sm:grid-cols-2 mb-8 pt-4 border-t"},we={class:"mt-4 mb-10 pb-10 flex"},ke={class:d("inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2")},X={__name:"CreateForm",props:["contactGroups","contact","fields","locationSettings"],setup(f){var C,j,z,O,G,F,A,B,M,N,L,Z,D,E,I,J,R,T,H,P;const l=f,V=(C=l.contact)!=null&&C.avatar?_((j=l.contact)==null?void 0:j.avatar):_(null);_();const y=l.fields.reduce((s,r)=>(s[r.name]="",s),{}),c=(s,r)=>{const e=JSON.parse(s);return(e==null?void 0:e[r])??""},a=le({first_name:((z=l.contact)==null?void 0:z.first_name)??null,last_name:((O=l.contact)==null?void 0:O.last_name)??null,phone:((G=l.contact)==null?void 0:G.phone)??null,email:((F=l.contact)==null?void 0:F.email)??null,group:((B=(A=l.contact)==null?void 0:A.contact_group)==null?void 0:B.uuid)??null,file:null,street:(M=l.contact)!=null&&M.address?c((N=l.contact)==null?void 0:N.address,"street"):null,city:(L=l.contact)!=null&&L.address?c((Z=l.contact)==null?void 0:Z.address,"city"):null,state:(D=l.contact)!=null&&D.address?c((E=l.contact)==null?void 0:E.address,"state"):null,zip:(I=l.contact)!=null&&I.address?c((J=l.contact)==null?void 0:J.address,"zip"):null,country:(R=l.contact)!=null&&R.address?c((T=l.contact)==null?void 0:T.address,"country"):null,metadata:(H=l.contact)!=null&&H.metadata?JSON.parse((P=l.contact)==null?void 0:P.metadata):y}),Y=()=>l.contactGroups.map(s=>({value:s.uuid,label:s.name})),ee=s=>{const e=s.target.files[0];if(e&&e.size>5242880)alert(ne("file size exceeds the limit. Max allowed size:")+" 5242880b"),s.target.value=null;else{const h=new FileReader;h.onload=i=>{V.value=i.target.result},a.file=e,h.readAsDataURL(e)}},te=()=>{l.contact?a.post("/contacts/"+l.contact.uuid):a.post("/contacts")},q=s=>s.split(", ").map(r=>({label:r,value:r}));return(s,r)=>(n(),u(k,null,[o("div",ce,[o("div",null,[l.contact?(n(),u("h1",pe,p(s.$t("Edit contact")),1)):(n(),u("h1",ue,p(s.$t("Add contact")),1))]),o("div",null,[l.contact?(n(),b(t($),{key:1,href:"/contacts/"+l.contact.uuid,class:"inline-flex justify-center rounded-md border border-transparent bg-slate-200 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},{default:x(()=>[w(p(s.$t("Back")),1)]),_:1},8,["href"])):(n(),b(t($),{key:0,href:"/contacts",class:"inline-flex justify-center rounded-md border border-transparent bg-slate-200 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},{default:x(()=>[w(p(s.$t("Cancel")),1)]),_:1}))])]),o("div",fe,[o("form",{onSubmit:r[10]||(r[10]=oe(e=>te(),["prevent"])),class:"w-[30em]"},[o("div",be,[o("div",ye,[t(V)===null?(n(),u("svg",ge,r[11]||(r[11]=[o("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z","clip-rule":"evenodd"},null,-1)]))):(n(),u("img",{key:1,class:"w-40 h-40 rounded-full object-cover",src:t(V),alt:"Contact Image"},null,8,ve))]),o("input",{type:"file",class:"sr-only",accept:".jpg, .png",id:"file-upload",onChange:ee},null,32),o("label",Ve,p(s.$t("Upload image")),1)]),o("div",he,[m(v,{modelValue:t(a).first_name,"onUpdate:modelValue":r[0]||(r[0]=e=>t(a).first_name=e),name:s.$t("First name"),error:t(a).errors.first_name,type:"text",class:d("sm:col-span-3")},null,8,["modelValue","name","error"]),m(v,{modelValue:t(a).last_name,"onUpdate:modelValue":r[1]||(r[1]=e=>t(a).last_name=e),name:s.$t("Last name"),error:t(a).errors.last_name,type:"text",class:d("sm:col-span-3")},null,8,["modelValue","name","error"]),m(re,{modelValue:t(a).phone,"onUpdate:modelValue":r[2]||(r[2]=e=>t(a).phone=e),name:s.$t("Phone"),error:t(a).errors.phone,type:"text",class:d("sm:col-span-3")},null,8,["modelValue","name","error"]),m(v,{modelValue:t(a).email,"onUpdate:modelValue":r[3]||(r[3]=e=>t(a).email=e),name:s.$t("Email"),error:t(a).errors.email,type:"text",class:d("sm:col-span-3")},null,8,["modelValue","name","error"]),m(U,{modelValue:t(a).group,"onUpdate:modelValue":r[4]||(r[4]=e=>t(a).group=e),name:s.$t("Group"),error:t(a).errors.group,options:Y(),type:"text",class:d("sm:col-span-6")},null,8,["modelValue","name","error","options"])]),f.locationSettings==="before"?(n(),u("div",xe,[(n(!0),u(k,null,K(l.fields,(e,h)=>(n(),u("div",{key:h,class:d(e.type!="input"?"sm:col-span-2":"sm:col-span-1")},[e.type==="input"?(n(),b(v,{key:0,modelValue:t(a).metadata[e.name],"onUpdate:modelValue":i=>t(a).metadata[e.name]=i,name:e.name,label:s.$t(e.name),type:e.value,class:d("sm:col-span-2"),required:e.required===1},null,8,["modelValue","onUpdate:modelValue","name","label","type","required"])):g("",!0),e.type==="textarea"?(n(),b(W,{key:1,modelValue:t(a).metadata[e.name],"onUpdate:modelValue":i=>t(a).metadata[e.name]=i,name:e.name,label:s.$t(e.name),class:d("sm:col-span-2"),required:e.required===1},null,8,["modelValue","onUpdate:modelValue","name","label","required"])):g("",!0),e.type==="select"?(n(),b(U,{key:2,modelValue:t(a).metadata[e.name],"onUpdate:modelValue":i=>t(a).metadata[e.name]=i,name:e.name,options:q(e.value),class:d("sm:col-span-2"),required:e.required===1},null,8,["modelValue","onUpdate:modelValue","name","options","required"])):g("",!0),e.type==="checkbox"?(n(),b(Q,{key:3,modelValue:t(a).metadata[e.name],"onUpdate:modelValue":i=>t(a).metadata[e.name]=i,name:e.name,label:e.name,class:d("sm:col-span-2"),required:e.required===1},null,8,["modelValue","onUpdate:modelValue","name","label","required"])):g("",!0)],2))),128))])):g("",!0),o("div",$e,[m(v,{modelValue:t(a).street,"onUpdate:modelValue":r[5]||(r[5]=e=>t(a).street=e),name:s.$t("Street"),error:t(a).errors.street,type:"text",class:d("sm:col-span-6")},null,8,["modelValue","name","error"]),m(v,{modelValue:t(a).city,"onUpdate:modelValue":r[6]||(r[6]=e=>t(a).city=e),name:s.$t("City"),error:t(a).errors.city,type:"text",class:d("sm:col-span-3")},null,8,["modelValue","name","error"]),m(v,{modelValue:t(a).state,"onUpdate:modelValue":r[7]||(r[7]=e=>t(a).state=e),name:s.$t("State"),error:t(a).errors.state,type:"text",class:d("sm:col-span-3")},null,8,["modelValue","name","error"]),m(v,{modelValue:t(a).zip,"onUpdate:modelValue":r[8]||(r[8]=e=>t(a).zip=e),name:s.$t("Zip code"),error:t(a).errors.zip,type:"text",class:d("sm:col-span-3")},null,8,["modelValue","name","error"]),m(v,{modelValue:t(a).country,"onUpdate:modelValue":r[9]||(r[9]=e=>t(a).country=e),name:s.$t("Country"),error:t(a).errors.country,type:"text",class:d("sm:col-span-3")},null,8,["modelValue","name","error"])]),f.locationSettings==="after"?(n(),u("div",_e,[(n(!0),u(k,null,K(l.fields,(e,h)=>(n(),u("div",{key:h,class:d(e.type!="input"?"sm:col-span-2":"sm:col-span-1")},[e.type==="input"?(n(),b(v,{key:0,modelValue:t(a).metadata[e.name],"onUpdate:modelValue":i=>t(a).metadata[e.name]=i,name:e.name,label:s.$t(e.name),type:e.value,class:d("sm:col-span-2"),required:e.required===1},null,8,["modelValue","onUpdate:modelValue","name","label","type","required"])):g("",!0),e.type==="textarea"?(n(),b(W,{key:1,modelValue:t(a).metadata[e.name],"onUpdate:modelValue":i=>t(a).metadata[e.name]=i,name:e.name,label:s.$t(e.name),class:d("sm:col-span-2"),required:e.required===1},null,8,["modelValue","onUpdate:modelValue","name","label","required"])):g("",!0),e.type==="select"?(n(),b(U,{key:2,modelValue:t(a).metadata[e.name],"onUpdate:modelValue":i=>t(a).metadata[e.name]=i,name:e.name,options:q(e.value),class:d("sm:col-span-2"),required:e.required===1},null,8,["modelValue","onUpdate:modelValue","name","options","required"])):g("",!0),e.type==="checkbox"?(n(),b(Q,{key:3,modelValue:t(a).metadata[e.name],"onUpdate:modelValue":i=>t(a).metadata[e.name]=i,name:e.name,label:e.name,class:d("sm:col-span-2"),required:e.required===1},null,8,["modelValue","onUpdate:modelValue","name","label","required"])):g("",!0)],2))),128))])):g("",!0),o("div",we,[m(t($),{href:"/contacts",class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},{default:x(()=>[w(p(s.$t("Cancel")),1)]),_:1}),o("button",ke,[o("span",null,p(s.$t("Save")),1)])])],32)])],64))}},Ue={class:"md:bg-inherit bg-white md:flex md:flex-grow capitalize"},Se={class:"px-4 pt-4"},qe={class:"flex justify-between mt-2"},Ce={class:"flex space-x-1 text-xl"},je={class:"text-slate-500"},ze={class:"flex space-x-2 items-center"},Oe={class:"md:w-[70%] bg-cover md:h-[100vh] md:overflow-y-hidden"},Ge={key:0},Fe={key:1},Ae={key:0},Be={key:1},Me={class:"md:flex justify-center pt-20 hidden"},Ne={class:"border pt-20 py-10 w-[30em] rounded-xl bg-white"},Le={class:"text-center text-2xl text-slate-500 mb-6"},Ze={class:"text-center text-slate-600"},De={class:"flex justify-center space-x-4 mt-6"},ht={__name:"Index",props:{rows:Object,filters:Object,rowCount:Number,contactGroups:Object,contact:Object,editContact:Boolean,fields:Object,locationSettings:String,flash:Object},setup(f){const l=f,V=_(!1),S=y=>{se.visit("/contacts",{method:"get",data:y})};return(y,c)=>(n(),u(k,null,[m(ae,null,{default:x(()=>[o("div",Ue,[o("div",{class:d(["md:w-[30%] flex-col h-full bg-white border-r border-l md:flex",y.$page.url==="/contacts/add"||f.contact?"hidden":""])},[o("div",Se,[o("div",qe,[o("div",Ce,[o("h2",null,p(y.$t("Contacts")),1),o("span",je,p(l.rowCount),1)]),o("div",ze,[m(t($),{href:"/contacts/add",title:"Add Contact"},{default:x(()=>c[2]||(c[2]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24"},[o("g",{fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd"},[o("path",{d:"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z"}),o("path",{d:"M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7Z"})])],-1)])),_:1})])])]),m(ie,{rows:l.rows,filters:l.filters,type:"contact",onCallback:S},null,8,["rows","filters"])],2),o("div",Oe,[f.contact?(n(),u("div",Ge,[f.editContact?(n(),b(X,{key:1,contactGroups:l.contactGroups,contact:l.contact,fields:l.fields,locationSettings:f.locationSettings},null,8,["contactGroups","contact","fields","locationSettings"])):(n(),b(me,{key:0,class:"pt-20",contact:f.contact,fields:l.fields,locationSettings:f.locationSettings},null,8,["contact","fields","locationSettings"]))])):(n(),u("div",Fe,[y.$page.url==="/contacts/add"?(n(),u("div",Ae,[m(X,{contactGroups:l.contactGroups,contact:l.contact,fields:l.fields,locationSettings:f.locationSettings},null,8,["contactGroups","contact","fields","locationSettings"])])):(n(),u("div",Be,[o("div",Me,[o("div",Ne,[o("h2",Le,p(y.$t("Select contact")),1),c[3]||(c[3]=o("div",{class:"flex justify-center"},[o("div",{class:"border-r border-slate-500 h-10"})],-1)),o("h2",Ze,p(y.$t("Or")),1),c[4]||(c[4]=o("div",{class:"flex justify-center"},[o("div",{class:"border-r border-slate-500 h-10"})],-1)),o("div",De,[m(t($),{href:"/contacts/add",class:"bg-primary rounded-lg text-sm text-white p-2 px-8 text-center"},{default:x(()=>[w(p(y.$t("Add contact")),1)]),_:1}),o("button",{onClick:c[0]||(c[0]=a=>V.value=!0),class:"bg-primary rounded-lg text-sm text-white p-2 px-8 text-center"},p(y.$t("Bulk upload")),1)])])])]))]))])])]),_:1}),m(de,{type:"contact",modelValue:V.value,"onUpdate:modelValue":c[1]||(c[1]=a=>V.value=a)},null,8,["modelValue"])],64))}};export{ht as default};
