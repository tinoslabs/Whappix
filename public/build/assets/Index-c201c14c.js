import O from"./App-dead54de.js";import{T as I,r as g,O as L,o as h,c as k,a as l,w as H,v as U,u as x,b as S,d as Z,f as e,g as t,k as u,t as i,F as B,e as z,i as R,n as E,j as P,x as q}from"./app-a39c937f.js";import{d as G}from"./debounce-c94e6f72.js";import{_ as J}from"./AlertModal-3dc931bd.js";import{u as K}from"./useAlertModal-0cf952b8.js";import{_ as Q}from"./Table-7daa1325.js";import{T as W,a as X,_ as w}from"./TableHeaderRowItem-2700d168.js";import{T as Y,a as ee,_ as b}from"./TableBodyRowItem-ed031f61.js";import{_ as te}from"./Dropdown-3f09e41f.js";import{_ as ae,a as F}from"./DropdownItem-de9e1f1f.js";import{_ as le}from"./FormModalModified-52a62fb5.js";import{t as c}from"./index-8758cb17.js";import"./Sidebar-8911f1a5.js";import"./Menu-ed0b9fc4.js";import"./ProfileModal-61a09d92.js";import"./FormInput-4b7fa008.js";import"./FormPhoneInput-1c9c9926.js";/* empty css                      */import"./FormSelect-c7672027.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./transition-37a067aa.js";import"./micro-task-89dcd6af.js";import"./tabs-86fdd039.js";import"./LangToggle-edfcdcaa.js";import"./MobileSidebar-d784e66f.js";import"./index-80d9f634.js";/* empty css              */import"./_baseGetTag-fe27dbe8.js";import"./Pagination-10a3ee54.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-tree-walker-d82ec41e.js";import"./Modal-df1e3aae.js";import"./FormImage-8d883861.js";import"./FormTextArea-e893dff2.js";const oe={class:"md:bg-white flex items-center border border-primary md:border-none md:shadow-sm h-12 md:h-10 w-full md:w-80 rounded-[0.5rem] mb-6 text-xl md:text-sm"},se=["placeholder"],ie={key:1,class:"pr-2"},ne={__name:"TestimonialTable",props:{rows:{type:Array,required:!0},filters:{type:Object}},emits:["edit","delete"],setup(y,{emit:_}){const p=y,{isOpenAlert:f,openAlert:v,confirmAlert:$}=K(),d=_,T=I({test:null});function C(a){d("edit",a)}const N=a=>{T.delete("/admin/testimonials/"+a)},r=a=>a===p.rows.data.length-1,o=g({search:p.filters.search}),m=g(!1),D=()=>{o.value.search=null,M()},V=G(()=>{m.value=!0,M()},1e3),M=()=>{const a=window.location.pathname;L.visit(a,{method:"get",data:o.value})};return(a,s)=>(h(),k(B,null,[l("div",oe,[s[6]||(s[6]=l("span",{class:"pl-3"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[l("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"})])],-1)),H(l("input",{onInput:s[0]||(s[0]=(...n)=>x(V)&&x(V)(...n)),"onUpdate:modelValue":s[1]||(s[1]=n=>o.value.search=n),type:"text",class:"outline-none px-4 w-full",placeholder:a.$t("Search reviews")},null,40,se),[[U,o.value.search]]),m.value===!1&&o.value.search?(h(),k("button",{key:0,onClick:D,type:"button",class:"pr-2"},s[4]||(s[4]=[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[l("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 12.3c.4.4.4 1 0 1.4c-.4.4-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4L13.4 12l2.3 2.3z"})],-1)]))):S("",!0),m.value?(h(),k("span",ie,s[5]||(s[5]=[Z('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle></svg>',1)]))):S("",!0)]),e(Q,{rows:y.rows},{default:t(()=>[e(W,null,{default:t(()=>[e(X,null,{default:t(()=>[e(w,{position:"first"},{default:t(()=>[u(i(a.$t("Name")),1)]),_:1}),e(w,null,{default:t(()=>[u(i(a.$t("Position")),1)]),_:1}),e(w,null,{default:t(()=>[u(i(a.$t("Rating")),1)]),_:1}),e(w,null,{default:t(()=>[u(i(a.$t("Status")),1)]),_:1}),e(w,null,{default:t(()=>[u(i(a.$t("Last updated")),1)]),_:1}),e(w,{position:"last"})]),_:1})]),_:1}),e(Y,null,{default:t(()=>[(h(!0),k(B,null,z(y.rows.data,(n,A)=>(h(),R(ee,{key:A,class:E(r(A)?"":"border-b")},{default:t(()=>[e(b,{position:"first"},{default:t(()=>[u(i(n.name),1)]),_:2},1024),e(b,null,{default:t(()=>[u(i(n.position),1)]),_:2},1024),e(b,null,{default:t(()=>[u(i(n.rating)+" "+i(a.$t("Stars")),1)]),_:2},1024),e(b,{class:"hidden sm:table-cell"},{default:t(()=>[u(i(n.status===1?a.$t("Displayed"):a.$t("Hidden")),1)]),_:2},1024),e(b,{class:"hidden sm:table-cell"},{default:t(()=>[u(i(n.updated_at),1)]),_:2},1024),e(b,{position:"last"},{default:t(()=>[e(te,{align:"right",class:"mt-2"},{items:t(()=>[e(ae,null,{default:t(()=>[e(F,{as:"button",onClick:j=>C(n.id)},{default:t(()=>[u(i(a.$t("View/edit")),1)]),_:2},1032,["onClick"]),e(F,{as:"button",onClick:j=>x(v)(n.id)},{default:t(()=>[u(i(a.$t("Delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),default:t(()=>[s[7]||(s[7]=l("button",{class:"inline-flex w-full justify-center rounded-md text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[l("span",{class:"hover:bg-[#F6F7F9] hover:rounded-full w-[fit-content] p-2"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[l("path",{fill:"currentColor",d:"M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"})])])],-1))]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:1})]),_:1},8,["rows"]),e(J,{modelValue:x(f),"onUpdate:modelValue":s[2]||(s[2]=n=>P(f)?f.value=n:null),onConfirm:s[3]||(s[3]=()=>x($)(N)),label:a.$t("Delete row"),description:a.$t("Are you sure you want to delete this row? This action can not be undone")},null,8,["modelValue","label","description"])],64))}},re={class:"bg-white md:bg-inherit pt-10 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] h-full md:overflow-y-auto"},ue={class:"flex justify-between"},me={class:"text-xl mb-1"},de={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},pe={class:"ml-1 mt-1"},Je={__name:"Index",props:{title:String,rows:Object,filters:Object},setup(y){const _=y,p=g(!1),f=g(c("Add review")),v=g("/admin/testimonials"),$=g("post"),d={name:null,position:null,rating:null,status:null,review:null},T=(r,o={})=>{f.value=c("Add review"),v.value="/admin/testimonials",$.value="post",r!=null?(f.value=c("Edit review"),v.value="/admin/testimonials/"+r,$.value="put",C()):(d.name=null,d.position=null,d.review=null,d.rating=null,d.status=null,p.value=!0)};function C(){q.get(v.value).then(r=>{const{data:o}=r;for(const m in o.item)d.hasOwnProperty(m)&&(d[m]=o.item[m]);p.value=!0}).catch(r=>{})}const N=[{inputType:"FormInput",name:"name",label:c("name"),type:"text",className:"sm:col-span-6"},{inputType:"FormInput",name:"position",label:c("Position"),type:"text",className:"sm:col-span-6"},{inputType:"FormSelect",name:"rating",label:c("Rating"),options:[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"}],className:"sm:col-span-3"},{inputType:"FormSelect",name:"status",label:c("status"),options:[{value:0,label:"Hide"},{value:1,label:"Display"}],className:"sm:col-span-3"},{inputType:"FormTextArea",name:"review",label:c("Review"),type:"text",className:"sm:col-span-6",textAreaRows:4}];return(r,o)=>(h(),R(O,null,{default:t(()=>[l("div",re,[l("div",ue,[l("div",null,[l("h1",me,i(r.$t("Reviews")),1),l("p",de,[o[3]||(o[3]=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[l("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),l("span",pe,i(r.$t("View, add, edit or delete reviews")),1)])]),l("div",null,[l("button",{onClick:o[0]||(o[0]=m=>T()),type:"button",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},i(r.$t("Add review")),1)])]),e(ne,{rows:_.rows,filters:_.filters,onEdit:T,onDelete:r.openAlert},null,8,["rows","filters","onDelete"]),e(le,{modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=m=>p.value=m),label:f.value,url:v.value,form:d,formInputs:N,formMethod:$.value,onCloseModal:o[2]||(o[2]=m=>p.value=!1)},null,8,["modelValue","label","url","formMethod"])])]),_:1}))}};export{Je as default};
