import{m as k,r as g,T as B,c as u,a as e,t as r,d as M,b as L,f as s,g as a,u as n,n as i,F as H,o as p,l as o,K as y}from"./app-a39c937f.js";import{_ as j}from"./ProfileModal-61a09d92.js";import{_ as C}from"./LangToggle-edfcdcaa.js";import"./FormInput-4b7fa008.js";import"./FormPhoneInput-1c9c9926.js";/* empty css                      */import"./FormSelect-c7672027.js";import"./index-8758cb17.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./transition-37a067aa.js";import"./micro-task-89dcd6af.js";import"./tabs-86fdd039.js";const S={key:0,class:"flex items-center justify-between px-5 pt-5 h-20 mb-4"},Z={class:"ml-2 text-2xl"},W={key:1,class:"flex items-center justify-between px-5 pt-5 h-20 mb-1"},N=["src"],O={class:"flex-grow space-y-3 px-2 overflow-y-scroll"},F={class:"flex-1"},A={class:"pt-2 space-y-1 text-sm mb-2"},K={class:"pb-4 space-y-1 text-sm mt-2"},D={class:"hover:bg-slate-50 hover:text-black rounded-[5px] px-2 truncate"},R={class:"flex items-center space-x-3"},T={class:"flex items-center m-3 p-2 rounded-xl h-14 py-1 md:py-1 mt-2 space-x-4 justify-between bg-slate-50"},q={class:"flex space-x-2"},E={class:"rounded-xl p-1 bg-slate-200"},Q=["src"],U={key:1,class:"rounded-full w-9 h-9 flex justify-center items-center"},G={class:"text-[15px] capitalize truncate w-[6em]"},I={class:"flex items-center space-x-1"},i1={__name:"Menu",props:["config","user","organization","organizations","isSidebarOpen"],emits:["closeSidebar"],setup(d,{emit:V}){const v=d,w=k(()=>y().props.languages),f=k(()=>y().props.currentLanguage),h=g(!1);g(!1),g(!1);const x=V;B({uuid:null});const m=l=>{const t=v.config.find(c=>c.key===l);return t?t.value:""},b=()=>{x("closeSidebar",!0)},z=()=>{h.value=!1},$=()=>{h.value=!0,x("closeSidebar",!0)};return(l,t)=>(p(),u(H,null,[m("logo")===null?(p(),u("div",S,[e("h2",Z,r(m("company_name")),1),d.isSidebarOpen===!0?(p(),u("span",{key:0,onClick:t[0]||(t[0]=c=>b())},t[3]||(t[3]=[M('<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M5 5L12 5L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 5L19 5;M5 5L12 12L19 5"></animate></path><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"></animate></path><path d="M5 19L12 19L19 19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L12 19L19 19;M5 19L12 12L19 19"></animate></path></g></svg>',1)]))):L("",!0),s(C,{class:"text-black",languages:w.value,currentLanguage:f.value},null,8,["languages","currentLanguage"])])):(p(),u("div",W,[s(n(o),{href:"/dashboard"},{default:a(()=>[e("img",{src:"/media/"+m("logo"),alt:"{{ getValueByKey('company_name') }}",class:"w-32 object-contain h-full ps-2"},null,8,N)]),_:1}),d.isSidebarOpen===!0?(p(),u("span",{key:0,onClick:t[1]||(t[1]=c=>b())},t[4]||(t[4]=[M('<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M5 5L12 5L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 5L19 5;M5 5L12 12L19 5"></animate></path><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"></animate></path><path d="M5 19L12 19L19 19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L12 19L19 19;M5 19L12 12L19 19"></animate></path></g></svg>',1)]))):L("",!0),s(C,{class:"text-black",languages:w.value,currentLanguage:f.value},null,8,["languages","currentLanguage"])])),e("div",O,[e("div",F,[e("ul",A,[e("li",{class:i(["hover:bg-slate-50 hover:text-black rounded-[5px] px-2 truncate",l.$page.url.startsWith("/dashboard")?"bg-slate-50 text-black":""])},[s(n(o),{rel:"noopener noreferrer",href:"/admin/dashboard",class:"flex items-center p-2 space-x-3 rounded-md"},{default:a(()=>[t[5]||(t[5]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 11.452V16.8c0 1.12 0 1.68.218 2.109c.192.376.497.682.874.873c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.873c.218-.428.218-.987.218-2.105v-5.352c0-.534 0-.801-.065-1.05a1.998 1.998 0 0 0-.28-.617c-.145-.213-.345-.39-.748-.741l-4.8-4.2c-.746-.653-1.12-.98-1.54-1.104c-.37-.11-.764-.11-1.135 0c-.42.124-.792.45-1.538 1.102L5.093 9.044c-.402.352-.603.528-.747.74a2 2 0 0 0-.281.618C4 10.65 4 10.918 4 11.452Z"})],-1)),e("span",null,r(l.$t("Dashboard")),1)]),_:1})],2),e("li",{class:i(["hover:bg-slate-50 hover:text-black rounded-[5px] px-2 truncate",l.$page.url.startsWith("/chats")?"bg-slate-50 text-black":""])},[s(n(o),{rel:"noopener noreferrer",href:"/admin/organizations",class:"flex items-center p-2 space-x-3 rounded-md"},{default:a(()=>[t[6]||(t[6]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("g",{fill:"none","fill-rule":"evenodd"},[e("path",{d:"M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"}),e("path",{fill:"currentColor",d:"M17 3.722v5.497l2.864.716A1.5 1.5 0 0 1 21 11.39V19a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2v-7.69a1.5 1.5 0 0 1 .83-1.343L7 8.382V6.347a1.5 1.5 0 0 1 .973-1.405l7-2.625A1.5 1.5 0 0 1 17 3.722Zm-2 .721l-6 2.25V19h6V4.443Zm2 6.838V19h2v-7.22l-2-.5Zm-10-.663l-2 1V19h2v-8.382Z"})])],-1)),e("span",null,r(l.$t("Organizations")),1)]),_:1})],2),e("li",{class:i(["hover:bg-slate-50 hover:text-black rounded-[5px] px-2 truncate",l.$page.url.startsWith("/contact")?"bg-slate-50 text-black":""])},[s(n(o),{rel:"noopener noreferrer",href:"/admin/users",class:"flex items-center p-2 space-x-3 rounded-md"},{default:a(()=>[t[7]||(t[7]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20c0-1.657-2.239-3-5-3s-5 1.343-5 3m14-3c0-1.23-1.234-2.287-3-2.75M3 17c0-1.23 1.234-2.287 3-2.75m12-4.014a3 3 0 1 0-4-4.472m-8 4.472a3 3 0 0 1 4-4.472M12 14a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"})],-1)),e("span",null,r(l.$t("Users")),1)]),_:1})],2),e("li",{class:i(["hover:bg-slate-50 hover:text-black rounded-[5px] px-2 truncate",l.$page.url.startsWith("/campaign")?"bg-slate-50 text-black":""])},[s(n(o),{rel:"noopener noreferrer",href:"/admin/payment-logs",class:"flex items-center p-2 space-x-3 rounded-md"},{default:a(()=>[t[8]||(t[8]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 11v4.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V11M3 11V9m0 2h18M3 9v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V9M3 9h18M7 15h4m10-4V9"})],-1)),e("span",null,r(l.$t("Billing")),1)]),_:1})],2),e("li",{class:i(["hover:bg-slate-50 hover:text-black rounded-[5px] px-2 truncate",l.$page.url.startsWith("/template")?"bg-slate-50 text-black":""])},[s(n(o),{rel:"noopener noreferrer",href:"/admin/support",class:"flex items-center p-2 space-x-3 rounded-md"},{default:a(()=>[t[9]||(t[9]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 8h4a1 1 0 0 1 1 1v11l-3.333-2.769a1.002 1.002 0 0 0-.64-.231H9a1 1 0 0 1-1-1v-3m8-5V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11l3.333-2.77c.18-.148.406-.23.64-.23H8m8-5v4a1 1 0 0 1-1 1H8"})],-1)),e("span",null,r(l.$t("Support desk")),1)]),_:1})],2),e("li",{class:i(["hover:bg-slate-50 hover:text-black rounded-[5px] px-2 truncate",l.$page.url.startsWith("/canned-replies")?"bg-slate-50 text-black":""])},[s(n(o),{rel:"noopener noreferrer",href:"/admin/team/users",class:"flex items-center p-2 space-x-3 rounded-md"},{default:a(()=>[t[10]||(t[10]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 20c0-1.742-1.67-3.223-4-3.773M15 20c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-7a4 4 0 0 0 0-8m-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z"})],-1)),e("span",null,r(l.$t("Team")),1)]),_:1})],2)]),t[16]||(t[16]=e("div",{class:"px-4"},[e("hr")],-1)),e("ul",K,[e("li",{class:i(["hover:bg-slate-50 hover:text-black rounded-[5px] px-2 truncate",l.$page.url.startsWith("/team")?"bg-slate-50 text-black":""])},[s(n(o),{rel:"noopener noreferrer",href:"/admin/team/roles",class:"flex items-center p-2 space-x-3 rounded-md"},{default:a(()=>[t[11]||(t[11]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 20c0-1.742-1.67-3.223-4-3.773M15 20c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-7a4 4 0 0 0 0-8m-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z"})],-1)),e("span",null,r(l.$t("Roles")),1)]),_:1})],2),e("li",{class:i(["hover:bg-slate-50 hover:text-black rounded-[5px] px-2 truncate",l.$page.url.startsWith("/settings")?"bg-slate-50 text-black":""])},[s(n(o),{rel:"noopener noreferrer",href:"/admin/plans",class:"flex items-center p-2 space-x-3 rounded-md"},{default:a(()=>[t[12]||(t[12]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 11v4.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V11M3 11V9m0 2h18M3 9v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V9M3 9h18M7 15h4m10-4V9"})],-1)),e("span",null,r(l.$t("Subscription plans")),1)]),_:1})],2),e("li",{class:i(["hover:bg-slate-50 hover:text-black rounded-[5px] px-2 truncate",l.$page.url.startsWith("/billing")||l.$page.url.startsWith("/subscription")?"bg-slate-50 text-black":""])},[s(n(o),{rel:"noopener noreferrer",href:"/admin/faqs",class:"flex items-center p-2 space-x-3 rounded-md"},{default:a(()=>[t[13]||(t[13]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12zm-.692-2H16V4H3v10.385zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.546 19H9a1 1 0 0 1-1-1z"})],-1)),e("span",null,r(l.$t("FAQs")),1)]),_:1})],2),e("li",{class:i(["hover:bg-slate-50 hover:text-black rounded-[5px] px-2 truncate",l.$page.url.startsWith("/support")?"bg-slate-50 text-black":""])},[s(n(o),{rel:"noopener noreferrer",href:"/admin/testimonials",class:"flex items-center p-2 space-x-3 rounded-md"},{default:a(()=>[t[14]||(t[14]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M10.486 4.114c.675-1.162 2.353-1.162 3.028 0l2.065 3.56c.19.328.52.551.895.608l3.43.518c1.494.226 2.018 2.114.854 3.078l-2.499 2.07a1.25 1.25 0 0 0-.43 1.197l.7 3.676c.274 1.44-1.238 2.558-2.535 1.876L12.582 18.9a1.25 1.25 0 0 0-1.164 0l-3.412 1.797c-1.297.683-2.809-.436-2.535-1.876l.7-3.676a1.25 1.25 0 0 0-.43-1.197l-2.5-2.07c-1.163-.964-.64-2.852.856-3.078l3.43-.518a1.25 1.25 0 0 0 .894-.609zm1.73.753a.25.25 0 0 0-.432 0l-2.066 3.56a2.75 2.75 0 0 1-1.967 1.338l-3.43.518a.25.25 0 0 0-.122.44l2.499 2.07a2.75 2.75 0 0 1 .947 2.632l-.7 3.676a.25.25 0 0 0 .362.268l3.412-1.796a2.75 2.75 0 0 1 2.562 0l3.412 1.796a.25.25 0 0 0 .362-.268l-.7-3.676a2.75 2.75 0 0 1 .947-2.632l2.5-2.07a.25.25 0 0 0-.123-.44l-3.43-.518a2.75 2.75 0 0 1-1.967-1.339z","clip-rule":"evenodd"})],-1)),e("span",null,r(l.$t("Reviews")),1)]),_:1})],2),e("li",D,[s(n(o),{rel:"noopener noreferrer",href:"/admin/settings/general",class:"flex items-center p-2 space-x-3 rounded-md"},{default:a(()=>[t[15]||(t[15]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 16 16"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M3.5 2h-1v5h1zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1zm3.9-8h-1v2h1zm-1 6h1v6h-1zm-4 3h-1v3h1zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95zm2.1-9h-1v6h1zm-1 10h1v2h-1z","clip-rule":"evenodd"})],-1)),e("span",null,r(l.$t("Settings")),1)]),_:1})])])])]),s(n(o),{href:"/admin/addons",class:"border-2 border-primary text-sm rounded-[5px] mb-1 m-3 py-2 px-4 flex items-center justify-between cursor-pointer"},{default:a(()=>[e("div",R,[t[17]||(t[17]=e("span",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3m7 17H5V8h14zm-7-8c-1.7 0-3-1.3-3-3H7c0 2.8 2.2 5 5 5s5-2.2 5-5h-2c0 1.7-1.3 3-3 3"})])],-1)),e("span",null,r(l.$t("Addons")),1)]),t[18]||(t[18]=e("span",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M9 17.898c0 1.074 1.265 1.648 2.073.941l6.31-5.522a1.75 1.75 0 0 0 0-2.634l-6.31-5.522C10.265 4.454 9 5.028 9 6.102z"})])],-1))]),_:1}),e("div",T,[e("div",q,[e("div",E,[d.user.avatar?(p(),u("img",{key:0,class:"rounded-full w-9 h-9",src:"/media/"+d.user.avatar},null,8,Q)):(p(),u("div",U,t[19]||(t[19]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"6",r:"4"}),e("path",{"stroke-linecap":"round",d:"M19.998 18c.002-.164.002-.331.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437"})])],-1)])))]),e("div",null,[e("h2",G,r(d.user.first_name+" "+d.user.last_name),1),e("span",I,[e("span",{onClick:$,class:"text-sm hover:underline dark:text-gray-400 cursor-pointer"},r(l.$t("View profile")),1)])])]),s(n(o),{href:"/logout",class:"hover:bg-[#F6F7F9] hover:rounded-full w-[fit-content] p-2"},{default:a(()=>t[20]||(t[20]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m12 15l3-3m0 0l-3-3m3 3H4m5-4.751V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 4 11.08 4 12.2 4h4.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2.002 2.002 0 0 1-.875.874c-.427.218-.986.218-2.104.218h-4.606c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C9 18.48 9 17.92 9 16.8v-.05"})],-1)])),_:1})]),s(j,{user:v.user,organization:{},isOpen:h.value,role:"admin",onClose:t[2]||(t[2]=c=>z())},null,8,["user","isOpen"])],64))}};export{i1 as default};
