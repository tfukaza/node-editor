const ot=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};ot();function T(){}function tt(t){return t()}function W(){return Object.create(null)}function M(t){t.forEach(tt)}function rt(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function at(t){return Object.keys(t).length===0}function r(t,e){t.appendChild(e)}function st(t,e,n){t.insertBefore(e,n||null)}function et(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function lt(t){return document.createTextNode(t)}function b(){return lt(" ")}function S(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function s(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ct(t){return Array.from(t.childNodes)}let N;function E(t){N=t}function dt(){if(!N)throw new Error("Function called outside component initialization");return N}function ut(t){dt().$$.on_mount.push(t)}const I=[],X=[],O=[],Z=[],pt=Promise.resolve();let B=!1;function wt(){B||(B=!0,pt.then(nt))}function H(t){O.push(t)}const F=new Set;let L=0;function nt(){const t=N;do{for(;L<I.length;){const e=I[L];L++,E(e),ft(e.$$)}for(E(null),I.length=0,L=0;X.length;)X.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];F.has(n)||(F.add(n),n())}O.length=0}while(I.length);for(;Z.length;)Z.pop()();B=!1,F.clear(),E(t)}function ft(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const ht=new Set;function bt(t,e){t&&t.i&&(ht.delete(t),t.i(e))}function mt(t,e,n,i){const{fragment:o,on_mount:a,on_destroy:d,after_update:f}=t.$$;o&&o.m(e,n),i||H(()=>{const u=a.map(tt).filter(rt);d?d.push(...u):M(u),t.$$.on_mount=[]}),f.forEach(H)}function gt(t,e){const n=t.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(I.push(t),wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xt(t,e,n,i,o,a,d,f=[-1]){const u=N;E(t);const c=t.$$={fragment:null,ctx:null,props:a,update:T,not_equal:o,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:W(),dirty:f,skip_bound:!1,root:e.target||u.$$.root};d&&d(c.root);let w=!1;if(c.ctx=n?n(t,e.props||{},(p,h,...x)=>{const g=x.length?x[0]:h;return c.ctx&&o(c.ctx[p],c.ctx[p]=g)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](g),w&&yt(t,p)),h}):[],c.update(),w=!0,M(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const p=ct(e.target);c.fragment&&c.fragment.l(p),p.forEach(et)}else c.fragment&&c.fragment.c();e.intro&&bt(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),nt()}E(u)}class kt{$destroy(){gt(this,1),this.$destroy=T}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const vt={functions:{visualize:{inputs:["Video ID","Show Controls"],outputs:[],functionInit:t=>{t.yt=t.dom.querySelector(".yt")},functionUpdate:(t,e,n)=>{e||(e="m4-HM_sCvtQ"),t.yt.src="https://www.youtube.com/embed/"+e+"?autoplay=1&controls="+(n?"1":"0")}}},elements:[{type:"input-text",name:"Video ID"},{type:"input-bool",name:"Show Controls"},{type:"custom",html:`
        <iframe class="yt rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/m4-HM_sCvtQ?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `}]},_t={functions:{output:{inputs:["Input 1","Input 2","Operation"],outputs:["Result"],functionUpdate:(t,e,n,i)=>{switch(i){case"+":return e+n;case"-":return e-n;case"*":return e*n;case"/":return e/n;default:return 0}}}},elements:[{type:"output-text",name:"Result"},[{type:"ui-dropdown",name:"Operation",values:[{value:"+",label:"Add"},{value:"-",label:"Subtract"},{value:"*",label:"Multiply"},{value:"/",label:"Divide"}]}],[{type:"input-text",name:"Input 1"}],[{type:"input-text",name:"Input 2"}]]},zt={functions:{output:{inputs:["Input"],outputs:[],functionInit:(t,e)=>{t.display=t.dom.querySelector(".display")},functionUpdate:(t,e)=>{t.display.innerText=e}}},elements:[{type:"input-text",name:"Input"},{type:"custom",name:"Display",html:`
      <div class="bg-red rounded-lg">
        <span class="display text-3xl"></span>
      </div>
      `}]};function $t(t){let e,n,i,o,a,d,f,u,c,w,p,h,x,g,k,Q,U,v,V,j,y,_,Y,m,D,z,K,P,$,G,A,R,J;return{c(){e=l("main"),n=l("link"),o=b(),a=l("navbar"),d=l("div"),f=l("div"),u=l("label"),u.textContent="Add Node",c=b(),w=l("ul"),p=l("li"),h=l("button"),h.textContent="Math",x=b(),g=l("li"),k=l("button"),k.textContent="YouTube",Q=b(),U=l("li"),v=l("button"),v.textContent="Print",V=b(),j=l("div"),y=l("div"),_=l("label"),_.textContent="Theme",Y=b(),m=l("ul"),D=l("li"),z=l("button"),z.textContent="Standard",K=b(),P=l("li"),$=l("button"),$.textContent="Retro",G=b(),A=l("div"),s(n,"href",i="lib/theme/"+t[1]),s(n,"rel","stylesheet"),s(n,"type","text/css"),s(u,"tabindex","0"),s(u,"class","btn btn-sm"),s(h,"class","btn-sm"),s(k,"class","btn-sm"),s(v,"class","btn-sm"),s(w,"tabindex","0"),s(w,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"),s(f,"class","dropdown"),s(d,"class","flex-1"),s(_,"tabindex","0"),s(_,"class","btn btn-sm btn-outline"),s(z,"class","btn-sm"),s($,"class","btn-sm"),s(m,"tabindex","0"),s(m,"class","dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"),s(y,"class","dropdown dropdown-end"),s(j,"class","flex-none"),s(a,"class","navbar px-5 fixed z-20 bg-white shadow-sm"),s(A,"class","w-full h-screen bg-white overflow-hidden relative select-none"),s(A,"id","node-editor")},m(C,q){st(C,e,q),r(e,n),r(e,o),r(e,a),r(a,d),r(d,f),r(f,u),r(f,c),r(f,w),r(w,p),r(p,h),r(w,x),r(w,g),r(g,k),r(w,Q),r(w,U),r(U,v),r(a,V),r(a,j),r(j,y),r(y,_),r(y,Y),r(y,m),r(m,D),r(D,z),r(m,K),r(m,P),r(P,$),r(e,G),r(e,A),R||(J=[S(h,"click",t[3]),S(k,"click",t[4]),S(v,"click",t[5]),S(z,"click",t[6]),S($,"click",t[7])],R=!0)},p(C,[q]){q&2&&i!==(i="lib/theme/"+C[1])&&s(n,"href",i)},i:T,o:T,d(C){C&&et(e),R=!1,M(J)}}}function Ct(t,e,n){let i=null;ut(async()=>{n(0,i=new SnapLine("node-editor"))});let o="standard.css";function a(p){n(1,o=p)}return[i,o,a,()=>i.addNode(_t,0,0),()=>i.addNode(vt,0,0),()=>i.addNode(zt,0,0),()=>a("standard.css"),()=>a("retro.css")]}class St extends kt{constructor(e){super(),xt(this,e,Ct,$t,it,{})}}new St({target:document.getElementById("app")});
