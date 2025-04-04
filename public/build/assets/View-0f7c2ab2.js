import{_ as E}from"./App-6e8ea588.js";import{r as b,O as F,o as d,c,a as e,w as J,v as H,u as M,b as S,d as q,j as l,g as r,h as m,t,F as N,e as z,f as L,n as A,i as I}from"./app-63c352f8.js";/* empty css              */import{d as P}from"./debounce-56258666.js";import{_ as U}from"./Modal-77090c91.js";import{_ as Z}from"./Table-e6473b46.js";import{T as G,a as K,_ as w}from"./TableHeaderRowItem-175c9fe6.js";import{T as Q,a as W,_ as x}from"./TableBodyRowItem-161fb705.js";import{_ as X}from"./WhatsappTemplate-22f22568.js";import"./Sidebar-5b826529.js";import"./Menu-6dca8104.js";import"./ProfileModal-7fdd08ae.js";import"./FormInput-a9577592.js";import"./FormPhoneInput-ba9f060e.js";/* empty css                      */import"./FormSelect-51609345.js";import"./index-245abe8c.js";import"./hidden-1ba5fb48.js";import"./use-text-value-34fc6a1a.js";import"./transition-513441a0.js";import"./micro-task-89dcd6af.js";import"./tabs-14de339e.js";import"./LangToggle-130b0b55.js";import"./index-445d2961.js";import"./MobileSidebar-4ae9ad81.js";import"./pusher-7ce92ece.js";import"./_baseGetTag-05d5263a.js";import"./Pagination-83ad7c1b.js";import"./_plugin-vue_export-helper-c27b6911.js";const Y={class:"bg-white flex items-center shadow-sm h-10 w-80 rounded-[0.5rem] mb-6 text-sm"},ee=["placeholder"],te={key:1,class:"pr-2"},se={key:0,class:"border-b border-dashed border-black"},ae={key:1,class:"border-b border-dashed border-black"},le=["onClick"],oe={class:"max-w-md w-full space-y-8"},ie={class:"mt-8 space-y-2"},re={class:"text-sm border-b pb-2"},ne={class:"flex items-center capitalize"},de={key:1},ce={class:"text-sm mb-3 bg-red-800 p-2 rounded text-white"},ue={key:0,class:"text-sm"},me={key:1},pe={class:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4"},he={class:"mt-2 w-full"},_e={__name:"CampaignLogTable",props:{rows:{type:Object,required:!0},filters:{type:Object},uuid:{type:String}},emits:["delete"],setup(g,{emit:o}){const i=g,p=b({search:i.filters.search}),u=b(null),h=b(null),_=b(!1),f=b(!1),y=()=>{p.value.search=null,O()},B=P(()=>{f.value=!0,O()},1e3),O=()=>{F.visit("/campaigns/"+i.uuid,{method:"get",data:p.value})},R=(n,a)=>{h.value=n,u.value=a,_.value=!0},D=n=>JSON.parse(n).status,$=n=>JSON.parse(n);return(n,a)=>(d(),c(N,null,[e("div",Y,[a[5]||(a[5]=e("span",{class:"pl-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"})])],-1)),J(e("input",{onInput:a[0]||(a[0]=(...s)=>M(B)&&M(B)(...s)),"onUpdate:modelValue":a[1]||(a[1]=s=>p.value.search=s),type:"text",class:"outline-none px-4 w-full",placeholder:n.$t("Search campaigns")},null,40,ee),[[H,p.value.search]]),f.value===!1&&p.value.search?(d(),c("button",{key:0,onClick:y,type:"button",class:"pr-2"},a[3]||(a[3]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 12.3c.4.4.4 1 0 1.4c-.4.4-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4L13.4 12l2.3 2.3z"})],-1)]))):S("",!0),f.value?(d(),c("span",te,a[4]||(a[4]=[q('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle></svg>',1)]))):S("",!0)]),l(Z,{rows:g.rows},{default:r(()=>[l(G,null,{default:r(()=>[l(K,null,{default:r(()=>[l(w,{position:"first",class:"hidden sm:table-cell"},{default:r(()=>[m(t(n.$t("Contact")),1)]),_:1}),l(w,null,{default:r(()=>[m(t(n.$t("Phone")),1)]),_:1}),l(w,{class:"hidden sm:table-cell"},{default:r(()=>[m(t(n.$t("Last updated")),1)]),_:1}),l(w,null,{default:r(()=>[m(t(n.$t("Status")),1)]),_:1}),l(w,{position:"last"})]),_:1})]),_:1}),l(Q,null,{default:r(()=>[(d(!0),c(N,null,z(g.rows.data,(s,k)=>(d(),L(W,{key:k},{default:r(()=>[l(x,{position:"first",class:"hidden sm:table-cell"},{default:r(()=>[m(t(s.contact.full_name),1)]),_:2},1024),l(x,null,{default:r(()=>[m(t(s.contact.phone),1)]),_:2},1024),l(x,{class:"hidden sm:table-cell"},{default:r(()=>[s.status==="success"?(d(),c("span",se,t(s.chat.created_at),1)):(d(),c("span",ae,t(s.created_at),1))]),_:2},1024),l(x,null,{default:r(()=>[e("span",{class:A(["px-2 py-1 text-xs rounded-md capitalize",s.status==="success"?"bg-green-700 text-white":"bg-red-400 text-white"])},t(s.status==="success"?s.chat.status:s.status),3)]),_:2},1024),l(x,null,{default:r(()=>[e("div",{onClick:C=>{var v;return R(s.status,s.status==="success"?(v=s.chat)==null?void 0:v.logs:s.metadata)},class:"flex items-center underline cursor-pointer"},[a[6]||(a[6]=e("svg",{class:"mr-1",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24"},[e("g",{fill:"currentColor"},[e("path",{d:"M11 10.98a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0zm1-4.929a1 1 0 1 0 0 2a1 1 0 0 0 0-2"}),e("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 0 16 0a8 8 0 0 0-16 0","clip-rule":"evenodd"})])],-1)),e("span",null,t(n.$t("More info")),1)],8,le)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["rows"]),l(U,{label:n.$t("Message info"),isOpen:_.value},{default:r(()=>{var s,k,C,v,V,j;return[e("div",oe,[e("div",ie,[h.value==="success"?(d(!0),c(N,{key:0},z(u.value,(T,Ke)=>(d(),c("div",re,[e("div",ne,[a[7]||(a[7]=e("svg",{class:"mr-1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5"})],-1)),e("span",null,t(n.$t(D(T.metadata))),1)]),e("div",null,t(T.created_at),1)]))),256)):h.value==="failed"?(d(),c("div",de,[e("div",ce,"Error: "+t($(u.value).data.error.message),1),(C=(k=(s=$(u.value).data)==null?void 0:s.error)==null?void 0:k.error_data)!=null&&C.details?(d(),c("div",ue,t((j=(V=(v=$(u.value).data)==null?void 0:v.error)==null?void 0:V.error_data)==null?void 0:j.details),1)):(d(),c("div",me,t($(u.value).data.error.message),1))])):S("",!0)])]),e("div",pe,[e("div",he,[e("button",{type:"button",onClick:a[2]||(a[2]=T=>_.value=!1),class:"inline-flex float-right justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"},t(n.$t("Close")),1)])])]}),_:1},8,["label","isOpen"])],64))}},fe={class:"p-4 md:p-8 rounded-[5px] h-full overflow-y-auto capitalize"},ge={class:"flex justify-between"},ve={class:"text-xl mb-1"},be={class:"mb-6 flex items-center text-sm leading-6"},we={class:"ml-1 mt-1"},xe={class:"space-x-2"},ye=["href"],$e={class:"md:flex md:space-x-4"},ke={class:"md:w-[70%]"},Ce={class:"flex w-[100%] mb-8 rounded-lg"},Te={class:"w-full rounded-tl-lg rounded-bl-lg text-center bg-white py-8 border"},Se={class:"text-xl"},Ne={class:"text-sm"},Me={class:"w-full text-center bg-white py-8 border"},Be={class:"text-xl"},Oe={class:"text-sm"},Ve={class:"w-full text-center bg-white py-8 border"},je={class:"text-xl"},ze={class:"text-sm"},Le={class:"w-full bg-white text-center py-8 border"},Re={class:"text-xl"},De={class:"text-sm"},Ee={class:"w-full rounded-tr-lg rounded-br-lg bg-white text-center py-8 border"},Fe={class:"text-xl"},Je={class:"text-sm"},He={class:"md:w-[30%]"},qe={class:"w-full rounded-lg bg-white pt-4 pb-8 border px-4 space-y-1"},Ae={class:"mb-2"},Ie={class:"text-sm bg-slate-100 p-3 rounded-lg"},Pe={class:"text-sm bg-slate-100 p-3 rounded-lg"},Ue={class:"text-sm bg-slate-100 p-3 rounded-lg"},Ze={class:"text-sm bg-slate-100 p-3 rounded-lg"},Ge={class:"w-full rounded-lg p-5 mt-5 border chat-bg"},Ct={__name:"View",props:["campaign","rows","filters"],setup(g){const o=g;return(i,p)=>(d(),L(E,null,{default:r(()=>{var u,h,_,f,y;return[e("div",fe,[e("div",ge,[e("div",null,[e("h2",ve,t(i.$t("Campaign details")),1),e("p",be,[e("span",we,t(i.$t("Ref"))+": "+t(o.campaign.uuid),1)])]),e("div",xe,[e("a",{href:"/campaigns/export/"+o.campaign.uuid,class:"rounded-md bg-secondary px-3 py-2 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},t(i.$t("Export as CSV")),9,ye),l(M(I),{href:"/campaigns",class:"rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:r(()=>[m(t(i.$t("Back")),1)]),_:1})])]),e("div",$e,[e("div",ke,[e("div",Ce,[e("div",Te,[e("h2",Se,t(o.campaign.total_message_count),1),e("h4",Ne,t(i.$t("Messages")),1)]),e("div",Me,[e("h2",Be,t(o.campaign.total_sent_count),1),e("h4",Oe,t(i.$t("Sent")),1)]),e("div",Ve,[e("h2",je,t(o.campaign.total_delivered_count),1),e("h4",ze,t(i.$t("Delivered")),1)]),e("div",Le,[e("h2",Re,t(o.campaign.total_read_count),1),e("h4",De,t(i.$t("Read")),1)]),e("div",Ee,[e("h2",Fe,t(o.campaign.total_failed_count),1),e("h4",Je,t(i.$t("Failed")),1)])]),l(_e,{rows:o.rows,filters:o.filters,uuid:o.campaign.uuid},null,8,["rows","filters","uuid"])]),e("div",He,[e("div",qe,[e("h2",Ae,t(i.$t("Campaign details")),1),e("div",Ie,[e("h3",null,t(i.$t("Campaign name")),1),e("p",null,t((u=o.campaign)==null?void 0:u.name),1)]),e("div",Pe,[e("h3",null,t(i.$t("Template")),1),e("p",null,t((_=(h=o.campaign)==null?void 0:h.template)==null?void 0:_.name),1)]),e("div",Ue,[e("h3",null,t(i.$t("Recipients")),1),e("p",null,t(o.campaign.contact_group_id==="0"?"All Contacts":(y=(f=o.campaign)==null?void 0:f.contact_group)==null?void 0:y.name),1)]),e("div",Ze,[e("h3",null,t(i.$t("Time scheduled")),1),e("p",null,t(o.campaign.scheduled_at),1)])]),e("div",Ge,[l(X,{parameters:JSON.parse(o.campaign.metadata),placeholder:!1,visible:!0},null,8,["parameters"])])])])])]}),_:1}))}};export{Ct as default};
