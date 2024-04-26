/*! For license information please see 6988.4d719c44.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_arcgis_app=self.webpackChunkweb_arcgis_app||[]).push([[6988],{15520:(t,e,n)=>{function r(t){return"Enter"===t||" "===t}n.d(e,{i:()=>r,n:()=>i});const i=["0","1","2","3","4","5","6","7","8","9"]},62785:(t,e,n)=>{n.d(e,{B:()=>o,a:()=>v,c:()=>N,d:()=>D,g:()=>y,i:()=>l,n:()=>B,p:()=>u,s:()=>f});var r=n(39879),i=n(15520),s=n(6676);const c=new RegExp("\\".concat(".","(0+)?$")),a=new RegExp("0+$");class o{constructor(t){if(t instanceof o)return t;const[e,n]=function(t){const e=t.split(/[eE]/);if(1===e.length)return t;const n=+t;if(Number.isSafeInteger(n))return"".concat(n);const r="-"===t.charAt(0),i=+e[1],s=e[0].split("."),a=(r?s[0].substring(1):s[0])||"",o=s[1]||"",l=(t,e)=>{const n=Math.abs(e)-t.length,r=n>0?"".concat("0".repeat(n)).concat(t):t;return"".concat(r.slice(0,e),".").concat(r.slice(e))},u=(t,e)=>{const n=e>t.length?"".concat(t).concat("0".repeat(e-t.length)):t;return"".concat(n.slice(0,e),".").concat(n.slice(e))},m=i>0?"".concat(a).concat(u(o,i)):"".concat(l(a,i)).concat(o);return"".concat(r?"-":"").concat("."===m.charAt(0)?"0":"").concat(m.replace(c,"").replace(g,""))}(t).split(".").concat("");this.value=BigInt(e+n.padEnd(o.DECIMALS,"0").slice(0,o.DECIMALS))+BigInt(o.ROUNDED&&n[o.DECIMALS]>="5"),this.isNegative="-"===t.charAt(0)}getIntegersAndDecimals(){const t=this.value.toString().replace("-","").padStart(o.DECIMALS+1,"0");return{integers:t.slice(0,-o.DECIMALS),decimals:t.slice(-o.DECIMALS).replace(a,"")}}toString(){const{integers:t,decimals:e}=this.getIntegersAndDecimals();return"".concat(this.isNegative?"-":"").concat(t).concat(e.length?"."+e:"")}formatToParts(t){const{integers:e,decimals:n}=this.getIntegersAndDecimals(),r=t.numberFormatter.formatToParts(BigInt(e));return this.isNegative&&r.unshift({type:"minusSign",value:t.minusSign}),n.length&&(r.push({type:"decimal",value:t.decimal}),n.split("").forEach((t=>r.push({type:"fraction",value:t})))),r}format(t){const{integers:e,decimals:n}=this.getIntegersAndDecimals(),r="".concat(this.isNegative?t.minusSign:"").concat(t.numberFormatter.format(BigInt(e))),i=n.length?"".concat(t.decimal).concat(n.split("").map((e=>t.numberFormatter.format(Number(e)))).join("")):"";return"".concat(r).concat(i)}add(t){return o.fromBigInt(this.value+new o(t).value)}subtract(t){return o.fromBigInt(this.value-new o(t).value)}multiply(t){return o._divRound(this.value*new o(t).value,o.SHIFT)}divide(t){return o._divRound(this.value*o.SHIFT,new o(t).value)}}function l(t){return!(!t||isNaN(Number(t)))}function u(t){return t&&(e=t,i.n.some((t=>e.includes(t))))?b(t,(t=>{let e=!1;const n=t.split("").filter(((t,n)=>t.match(/\./g)&&!e?(e=!0,!0):!(!t.match(/\-/g)||0!==n)||i.n.includes(t))).join("");return l(n)?new o(n).toString():""})):"";var e}o.DECIMALS=100,o.ROUNDED=!0,o.SHIFT=BigInt("1"+"0".repeat(o.DECIMALS)),o._divRound=(t,e)=>o.fromBigInt(t/e+(o.ROUNDED?t*BigInt(2)/e%BigInt(2):BigInt(0))),o.fromBigInt=t=>Object.assign(Object.create(o.prototype),{value:t,isNegative:t<BigInt(0)});const g=/^([-0])0+(?=\d)/,m=/(?!^\.)\.$/,h=/(?!^-)-/g,p=/^-\b0\b\.?0*$/,d=/0*$/,f=t=>b(t,(t=>{const e=t.replace(h,"").replace(m,"").replace(g,"$1");return l(e)?p.test(e)?e:function(t){const e=t.split(".")[1],n=new o(t).toString(),[r,i]=n.split(".");return e&&i!==e?"".concat(r,".").concat(e):n}(e):t}));function b(t,e){if(!t)return t;const n=t.toLowerCase().indexOf("e")+1;return n?t.replace(/[eE]*$/g,"").substring(0,n).concat(t.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map(((t,n)=>e(1===n?t.replace(/\./g,""):t))).join("e").replace(/^e/,"1e"):e(t)}function v(t,e,n){const r=e.split(".")[1];if(r){const i=r.match(d)[0];if(i&&n.delocalize(t).length!==e.length&&-1===r.indexOf("e")){const e=n.decimal;return(t=t.includes(e)?t:"".concat(t).concat(e)).padEnd(t.length+i.length,n.localize("0"))}}return t}const w="en",_=["ar","bg","bs","ca","cs","da","de","el",w,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],E=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",w,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],I=["arab","arabext","latn"],S=t=>I.includes(t),O=(new Intl.NumberFormat).resolvedOptions().numberingSystem,F="arab"!==O&&S(O)?O:"latn";function y(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cldr";const n="cldr"===e?E:_;return t?n.includes(t)?t:"nb"===(t=t.toLowerCase())?"no":"t9n"===e&&"pt"===t?"pt-BR":(t.includes("-")&&(t=t.replace(/(\w+)-(\w+)/,((t,e,n)=>"".concat(e,"-").concat(n.toUpperCase()))),n.includes(t)||(t=t.split("-")[0])),"zh"===t?"zh-CN":n.includes(t)?t:(console.warn('Translations for the "'.concat(t,'" locale are not available and will fall back to the default, English (en).')),w)):w}const C=new Set;function N(t){!function(t){t.effectiveLocale=function(t){var e;return t.el.lang||(null===(e=(0,r.c)(t.el,"[lang]"))||void 0===e?void 0:e.lang)||document.documentElement.lang||w}(t)}(t),0===C.size&&(null===A||void 0===A||A.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0})),C.add(t)}function D(t){C.delete(t),0===C.size&&A.disconnect()}const A=(0,s.c)("mutation",(t=>{t.forEach((t=>{const e=t.target;C.forEach((t=>{if(!(0,r.b)(e,t.el))return;const n=(0,r.c)(t.el,"[lang]");if(!n)return void(t.effectiveLocale=w);const i=n.lang;t.effectiveLocale=n.hasAttribute("lang")&&""===i?w:i}))}))}));const B=new class{constructor(){this.delocalize=t=>this._numberFormatOptions?b(t,(t=>t.replace(new RegExp("[".concat(this._minusSign,"]"),"g"),"-").replace(new RegExp("[".concat(this._group,"]"),"g"),"").replace(new RegExp("[".concat(this._decimal,"]"),"g"),".").replace(new RegExp("[".concat(this._digits.join(""),"]"),"g"),this._getDigitIndex))):t,this.localize=t=>this._numberFormatOptions?b(t,(t=>l(t.trim())?new o(t.trim()).format(this).replace(new RegExp("[".concat(this._actualGroup,"]"),"g"),this._group):t)):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){var e;if(t.locale=y(null===t||void 0===t?void 0:t.locale),t.numberingSystem=(e=null===t||void 0===t?void 0:t.numberingSystem,S(e)?e:F),!this._numberFormatOptions&&t.locale===w&&t.numberingSystem===F&&2===Object.keys(t).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const n=new Map(this._digits.map(((t,e)=>[t,e]))),r=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-12345678.9);this._actualGroup=r.find((t=>"group"===t.type)).value,this._group=0===this._actualGroup.trim().length||" "==this._actualGroup?"\xa0":this._actualGroup,this._decimal=r.find((t=>"decimal"===t.type)).value,this._minusSign=r.find((t=>"minusSign"===t.type)).value,this._getDigitIndex=t=>n.get(t)}}},6676:(t,e,n)=>{n.d(e,{c:()=>i});var r=n(82108);function i(t,e,n){if(!r.L2.isBrowser)return;const i=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new i(e,n)}},76988:(t,e,n)=>{n.d(e,{c:()=>g,d:()=>m,s:()=>o,u:()=>u});var r=n(82108),i=n(62785);const s={};function c(){throw new Error("could not fetch component message bundle")}function a(t){t.messages={...t.defaultMessages,...t.messageOverrides}}async function o(t){t.defaultMessages=await l(t,t.effectiveLocale),a(t)}async function l(t,e){if(!r.L2.isBrowser)return{};const{el:n}=t,a=n.tagName.toLowerCase().replace("calcite-","");return async function(t,e){const n="".concat(e,"_").concat(t);return s[n]||(s[n]=fetch((0,r.OX)("./assets/".concat(e,"/t9n/messages_").concat(t,".json"))).then((t=>(t.ok||c(),t.json()))).catch((()=>c()))),s[n]}((0,i.g)(e,"t9n"),a)}async function u(t,e){t.defaultMessages=await l(t,e),a(t)}function g(t){t.onMessagesChange=h}function m(t){t.onMessagesChange=void 0}function h(){a(this)}}}]);
//# sourceMappingURL=6988.4d719c44.chunk.js.map