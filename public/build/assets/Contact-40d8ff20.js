import{T as B,r as c,m as X,o as v,c as _,a as e,f as n,g as u,k as A,t as r,b as U,u as i,j as ee,F as te,G as oe,i as R,n as f,h as z,x as se}from"./app-a39c937f.js";import le from"./Layout-78f97ee5.js";import{t as l}from"./index-8758cb17.js";import{d as P}from"./vuedraggable.umd-deb03aed.js";import{_ as ae}from"./Modal-df1e3aae.js";import{_ as H}from"./FormInput-4b7fa008.js";import{_ as N}from"./FormSelect-c7672027.js";import{_ as ie}from"./AlertModal-3dc931bd.js";import{u as ne}from"./useAlertModal-0cf952b8.js";import{P as re}from"./Pagination-10a3ee54.js";import{a as de,_ as F,T as ue}from"./TableHeaderRowItem-2700d168.js";import{_ as me}from"./Dropdown-3f09e41f.js";import{_ as pe,a as Z}from"./DropdownItem-de9e1f1f.js";import"./App-c36b28d4.js";import"./Sidebar-cfdf4c27.js";import"./Menu-bdf286ac.js";import"./ProfileModal-61a09d92.js";import"./FormPhoneInput-1c9c9926.js";/* empty css                      */import"./transition-37a067aa.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./micro-task-89dcd6af.js";import"./tabs-86fdd039.js";import"./LangToggle-edfcdcaa.js";import"./index-80d9f634.js";import"./MobileSidebar-d61cbb69.js";/* empty css              */import"./pusher-4059f127.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-tree-walker-d82ec41e.js";const ce={class:"bg-slate-100 md:bg-slate-50 rounded-[0.5rem]"},fe={class:"w-full"},ve={class:"hover:bg-slate-50 md:border-b-0 md:border-t border-[#d1d5db] text-sm"},be={class:"pl-4 py-4"},he={class:"flex"},ge={class:"pl-2 py-2 pb-2 capitalize"},we={class:"mr-2"},ye={key:0,class:"bg-slate-200 px-2 py-1 rounded-lg text-xs capitalize"},_e={class:"pl-2 py-2 pb-2 capitalize"},xe={class:"pr-4 float-right"},qe={__name:"ContactFieldTable",props:{rows:{type:Object,required:!0}},emits:["edit","delete"],setup($,{emit:k}){const b=$,{isOpenAlert:w,openAlert:y,confirmAlert:C}=ne(),T=k,h=B({test:null});function g(a){T("edit",a)}const x=a=>{h.delete("/contact-fields/"+a)};b.rows.data;const q=c(!1);X(()=>q.value?"under drag":"");const o=a=>a.charAt(0).toUpperCase()+a.slice(1);return(a,m)=>(v(),_(te,null,[e("div",null,[e("div",ce,[e("table",fe,[n(ue,null,{default:u(()=>[n(de,null,{default:u(()=>[n(F,{position:"first",class:"pl-2 py-2 pb-2"},{default:u(()=>[A(r(a.$t("Input field name")),1)]),_:1}),n(F,{class:"pl-2 py-2 pb-2"},{default:u(()=>[A(r(a.$t("Input type")),1)]),_:1}),n(F,{class:"pl-2 py-2 pb-2"},{default:u(()=>[A(r(a.$t("Is required")),1)]),_:1}),n(F,{position:"last",class:"pl-2 py-2 pb-2"})]),_:1})]),_:1}),n(i(P),{tag:"tbody",list:$.rows.data,handle:".handle",clone:!1,"item-key":"id"},{item:u(({element:p,index:D})=>[e("tr",ve,[e("td",be,[e("div",he,[m[2]||(m[2]=e("div",{class:"handle cursor-pointer mr-4"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M9 19.23q-.508 0-.87-.36q-.36-.362-.36-.87t.36-.87t.87-.36t.87.36q.36.362.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36q-.36-.362-.36-.87t.36-.87t.87-.36t.87.36q.36.362.36.87t-.36.87t-.87.36m-6-6q-.508 0-.87-.36q-.36-.362-.36-.87t.36-.87t.87-.36t.87.36q.36.362.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36q-.36-.362-.36-.87t.36-.87t.87-.36t.87.36q.36.362.36.87t-.36.87t-.87.36m-6-6q-.508 0-.87-.36q-.36-.362-.36-.87t.36-.87t.87-.36t.87.36q.36.362.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36q-.36-.362-.36-.87t.36-.87t.87-.36t.87.36q.36.362.36.87t-.36.87t-.87.36"})])],-1)),e("div",null,r(p.name),1)])]),e("td",ge,[e("span",we,r(a.$t(o(p.type))),1),p.type==="input"?(v(),_("span",ye,r(a.$t(o(p.value))),1)):U("",!0)]),e("td",_e,r(p.required===0?a.$t("No"):a.$t("Yes")),1),e("td",xe,[n(me,{align:"right",class:"mt-2"},{items:u(()=>[n(pe,null,{default:u(()=>[n(Z,{as:"button",onClick:M=>g(p.uuid)},{default:u(()=>[A(r(a.$t("Edit")),1)]),_:2},1032,["onClick"]),n(Z,{as:"button",onClick:M=>i(y)(p.uuid)},{default:u(()=>[A(r(a.$t("Delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),default:u(()=>[m[3]||(m[3]=e("button",{class:"inline-flex w-full justify-center rounded-md text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[e("span",{class:"hover:bg-[#F6F7F9] hover:rounded-full w-[fit-content] p-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"})])])],-1))]),_:2},1024)])])]),_:1},8,["list"])])]),n(re,{class:"mt-3",pagination:$.rows.meta},null,8,["pagination"])]),n(ie,{modelValue:i(w),"onUpdate:modelValue":m[0]||(m[0]=p=>ee(w)?w.value=p:null),onConfirm:m[1]||(m[1]=()=>i(C)(x)),label:a.$t("Delete row"),description:a.$t("Are you sure you want to delete this row? This action can not be undone")},null,8,["modelValue","label","description"])],64))}},$e={class:"md:h-[90vh]"},ke={class:"flex justify-center items-center"},Ce={class:"md:w-[60em]"},Ve={class:"bg-white border border-slate-200 rounded-lg pt-2 text-sm mb-4 px-4 mb-20"},Ae={class:"w-full py-2 mb-4 mt-2"},Te={class:"flex w-full"},Se={class:"text-md"},Fe={class:"text-[16px]"},Me={class:"mb-1 text-slate-500"},Ne={class:"ml-auto"},Be={class:"bg-white border border-slate-200 rounded-lg py-2 text-sm mb-4 pb-4 px-4 mb-20"},Ue={class:"w-full py-2 mb-2 mt-2"},De={class:"flex w-full mb-4"},Oe={class:"text-md"},je={class:"text-[16px]"},Ie={class:"flex items-center mt-1 text-slate-500"},Le={class:"ml-auto"},Ee={class:"w-5/5"},Re={class:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4"},ze={class:"grid grid-cols gap-y-4"},He={key:1,class:f("col-span-6 mt-2")},Ze={class:"flex pb-2"},Pe={class:"text-sm"},Ge={class:"col-1 ml-auto"},Je={class:"bg-slate-100 rounded-lg p-2"},Ye={class:"flex items-center w-full space-x-4"},Ke=["onClick"],Qe={class:"text-sm"},We={class:"mt-4 flex"},Xe=["disabled"],et={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},tt={key:1},Nt={__name:"Contact",props:["rows","filters","settings","modules"],setup($){var j,I,L,E;const k=$,b=c(!1),w=c("Add Contact Field"),y=c("/contact-fields"),C=c("post"),T=c(k.settings.metadata),h=c(T.value?JSON.parse(T.value):null),g=c(!1),x=c((I=(j=h==null?void 0:h.value)==null?void 0:j.contacts)!=null&&I.location?(E=(L=h==null?void 0:h.value)==null?void 0:L.contacts)==null?void 0:E.location:null);let q=0;const o=B({name:null,component:null,type:null,required:0,options:[{value:"",id:0}]}),a=B({location:null}),m=(s,t={})=>{w.value=l("Add contact field"),y.value="/contact-fields",C.value="post",s!=null?(w.value=l("Edit contact field"),y.value="/contact-fields/"+s,C.value="put",p()):(q=0,o.name=null,o.type=null,o.options=[{value:"",id:0}],b.value=!0)};function p(){se.get(y.value).then(s=>{const{data:t}=s;if(console.log(t.item),t.item.type==="select"){o.name=t.item.name,o.component=t.item.type,o.required=t.item.required;const V=t.item.value.split(", ").map((S,W)=>({id:W,value:S}));q=V.length-1,o.options=V}else t.item.type==="input"?(o.name=t.item.name,o.component=t.item.type,o.type=t.item.value,o.required=t.item.required):(o.name=t.item.name,o.component=t.item.type,o.required=t.item.required);b.value=!0}).catch(s=>{})}l("Name"),l("Type"),l("Text"),l("Number"),l("Email"),l("URL"),l("Date"),l("Time"),l("Date & Time Local");const D=[{label:l("Text"),value:"text"},{label:l("Number"),value:"number"},{label:l("Email"),value:"email"},{label:l("URL"),value:"url"},{label:l("Date"),value:"date"},{label:l("Time"),value:"time"},{label:l("Date & time"),value:"datetime-local"}],M=[{label:l("Input"),value:"input"},{label:l("Select box"),value:"select"},{label:l("Text area"),value:"textarea"},{label:l("Checkbox"),value:"checkbox"}],G=[{label:l("Before address"),value:"before"},{label:l("After address"),value:"after"}],J=()=>{o.required=o.required===0?1:0};c(!1);const Y=s=>{o.options.splice(s,1)},O=()=>{q++,o.options.push({id:q,value:""})},K=async()=>{g.value=!0,C.value=="post"?o.post(y.value,{preserveScroll:!0,onFinish:()=>{g.value=!1},onSuccess:()=>{b.value=!1}}):o.put(y.value,{preserveScroll:!0,onFinish:()=>{g.value=!1},onSuccess:()=>{b.value=!1}})};oe(x,(s,t)=>{s!==t&&(a.location=x,Q())});const Q=async()=>{a.post("/settings/contacts",{preserveScroll:!0})};return(s,t)=>(v(),R(le,{modules:k.modules},{default:u(()=>[e("div",$e,[e("div",ke,[e("div",Ce,[e("div",Ve,[e("div",Ae,[e("div",Te,[e("div",Se,[e("h4",Fe,r(s.$t("Contact fields location")),1),e("div",Me,r(s.$t("Place custom fields before or after the address section")),1)]),e("div",Ne,[n(N,{modelValue:x.value,"onUpdate:modelValue":t[0]||(t[0]=d=>x.value=d),options:G,name:"",error:i(a).errors.location,class:f("col-span-6"),placeholder:"Select Here"},null,8,["modelValue","error"])])])])]),e("div",Be,[e("div",Ue,[e("div",De,[e("div",Oe,[e("h4",je,r(s.$t("Custom contact fields")),1),e("span",Ie,r(s.$t("Create custom input fields for the contacts section")),1)]),e("div",Le,[e("button",{onClick:t[1]||(t[1]=d=>m()),class:"float-right rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},r(s.$t("Add fields")),1)])]),e("div",Ee,[n(qe,{rows:k.rows,onEdit:m,onDelete:s.openAlert},null,8,["rows","onDelete"])])])])])])]),n(ae,{label:w.value,isOpen:b.value},{default:u(()=>[e("div",Re,[e("form",{onSubmit:t[7]||(t[7]=z(d=>K(),["prevent"])),class:"gap-y-4"},[e("div",ze,[n(H,{modelValue:i(o).name,"onUpdate:modelValue":t[2]||(t[2]=d=>i(o).name=d),name:s.$t("Label"),error:i(o).errors.name,type:"text",class:f("col-span-6")},null,8,["modelValue","name","error"]),n(N,{modelValue:i(o).component,"onUpdate:modelValue":t[3]||(t[3]=d=>i(o).component=d),options:M,name:s.$t("Form component"),error:i(o).errors.component,class:f("col-span-6"),optionClassName:"h-[8em]",placeholder:"Select Here"},null,8,["modelValue","name","error"]),i(o).component==="input"?(v(),R(N,{key:0,modelValue:i(o).type,"onUpdate:modelValue":t[4]||(t[4]=d=>i(o).type=d),options:D,name:s.$t("Input type"),error:i(o).errors.type,class:f("col-span-6"),optionClassName:"h-[8em]",placeholder:"Select Here"},null,8,["modelValue","name","error"])):U("",!0),i(o).component==="select"?(v(),_("div",He,[e("div",Ze,[e("span",Pe,r(s.$t("Select options")),1),e("div",Ge,[e("button",{class:"btn bg-primary text-xs text-white px-2 rounded-md py-1",onClick:O},r(s.$t("Add option")),1)])]),e("div",Je,[n(i(P),{tag:"div",list:i(o).options,class:"mt-2 w-full",handle:".handle","item-key":"id"},{item:u(({element:d,index:V})=>[e("div",Ye,[t[10]||(t[10]=e("span",{class:"handle"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M9 19.23q-.508 0-.87-.36q-.36-.362-.36-.87t.36-.87t.87-.36t.87.36q.36.362.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36q-.36-.362-.36-.87t.36-.87t.87-.36t.87.36q.36.362.36.87t-.36.87t-.87.36m-6-6q-.508 0-.87-.36q-.36-.362-.36-.87t.36-.87t.87-.36t.87.36q.36.362.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36q-.36-.362-.36-.87t.36-.87t.87-.36t.87.36q.36.362.36.87t-.36.87t-.87.36m-6-6q-.508 0-.87-.36q-.36-.362-.36-.87t.36-.87t.87-.36t.87.36q.36.362.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36q-.36-.362-.36-.87t.36-.87t.87-.36t.87.36q.36.362.36.87t-.36.87t-.87.36"})])],-1)),n(H,{modelValue:d.value,"onUpdate:modelValue":S=>d.value=S,name:"",type:"text",class:f("w-full py-2"),required:!0},null,8,["modelValue","onUpdate:modelValue"]),V!=0?(v(),_("span",{key:0,onClick:S=>Y(V),class:"cursor-pointer hover:bg-red-600 hover:text-white p-1 rounded-full"},t[8]||(t[8]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"m20 9l-1.995 11.346A2 2 0 0 1 16.035 22h-8.07a2 2 0 0 1-1.97-1.654L4 9m17-3h-5.625M3 6h5.625m0 0V4a2 2 0 0 1 2-2h2.75a2 2 0 0 1 2 2v2m-6.75 0h6.75"})],-1)]),8,Ke)):(v(),_("span",{key:1,onClick:O,class:"cursor-pointer hover:bg-primary hover:text-white p-1 rounded-full"},t[9]||(t[9]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 17h7m5-1h3m0 0h3m-3 0v3m0-3v-3M3 12h11M3 7h11"})],-1)])))])]),_:1},8,["list"])])])):U("",!0),e("div",{class:f(["flex space-x-4 py-3","col-span-6"])},[e("span",Qe,r(s.$t("Is required")),1),e("div",{class:f(["w-12 h-6 flex items-center bg-gray-300 rounded-full p-1",{"bg-primary":i(o).required!=0}]),onClick:t[5]||(t[5]=d=>J())},[e("div",{class:f(["bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out",{"translate-x-6":i(o).required!=0}])},null,2)],2)])]),e("div",We,[e("button",{type:"button",onClick:t[6]||(t[6]=z(d=>b.value=!1,["self"])),class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},r(s.$t("Cancel")),1),e("button",{class:f(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":g.value}]),disabled:g.value},[g.value?(v(),_("svg",et,t[11]||(t[11]=[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(v(),_("span",tt,r(s.$t("Save")),1))],10,Xe)])],32)])]),_:1},8,["label","isOpen"])]),_:1},8,["modules"]))}};export{Nt as default};
