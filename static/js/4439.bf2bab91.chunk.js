"use strict";(self.webpackChunkweb_arcgis_app=self.webpackChunkweb_arcgis_app||[]).push([[4439],{29632:(e,t,o)=>{o.d(t,{Fe:()=>a,Nk:()=>r});var n=o(69539),l=o(97763);function r(e){const t=[];return i((0,l.lW)(e),t),t.length?new n.A((0,l.e6)(t[0])):null}function i(e,t){var o,n;if(!e)return;let r;r="CIMTextSymbol"===e.type?e.symbol:e;const a="CIMPolygonSymbol"===e.type;if(null!==(o=r)&&void 0!==o&&o.symbolLayers)for(const s of r.symbolLayers)if(!(s.colorLocked||a&&((0,l.mA)(s)||(0,l.MM)(s)&&s.markerPlacement&&(0,l.zr)(s.markerPlacement))))switch(s.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":s.tintColor&&c(t,s.tintColor);break;case"CIMVectorMarker":null===(n=s.markerGraphics)||void 0===n||n.forEach((e=>{i(e.symbol,t)}));break;case"CIMSolidStroke":case"CIMSolidFill":c(t,s.color);break;case"CIMHatchFill":i(s.lineSymbol,t)}}function c(e,t){for(const o of e)if(o.join(".")===t.join("."))return;e.push(t)}function a(e,t,o){t instanceof n.A||(t=new n.A(t));const r=(0,l.lW)(e);r&&s(r,t,o)}function s(e,t,o){var n,r,i;if(!e)return;let c;c="CIMTextSymbol"===e.type?e.symbol:e;const a="CIMPolygonSymbol"===(null===(n=c)||void 0===n?void 0:n.type);if(null!==(r=c)&&void 0!==r&&r.symbolLayers)for(const u of c.symbolLayers){if(u.colorLocked)continue;if(a)if(o){const{layersToColor:e}=o;if(((0,l.mA)(u)||(0,l.MM)(u)&&u.markerPlacement&&(0,l.zr)(u.markerPlacement))&&"fill"===e||(0,l.jn)(u)&&"outline"===e)continue}else if((0,l.mA)(u)||(0,l.MM)(u)&&u.markerPlacement&&(0,l.zr)(u.markerPlacement))continue;const e=t.toArray();switch(u.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":u.tintColor=e;break;case"CIMVectorMarker":null===(i=u.markerGraphics)||void 0===i||i.forEach((e=>{s(e.symbol,t,o)}));break;case"CIMSolidStroke":case"CIMSolidFill":u.color=e;break;case"CIMHatchFill":s(u.lineSymbol,t,o)}}}},87840:(e,t,o)=>{o.d(t,{$4:()=>w,O0:()=>v,O1:()=>g,Sw:()=>M,eH:()=>b,rc:()=>k});var n=o(28899),l=o(69539),r=o(3825),i=o(53521),c=o(76931),a=o(29632);const s="picture-fill",u="simple-fill",f="simple-line",y="simple-marker",d="text",h="cim",m=new Map([["dash",[4,3]],["dashdot",[4,3,1,3]],["dot",[1,3]],["longdash",[8,3]],["longdashdot",[8,3,1,3]],["longdashdotdot",[8,3,1,3,1,3]],["shortdash",[4,1]],["shortdashdot",[4,1,1,1]],["shortdashdotdot",[4,1,1,1,1,1]],["shortdot",[1,1]],["solid",[]]]),p=new i.q(1e3);function b(e){const t=e.style;let o=null;if(e)switch(e.type){case y:"cross"!==t&&"x"!==t&&(o=e.color);break;case u:t&&"solid"!==t?"none"!==t&&(o={type:"pattern",x:0,y:0,src:(0,n.s)("esri/symbols/patterns/".concat(t,".png")),width:5,height:5}):o=e.color;break;case s:o={type:"pattern",src:e.url,width:(0,c.Lz)(e.width)*e.xscale,height:(0,c.Lz)(e.height)*e.yscale,x:(0,c.Lz)(e.xoffset),y:(0,c.Lz)(e.yoffset)};break;case d:o=e.color;break;case h:o=(0,a.Nk)(e)}return o}function k(e,t){const o=e+"-"+t;return void 0!==p.get(o)?Promise.resolve(p.get(o)):(0,r.A)(e,{responseType:"image"}).then((e=>{const n=e.data,l=n.naturalWidth,r=n.naturalHeight,i=document.createElement("canvas");i.width=l,i.height=r;const c=i.getContext("2d");c.fillStyle=t,c.fillRect(0,0,l,r),c.globalCompositeOperation="destination-in",c.drawImage(n,0,0);const a=i.toDataURL();return p.put(o,a),a}))}function w(e){if(!e)return null;let t=null;switch(e.type){case u:case s:case y:t=w(e.outline);break;case f:{const o=(0,c.Lz)(e.width);null!=e.style&&"none"!==e.style&&0!==o&&(t={color:e.color,style:g(e.style),width:o,cap:e.cap,join:"miter"===e.join?(0,c.Lz)(e.miterLimit):e.join},t.dashArray=v(t).join(",")||"none");break}default:t=null}return t}function v(e){if(null===e||void 0===e||!e.style)return[];const{dashArray:t,style:o,width:n}=e;if("string"==typeof t&&"none"!==t)return t.split(",").map((e=>Number(e)));const l=null!==n&&void 0!==n?n:0,r=m.has(o)?m.get(o).map((e=>e*l)):[];if("butt"!==e.cap)for(const[i,c]of r.entries())r[i]=i%2==1?c+l:Math.max(c-l,1);return r}const g=(()=>{const e={};return t=>{if(e[t])return e[t];const o=t.replaceAll("-","");return e[t]=o,o}})(),M=new l.A([128,128,128])},94439:(e,t,o)=>{o.d(t,{$d:()=>h,GG:()=>L,N7:()=>m,Sx:()=>p,UQ:()=>C,di:()=>S,dt:()=>k,k_:()=>d,yG:()=>z});var n=o(69539),l=o(95444),r=o(98773),i=(o(81806),o(76931)),c=o(9392),a=o(44081),s=o(29632),u=o(87840),f=o(9994);const y=new n.A("white");function d(e){var t;if(!e)return 0;if((0,l.wk)(e)){const t=function(e){var t,o;const n=null===(t=e.symbolLayers)||void 0===t?void 0:t.at(-1);if(n&&"outline"in n)return null===n||void 0===n||null===(o=n.outline)||void 0===o?void 0:o.size}(e);return null!=t?t:0}return(0,i.PN)(null===(t=(0,u.$4)(e))||void 0===t?void 0:t.width)}function h(e){if(null==e||!("symbolLayers"in e)||null==e.symbolLayers)return!1;switch(e.type){case"point-3d":return e.symbolLayers.some((e=>"object"===e.type));case"line-3d":return e.symbolLayers.some((e=>"path"===e.type));case"polygon-3d":return e.symbolLayers.some((e=>"object"===e.type||"extrude"===e.type));default:return!1}}function m(e){var t,o;return null!==(t=null===(o=e.resource)||void 0===o?void 0:o.href)&&void 0!==t?t:""}function p(e,t){if(!e)return null;let o=null;return(0,l.wk)(e)?o=function(e){const t=e.symbolLayers;if(!t)return null;let o=null;return t.forEach((e=>{var t;"object"===e.type&&(null===(t=e.resource)||void 0===t?void 0:t.href)||(o="water"===e.type?e.color:e.material?e.material.color:null)})),o?new n.A(o):null}(e):(0,l.$y)(e)&&(o="cim"===e.type?(0,s.Nk)(e):e.color?new n.A(e.color):null),o?b(o,t):null}function b(e,t){if(null==t||null==e)return e;const o=e.toRgba();return o[3]=o[3]*t,new n.A(o)}function k(e,t,o){e&&(t||null!=o)&&(t&&(t=new n.A(t)),(0,l.wk)(e)?function(e,t,o){const n=e.symbolLayers;if(!n)return;const l=e=>{var n,l;return b(t=null!==(n=null!==(l=t)&&void 0!==l?l:e)&&void 0!==n?n:null!=o?y:null,o)};n.forEach((e=>{var n;if("object"!==e.type||null===(n=e.resource)||void 0===n||!n.href||t)if("water"===e.type)e.color=l(e.color);else{var r;const t=null!=e.material?e.material.color:null,n=l(t);null==e.material?e.material=new f.N({color:n}):e.material.color=n,null!=o&&"outline"in e&&null!=(null===(r=e.outline)||void 0===r?void 0:r.color)&&(e.outline.color=b(e.outline.color,o))}}))}(e,t,o):(0,l.$y)(e)&&function(e,t,o){var n,l;(t=null!==(n=t)&&void 0!==n?n:e.color)&&(e.color=b(t,o)),null!=o&&"outline"in e&&(null===(l=e.outline)||void 0===l?void 0:l.color)&&(e.outline.color=b(e.outline.color,o))}(e,t,o))}async function w(e,t){const n=e.symbolLayers;n&&await(0,r.jJ)(n,(async e=>async function(e,t){switch(e.type){case"extrude":!function(e,t){e.size="number"==typeof t[2]?t[2]:0}(e,t);break;case"icon":case"line":case"text":!function(e,t){const o=v(t);null!=o&&(e.size=o)}(e,t);break;case"path":!function(e,t){const o=g(t,c.Un,[e.width,void 0,e.height]);e.width=M(t[0],e.width,1,o),e.height=M(t[2],e.height,1,o)}(e,t);break;case"object":await async function(e,t){const{resourceSize:n,symbolSize:l}=await async function(e){const{computeObjectLayerResourceSize:t}=await o.e(4374).then(o.bind(o,44374)),n=await t(e,10),{width:l,height:r,depth:i}=e,c=[l,i,r];let a=1;for(let o=0;o<3;o++){const e=c[o];if(null!=e){a=e/n[o];break}}for(let o=0;o<3;o++)null==c[o]&&(c[o]=n[o]*a);return{resourceSize:n,symbolSize:c}}(e),r=g(t,n,l);e.width=M(t[0],l[0],n[0],r),e.depth=M(t[1],l[1],n[1],r),e.height=M(t[2],l[2],n[2],r)}(e,t)}}(e,t)))}function v(e){for(const t of e)if("number"==typeof t)return t;return null}function g(e,t,o){for(let n=0;n<3;n++){const l=e[n];switch(l){case"symbol-value":{const e=o[n];return null!=e?e/t[n]:1}case"proportional":break;default:if(l&&t[n])return l/t[n]}}return 1}function M(e,t,o,n){switch(e){case"proportional":return o*n;case"symbol-value":return null!=t?t:o;default:return e}}async function C(e,t){if(e&&t)return(0,l.wk)(e)?w(e,t):void((0,l.$y)(e)&&function(e,t){const o=v(t);if(null!=o)switch(e.type){case"simple-marker":e.size=o;break;case"picture-marker":{const t=e.width/e.height;t>1?(e.width=o,e.height=o*t):(e.width=o*t,e.height=o);break}case"simple-line":e.width=o;break;case"text":e.font.size=o}}(e,t))}function L(e,t,o){if(e&&null!=t)if((0,l.wk)(e)){const n=e.symbolLayers;n&&n.forEach((e=>{var n,l,r;if(e&&"object"===e.type)switch(o){case"tilt":e.tilt=(null!==(n=e.tilt)&&void 0!==n?n:0)+t;break;case"roll":e.roll=(null!==(l=e.roll)&&void 0!==l?l:0)+t;break;default:e.heading=(null!==(r=e.heading)&&void 0!==r?r:0)+t}}))}else(0,l.$y)(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle+=t))}function S(e){if(!e)return null;const t=e.effects.filter((e=>"bloom"!==e.type)).map((e=>e.toJSON()));return(0,a.zu)(t)}async function z(e,t){return await e.fetchSymbol(t)||e.fetchCIMSymbol(t)}}}]);
//# sourceMappingURL=4439.bf2bab91.chunk.js.map