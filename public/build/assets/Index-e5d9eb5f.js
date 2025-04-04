import S from"./App-ab3770eb.js";import{T as O,r as x,O as F,o as d,c as f,a as e,w as L,v as R,u,b as $,d as z,j as t,g as s,h as l,t as i,F as k,e as D,f as T,n as Z,l as H,i as I}from"./app-63c352f8.js";import{d as U}from"./debounce-56258666.js";import{_ as q}from"./AlertModal-a2cfc618.js";import{u as E}from"./useAlertModal-5378cf0a.js";/* empty css              */import{_ as G}from"./Table-e6473b46.js";import{T as J,a as K,_ as v}from"./TableHeaderRowItem-175c9fe6.js";import{T as P,a as Q,_ as b}from"./TableBodyRowItem-161fb705.js";import{_ as W}from"./Dropdown-6b18c969.js";import{_ as X,a as C}from"./DropdownItem-e1756688.js";import"./Sidebar-7ba13270.js";import"./Menu-a985a654.js";import"./ProfileModal-7fdd08ae.js";import"./FormInput-a9577592.js";import"./FormPhoneInput-ba9f060e.js";/* empty css                      */import"./FormSelect-51609345.js";import"./index-245abe8c.js";import"./hidden-1ba5fb48.js";import"./use-text-value-34fc6a1a.js";import"./transition-513441a0.js";import"./micro-task-89dcd6af.js";import"./tabs-14de339e.js";import"./LangToggle-130b0b55.js";import"./MobileSidebar-b0e564de.js";import"./index-445d2961.js";import"./_baseGetTag-05d5263a.js";import"./Pagination-83ad7c1b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-tree-walker-396017f0.js";const Y={class:"md:bg-white flex items-center border border-primary md:border-none md:shadow-sm h-12 md:h-10 w-full md:w-80 rounded-[0.5rem] mb-6 text-xl md:text-sm"},ee=["placeholder"],te={key:1,class:"pr-2"},se={__name:"RoleTable",props:{rows:{type:Object,required:!0},filters:{type:Object}},emits:["delete"],setup(c,{emit:w}){const n=c,{isOpenAlert:m,openAlert:N,confirmAlert:B}=E(),V=O({test:null}),j=a=>{V.delete("/admin/team/role/"+a)},M=a=>a===n.rows.data.length-1,p=x({search:n.filters.search}),h=x(!1),A=()=>{p.value.search=null,_()},g=U(()=>{h.value=!0,_()},1e3),_=()=>{F.visit("/admin/team/roles",{method:"get",data:p.value})};return(a,o)=>(d(),f(k,null,[e("div",Y,[o[6]||(o[6]=e("span",{class:"pl-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"})])],-1)),L(e("input",{onInput:o[0]||(o[0]=(...r)=>u(g)&&u(g)(...r)),"onUpdate:modelValue":o[1]||(o[1]=r=>p.value.search=r),type:"text",class:"outline-none px-4 w-full",placeholder:a.$t("Search roles")},null,40,ee),[[R,p.value.search]]),h.value===!1&&p.value.search?(d(),f("button",{key:0,onClick:A,type:"button",class:"pr-2"},o[4]||(o[4]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 12.3c.4.4.4 1 0 1.4c-.4.4-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4L13.4 12l2.3 2.3z"})],-1)]))):$("",!0),h.value?(d(),f("span",te,o[5]||(o[5]=[z('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle></svg>',1)]))):$("",!0)]),t(G,{rows:c.rows},{default:s(()=>[t(J,null,{default:s(()=>[t(K,null,{default:s(()=>[t(v,{position:"first"},{default:s(()=>[l(i(a.$t("Name")),1)]),_:1}),t(v,null,{default:s(()=>[l(i(a.$t("Last updated")),1)]),_:1}),t(v,{position:"last"})]),_:1})]),_:1}),t(P,null,{default:s(()=>[(d(!0),f(k,null,D(c.rows.data,(r,y)=>(d(),T(Q,{key:y,class:Z(M(y)?"":"border-b")},{default:s(()=>[t(b,{position:"first",class:"capitalize"},{default:s(()=>[l(i(r.name),1)]),_:2},1024),t(b,{class:"hidden sm:table-cell"},{default:s(()=>[l(i(r.updated_at),1)]),_:2},1024),t(b,{position:"last"},{default:s(()=>[t(W,{align:"right",class:"mt-2"},{items:s(()=>[t(X,null,{default:s(()=>[t(C,{href:"/admin/team/roles/"+r.uuid},{default:s(()=>[l(i(a.$t("View/edit")),1)]),_:2},1032,["href"]),t(C,{as:"button",onClick:ne=>u(N)(r.uuid)},{default:s(()=>[l(i(a.$t("Delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),default:s(()=>[o[7]||(o[7]=e("button",{class:"inline-flex w-full justify-center rounded-md text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[e("span",{class:"hover:bg-[#F6F7F9] hover:rounded-full w-[fit-content] p-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"})])])],-1))]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:1})]),_:1},8,["rows"]),t(q,{modelValue:u(m),"onUpdate:modelValue":o[2]||(o[2]=r=>H(m)?m.value=r:null),onConfirm:o[3]||(o[3]=()=>u(B)(j)),label:a.$t("Delete row"),description:a.$t("Are you sure you want to delete this row? This action can not be undone")},null,8,["modelValue","label","description"])],64))}},oe={class:"bg-white md:bg-inherit pt-10 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] h-full md:overflow-y-auto"},ae={class:"flex justify-between"},re={class:"text-xl mb-1"},ie={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},le={class:"ml-1 mt-1"},Ze={__name:"Index",props:{title:String,rows:Object,filters:Object},setup(c){const w=c;return(n,m)=>(d(),T(S,null,{default:s(()=>[e("div",oe,[e("div",ae,[e("div",null,[e("h1",re,i(n.$t("Admin roles")),1),e("p",ie,[m[0]||(m[0]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),e("span",le,i(n.$t("Manage roles")),1)])]),e("div",null,[t(u(I),{href:"/admin/team/roles/create",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:s(()=>[l(i(n.$t("Add role")),1)]),_:1})])]),t(se,{rows:w.rows,filters:w.filters},null,8,["rows","filters"])])]),_:1}))}};export{Ze as default};
