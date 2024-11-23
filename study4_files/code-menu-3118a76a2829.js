"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["code-menu"],{20759:(e,t,o)=>{o(23769)},18036:(e,t,o)=>{o.d(t,{$3:()=>a,HV:()=>i,Vb:()=>r});var n=o(51528);function r(e,t,o){let r={hydroEventPayload:e,hydroEventHmac:t,visitorPayload:"",visitorHmac:"",hydroClientContext:o},a=document.querySelector("meta[name=visitor-payload]");a instanceof HTMLMetaElement&&(r.visitorPayload=a.content);let i=document.querySelector("meta[name=visitor-hmac]")||"";i instanceof HTMLMetaElement&&(r.visitorHmac=i.content),(0,n.i)(r,!0)}function a(e){r(e.getAttribute("data-hydro-view")||"",e.getAttribute("data-hydro-view-hmac")||"",e.getAttribute("data-hydro-client-context")||"")}function i(e){r(e.getAttribute("data-hydro-click-payload")||"",e.getAttribute("data-hydro-click-hmac")||"",e.getAttribute("data-hydro-client-context")||"")}},21424:(e,t,o)=>{function n(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}o.d(t,{u:()=>n}),(0,o(21403).lB)(".js-remove-unless-platform",function(e){!function(e){let t=(e.getAttribute("data-platforms")||"").split(","),o=n();return!!(o&&t.includes(o))}(e)&&e.remove()})},23769:(e,t,o)=>{o.d(t,{h:()=>GetRepoElement});var n=o(39595),r=o(21424),a=o(74572),i=o(18036);function s(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i}let{getItem:l,setItem:d}=(0,a.A)("localStorage"),c="code-button-default-tab";let GetRepoElement=class GetRepoElement extends HTMLElement{showDownloadMessage(){let e=this.findPlatform();e&&this.showPlatform(e)}showCodespaces(){let e=this.findPlatform();e&&(this.showPlatform(e),this.loadAndUpdateContent())}showCodespaceSelector(){let e=this.findPlatform();e&&(this.showPlatform(e),this.codespaceSelector&&(this.codespaceSelector.hidden=!1))}showOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&(this.openOrCreateInCodespace.hidden=!1)}removeOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&this.openOrCreateInCodespace.remove()}refreshList(){this.shouldRefreshList&&(this.shouldRefreshList=!1,this.loadAndUpdateContent())}trackDelete(){this.shouldRefreshList=!0}hideSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!0),this.codespaceList&&(this.codespaceList.hidden=!1)}showSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!1),this.codespaceList&&(this.codespaceList.hidden=!0)}onDetailsToggle(e){for(let e of(this.modal.hidden=!1,this.platforms))e.hidden=!0;let t=e.target;if(t&&t.open){!this.hasForcedCodespaceTabDefault&&this.forceCodespaceTabDefault?(this.hasForcedCodespaceTabDefault=!0,this.selectDefaultTab(!0)):this.selectDefaultTab(!1);let e=this.copilotTip;e&&(0,i.$3)(e)}}onDetailsKeydown(e){if("Escape"===e.key){this.modal.hidden=!0;let t=e.target;t?.closest("details")?.removeAttribute("open")}}showPlatform(e){for(let t of(this.modal.hidden=!0,this.platforms))t.hidden=t.getAttribute("data-platform")!==e}findPlatform(){return(0,r.u)()}refreshOnError(){window.location.reload()}pollForVscode(e){this.showPlatform("vscode");let t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}backToCodespacesFromVscodePolling(){this.loadAndUpdateContent(),this.showPlatform("codespaces")}localTabSelected(){d(c,"local")}cloudTabSelected(){d(c,"cloud"),this.codespaceList?.id==="lazyLoadedCodespacesList"&&this.loadAndUpdateContent()}copilotTabSelected(){d(c,"copilot")}selectDefaultTab(e){let t=e?"cloud":l(c);if(!t)return;let o=this.querySelector(`button[data-tab="${t}"`);o&&o.click()}loadAndUpdateContent(){this.codespaceList?.setAttribute("src",this.codespaceList.getAttribute("data-src"))}constructor(...e){super(...e),this.forceCodespaceTabDefault=!1,this.shouldRefreshList=!1,this.hasForcedCodespaceTabDefault=!1}};s([n.CF],GetRepoElement.prototype,"forceCodespaceTabDefault",void 0),s([n.aC],GetRepoElement.prototype,"modal",void 0),s([n.aC],GetRepoElement.prototype,"codespaceForm",void 0),s([n.aC],GetRepoElement.prototype,"codespaceLoadingMenu",void 0),s([n.aC],GetRepoElement.prototype,"codespaceList",void 0),s([n.aC],GetRepoElement.prototype,"codespaceSelector",void 0),s([n.aC],GetRepoElement.prototype,"openOrCreateInCodespace",void 0),s([n.aC],GetRepoElement.prototype,"vscodePoller",void 0),s([n.zV],GetRepoElement.prototype,"platforms",void 0),s([n.aC],GetRepoElement.prototype,"copilotTip",void 0),GetRepoElement=s([n.p_],GetRepoElement)},27756:(e,t,o)=>{let n;function r(){if(!n)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return n}function a(){return n?.locale??"en-US"}function i(){return!!r().login}o.d(t,{JK:()=>a,M3:()=>i,_$:()=>r}),!function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{n=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},5728:(e,t,o)=>{o.d(t,{G:()=>r,K:()=>a});var n=o(97156);let r=n.XC?.readyState==="interactive"||n.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.XC?.addEventListener("DOMContentLoaded",()=>{e()})}),a=n.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.cg?.addEventListener("load",e)})},97564:(e,t,o)=>{o.d(t,{G7:()=>l,XY:()=>d,fQ:()=>s});var n=o(5225),r=o(27756);function a(){return new Set((0,r._$)().featureFlags.map(e=>e.toLowerCase()))}let i=o(97156).X3?a:(0,n.A)(a);function s(){return Array.from(i())}function l(e){return i().has(e.toLowerCase())}let d={isFeatureEnabled:l}},14740:(e,t,o)=>{o.d(t,{k:()=>i,v:()=>s});var n=o(5225),r=o(97156);let a=(0,n.A)(function(){return r.XC?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),i=(0,n.A)(function(){return"enterprise"===a()}),s="webpack"},74572:(e,t,o)=>{o.d(t,{A:()=>i,D:()=>s});var n=o(97156),r=o(51528);let a=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(e,t={throwQuotaErrorsOnSet:!1},o=n.cg,i=e=>e,s=e=>e){let l;try{if(!o)throw Error();l=o[e]||new a}catch{l=new a}let{throwQuotaErrorsOnSet:d}=t;function c(e){t.sendCacheStats&&(0,r.i)({incrementKey:e})}function u(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch{}}return{getItem:function(e,t=Date.now()){try{let o=l.getItem(e);if(!o)return null;let n=`${e}:expiry`,r=Number(l.getItem(n));if(r&&t>r)return u(e),u(n),c("SAFE_STORAGE_VALUE_EXPIRED"),null;return c("SAFE_STORAGE_VALUE_WITHIN_TTL"),i(o)}catch{return null}},setItem:function(e,o,n=Date.now()){try{if(l.setItem(e,s(o)),t.ttl){let o=`${e}:expiry`,r=n+t.ttl;l.setItem(o,r.toString())}}catch(e){if(d&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:u,clear:l.clear,key:l.key,get length(){return l.length}}}function s(e){return i(e,{throwQuotaErrorsOnSet:!1},n.cg,JSON.parse,JSON.stringify)}},97156:(e,t,o)=>{o.d(t,{KJ:()=>n.KJ,Kn:()=>r.Kn,X3:()=>n.X3,XC:()=>r.XC,cg:()=>r.cg,fV:()=>r.fV,g5:()=>n.g5});var n=o(15572),r=o(86733)},86733:(e,t,o)=>{o.d(t,{Kn:()=>i,XC:()=>r,cg:()=>a,fV:()=>s});let n="undefined"!=typeof FORCE_SERVER_ENV&&FORCE_SERVER_ENV,r="undefined"==typeof document||n?void 0:document,a="undefined"==typeof window||n?void 0:window,i="undefined"==typeof history||n?void 0:history,s="undefined"==typeof location||n?{pathname:"",origin:"",search:"",hash:"",href:""}:location},15572:(e,t,o)=>{o.d(t,{KJ:()=>a,X3:()=>r,g5:()=>i});var n=o(86733);let r=void 0===n.XC,a=!r;function i(){return!!r||!n.XC||!!(n.XC.querySelector('react-app[data-ssr="true"]')||n.XC.querySelector('react-partial[data-ssr="true"][partial-name="repos-overview"]'))}},51528:(e,t,o)=>{o.d(t,{X:()=>p,i:()=>d});var n=o(97156),r=o(5728),a=o(14740),i=o(97564),s=o(70170);let l=[];function d(e,t=!1,o=.5){if(!n.X3&&!0!==(0,i.G7)("BROWSER_STATS_DISABLED")){if(o<0||o>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=Date.now()),e.loggedIn=!!n.XC?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=p(),e.bundler=a.v,Math.random()<o&&l.push(e),t?h():u()}}let c=null,u=(0,s.n)(async function(){await r.K,null==c&&(c=window.requestIdleCallback(h))},5e3);function h(){if(c=null,!l.length)return;let e=n.XC?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(e){for(let t of function(e){let t=[],o=e.map(e=>JSON.stringify(e));for(;o.length>0;)t.push(function(e){let t=e.shift(),o=[t],n=t.length;for(;e.length>0&&n<=65536;){let t=e[0].length;if(n+t<=65536){let r=e.shift();o.push(r),n+=t}else break}return o}(o));return t}(l))!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${t.join(",")}] }`);l=[]}}function p(){return!!n.XC?.head?.querySelector('meta[name="user-staff"]')?.content}n.XC?.addEventListener("pagehide",h),n.XC?.addEventListener("visibilitychange",h)}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_catalyst_lib_inde-dbbea9"],()=>t(20759)),e.O()}]);
//# sourceMappingURL=code-menu-f80b2074402e.js.map