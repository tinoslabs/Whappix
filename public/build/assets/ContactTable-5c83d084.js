import{m as Q,r as x,G as Y,o as n,f as q,g as w,c as r,t as a,a as e,k as T,h as b,b as u,u as j,K as ee,O as A,q as te,a7 as se,S as le,w as oe,v as ae,d as ne,n as k,j as y,i as R,F as D,e as W}from"./app-63c352f8.js";import{d as re}from"./debounce-56258666.js";import{_ as ie}from"./Modal-77090c91.js";import{t as L}from"./index-245abe8c.js";import{_ as ce}from"./Dropdown-6b18c969.js";import{_ as de,a as N}from"./DropdownItem-e1756688.js";import{P as ue}from"./Pagination-83ad7c1b.js";const me={key:0,class:"text-sm text-slate-600"},pe={key:1,class:"text-sm text-slate-600"},fe={class:"text-sm text-slate-600 underline flex mt-4 mb-6"},ve=["href"],he={class:"max-w-md w-full gap-y-8"},ge={class:"space-y-6"},we={class:"text-center"},xe={class:"flex text-sm text-gray-600"},ye={for:"file-upload",class:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},be={class:"pl-1"},ke={class:"text-xs text-gray-500"},Ce={key:1,class:"flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},_e={class:"rounded-md p-1 bg-slate-50 text-center text-sm"},$e={class:"mt-4"},Me={key:0,class:"mt-2"},Se={key:0,class:"bg-green-50 px-2 py-2 flex rounded-md justify-between items-center mb-1"},je={class:"mt-1 text-sm"},Ie={class:"text-green-800 flex items-center gap-x-2"},Ne={key:1,class:"bg-red-50 px-2 py-2 flex rounded-md justify-between items-center mb-1"},Ze={class:"mt-1 text-sm"},Be={class:"text-red-600 flex items-center gap-x-2"},Ve={key:2,class:"bg-red-50 px-2 py-2 flex rounded-md justify-between items-center mb-1"},Oe={class:"mt-1 text-sm"},De={class:"text-red-600 flex items-center gap-x-2"},Le={key:3,class:"bg-red-50 px-2 py-2 flex rounded-md justify-between items-center mb-1"},Te={class:"mt-1 text-sm"},Ae={class:"text-red-600 flex items-center gap-x-2"},Fe={key:2,class:"mt-5"},Ee={class:"flex justify-center mt-2 w-full"},ze={__name:"ContactImportModal",props:["type","modelValue"],emits:["update:modelValue"],setup(m,{emit:Z}){const i=m,f=Z,p=Q(()=>ee().props.flash.status),_=i.type==="contact"?L("Import contacts"):L("Import contact groups"),$=x(i.modelValue),g=x(null),d=x(null);Y(()=>i.modelValue,c=>{$.value=c});const v=c=>{c.preventDefault();const o=c.target.files[0];M(o)},h=c=>{c.preventDefault();const o=c.dataTransfer.files[0];M(o)};function M(c){if(!["text/csv","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(c.type)){alert(L("please select a CSV or XLSX file"));return}g.value=c.name;const o=new FormData;o.append("file",c),A.post(i.type==="contact"?"/contacts/import":"/contact-groups/import",o,{forceFormData:!0,onProgress:C=>{d.value="pending"},onSuccess:()=>{d.value="complete"},onError:C=>{d.value=null}})}function B(){$.value=!1,f("update:modelValue",!1),setTimeout(()=>{d.value=null},500)}return(c,o)=>(n(),q(ie,{label:j(_),isOpen:$.value},{default:w(()=>[m.type==="contact"?(n(),r("div",me,a(c.$t("Upload a csv/xlsx to import your contact data. For the phone field ensure that you start with the contact's country code.")),1)):(n(),r("div",pe,a(c.$t("Upload a csv/xlsx to import your contact groups data.")),1)),e("div",fe,[e("a",{href:m.type==="contact"?"/contacts.xlsx":"/contact-groups.xlsx"},a(c.$t("Click here to download sample template")),9,ve)]),e("div",he,[e("div",ge,[d.value==null||d.value=="complete"?(n(),r("div",{key:0,onDragover:o[1]||(o[1]=T(()=>{},["prevent"])),onDrop:h,class:"flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},[e("input",{type:"file",class:"sr-only",accept:".csv,.xlsx",ref:"fileInput",id:"file-upload",onChange:o[0]||(o[0]=C=>v(C))},null,544),e("div",we,[e("div",null,[o[3]||(o[3]=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("g",{fill:"none"},[e("path",{fill:"currentColor",d:"m15.393 4.054l-.502.557l.502-.557Zm3.959 3.563l-.502.557l.502-.557Zm2.302 2.537l-.685.305l.685-.305ZM3.172 20.828l.53-.53l-.53.53Zm17.656 0l-.53-.53l.53.53ZM14 21.25h-4v1.5h4v-1.5ZM2.75 14v-4h-1.5v4h2.5Zm18.5-.437V14h2.5v-.437h-1.5ZM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563l-1.004 1.115Zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104h2.5Zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79L18.85 8.174ZM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316v1.5Zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645l1.004-1.115ZM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153v-1.5ZM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289h-1.5ZM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14v1.5ZM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489h-1.5Zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10h2.5Zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14v-1.5Z"}),e("path",{stroke:"currentColor","stroke-width":"1.5",d:"M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4"})])],-1)),e("div",xe,[e("label",ye,[e("span",null,a(c.$t("Click to upload a file")),1)]),e("p",be,a(c.$t("Or drag and drop")),1)]),e("p",ke,a(c.$t("CSV/XLSX files only")),1)])])],32)):(n(),r("div",Ce,[e("div",null,[o[4]||(o[4]=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"black","stroke-dasharray":"15","stroke-dashoffset":"15","stroke-linecap":"round","stroke-width":"2",d:"M12 3C16.9706 3 21 7.02944 21 12"},[e("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),e("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})])],-1)),o[5]||(o[5]=e("div",{class:"text-center mb-2 text-sm text-gray-500"},"Upload In Progress",-1)),e("div",_e,a(g.value),1)])])),e("div",$e,[d.value=="complete"?(n(),r("div",Me,[p.value.successfulImports?(n(),r("div",Se,[e("div",je,[e("div",Ie,[o[6]||(o[6]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 16 16"},[e("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},[e("path",{d:"M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"}),e("path",{d:"m5.75 7.75l2.5 2.5l6-6.5"})])],-1)),b(" "+a(p.value.successfulImports+"/"+p.value.totalImports)+" "+a(c.$t("rows added successfully!")),1)])])])):u("",!0),p.value.failedNames?(n(),r("div",Ne,[e("div",Ze,[e("div",Be,[o[7]||(o[7]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M15.71 8.29a1 1 0 0 0-1.42 0L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0 0-1.42m3.36-3.36A10 10 0 1 0 4.93 19.07A10 10 0 1 0 19.07 4.93m-1.41 12.73A8 8 0 1 1 20 12a7.95 7.95 0 0 1-2.34 5.66"})],-1)),b(" "+a(p.value.failedNames)+" rows without first name ",1)])])])):u("",!0),p.value.failedDuplicates?(n(),r("div",Ve,[e("div",Oe,[e("div",De,[o[8]||(o[8]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M15.71 8.29a1 1 0 0 0-1.42 0L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0 0-1.42m3.36-3.36A10 10 0 1 0 4.93 19.07A10 10 0 1 0 19.07 4.93m-1.41 12.73A8 8 0 1 1 20 12a7.95 7.95 0 0 1-2.34 5.66"})],-1)),b(" "+a(p.value.failedDuplicates)+" duplicates found ",1)])])])):u("",!0),p.value.failedFormats?(n(),r("div",Le,[e("div",Te,[e("div",Ae,[o[9]||(o[9]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M15.71 8.29a1 1 0 0 0-1.42 0L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0 0-1.42m3.36-3.36A10 10 0 1 0 4.93 19.07A10 10 0 1 0 19.07 4.93m-1.41 12.73A8 8 0 1 1 20 12a7.95 7.95 0 0 1-2.34 5.66"})],-1)),b(" "+a(p.value.failedFormats)+" formatting issues found ",1)])])])):u("",!0)])):u("",!0)])])]),d.value==null||d.value=="complete"?(n(),r("div",Fe,[e("div",Ee,[e("button",{type:"button",onClick:o[2]||(o[2]=C=>B()),class:"w-full inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white hover:text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"},a(c.$t("Close")),1)])])):u("",!0)]),_:1},8,["label","isOpen"]))}},Ge={class:"px-4 pb-2"},Pe={class:"border border-[#f0f2f5] rounded-md mt-6 flex items-center py-[2px] md:py-[2px]"},Ue=["placeholder"],Je={key:1,class:"pr-2"},Xe={class:"flex justify-between px-4 border-b"},Re={class:"flex items-center space-x-2"},We={key:0,class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},qe={key:0},Ke={key:1},He={class:"float-right"},Qe=["href"],Ye={class:"h-[5vh]"},et={class:"flex justify-between text-sm border-b"},tt={class:"flex-grow overflow-y-auto h-[65vh]",ref:"scrollContainer"},st=["onClick"],lt=["onClick"],ot={key:0,class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},at={class:"w-[15%]"},nt=["src"],rt={key:1,class:"rounded-full bg-secondary/10 text-secondary flex justify-center items-center h-12 w-12"},it={class:"w-[75%]"},ct={class:"text-slate-500 text-xs truncate"},dt={class:"w-[10%]"},ut={key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},mt=["onClick"],pt=["onClick"],ft={key:0,class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},vt={class:"w-[15%]"},ht={class:"rounded-full bg-secondary/10 text-secondary flex justify-center items-center h-12 w-12 capitalize"},gt={class:"w-[85%] flex items-center"},wt={class:"px-4 pb-4"},Mt={__name:"ContactTable",props:["rows","filters","type"],emits:["callback"],setup(m,{emit:Z}){var U,J,X;const i=m,f=x({id:(U=i.filters)==null?void 0:U.id,search:(J=i.filters)==null?void 0:J.search,page:(X=i.filters)==null?void 0:X.page}),p=x(!1),_=x(!1),$=Z,g=x(!1),d=x(0),v=x([]),h=x([]);function M(l){f.value.id=l;const t=Object.fromEntries(Object.entries(f.value).filter(([s,S])=>S!==null));$("callback",t)}const B=()=>{f.value.search=null,o()},c=re(()=>{f.value.page=null,_.value=!0,o()},1e3),o=()=>{const l=Object.fromEntries(Object.entries(f.value).filter(([t,s])=>s!==null));A.visit(i.type==="contact"?"/contacts":"/contact-groups",{method:"get",data:l})};function C(){i.type==="contact"?localStorage.setItem("checkedContacts",JSON.stringify(v.value)):localStorage.setItem("checkedGroups",JSON.stringify(h.value))}function K(){if(i.type==="contact"){const l=localStorage.getItem("checkedContacts");v.value=l?JSON.parse(l):[]}else{const l=localStorage.getItem("checkedGroups");h.value=l?JSON.parse(l):[]}}function F(l,t){if(i.type==="contact"){const s=v.value.indexOf(l);t&&s===-1?v.value.push(l):!t&&s!==-1&&v.value.splice(s,1)}else{const s=h.value.indexOf(l);t&&s===-1?h.value.push(l):!t&&s!==-1&&h.value.splice(s,1)}C()}function E(l){const t=i.rows.data.find(s=>s.uuid===l);t.isChecked=!t.isChecked,F(l,t.isChecked),G(),O()}function z(){g.value=!g.value,i.rows.data.forEach(l=>{l.isChecked=g.value,F(l.uuid,g.value)}),O()}function V(){i.rows.data.forEach(l=>{l.isChecked=i.type==="contact"?v.value.includes(l.uuid):h.value.includes(l.uuid)}),G(),O()}function G(){g.value=i.rows.data.length>0&&i.rows.data.every(l=>l.isChecked)}function O(){d.value=i.type==="contact"?v.value.length:h.value.length}function P(l){const t=i.type==="contact"?v.value:h.value;A.visit(i.type==="contact"?"/contacts":"/contact-groups",{method:"delete",data:{uuids:l==="all"?[]:t},preserveState:!0,onSuccess:()=>{localStorage.removeItem(i.type==="contact"?"checkedContacts":"checkedGroups"),i.type==="contact"?v.value=[]:h.value=[]}})}return te(()=>{K(),V()}),se(()=>{V()}),le(()=>{var l;f.value.page=(l=i.filters)==null?void 0:l.page,V()}),(l,t)=>(n(),r(D,null,[e("div",Ge,[e("div",Pe,[t[10]||(t[10]=e("span",{class:"pl-3 py-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"})])],-1)),oe(e("input",{onInput:t[0]||(t[0]=(...s)=>j(c)&&j(c)(...s)),"onUpdate:modelValue":t[1]||(t[1]=s=>f.value.search=s),type:"text",class:"w-full outline-none rounded-xl py-2 pl-2 mr-2 text-sm",placeholder:m.type==="contact"?l.$t("Search name or phone or email"):l.$t("Search name")},null,40,Ue),[[ae,f.value.search]]),_.value===!1&&f.value.search?(n(),r("button",{key:0,onClick:B,type:"button",class:"pr-2"},t[8]||(t[8]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 12.3c.4.4.4 1 0 1.4c-.4.4-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4L13.4 12l2.3 2.3z"})],-1)]))):u("",!0),_.value?(n(),r("span",Je,t[9]||(t[9]=[ne('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle></svg>',1)]))):u("",!0)])]),e("div",Xe,[e("div",Re,[e("label",{onClick:t[2]||(t[2]=s=>z()),for:"myCheckbox",class:"cursor-pointer"},[e("div",{class:k(["w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center",{"bg-secondary":g.value}])},[g.value?(n(),r("svg",We,t[11]||(t[11]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)]))):u("",!0)],2)]),e("label",{onClick:t[3]||(t[3]=s=>z()),class:"cursor-pointer text-sm"},[d.value==0?(n(),r("span",qe,a(l.$t("Select all"))+" ("+a(d.value)+")",1)):d.value>0?(n(),r("span",Ke,a(d.value)+" "+a(l.$t("selected")),1)):u("",!0)])]),e("div",null,[e("div",He,[y(ce,{align:"right",class:"mt-2"},{items:w(()=>[y(de,null,{default:w(()=>[y(N,{as:"button",onClick:t[4]||(t[4]=s=>p.value=!0)},{default:w(()=>[b(a(l.$t("Import rows")),1)]),_:1}),y(N,{as:"button"},{default:w(()=>[e("a",{href:m.type==="contact"?"/contacts/export":"/contact-groups/export",class:"w-full h-full"},a(l.$t("Export to xlsx")),9,Qe)]),_:1}),d.value>0?(n(),q(N,{key:0,as:"button",onClick:t[5]||(t[5]=s=>P())},{default:w(()=>[b(a(l.$t("Delete selected")),1)]),_:1})):u("",!0),y(N,{as:"button",onClick:t[6]||(t[6]=s=>P("all"))},{default:w(()=>[b(a(l.$t("Delete all")),1)]),_:1})]),_:1})]),default:w(()=>[t[12]||(t[12]=e("button",{class:"inline-flex w-full justify-center rounded-md text-sm font-medium text-black hbg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[e("span",{class:"hover:shadow-md bg-slate-50 rounded-full w-[fit-content] p-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16"},[e("path",{fill:"black",d:"M8 2.5a1.22 1.22 0 0 1 1.25 1.17A1.21 1.21 0 0 1 8 4.84a1.21 1.21 0 0 1-1.25-1.17A1.22 1.22 0 0 1 8 2.5m0 8.66a1.17 1.17 0 1 1-1.25 1.17A1.21 1.21 0 0 1 8 11.16m0-4.33a1.17 1.17 0 1 1 0 2.34a1.17 1.17 0 1 1 0-2.34"})])])],-1))]),_:1})])])]),e("div",Ye,[e("div",et,[y(j(R),{href:"/contacts",class:k(["pt-3 w-1/2 text-center pb-1 hover:bg-slate-50",{"bg-gray-50 border-b-2 border-slate-700":l.$page.url.startsWith("/contacts")}])},{default:w(()=>[b(a(l.$t("All contacts")),1)]),_:1},8,["class"]),y(j(R),{href:"/contact-groups",class:k(["pt-3 w-1/2 text-center pb-1 hover:bg-slate-50",{"bg-gray-50 border-b-2 border-slate-700":l.$page.url.startsWith("/contact-groups")}])},{default:w(()=>[b(a(l.$t("Groups")),1)]),_:1},8,["class"])])]),e("div",tt,[m.type==="contact"?(n(!0),r(D,{key:0},W(m.rows.data,(s,S)=>{var I;return n(),r("div",{onClick:H=>M(s.uuid),class:k(["flex space-x-2 hover:bg-gray-50 cursor-pointer px-4 py-3 border-b",s.isChecked?"bg-gray-50":""]),key:S},[e("div",null,[e("label",{onClick:T(H=>E(s.uuid),["stop"]),for:"myCheckbox",class:"cursor-pointer"},[e("div",{class:k(["w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center mt-1",{"bg-secondary":s.isChecked}])},[s.isChecked?(n(),r("svg",ot,t[13]||(t[13]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)]))):u("",!0)],2)],8,lt)]),e("div",at,[s.avatar?(n(),r("img",{key:0,class:"rounded-full h-12 w-12",src:s.avatar},null,8,nt)):(n(),r("div",rt,a((I=s.first_name)==null?void 0:I.substring(0,1)),1))]),e("div",it,[e("h3",null,a(s==null?void 0:s.full_name),1),e("p",ct,a(s.formatted_phone_number),1)]),e("div",dt,[s.is_favorite?(n(),r("svg",ut,t[14]||(t[14]=[e("path",{fill:"#FFD700",d:"M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"},null,-1)]))):u("",!0)])],10,st)}),128)):m.type==="group"?(n(!0),r(D,{key:1},W(m.rows.data,(s,S)=>(n(),r("div",{onClick:I=>M(s.uuid),class:k(["flex space-x-2 hover:bg-gray-50 cursor-pointer px-4 py-3 border-b",s.isChecked?"bg-gray-50":""]),key:S},[e("div",null,[e("label",{onClick:T(I=>E(s.uuid),["stop"]),for:"myCheckbox",class:"cursor-pointer"},[e("div",{class:k(["w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center mt-1",{"bg-secondary":s.isChecked}])},[s.isChecked?(n(),r("svg",ft,t[15]||(t[15]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)]))):u("",!0)],2)],8,pt)]),e("div",vt,[e("div",ht,a(s.name.substring(0,1)),1)]),e("div",gt,[e("h3",null,a(s.name),1)])],10,mt))),128)):u("",!0)],512),e("div",wt,[y(ue,{class:"mt-3",pagination:m.rows.meta},null,8,["pagination"])]),y(ze,{type:m.type,modelValue:p.value,"onUpdate:modelValue":t[7]||(t[7]=s=>p.value=s)},null,8,["type","modelValue"])],64))}};export{ze as _,Mt as a};
