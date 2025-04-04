import{a as K,f as M,O as A,o as d,H as E,g as V,t as R,i as J,b as C,u as D,d as I,T as B,m as Q,P as $,N as h}from"./hidden-1ba5fb48.js";import{D as O,r as P,I as N,m as c,V as W,q as j,G as X,S as Y,F as Z,R as U,W as L}from"./app-63c352f8.js";import{t as _}from"./micro-task-89dcd6af.js";let ee=O({props:{onFocus:{type:Function,required:!0}},setup(t){let o=P(!0);return()=>o.value?N(M,{as:"button",type:"button",features:K.Focusable,onFocus(v){v.preventDefault();let i,r=50;function l(){var u;if(r--<=0){i&&cancelAnimationFrame(i);return}if((u=t.onFocus)!=null&&u.call(t)){o.value=!1,cancelAnimationFrame(i);return}i=requestAnimationFrame(l)}i=requestAnimationFrame(l)}}):null}});var te=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(te||{}),ae=(t=>(t[t.Less=-1]="Less",t[t.Equal=0]="Equal",t[t.Greater=1]="Greater",t))(ae||{});let z=Symbol("TabsContext");function k(t){let o=L(z,null);if(o===null){let v=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,k),v}return o}let q=Symbol("TabsSSRContext"),ue=O({name:"TabGroup",emits:{change:t=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:o,attrs:v,emit:i}){var r;let l=P((r=t.selectedIndex)!=null?r:t.defaultIndex),u=P([]),m=P([]),x=c(()=>t.selectedIndex!==null),f=c(()=>x.value?t.selectedIndex:l.value);function p(a){var e;let n=A(s.tabs.value,d),b=A(s.panels.value,d),S=n.filter(g=>{var y;return!((y=d(g))!=null&&y.hasAttribute("disabled"))});if(a<0||a>n.length-1){let g=D(l.value===null?0:Math.sign(a-l.value),{[-1]:()=>1,0:()=>D(Math.sign(a),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),y=D(g,{0:()=>n.indexOf(S[0]),1:()=>n.indexOf(S[S.length-1])});y!==-1&&(l.value=y),s.tabs.value=n,s.panels.value=b}else{let g=n.slice(0,a),y=[...n.slice(a),...g].find(H=>S.includes(H));if(!y)return;let G=(e=n.indexOf(y))!=null?e:s.selectedIndex.value;G===-1&&(G=s.selectedIndex.value),l.value=G,s.tabs.value=n,s.panels.value=b}}let s={selectedIndex:c(()=>{var a,e;return(e=(a=l.value)!=null?a:t.defaultIndex)!=null?e:null}),orientation:c(()=>t.vertical?"vertical":"horizontal"),activation:c(()=>t.manual?"manual":"auto"),tabs:u,panels:m,setSelectedIndex(a){f.value!==a&&i("change",a),x.value||p(a)},registerTab(a){var e;if(u.value.includes(a))return;let n=u.value[l.value];u.value.push(a),u.value=A(u.value,d);let b=(e=u.value.indexOf(n))!=null?e:l.value;b!==-1&&(l.value=b)},unregisterTab(a){let e=u.value.indexOf(a);e!==-1&&u.value.splice(e,1)},registerPanel(a){m.value.includes(a)||(m.value.push(a),m.value=A(m.value,d))},unregisterPanel(a){let e=m.value.indexOf(a);e!==-1&&m.value.splice(e,1)}};W(z,s);let T=P({tabs:[],panels:[]}),w=P(!1);j(()=>{w.value=!0}),W(q,c(()=>w.value?null:T.value));let F=c(()=>t.selectedIndex);return j(()=>{X([F],()=>{var a;return p((a=t.selectedIndex)!=null?a:t.defaultIndex)},{immediate:!0})}),Y(()=>{if(!x.value||f.value==null||s.tabs.value.length<=0)return;let a=A(s.tabs.value,d);a.some((e,n)=>d(s.tabs.value[n])!==d(e))&&s.setSelectedIndex(a.findIndex(e=>d(e)===d(s.tabs.value[f.value])))}),()=>{let a={selectedIndex:l.value};return N(Z,[u.value.length<=0&&N(ee,{onFocus:()=>{for(let e of u.value){let n=d(e);if((n==null?void 0:n.tabIndex)===0)return n.focus(),!0}return!1}}),E({theirProps:{...v,...V(t,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:a,slots:o,attrs:v,name:"TabGroup"})])}}}),se=O({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:o,slots:v}){let i=k("TabList");return()=>{let r={selectedIndex:i.selectedIndex.value},l={role:"tablist","aria-orientation":i.orientation.value};return E({ourProps:l,theirProps:t,slot:r,attrs:o,slots:v,name:"TabList"})}}}),oe=O({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${R()}`}},setup(t,{attrs:o,slots:v,expose:i}){let r=k("Tab"),l=P(null);i({el:l,$el:l}),j(()=>r.registerTab(l)),U(()=>r.unregisterTab(l));let u=L(q),m=c(()=>{if(u.value){let e=u.value.tabs.indexOf(t.id);return e===-1?u.value.tabs.push(t.id)-1:e}return-1}),x=c(()=>{let e=r.tabs.value.indexOf(l);return e===-1?m.value:e}),f=c(()=>x.value===r.selectedIndex.value);function p(e){var n;let b=e();if(b===B.Success&&r.activation.value==="auto"){let S=(n=Q(l))==null?void 0:n.activeElement,g=r.tabs.value.findIndex(y=>d(y)===S);g!==-1&&r.setSelectedIndex(g)}return b}function s(e){let n=r.tabs.value.map(b=>d(b)).filter(Boolean);if(e.key===I.Space||e.key===I.Enter){e.preventDefault(),e.stopPropagation(),r.setSelectedIndex(x.value);return}switch(e.key){case I.Home:case I.PageUp:return e.preventDefault(),e.stopPropagation(),p(()=>$(n,h.First));case I.End:case I.PageDown:return e.preventDefault(),e.stopPropagation(),p(()=>$(n,h.Last))}if(p(()=>D(r.orientation.value,{vertical(){return e.key===I.ArrowUp?$(n,h.Previous|h.WrapAround):e.key===I.ArrowDown?$(n,h.Next|h.WrapAround):B.Error},horizontal(){return e.key===I.ArrowLeft?$(n,h.Previous|h.WrapAround):e.key===I.ArrowRight?$(n,h.Next|h.WrapAround):B.Error}}))===B.Success)return e.preventDefault()}let T=P(!1);function w(){var e;T.value||(T.value=!0,!t.disabled&&((e=d(l))==null||e.focus({preventScroll:!0}),r.setSelectedIndex(x.value),_(()=>{T.value=!1})))}function F(e){e.preventDefault()}let a=J(c(()=>({as:t.as,type:o.type})),l);return()=>{var e;let n={selected:f.value},{id:b,...S}=t,g={ref:l,onKeydown:s,onMousedown:F,onClick:w,id:b,role:"tab",type:a.value,"aria-controls":(e=d(r.panels.value[x.value]))==null?void 0:e.id,"aria-selected":f.value,tabIndex:f.value?0:-1,disabled:t.disabled?!0:void 0};return E({ourProps:g,theirProps:S,slot:n,attrs:o,slots:v,name:"Tab"})}}}),ie=O({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:o,attrs:v}){let i=k("TabPanels");return()=>{let r={selectedIndex:i.selectedIndex.value};return E({theirProps:t,ourProps:{},slot:r,attrs:v,slots:o,name:"TabPanels"})}}}),de=O({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${R()}`},tabIndex:{type:Number,default:0}},setup(t,{attrs:o,slots:v,expose:i}){let r=k("TabPanel"),l=P(null);i({el:l,$el:l}),j(()=>r.registerPanel(l)),U(()=>r.unregisterPanel(l));let u=L(q),m=c(()=>{if(u.value){let p=u.value.panels.indexOf(t.id);return p===-1?u.value.panels.push(t.id)-1:p}return-1}),x=c(()=>{let p=r.panels.value.indexOf(l);return p===-1?m.value:p}),f=c(()=>x.value===r.selectedIndex.value);return()=>{var p;let s={selected:f.value},{id:T,tabIndex:w,...F}=t,a={ref:l,id:T,role:"tabpanel","aria-labelledby":(p=d(r.tabs.value[x.value]))==null?void 0:p.id,tabIndex:f.value?w:-1};return!f.value&&t.unmount&&!t.static?N(M,{as:"span",...a}):E({ourProps:a,theirProps:F,slot:s,attrs:o,slots:v,features:C.Static|C.RenderStrategy,visible:f.value,name:"TabPanel"})}}});export{se as I,ie as S,de as g,ue as x,oe as y};
