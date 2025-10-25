const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/entries/pages_index.CJxNuqf-.js","assets/static/app_generated_index-6937cd5a.DO7MySW1.css"])))=>i.map(i=>d[i]);
function de(e){return Array.from(new Set(e))}
function T(e,t){const n=He();return n[e]=n[e]||t}
function He(){const e="_vike";return globalThis[e]=globalThis[e]||{}}
const m=new Proxy({},{get:(e,t)=>n=>t==="code"?`\`${n}\``:t==="string"?`'${n}'`:n}),ge="0.4.229";
let I;I??(I=pe());
function pe(){return T("utils/assertSingleInstance.ts",{instances:[],alreadyLogged:new Set})}
function k(){return I??(I=pe()),I}
const Be="Client runtime of both Server Routing and Client Routing loaded https://vike.dev/client-runtimes-conflict",he="Client runtime loaded twice https://vike.dev/client-runtime-duplicated";
function me(){const e=k();{const t=de(e.instances);j(t.length<=1,`vike@${m.bold(t[0])} and vike@${m.bold(t[1])} loaded which is highly discouraged, see ${m.underline("https://vike.dev/warning/version-mismatch")}`,{onlyOnce:!0,showStackTrace:!1})}e.checkSingleInstance&&e.instances.length>1&&j(!1,he,{onlyOnce:!0,showStackTrace:!0})}
function Ge(){const e=k();j(t.isClientRouting!==!0,Be,{onlyOnce:!0,showStackTrace:!0}),j(e.isClientRouting===void 0,he,{onlyOnce:!0,showStackTrace:!0}),e.isClientRouting=!1,e.checkSingleInstance=!0,me()}
function Ne(){k().instances.push(ge),me()}
function j(e,t,{onlyOnce:n,showStackTrace:r}){const o=k();if(e)return;const i=`[Vike][Warning] ${t}`;{const{alreadyLogged:l}=o,a=i;if(l.has(a))return;l.add(a)}console.warn(r?new Error(i):i)}
function Je(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}
function L(e,t){const n=new Error(e);return Je()&&(n.stack=Ye(n.stack,t)),n}
function Ye(e,t){if(!e)return e;const n=Me(e);let r=0;return n.filter(i=>i.includes(" (internal/")||i.includes(" (node:internal")?!1:r<t&&Ke(i)?(r++,!1):!0).join("\n")}
function Ke(e){return e.startsWith("    at ")}
function Me(e){return e.split(/\r?\n/)}
function S(e){return typeof e=="object"&&e!==null}
const E=T("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet});
Ne();
const qe="[vike]",Xe=`[vike@${ge}]`,Ze="Bug",A=2;
function s(e,t){var l;if(e)return;const n=(()=>{if(!t)return null;const a=typeof t=="string"?t:JSON.stringify(t);return m.dim(`Debug info (for Vike maintainers; you can ignore this): ${a}`)})();let o=[`You stumbled upon a Vike bug. Go to ${m.underline("https://github.com/vikejs/vike/issues/new?template=bug.yml")} and copy-paste this error. A maintainer will fix the bug (usually within 24 hours).`,n].filter(Boolean).join(" ");o=z(o),o=W(o,Ze),o=D(o,!0);const i=L(o,A);throw(l=E.onBeforeLog)==null||l.call(E),i}
function y(e,t,{showStackTrace:n,exitOnError:r}={}){var i;if(e)return;n=n||E.alwaysShowStackTrace,t=z(t),t=W(t,"Wrong Usage"),t=D(t);const o=L(t,A);if(n&&E.showStackTraceList.add(o),(i=E.onBeforeLog)==null||i.call(E),r)console.error(n?o:t),process.exit(1);else throw o}
function Qe(e){return e=z(e),e=W(e,"Error"),e=D(e),L(e,A)}
function $(e,t,{onlyOnce:n,showStackTrace:r}){var o;if(!e){if(r=r||E.alwaysShowStackTrace,t=z(t),t=W(t,"Warning"),t=D(t),n){const{alreadyLogged:i}=E,l=n===!0?t:n;if(i.has(l))return;i.add(l)}if((o=E.onBeforeLog)==null||o.call(E),r){const i=L(t,A);E.showStackTraceList.add(i),E.logger(i,"warn")}else E.logger(t,"warn")}}
function W(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=m.bold(m[r](n)),`${n}${e}`}
function z(e){return e.startsWith("[")?e:` ${e}`}
function D(e,t=!1){return`${t?Xe:qe}${e}`}
const Z=T("utils/assertRouterType.ts",{});function et(){tt(Z.isClientRouting!==!0),Z.isClientRouting=!1}
function tt(e){y(Y(),`${m.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),$(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}
function nt(){s(Y())}
function rt(){nt()}
function V(e){return e instanceof Function||typeof e=="function"}
function x(e){return Array.isArray(e)}
function ot(e){return x(e)&&e.every(t=>typeof t=="string")}
function it(e){return S(e)&&Object.values(e).every(t=>typeof t=="string")}
function b(e,t,n){if(!S(e))return!1;if(!(t in e))return n==="undefined";if(n===void 0)return!0;const r=e[t];return n==="undefined"?r===void 0:n==="array"?x(r):n==="object"?S(r):n==="string[]"?ot(r):n==="string{}"?it(r):n==="function"?V(r):x(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}
function w(e,t,n){t&&(n||s(!("isPageContext"in t)),Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)))}
function ye(e,t,n){return typeof e=="string"?Q(e.split(""),t,n).join(""):Q(e,t,n)}
function Q(e,t,n){const r=[];let o=t;s(o>=0&&o<=e.length);let i=e.length+n;for(s(i>=0&&i<=e.length);!(o===i||(o===e.length&&(o=0),o===i));){const l=e[o];s(l!==void 0),r.push(l),o++}return r}
function st(e,t){s(mt(e),e),s(t.startsWith("/"));const{hashString:n,withoutHash:r}=at(e);s(n===null||n.startsWith("#"));let o=n===null?"":be(n.slice(1)),{searchString:i,withoutSearch:l}=ee(r);s(i===null||i.startsWith("?"));let a="";if(i!==null)a=i;else if(e.startsWith("#")){const _=Ee();a=_&&ee(_).searchString||""}const c={},u={};Array.from(new URLSearchParams(a)).forEach(([_,X])=>{c[_]=X,u[_]=[...u.hasOwnProperty(_)?u[_]:[],X]});let{protocol:f,origin:h,pathnameAbsoluteWithBase:d}=ct(l,t);const g=l.slice((h||"").length);ht(e,h,g,i,n);let{pathname:p,isBaseMissing:C}=gt(d,t);const v=ve(h,p,i,n),R=h?h.slice(f.length):null,{hostname:U,port:Ue}=ut(R,e);return p=lt(p),s(p.startsWith("/")),{href:v,protocol:f,hostname:U,port:Ue,origin:h,pathname:p,pathnameOriginal:g,isBaseMissing:C,search:c,searchAll:u,searchOriginal:i,hash:o,hashOriginal:n}}
function at(e){const[t,...n]=e.split("#");return{hashString:["",...n].join("#")||null,withoutHash:t}}
function ee(e){const[t,...n]=e.split("?");return{searchString:["",...n].join("?")||null,withoutSearch:t}}
function be(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}
function lt(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>be(t).split("/").join("%2F")).join("/"),e}
function ct(e,t){s(!e.includes("?")&&!e.includes("#"));{const{protocol:n,origin:r,pathname:o}=te(e);if(r)return{protocol:n,origin:r,pathnameAbsoluteWithBase:o};s(o===e)}if(e.startsWith("/"))return{protocol:null,origin:null,pathnameAbsoluteWithBase:e};{const n=Ee();let r;return n?r=te(n.split("?")[0].split("#")[0]).pathname:r=t,{protocol:null,origin:null,pathnameAbsoluteWithBase:dt(e,r)}}}
function Ee(){var t;return typeof window<"u"?(t=window==null?void 0:window.document)==null?void 0:t.baseURI:void 0}
function te(e){if(Se(e)){const{protocol:t,uriWithoutProtocol:n}=Ce(e);let r,n1=null,o=null;if(t.startsWith("file:")){n1=""}else{const i=n.indexOf("/");i===-1?(n1=n,o=""):(n1=n.slice(0,i),o=n.slice(i))}r=t;return{protocol:r,origin:n1,pathname:o}}return{protocol:null,origin:null,pathname:e}}
function Se(e){return /^[a-zA-Z][a-zA-Z0-9+\-.]*:/.test(e)}
function Ce(e){const t=e.indexOf(":");return{protocol:e.slice(0,t+1),uriWithoutProtocol:e.slice(t+1)}}  
