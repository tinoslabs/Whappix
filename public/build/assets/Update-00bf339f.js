import{r as u,c as o,a as e,t as a,k as h,b as p,j as m,n as k,g as f,u as v,o as r,h as x,i as y,x as _}from"./app-63c352f8.js";import{_ as $}from"./FormInput-a9577592.js";const A={class:"flex h-screen justify-center"},V={class:"flex justify-center"},j={class:"mt-20"},N={class:"flex justify-center mb-5"},M={class:"text-2xl text-center"},P={key:0,class:"md:w-[20em] p-2"},S={class:"text-center text-xl mb-4"},Z={key:0,class:"mt-4 p-2 bg-slate-200 border-l-[2px] border-red-500 my-4 max-w-[28em] text-sm"},B={class:"mt-2"},T={key:0,href:"/install/database",type:"submit",class:"mt-4 rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm w-full"},E={key:1,type:"button",class:"mt-4 rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm w-full flex justify-center"},U={key:1,class:"md:w-[30em] p-2"},z={class:"bg-slate-200 p-2 border-l-[3px] border-red-800 text-sm"},D={class:"flex justify-center gap-x-2"},W={key:0,type:"submit",class:"w-[10em] mt-4 rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm"},q={key:1,type:"button",class:"w-[10em] mt-4 rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm flex justify-center"},L={key:2,class:"md:w-[30em] p-2"},F={class:"text-center text-xl mb-4"},G={class:"bg-green-50 p-2 border-l-[3px] border-green-800 mb-2"},H={class:"bg-slate-100 rounded p-4"},I={class:"bg-slate-200 p-2 rounded-md mt-2"},J={class:"mb-2"},K={class:"text-sm"},O={class:"flex gap-x-1"},Q={class:"flex justify-between gap-x-2"},Y={__name:"Update",props:["path"],setup(b){const w=b,n=u(null),i=u(!1),l=u(null),g=async()=>{i.value=!0,(await _.post("/update",{purchase_code:d.value.purchase_code})).data.statusCode===200&&(n.value="finish")},d=u({purchase_code:null}),C=async()=>{i.value=!0;try{(await _.post("https://axis96.xyz/api/install/51790966/item",{purchase_code:d.value.purchase_code})).status===200&&(n.value="migrate",l.value=null)}catch(t){t.response?t.response.status===404?l.value=t.response.data.message:l.value=t.response.data.message||"An error occurred":t.request?l.value="Error: No response received":l.value=t.message,n.value=null}finally{i.value=!1}};return(t,s)=>(r(),o("div",A,[e("div",V,[e("div",j,[e("div",N,[e("div",null,[s[3]||(s[3]=e("h4",{class:"text-2xl mb-2 text-center"},"Swiftchats",-1)),e("h1",M,a(t.$t("Proceed to update")),1)])]),n.value===null?(r(),o("div",P,[t.isValidPurchaseCode?p("",!0):(r(),o("form",{key:0,onSubmit:s[1]||(s[1]=h(c=>C(),["prevent"]))},[e("h4",S,a(t.$t("Enter Purchase Code")),1),l.value!=null?(r(),o("div",Z,a(l.value),1)):p("",!0),m($,{modelValue:d.value.purchase_code,"onUpdate:modelValue":s[0]||(s[0]=c=>d.value.purchase_code=c),name:t.$t("Purchase Code"),type:"text",placeholder:"Purchase code",class:k("sm:col-span-6 mb-2")},null,8,["modelValue","name"]),e("div",B,[i.value?(r(),o("button",E,s[4]||(s[4]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})])],-1)]))):(r(),o("button",T,a(t.$t("Next Step")),1))])],32))])):n.value==="migrate"?(r(),o("div",U,[e("div",z,[e("p",null,a(t.$t("When you click proceed, your script will be updated automatically! Do not navigate away from the page while this process is ongoing.")),1)]),e("form",{onSubmit:s[2]||(s[2]=h(c=>g(),["prevent"]))},[e("div",D,[i.value?(r(),o("button",q,s[5]||(s[5]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})])],-1)]))):(r(),o("button",W,a(t.$t("Proceed")),1))])],32)])):n.value==="finish"?(r(),o("div",L,[e("p",F,a(t.$t("Update Successfull!")),1),e("div",G,[e("p",null,a(t.$t("The application has been updated successfully!")),1)]),e("div",H,[e("div",I,[e("p",J,a(t.$t("Website Url")),1),e("div",K,[e("div",O,[m(v(y),{href:"/",class:"underline"},{default:f(()=>[x(a(w.path),1)]),_:1})])])])]),e("div",Q,[m(v(y),{href:"/",class:"mt-4 rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm w-full text-center"},{default:f(()=>[x(a(t.$t("Proceed To Main Site")),1)]),_:1})])])):p("",!0)])])]))}};export{Y as default};
