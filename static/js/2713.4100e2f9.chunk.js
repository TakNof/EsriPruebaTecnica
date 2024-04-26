/*! For license information please see 2713.4100e2f9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_arcgis_app=self.webpackChunkweb_arcgis_app||[]).push([[2713],{90373:(e,t,n)=>{n.d(t,{a:()=>w,c:()=>k,d:()=>E,u:()=>_});var a=n(39879);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var a=e.indexOf(t);-1===a||e.splice(a,1),e.push(t)},c=function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()},l=function(e){return"Tab"===(null===e||void 0===e?void 0:e.key)||9===(null===e||void 0===e?void 0:e.keyCode)},d=function(e){return l(e)&&!e.shiftKey},u=function(e){return l(e)&&e.shiftKey},v=function(e){return setTimeout(e,0)},f=function(e,t){var n=-1;return e.every((function(e,a){return!t(e)||(n=a,!1)})),n},p=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return"function"===typeof e?e.apply(void 0,n):e},b=function(e){return e.target.shadowRoot&&"function"===typeof e.composedPath?e.composedPath()[0]:e.target},m=[],h=function(e,t){var n,i=(null===t||void 0===t?void 0:t.document)||document,o=(null===t||void 0===t?void 0:t.trapStack)||m,h=r({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:d,isKeyBackward:u},t),g={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},y=function(e,t,n){return e&&void 0!==e[t]?e[t]:h[n||t]},k=function(e,t){var n="function"===typeof(null===t||void 0===t?void 0:t.composedPath)?t.composedPath():void 0;return g.containerGroups.findIndex((function(t){var a=t.container,i=t.tabbableNodes;return a.contains(e)||(null===n||void 0===n?void 0:n.includes(a))||i.find((function(t){return t===e}))}))},w=function(e){var t=h[e];if("function"===typeof t){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];t=t.apply(void 0,a)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var o=t;if("string"===typeof t&&!(o=i.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return o},E=function(){var e=w("initialFocus");if(!1===e)return!1;if(void 0===e||!(0,a.m)(e,h.tabbableOptions))if(k(i.activeElement)>=0)e=i.activeElement;else{var t=g.tabbableGroups[0];e=t&&t.firstTabbableNode||w("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},_=function(){if(g.containerGroups=g.containers.map((function(e){var t=(0,a.h)(e,h.tabbableOptions),n=(0,a.j)(e,h.tabbableOptions),i=t.length>0?t[0]:void 0,r=t.length>0?t[t.length-1]:void 0,o=n.find((function(e){return(0,a.k)(e)})),s=n.slice().reverse().find((function(e){return(0,a.k)(e)})),c=!!t.find((function(e){return(0,a.l)(e)>0}));return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:c,firstTabbableNode:i,lastTabbableNode:r,firstDomTabbableNode:o,lastDomTabbableNode:s,nextTabbableNode:function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=t.indexOf(e);return r<0?i?n.slice(n.indexOf(e)+1).find((function(e){return(0,a.k)(e)})):n.slice(0,n.indexOf(e)).reverse().find((function(e){return(0,a.k)(e)})):t[r+(i?1:-1)]}}})),g.tabbableGroups=g.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),g.tabbableGroups.length<=0&&!w("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(g.containerGroups.find((function(e){return e.posTabIndexesFound}))&&g.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},z=function e(t){var n=t.activeElement;if(n)return n.shadowRoot&&null!==n.shadowRoot.activeElement?e(n.shadowRoot):n},O=function e(t){!1!==t&&t!==z(document)&&(t&&t.focus?(t.focus({preventScroll:!!h.preventScroll}),g.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"===typeof e.select}(t)&&t.select()):e(E()))},N=function(e){var t=w("setReturnFocus",e);return t||!1!==t&&e},F=function(e){var t=e.target,n=e.event,i=e.isBackward,r=void 0!==i&&i;t=t||b(n),_();var o=null;if(g.tabbableGroups.length>0){var s=k(t,n),c=s>=0?g.containerGroups[s]:void 0;if(s<0)o=r?g.tabbableGroups[g.tabbableGroups.length-1].lastTabbableNode:g.tabbableGroups[0].firstTabbableNode;else if(r){var d=f(g.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(d<0&&(c.container===t||(0,a.m)(t,h.tabbableOptions)&&!(0,a.k)(t,h.tabbableOptions)&&!c.nextTabbableNode(t,!1))&&(d=s),d>=0){var u=0===d?g.tabbableGroups.length-1:d-1,v=g.tabbableGroups[u];o=(0,a.l)(t)>=0?v.lastTabbableNode:v.lastDomTabbableNode}else l(n)||(o=c.nextTabbableNode(t,!1))}else{var p=f(g.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(p<0&&(c.container===t||(0,a.m)(t,h.tabbableOptions)&&!(0,a.k)(t,h.tabbableOptions)&&!c.nextTabbableNode(t))&&(p=s),p>=0){var m=p===g.tabbableGroups.length-1?0:p+1,y=g.tabbableGroups[m];o=(0,a.l)(t)>=0?y.firstTabbableNode:y.firstDomTabbableNode}else l(n)||(o=c.nextTabbableNode(t))}}else o=w("fallbackFocus");return o},T=function(e){var t=b(e);k(t,e)>=0||(p(h.clickOutsideDeactivates,e)?n.deactivate({returnFocus:h.returnFocusOnDeactivate}):p(h.allowOutsideClick,e)||e.preventDefault())},x=function(e){var t=b(e),n=k(t,e)>=0;if(n||t instanceof Document)n&&(g.mostRecentlyFocusedNode=t);else{var i;e.stopImmediatePropagation();var r=!0;if(g.mostRecentlyFocusedNode)if((0,a.l)(g.mostRecentlyFocusedNode)>0){var o=k(g.mostRecentlyFocusedNode),s=g.containerGroups[o].tabbableNodes;if(s.length>0){var c=s.findIndex((function(e){return e===g.mostRecentlyFocusedNode}));c>=0&&(h.isKeyForward(g.recentNavEvent)?c+1<s.length&&(i=s[c+1],r=!1):c-1>=0&&(i=s[c-1],r=!1))}}else g.containerGroups.some((function(e){return e.tabbableNodes.some((function(e){return(0,a.l)(e)>0}))}))||(r=!1);else r=!1;r&&(i=F({target:g.mostRecentlyFocusedNode,isBackward:h.isKeyBackward(g.recentNavEvent)})),O(i||(g.mostRecentlyFocusedNode||E()))}g.recentNavEvent=void 0},P=function(e){if(("Escape"===(null===(t=e)||void 0===t?void 0:t.key)||"Esc"===(null===t||void 0===t?void 0:t.key)||27===(null===t||void 0===t?void 0:t.keyCode))&&!1!==p(h.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();var t;(h.isKeyForward(e)||h.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];g.recentNavEvent=e;var n=F({event:e,isBackward:t});n&&(l(e)&&e.preventDefault(),O(n))}(e,h.isKeyBackward(e))},D=function(e){var t=b(e);k(t,e)>=0||p(h.clickOutsideDeactivates,e)||p(h.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},G=function(){if(g.active)return s(o,n),g.delayInitialFocusTimer=h.delayInitialFocus?v((function(){O(E())})):O(E()),i.addEventListener("focusin",x,!0),i.addEventListener("mousedown",T,{capture:!0,passive:!1}),i.addEventListener("touchstart",T,{capture:!0,passive:!1}),i.addEventListener("click",D,{capture:!0,passive:!1}),i.addEventListener("keydown",P,{capture:!0,passive:!1}),n},L=function(){if(g.active)return i.removeEventListener("focusin",x,!0),i.removeEventListener("mousedown",T,!0),i.removeEventListener("touchstart",T,!0),i.removeEventListener("click",D,!0),i.removeEventListener("keydown",P,!0),n},C="undefined"!==typeof window&&"MutationObserver"in window?new MutationObserver((function(e){e.some((function(e){return Array.from(e.removedNodes).some((function(e){return e===g.mostRecentlyFocusedNode}))}))&&O(E())})):void 0,B=function(){C&&(C.disconnect(),g.active&&!g.paused&&g.containers.map((function(e){C.observe(e,{subtree:!0,childList:!0})})))};return(n={get active(){return g.active},get paused(){return g.paused},activate:function(e){if(g.active)return this;var t=y(e,"onActivate"),n=y(e,"onPostActivate"),a=y(e,"checkCanFocusTrap");a||_(),g.active=!0,g.paused=!1,g.nodeFocusedBeforeActivation=i.activeElement,null===t||void 0===t||t();var r=function(){a&&_(),G(),B(),null===n||void 0===n||n()};return a?(a(g.containers.concat()).then(r,r),this):(r(),this)},deactivate:function(e){if(!g.active)return this;var t=r({onDeactivate:h.onDeactivate,onPostDeactivate:h.onPostDeactivate,checkCanReturnFocus:h.checkCanReturnFocus},e);clearTimeout(g.delayInitialFocusTimer),g.delayInitialFocusTimer=void 0,L(),g.active=!1,g.paused=!1,B(),c(o,n);var a=y(t,"onDeactivate"),i=y(t,"onPostDeactivate"),s=y(t,"checkCanReturnFocus"),l=y(t,"returnFocus","returnFocusOnDeactivate");null===a||void 0===a||a();var d=function(){v((function(){l&&O(N(g.nodeFocusedBeforeActivation)),null===i||void 0===i||i()}))};return l&&s?(s(N(g.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){if(g.paused||!g.active)return this;var t=y(e,"onPause"),n=y(e,"onPostPause");return g.paused=!0,null===t||void 0===t||t(),L(),B(),null===n||void 0===n||n(),this},unpause:function(e){if(!g.paused||!g.active)return this;var t=y(e,"onUnpause"),n=y(e,"onPostUnpause");return g.paused=!1,null===t||void 0===t||t(),_(),G(),B(),null===n||void 0===n||n(),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return g.containers=t.map((function(e){return"string"===typeof e?i.querySelector(e):e})),g.active&&_(),B(),this}}).updateContainerElements(e),n};const g=globalThis.calciteConfig,y=(null===g||void 0===g?void 0:g.focusTrapStack)||[];function k(e,t){const{el:n}=e,i=(null===t||void 0===t?void 0:t.focusTrapEl)||n;if(!i)return;const r={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:i,setReturnFocus:e=>((0,a.e)(e),!1),...null===t||void 0===t?void 0:t.focusTrapOptions,document:n.ownerDocument,tabbableOptions:a.n,trapStack:y};e.focusTrap=h(i,r)}function w(e,t){var n;e.focusTrapDisabled||(null===(n=e.focusTrap)||void 0===n||n.activate(t))}function E(e,t){var n;null===(n=e.focusTrap)||void 0===n||n.deactivate(t)}function _(e){var t;null===(t=e.focusTrap)||void 0===t||t.updateContainerElements(e.el)}},76527:(e,t,n)=>{n.d(t,{a:()=>s,c:()=>c,s:()=>o});var a=n(82108);const i=new WeakMap,r=new WeakMap;function o(e){r.set(e,new Promise((t=>i.set(e,t))))}function s(e){i.get(e)()}async function c(e){if(await function(e){return r.get(e)}(e),a.L2.isBrowser)return(0,a.$x)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},26964:(e,t,n)=>{n.d(t,{L:()=>r,d:()=>o});var a=n(82108),i=n(66418);const r=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inline=!1,this.label=void 0,this.scale="m",this.type=void 0,this.value=0,this.text=""}render(){const{el:e,inline:t,label:n,scale:r,text:o,type:s,value:c}=this,l=e.id||(0,i.g)(),d=t?this.getInlineSize(r):this.getSize(r),u=.45*d,v="0 0 ".concat(d," ").concat(d),f="determinate"===s,p=2*u*Math.PI,b=c/100*p,m=p-b,h=Math.floor(c),g={"aria-valuenow":h,"aria-valuemin":0,"aria-valuemax":100,complete:100===h},y={r:u,cx:d/2,cy:d/2},k={"stroke-dasharray":"".concat(b," ").concat(m)};return(0,a.h)(a.xr,{"aria-label":n,id:l,role:"progressbar",...f?g:{}},(0,a.h)("div",{class:"loader__svgs"},(0,a.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--1",viewBox:v},(0,a.h)("circle",{...y})),(0,a.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--2",viewBox:v},(0,a.h)("circle",{...y})),(0,a.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--3",viewBox:v,...f?{style:k}:{}},(0,a.h)("circle",{...y}))),o&&(0,a.h)("div",{class:"loader__text"},o),f&&(0,a.h)("div",{class:"loader__percentage"},c))}getSize(e){return{s:32,m:56,l:80}[e]}getInlineSize(e){return{s:12,m:16,l:20}[e]}get el(){return this}static get style(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-color-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem);will-change:contents}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-color-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}:host([type=determinate]){animation:none;stroke:var(--calcite-color-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-color-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-color-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-color-brand)}33%{stroke:var(--calcite-color-brand-press)}66%{stroke:var(--calcite-color-brand-hover)}100%{stroke:var(--calcite-color-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1]}]);function o(){if("undefined"===typeof customElements)return;["calcite-loader"].forEach((e=>{if("calcite-loader"===e)customElements.get(e)||customElements.define(e,r)}))}o()},37268:(e,t,n)=>{n.d(t,{o:()=>o});var a=n(82108);function i(e){return"opened"in e?e.opened:e.open}function r(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(t?e[e.transitionProp]:i(e))?e.onBeforeOpen():e.onBeforeClose(),(t?e[e.transitionProp]:i(e))?e.onOpen():e.onClose()}function o(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,a.gv)((()=>{if(e.transitionEl){var n;const{transitionDuration:a,transitionProperty:o}=getComputedStyle(e.transitionEl),s=a.split(","),c=null!==(n=s[o.split(",").indexOf(e.openTransitionProp)])&&void 0!==n?n:s[0];if("0s"===c)return void r(e,t);const l=setTimeout((()=>{e.transitionEl.removeEventListener("transitionstart",d),e.transitionEl.removeEventListener("transitionend",u),e.transitionEl.removeEventListener("transitioncancel",u),r(e,t)}),1e3*parseFloat(c));function d(n){n.propertyName===e.openTransitionProp&&n.target===e.transitionEl&&(clearTimeout(l),e.transitionEl.removeEventListener("transitionstart",d),(t?e[e.transitionProp]:i(e))?e.onBeforeOpen():e.onBeforeClose())}function u(n){n.propertyName===e.openTransitionProp&&n.target===e.transitionEl&&((t?e[e.transitionProp]:i(e))?e.onOpen():e.onClose(),e.transitionEl.removeEventListener("transitionend",u),e.transitionEl.removeEventListener("transitioncancel",u))}e.transitionEl.addEventListener("transitionstart",d),e.transitionEl.addEventListener("transitionend",u),e.transitionEl.addEventListener("transitioncancel",u)}}))}}}]);
//# sourceMappingURL=2713.4100e2f9.chunk.js.map