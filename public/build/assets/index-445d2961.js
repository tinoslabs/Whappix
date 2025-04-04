import{L as F,D as W,j as c,M as b,N as C,H as rt,P as lt,Q as Ct,m as f,q as ct,R as ut,F as At,r as M,I as j,S as z,U as _t}from"./app-63c352f8.js";const x={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},w={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},m={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Tt={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},dt={dangerouslyHTMLString:!1,multiple:!0,position:x.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},ht={rtl:!1,newestOnTop:!1,toastClassName:""},pt={...dt,...ht};({...dt,type:m.DEFAULT});var s=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(s||{}),$=(t=>(t.ENTRANCE_ANIMATION_END="d",t))($||{});const Nt={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},It={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},Lt={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},Ot={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"};function ft(t){let e=Nt;if(!t||typeof t=="string")switch(t){case"flip":e=Ot;break;case"zoom":e=Lt;break;case"slide":e=It;break}else e=t;return e}function bt(t){return t.containerId||String(t.position)}const X="will-unmount";function Pt(t=x.TOP_RIGHT){return!!document.querySelector(".".concat(s.CSS_NAMESPACE,"__toast-container--").concat(t))}function qt(t=x.TOP_RIGHT){return"".concat(s.CSS_NAMESPACE,"__toast-container--").concat(t)}function Mt(t,e,n=!1){const o=["".concat(s.CSS_NAMESPACE,"__toast-container"),"".concat(s.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(s.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return B(e)?e({position:t,rtl:n,defaultClassName:o}):"".concat(o," ").concat(e||"")}function Bt(t){var e;const{position:n,containerClassName:o,rtl:a=!1,style:i={}}=t,d=s.CSS_NAMESPACE,g=qt(n),l=document.querySelector(".".concat(d)),E=document.querySelector(".".concat(g)),y=!!E&&!((e=E.className)!=null&&e.includes(X)),T=l||document.createElement("div"),p=document.createElement("div");p.className=Mt(n,o,a),p.dataset.testid="".concat(s.CSS_NAMESPACE,"__toast-container--").concat(n),p.id=bt(t);for(const S in i)if(Object.prototype.hasOwnProperty.call(i,S)){const h=i[S];p.style[S]=h}return l||(T.className=s.CSS_NAMESPACE,document.body.appendChild(T)),y||T.appendChild(p),p}function tt(t){var e,n,o;const a=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(a);i&&i.removeEventListener("animationend",tt,!1);try{k[a].unmount(),(o=document.getElementById(a))==null||o.remove(),delete k[a],delete u[a]}catch{}}const k=F({});function wt(t,e){const n=document.getElementById(String(e));n&&(k[n.id]=t)}function et(t,e=!0){const n=String(t);if(!k[n])return;const o=document.getElementById(n);o&&o.classList.add(X),e?(Rt(t),o&&o.addEventListener("animationend",tt,!1)):tt(n),_.items=_.items.filter(a=>a.containerId!==t)}function Ft(t){for(const e in k)et(e,t);_.items=[]}function mt(t,e){const n=document.getElementById(t.toastId);if(n){let o=t;o={...o,...ft(o.transition)};const a=o.appendPosition?"".concat(o.exit,"--").concat(o.position):o.exit;n.className+=" ".concat(a),e&&e(n)}}function Rt(t){for(const e in u)if(e===t)for(const n of u[e]||[])mt(n)}function Ut(t){const e=H().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function it(t){return document.getElementById(t)}function Dt(t){const e=it(t.containerId);return e&&e.classList.contains(X)}function st(t){var e;const n=lt(t.content)?C(t.content.props):null;return n??C((e=t.data)!=null?e:{})}function kt(t){return t?_.items.filter(e=>e.containerId===t).length>0:_.items.length>0}function xt(){if(_.items.length>0){const t=_.items.shift();G(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const u=F({}),_=F({items:[]});function H(){const t=C(u);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function Ht(t){return H().find(e=>e.toastId===t)}function G(t,e={}){if(Dt(e)){const n=it(e.containerId);n&&n.addEventListener("animationend",nt.bind(null,t,e),!1)}else nt(t,e)}function nt(t,e={}){const n=it(e.containerId);n&&n.removeEventListener("animationend",nt.bind(null,t,e),!1);const o=u[e.containerId]||[],a=o.length>0;if(!a&&!Pt(e.position)){const i=Bt(e),d=Ct(se,e);d.mount(i),wt(d,i.id)}a&&(e.position=o[0].position),rt(()=>{e.updateId?A.update(e):A.add(t,e)})}const A={add(t,e){const{containerId:n=""}=e;n&&(u[n]=u[n]||[],u[n].find(o=>o.toastId===e.toastId)||setTimeout(()=>{var o,a;e.newestOnTop?(o=u[n])==null||o.unshift(e):(a=u[n])==null||a.push(e),e.onOpen&&e.onOpen(st(e))},e.delay||0))},remove(t){if(t){const e=Ut(t);if(e){const n=u[e];let o=n.find(a=>a.toastId===t);u[e]=n.filter(a=>a.toastId!==t),!u[e].length&&!kt(e)&&et(e,!1),xt(),rt(()=>{o!=null&&o.onClose&&(o.onClose(st(o)),o=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){u[e]=u[e]||[];const n=u[e].find(o=>o.toastId===t.toastId);n&&setTimeout(()=>{for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o)){const a=t[o];n[o]=a}},t.delay||0)}},clear(t,e=!0){t?et(t,e):Ft(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,o=document.getElementById(n);o&&(o.removeEventListener("animationend",A.dismissCallback,!1),setTimeout(()=>{A.remove(n)}))},dismiss(t){if(t){const e=H();for(const n of e)if(n.toastId===t){mt(n,o=>{o.addEventListener("animationend",A.dismissCallback,!1)});break}}}},yt=F({}),Q=F({});function vt(){return Math.random().toString(36).substring(2,9)}function jt(t){return typeof t=="number"&&!isNaN(t)}function ot(t){return typeof t=="string"}function B(t){return typeof t=="function"}function Y(...t){return b(...t)}function V(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function zt(t={}){yt["".concat(s.CSS_NAMESPACE,"-default-options")]=t}function Gt(){return yt["".concat(s.CSS_NAMESPACE,"-default-options")]||pt}function Vt(){return document.documentElement.classList.contains("dark")?"dark":"light"}var K=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(K||{});const gt={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:x.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:w.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:m.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},Kt={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:m.DEFAULT},theme:{type:String,required:!1,default:w.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},Qt=W({name:"ProgressBar",props:Kt,setup(t,{attrs:e}){const n=M(),o=f(()=>t.hide?"true":"false"),a=f(()=>({...e.style||{},animationDuration:"".concat(t.autoClose===!0?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"})),i=f(()=>["".concat(s.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(s.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(s.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(s.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(s.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(s.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),d=f(()=>"".concat(i.value," ").concat((e==null?void 0:e.class)||"")),g=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},l=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),g())},E=f(()=>t.controlledProgress?null:l),y=f(()=>t.controlledProgress?l:null);return z(()=>{n.value&&(g(),n.value.onanimationend=E.value,n.value.ontransitionend=y.value)}),()=>c("div",{ref:n,role:"progressbar","aria-hidden":o.value,"aria-label":"notification timer",class:d.value,style:a.value},null)}}),Wt=W({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:w.AUTO},type:{type:String,required:!1,default:w.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>c("button",{class:"".concat(s.CSS_NAMESPACE,"__close-button ").concat(s.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[c("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[c("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Z=({theme:t,type:e,path:n,...o})=>c("svg",b({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-".concat(e,")")},o),[c("path",{d:n},null)]);function Xt(t){return c(Z,b(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function Yt(t){return c(Z,b(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function Zt(t){return c(Z,b(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function Jt(t){return c(Z,b(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function $t(){return c("div",{class:"".concat(s.CSS_NAMESPACE,"__spinner")},null)}const at={info:Yt,warning:Xt,success:Zt,error:Jt,spinner:$t},te=t=>t in at;function ee({theme:t,type:e,isLoading:n,icon:o}){let a;const i={theme:t,type:e};return n?a=at.spinner():o===!1?a=void 0:V(o)?a=C(o):B(o)?a=o(i):lt(o)?a=_t(o,i):ot(o)||jt(o)?a=o:te(e)&&(a=at[e](i)),a}const ne=()=>{};function oe(t,e,n=s.COLLAPSE_DURATION){const{scrollHeight:o,style:a}=t,i=n;requestAnimationFrame(()=>{a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(i,"ms"),requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(e,i)})})}function ae(t){const e=M(!1),n=M(!1),o=M(!1),a=M(K.Enter),i=F({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||s.COLLAPSE_DURATION}),d=i.done||ne,g=f(()=>i.appendPosition?"".concat(i.enter,"--").concat(i.position):i.enter),l=f(()=>i.appendPosition?"".concat(i.exit,"--").concat(i.position):i.exit),E=f(()=>t.pauseOnHover?{onMouseenter:I,onMouseleave:N}:{});function y(){const v=g.value.split(" ");p().addEventListener($.ENTRANCE_ANIMATION_END,N,{once:!0});const L=q=>{const U=p();q.target===U&&(U.dispatchEvent(new Event($.ENTRANCE_ANIMATION_END)),U.removeEventListener("animationend",L),U.removeEventListener("animationcancel",L),a.value===K.Enter&&q.type!=="animationcancel"&&U.classList.remove(...v))},O=()=>{const q=p();q.classList.add(...v),q.addEventListener("animationend",L),q.addEventListener("animationcancel",L)};t.pauseOnFocusLoss&&S(),O()}function T(){if(!p())return;const v=()=>{const O=p();O.removeEventListener("animationend",v),i.collapse?oe(O,d,i.collapseDuration):d()},L=()=>{const O=p();a.value=K.Exit,O&&(O.className+=" ".concat(l.value),O.addEventListener("animationend",v))};n.value||(o.value?v():setTimeout(L))}function p(){return t.toastRef.value}function S(){document.hasFocus()||I(),window.addEventListener("focus",N),window.addEventListener("blur",I)}function h(){window.removeEventListener("focus",N),window.removeEventListener("blur",I)}function N(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function I(){e.value=!1}function R(v){v&&(v.stopPropagation(),v.preventDefault()),n.value=!1}return z(T),z(()=>{const v=H();n.value=v.findIndex(L=>L.toastId===i.toastId)>-1}),z(()=>{t.isLoading!==void 0&&(t.loading.value?I():N())}),ct(y),ut(()=>{t.pauseOnFocusLoss&&h()}),{isIn:n,isRunning:e,hideToast:R,eventHandlers:E}}const ie=W({name:"ToastItem",inheritAttrs:!1,props:gt,setup(t){const e=M(),n=f(()=>!!t.isLoading),o=f(()=>t.progress!==void 0&&t.progress!==null),a=f(()=>ee(t)),i=f(()=>["".concat(s.CSS_NAMESPACE,"__toast"),"".concat(s.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(s.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(s.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:d,isIn:g,hideToast:l,eventHandlers:E}=ae({toastRef:e,loading:n,done:()=>{A.remove(t.toastId)},...ft(t.transition),...t});return()=>c("div",b({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:y=>{t.closeOnClick&&l(),t.onClick&&t.onClick(y)}},E.value),[c("div",{role:t.role,"data-testid":"toast-body",class:"".concat(s.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[a.value!=null&&c("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(s.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(s.CSS_NAMESPACE,"--animate-icon ").concat(s.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[V(a.value)?j(C(a.value),{theme:t.theme,type:t.type}):B(a.value)?a.value({theme:t.theme,type:t.type}):a.value]),c("div",{"data-testid":"toast-content"},[V(t.content)?j(C(t.content),{toastProps:C(t),closeToast:l,data:t.data}):B(t.content)?t.content({toastProps:C(t),closeToast:l,data:t.data}):t.dangerouslyHTMLString?j("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&c(Wt,{theme:t.theme,closeToast:y=>{y.stopPropagation(),y.preventDefault(),l()}},null),V(t.closeButton)?j(C(t.closeButton),{closeToast:l,type:t.type,theme:t.theme}):B(t.closeButton)?t.closeButton({closeToast:l,type:t.type,theme:t.theme}):null,c(Qt,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:g.value,type:t.type,hide:t.hideProgressBar,isRunning:d.value,autoClose:t.autoClose,controlledProgress:o.value,progress:t.progress,closeToast:t.isLoading?void 0:l},null)])}});let D=0;function Et(){typeof window>"u"||(D&&window.cancelAnimationFrame(D),D=window.requestAnimationFrame(Et),Q.lastUrl!==window.location.href&&(Q.lastUrl=window.location.href,A.clear()))}const se=W({name:"ToastifyContainer",inheritAttrs:!1,props:gt,setup(t){const e=f(()=>t.containerId),n=f(()=>u[e.value]||[]),o=f(()=>n.value.filter(a=>a.position===t.position));return ct(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(Et)}),ut(()=>{typeof window<"u"&&D&&(window.cancelAnimationFrame(D),Q.lastUrl="")}),()=>c(At,null,[o.value.map(a=>{const{toastId:i=""}=a;return c(ie,b({key:i},a),null)})])}});let J=!1;function St(){const t=[];return H().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(X)&&t.push(e)}),t}function re(t){const e=St().length,n=t??0;return n>0&&e+_.items.length>=n}function le(t){re(t.limit)&&!t.updateId&&_.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function P(t,e,n={}){if(J)return;n=Y(Gt(),{type:e},C(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=vt()),n={...n,content:t,containerId:n.containerId||String(n.position)};const o=Number(n==null?void 0:n.progress);return o<0&&(n.progress=0),o>1&&(n.progress=1),n.theme==="auto"&&(n.theme=Vt()),le(n),Q.lastUrl=window.location.href,n.multiple?_.items.length?n.updateId&&G(t,n):G(t,n):(J=!0,r.clearAll(void 0,!1),setTimeout(()=>{G(t,n)},0),setTimeout(()=>{J=!1},390)),n.toastId}const r=(t,e)=>P(t,m.DEFAULT,e);r.info=(t,e)=>P(t,m.DEFAULT,{...e,type:m.INFO});r.error=(t,e)=>P(t,m.DEFAULT,{...e,type:m.ERROR});r.warning=(t,e)=>P(t,m.DEFAULT,{...e,type:m.WARNING});r.warn=r.warning;r.success=(t,e)=>P(t,m.DEFAULT,{...e,type:m.SUCCESS});r.loading=(t,e)=>P(t,m.DEFAULT,Y(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));r.dark=(t,e)=>P(t,m.DEFAULT,Y(e,{theme:w.DARK}));r.remove=t=>{t?A.dismiss(t):A.clear()};r.clearAll=(t,e)=>{A.clear(t,e)};r.isActive=t=>{let e=!1;return e=St().findIndex(n=>n.toastId===t)>-1,e};r.update=(t,e={})=>{setTimeout(()=>{const n=Ht(t);if(n){const o=C(n),{content:a}=o,i={...o,...e,toastId:e.toastId||t,updateId:vt()},d=i.render||a;delete i.render,P(d,i.type,i)}},0)};r.done=t=>{r.update(t,{isLoading:!1,progress:1})};r.promise=ce;function ce(t,{pending:e,error:n,success:o},a){var i,d,g;let l;const E={...a||{},autoClose:!1};e&&(l=ot(e)?r.loading(e,E):r.loading(e.render,{...E,...e}));const y={autoClose:(i=a==null?void 0:a.autoClose)!=null?i:!0,closeOnClick:(d=a==null?void 0:a.closeOnClick)!=null?d:!0,closeButton:(g=a==null?void 0:a.autoClose)!=null?g:null,isLoading:void 0,draggable:null,delay:100},T=(S,h,N)=>{if(h==null){r.remove(l);return}const I={type:S,...y,...a,data:N},R=ot(h)?{render:h}:h;return l?r.update(l,{...I,...R,isLoading:!1}):r(R.render,{...I,...R,isLoading:!1}),N},p=B(t)?t():t;return p.then(S=>{T("success",o,S)}).catch(S=>{T("error",n,S)}),p}r.POSITION=x;r.THEME=w;r.TYPE=m;r.TRANSITIONS=Tt;const ue={install(t,e={}){de(e)}};typeof window<"u"&&(window.Vue3Toastify=ue);function de(t={}){const e=Y(pt,t);zt(e)}export{r as l};
