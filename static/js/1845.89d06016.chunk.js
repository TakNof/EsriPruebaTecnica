"use strict";(self.webpackChunkweb_arcgis_app=self.webpackChunkweb_arcgis_app||[]).push([[1845,4552],{1845:(e,t,i)=>{i.r(t),i.d(t,{default:()=>fe});var r,l=i(35143),o=i(3825),s=i(18690),n=i(94643),a=i(50076),u=i(53084),c=i(77717),d=i(48611),p=i(50346),h=i(68134),m=i(90534),y=i(46053),v=(i(81806),i(76460),i(28379)),f=i(85842),g=i(17707),w=i(76797),M=i(25515),x=i(24552),S=i(65624),A=i(11270),T=i(94729),I=i(21617),b=i(5682),_=i(16852),L=i(88235),P=i(44067),E=i(90565),C=i(42553);i(47249);let O=r=class extends C.oY{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){var e,t,i,l;const o=new r;return this.hasOwnProperty("fullExtent")&&(o.fullExtent=null!==(e=null===(t=this.fullExtent)||void 0===t?void 0:t.clone())&&void 0!==e?e:null),this.hasOwnProperty("id")&&(o.id=this.id),this.hasOwnProperty("tileInfo")&&(o.tileInfo=null!==(i=null===(l=this.tileInfo)||void 0===l?void 0:l.clone())&&void 0!==i?i:null),o}};(0,l._)([(0,y.MZ)({type:w.A,json:{read:{source:"fullExtent"}}})],O.prototype,"fullExtent",void 0),(0,l._)([(0,y.MZ)({type:String,json:{read:{source:"id"}}})],O.prototype,"id",void 0),(0,l._)([(0,y.MZ)({type:L.A,json:{read:{source:"tileInfo"}}})],O.prototype,"tileInfo",void 0),O=r=(0,l._)([(0,f.$)("esri.layers.support.TileMatrixSet")],O);const R=O;var Z;let j=Z=class extends C.oY{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new Z;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,l._)([(0,y.MZ)({json:{read:{source:"id"}}})],j.prototype,"id",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"title"}}})],j.prototype,"title",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"abstract"}}})],j.prototype,"description",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"legendUrl"}}})],j.prototype,"legendUrl",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"isDefault"}}})],j.prototype,"isDefault",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"keywords"}}})],j.prototype,"keywords",void 0),j=Z=(0,l._)([(0,f.$)("esri.layers.support.WMTSStyle")],j);const F=j;var U;let V=U=class extends C.oY{constructor(e){super(e),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(e,t){return(e=t.fullExtent)?w.A.fromJSON(e):null}readFullExtents(e,t){var i,r,l;return null!==(i=t.fullExtents)&&void 0!==i&&i.length?t.fullExtents.map((e=>w.A.fromJSON(e))):null!==(r=null===(l=t.tileMatrixSets)||void 0===l?void 0:l.map((e=>w.A.fromJSON(e.fullExtent))).filter((e=>e)))&&void 0!==r?r:[]}get imageFormat(){var e;let t=this._get("imageFormat");return t||(t=null!==(e=this.imageFormats)&&void 0!==e&&e.length?this.imageFormats[0]:""),t}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){var e,t;let i=this._get("styleId");return i||(i=null!==(e=null===(t=this.styles)||void 0===t||null===(t=t.at(0))||void 0===t?void 0:t.id)&&void 0!==e?e:""),i}set styleId(e){this._set("styleId",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){var e,t,i,r,l;const o=new U;return this.hasOwnProperty("description")&&(o.description=this.description),this.hasOwnProperty("imageFormats")&&(o.imageFormats=null!==(e=null===(t=this.imageFormats)||void 0===t?void 0:t.slice())&&void 0!==e?e:null),this.hasOwnProperty("imageFormat")&&(o.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(o.fullExtent=null===(i=this.fullExtent)||void 0===i?void 0:i.clone()),this.hasOwnProperty("id")&&(o.id=this.id),this.hasOwnProperty("layer")&&(o.layer=this.layer),this.hasOwnProperty("styleId")&&(o.styleId=this.styleId),this.hasOwnProperty("styles")&&(o.styles=null===(r=this.styles)||void 0===r?void 0:r.clone()),this.hasOwnProperty("tileMatrixSetId")&&(o.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(o.tileMatrixSets=null===(l=this.tileMatrixSets)||void 0===l?void 0:l.clone()),this.hasOwnProperty("title")&&(o.title=this.title),o}};(0,l._)([(0,y.MZ)()],V.prototype,"description",void 0),(0,l._)([(0,y.MZ)()],V.prototype,"fullExtent",void 0),(0,l._)([(0,v.w)("fullExtent",["fullExtent"])],V.prototype,"readFullExtent",null),(0,l._)([(0,y.MZ)({readOnly:!0})],V.prototype,"fullExtents",void 0),(0,l._)([(0,v.w)("fullExtents",["fullExtents","tileMatrixSets"])],V.prototype,"readFullExtents",null),(0,l._)([(0,y.MZ)()],V.prototype,"id",void 0),(0,l._)([(0,y.MZ)()],V.prototype,"imageFormat",null),(0,l._)([(0,y.MZ)({json:{read:{source:"formats"}}})],V.prototype,"imageFormats",void 0),(0,l._)([(0,y.MZ)()],V.prototype,"layer",void 0),(0,l._)([(0,y.MZ)()],V.prototype,"parent",void 0),(0,l._)([(0,y.MZ)()],V.prototype,"styleId",null),(0,l._)([(0,y.MZ)({type:n.A.ofType(F),json:{read:{source:"styles"}}})],V.prototype,"styles",void 0),(0,l._)([(0,y.MZ)({json:{write:{ignoreOrigin:!0}}})],V.prototype,"title",void 0),(0,l._)([(0,y.MZ)()],V.prototype,"tileMatrixSetId",void 0),(0,l._)([(0,y.MZ)({readOnly:!0})],V.prototype,"tileMatrixSet",null),(0,l._)([(0,y.MZ)({type:n.A.ofType(R),json:{read:{source:"tileMatrixSets"}}})],V.prototype,"tileMatrixSets",void 0),V=U=(0,l._)([(0,f.$)("esri.layers.support.WMTSSublayer")],V);const D=V;var N=i(34111),W=i(13904),k=i(85996),B=i(65660),K=i(83497),q=i(22848);const H=90.71428571428571;function J(e){const t=e.replaceAll(/ows:/gi,"");if(!$("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new a.A("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function z(e){return e.nodeType===Node.ELEMENT_NODE}function $(e,t){for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i];if(z(r)&&r.nodeName===e)return r}return null}function G(e,t){const i=[];for(let r=0;r<t.childNodes.length;r++){const l=t.childNodes[r];z(l)&&l.nodeName===e&&i.push(l)}return i}function Y(e,t){const i=[];for(let r=0;r<t.childNodes.length;r++){const l=t.childNodes[r];z(l)&&l.nodeName===e&&i.push(l)}return i.map((e=>e.textContent)).filter(s.Ru)}function Q(e,t){return e.split(">").forEach((e=>{t&&(t=$(e,t))})),t&&t.textContent}function X(e,t,i,r){let l;return Array.prototype.slice.call(r.childNodes).some((r=>{if(r.nodeName.includes(e)){const e=$(t,r),o=null===e||void 0===e?void 0:e.textContent;if(o===i||i.split(":")&&i.split(":")[1]===o)return l=r,!0}return!1})),l}function ee(e,t,i,r,l){const o=Q("Abstract",t),s=Y("Format",t);return{id:e,fullExtent:re(t),fullExtents:le(t),description:o,formats:s,styles:oe(t,r),title:Q("Title",t),tileMatrixSets:se(l,t,i)}}function te(e,t){var i;const r=[],l=null===(i=e.layerMap)||void 0===i?void 0:i.get(t);if(!l)return null;const o=G("ResourceURL",l),s=G("Dimension",l);let n,a,u,c;return s.length&&(n=Q("Identifier",s[0]),a=Y("Default",s[0])||Y("Value",s[0])),s.length>1&&(u=Q("Identifier",s[1]),c=Y("Default",s[1])||Y("Value",s[1])),e.dimensionMap.set(t,{dimensions:a,dimensions2:c}),o.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(n&&a.length)if(t.includes("{"+n+"}"))t=t.replace("{"+n+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+n.length+2))}if(u&&c.length)if(t.includes("{"+u+"}"))t=t.replace("{"+u+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+u.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+u.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}function ie(e,t,i,r,l,o,s,n){var a,u;const c=function(e,t,i){var r;const l=te(e,t),o=null===l||void 0===l?void 0:l.filter((e=>e.format===i));return null!==(r=null!==o&&void 0!==o&&o.length?o:l)&&void 0!==r?r:[]}(e,t,r);if(!((null===c||void 0===c?void 0:c.length)>0))return"";const{dimensionMap:d}=e,p=null===(a=d.get(t).dimensions)||void 0===a?void 0:a[0],h=null===(u=d.get(t).dimensions2)||void 0===u?void 0:u[0];return c[s%c.length].template.replaceAll(/\{Style\}/gi,null!==l&&void 0!==l?l:"").replaceAll(/\{TileMatrixSet\}/gi,null!==i&&void 0!==i?i:"").replaceAll(/\{TileMatrix\}/gi,o).replaceAll(/\{TileRow\}/gi,""+s).replaceAll(/\{TileCol\}/gi,""+n).replaceAll(/\{dimensionValue\}/gi,p).replaceAll(/\{dimensionValue2\}/gi,h)}function re(e){const t=$("WGS84BoundingBox",e),i=t?Q("LowerCorner",t).split(" "):["-180","-90"],r=t?Q("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(i[0]),ymin:parseFloat(i[1]),xmax:parseFloat(r[0]),ymax:parseFloat(r[1]),spatialReference:{wkid:4326}}}function le(e){const t=[];return(0,K.p)(e,{BoundingBox:e=>{if(!e.getAttribute("crs"))return;const i=e.getAttribute("crs").toLowerCase(),r=ne(i),l=i.includes("epsg")&&(0,B.m)(r.wkid);let o,s,n,a;(0,K.p)(e,{LowerCorner:e=>{[o,s]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),l&&([o,s]=[s,o])},UpperCorner:e=>{[n,a]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),l&&([n,a]=[a,n])}}),t.push({xmin:o,ymin:s,xmax:n,ymax:a,spatialReference:r})}}),t}function oe(e,t){return G("Style",e).map((e=>{var i;const r=$("LegendURL",e),l=$("Keywords",e),o=l?Y("Keyword",l):[];let s=null===r||void 0===r?void 0:r.getAttribute("xlink:href");return t&&(s=null===(i=s)||void 0===i?void 0:i.replace(/^http:/i,"https:")),{abstract:Q("Abstract",e),id:Q("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:o,legendUrl:s,title:Q("Title",e)}}))}function se(e,t,i){return G("TileMatrixSetLink",t).map((t=>function(e,t,i){const r=$("TileMatrixSet",t).textContent,l=Y("TileMatrix",t),o=i.find((e=>{const t=$("Identifier",e),i=null===t||void 0===t?void 0:t.textContent;return!!(i===r||r.split(":")&&r.split(":")[1]===i)})),s=$("TileMatrixSetLimits",t),n=s&&G("TileMatrixLimits",s),a=new Map;if(null!==n&&void 0!==n&&n.length)for(const f of n){const e=$("TileMatrix",f).textContent,t=+$("MinTileRow",f).textContent,i=+$("MaxTileRow",f).textContent,r=+$("MinTileCol",f).textContent,l=+$("MaxTileCol",f).textContent;a.set(e,{minCol:r,maxCol:l,minRow:t,maxRow:i})}const u=Q("SupportedCRS",o).toLowerCase(),c=function(e,t){return ae($("TileMatrix",e),t)}(o,u),d=c.spatialReference,p=$("TileMatrix",o),h=[parseInt(Q("TileWidth",p),10),parseInt(Q("TileHeight",p),10)],m=[];l.length?l.forEach(((e,t)=>{const i=X("TileMatrix","Identifier",e,o);m.push(pe(i,u,t,r,a))})):G("TileMatrix",o).forEach(((e,t)=>{m.push(pe(e,u,t,r,a))}));const y=function(e,t,i,r,l){const o=$("BoundingBox",t);let s,n,a,u,c,d;if(o&&(s=Q("LowerCorner",o).split(" "),n=Q("UpperCorner",o).split(" ")),s&&s.length>1&&n&&n.length>1)a=parseFloat(s[0]),c=parseFloat(s[1]),u=parseFloat(n[0]),d=parseFloat(n[1]);else{const e=$("TileMatrix",t),o=parseInt(Q("MatrixWidth",e),10),s=parseInt(Q("MatrixHeight",e),10);a=i.x,d=i.y,u=a+o*r[0]*l.resolution,c=d-s*r[1]*l.resolution}return function(e,t,i){return"1.0.0"===e&&(0,B.m)(t.wkid)&&!(i.spatialReference.isGeographic&&i.x<-90&&i.y>=-90)}(e,i.spatialReference,i)?new w.A(c,a,d,u,i.spatialReference):new w.A(a,c,u,d,i.spatialReference)}(e,o,c,h,m[0]).toJSON(),v=new L.A({dpi:96,spatialReference:d,size:h,origin:c,lods:m}).toJSON();return{id:r,fullExtent:y,tileInfo:v}}(e,t,i)))}function ne(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const i=function(e){return e.includes("crs84")||e.includes("crs:84")?ue.CRS84:e.includes("crs83")||e.includes("crs:83")?ue.CRS83:e.includes("crs27")||e.includes("crs:27")?ue.CRS27:null}(e);return null!=i&&(t=i),{wkid:t}}function ae(e,t){const i=ne(t),[r,l]=Q("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),o=t.includes("epsg")&&(0,B.m)(i.wkid);return new W.A(o?{x:l,y:r,spatialReference:i}:{x:r,y:l,spatialReference:i})}var ue,ce,de;function pe(e,t,i,r,l){var o;const s=ne(t),n=Q("Identifier",e);let a=parseFloat(Q("ScaleDenominator",e));const u=he(s.wkid,a,r);a*=96/H;const c=+Q("MatrixWidth",e),d=+Q("MatrixHeight",e),{maxCol:p=c-1,maxRow:h=d-1,minCol:m=0,minRow:y=0}=null!==(o=l.get(n))&&void 0!==o?o:{},{x:v,y:f}=ae(e,t);return new q.A({cols:[m,p],level:i,levelValue:n,origin:[v,f],scale:a,resolution:u,rows:[y,h]})}function he(e,t,i){let r;return r=k.A.hasOwnProperty(""+e)?k.A.values[k.A[e]]:"default028mm"===i?6370997*Math.PI/180:(0,N.y7)(e).metersPerDegree,7*t/25e3/r}(ce=ue||(ue={}))[ce.CRS84=4326]="CRS84",ce[ce.CRS83=4269]="CRS83",ce[ce.CRS27=4267]="CRS27";const me={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},ye=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let ve=de=class extends((0,S.d)((0,I.J)((0,b.j)((0,A.q)((0,T.A)((0,c.P)(M.A))))))){constructor(){super(...arguments),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([(0,h.wB)((()=>this.activeLayer),((e,t)=>{var i;t&&!(null!==(i=this.sublayers)&&void 0!==i&&i.includes(t))&&(t.layer=null,t.parent=null),e&&(e.layer=this,e.parent=this)}),h.OH),(0,h.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.layer=this,t.parent=this}),h.OH),(0,h.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=null,t.parent=null}),h.OH),(0,h.wB)((()=>this.sublayers),((e,t)=>{if(t)for(const i of t)i.layer=null,i.parent=null;if(e)for(const i of e)i.layer=this,i.parent=this}),h.OH)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(p.QP).then((()=>this._fetchService(e))).catch((e=>{throw(0,p.QP)(e),new a.A("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this)}readActiveLayerFromService(e,t,i){this.activeLayer||(this.activeLayer=new D);let r=t.layers.find((e=>e.id===this.activeLayer.id));return r||(r=t.layers[0]),this.activeLayer.read(r,i),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:i,wmtsInfo:r}=t,l=i?this._getLowerCasedUrlParams(i):null,o=null===r||void 0===r?void 0:r.layerIdentifier;let s=null;const n=null===r||void 0===r?void 0:r.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(s=n[0]):s=n);const a=null===l||void 0===l?void 0:l.format,u=null===l||void 0===l?void 0:l.style;return new D({id:o,imageFormat:a,styleId:u,tileMatrixSetId:s})}writeActiveLayer(e,t,i,r){const l=this.activeLayer;t.templateUrl=this.getUrlTemplate(l.id,l.tileMatrixSetId,l.imageFormat,l.styleId);const o=(0,d.wc)("tileMatrixSet.tileInfo",l);t.tileInfo=o?o.toJSON(r):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:l.id,tileMatrixSet:l.tileMatrixSetId}}readCustomParameters(e,t){const i=t.wmtsInfo;return i?this._mergeParams(i.customParameters,i.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,i){return function(e,t){return e.map((e=>{const i=new D;return i.read(e,t),i}))}(t.layers,i)}get supportedSpatialReferences(){var e,t;return null!==(e=null===(t=this.activeLayer.tileMatrixSets)||void 0===t?void 0:t.map((e=>{var t;return null===(t=e.tileInfo)||void 0===t?void 0:t.spatialReference})).toArray().filter(s.Ru))&&void 0!==e?e:[]}get tilemapCache(){var e;const t=null===(e=this.activeLayer)||void 0===e||null===(e=e.tileMatrixSet)||void 0===e?void 0:e.tileInfo;return t?new P.A(t):void 0}get title(){var e,t;return null!==(e=null===(t=this.activeLayer)||void 0===t?void 0:t.title)&&void 0!==e?e:"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),i=this._getTileMatrixSetById(e.tileMatrixSetId),r=null===i||void 0===i?void 0:i.tileInfo,l=e.fullExtent,o=new E.x({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new x.default({fullExtent:l,urlTemplate:t,tileInfo:r,wmtsInfo:o})}async fetchTile(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=r,s=this.getTileUrl(e,t,i),{data:n}=await(0,o.A)(s,{responseType:"image",signal:l});return n}async fetchImageBitmapTile(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=r;if(this.fetchTile!==de.prototype.fetchTile){const o=await this.fetchTile(e,t,i,r);return(0,_.C)(o,e,t,i,l)}const s=this.getTileUrl(e,t,i),{data:n}=await(0,o.A)(s,{responseType:"blob",signal:l});return(0,_.C)(n,e,t,i,l)}findSublayerById(e){var t;return null===(t=this.sublayers)||void 0===t?void 0:t.find((t=>t.id===e))}getTileUrl(e,t,i){var r;const l=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),o=null===l||void 0===l||null===(r=l.tileInfo)||void 0===r?void 0:r.lods[e],s=o?o.levelValue||"".concat(o.level):"".concat(e);let n=this.resourceInfo?"":ie({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,i);return n||(n=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,s).replaceAll(/\{row\}/gi,"".concat(t)).replaceAll(/\{col\}/gi,"".concat(i))),n=this._appendCustomLayerParameters(n),n}getUrlTemplate(e,t,i,r){if(!this.resourceInfo){const i=function(e,t,i,r){const{dimensionMap:l}=e,o=te(e,t);let s="";if(o&&o.length>0){var n,a;const e=null===(n=l.get(t).dimensions)||void 0===n?void 0:n[0],u=null===(a=l.get(t).dimensions2)||void 0===a?void 0:a[0];s=o[0].template,s.endsWith(".xxx")&&(s=s.slice(0,-4)),s=s.replaceAll(/\{Style\}/gi,r),s=s.replaceAll(/\{TileMatrixSet\}/gi,i),s=s.replaceAll(/\{TileMatrix\}/gi,"{level}"),s=s.replaceAll(/\{TileRow\}/gi,"{row}"),s=s.replaceAll(/\{TileCol\}/gi,"{col}"),s=s.replaceAll(/\{dimensionValue\}/gi,e),s=s.replaceAll(/\{dimensionValue2\}/gi,u)}return s}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,r);if(i)return i}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+r+"&FORMAT="+i+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let l="";return me[i.toLowerCase()]&&(l=me[i.toLowerCase()]),this.url+e+"/"+r+"/"+t+"/{level}/{row}/{col}"+l}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),J(t.data)}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),J(t.data),this.serviceMode=r}catch(i){throw new a.A("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:i})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{var t;null===(t=e.tileMatrixSets)||void 0===t||t.forEach((e=>{var t;const i=e.tileInfo;i&&96!==i.dpi&&(null!==(t=i.lods)&&void 0!==t&&t.forEach((t=>{var r;t.scale=96*t.scale/i.dpi,t.resolution=he(null===(r=i.spatialReference)||void 0===r?void 0:r.wkid,t.scale*H/96,e.id)})),i.dpi=96)}))})),e}(t.data):t.data=function(e,t){var i;e=e.replaceAll(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,l=new Map,o=new Map,s=$("Contents",r);if(!s)throw new a.A("wmtslayer:wmts-capabilities-xml-is-not-valid");const n=$("OperationsMetadata",r),u=null===n||void 0===n?void 0:n.querySelector("[name='GetTile']"),c=null===u||void 0===u?void 0:u.getElementsByTagName("Get"),d=c&&Array.prototype.slice.call(c),p=null===(i=t.url)||void 0===i?void 0:i.indexOf("https"),h=void 0!==p&&p>-1;let m,y,v=t.serviceMode,f=null===t||void 0===t?void 0:t.url;if(null!==d&&void 0!==d&&d.length&&d.some((e=>{const t=$("Constraint",e);return!t||X("AllowedValues","Value",v,t)?(f=e.attributes[0].nodeValue,!0):(!t||X("AllowedValues","Value","RESTful",t)||X("AllowedValues","Value","REST",t)?y=e.attributes[0].nodeValue:t&&!X("AllowedValues","Value","KVP",t)||(m=e.attributes[0].nodeValue),!1)})),!f)if(y)f=y,v="RESTful";else if(m)f=m,v="KVP";else{const e=$("ServiceMetadataURL",r);f=null===e||void 0===e?void 0:e.getAttribute("xlink:href")}const g=f.indexOf("1.0.0/");-1===g&&"RESTful"===v?f+="/":g>-1&&(f=f.substring(0,g)),"KVP"===v&&(f+=g>-1?"":"?"),h&&(f=f.replace(/^http:/i,"https:"));const w=Q("ServiceIdentification>ServiceTypeVersion",r),M=Q("ServiceIdentification>AccessConstraints",r),x=M&&/^none$/i.test(M)?null:M,S=G("Layer",s),A=G("TileMatrixSet",s),T=S.map((e=>{const t=Q("Identifier",e);return l.set(t,e),ee(t,e,A,h,w)}));return{copyright:x,dimensionMap:o,layerMap:l,layers:T,serviceMode:v,tileUrl:f}}(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const i=this._getCapabilitiesUrl(e);return await(0,o.A)(i,{...t,responseType:"text"})}_getTileMatrixSetById(e){var t;const i=this.findSublayerById(this.activeLayer.id),r=null===i||void 0===i||null===(t=i.tileMatrixSets)||void 0===t?void 0:t.find((t=>t.id===e));return r}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,u.o8)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const i=(0,m.An)(e),r={...i.query,...t},l=(0,m.x0)(r);return""===l?i.path:"".concat(i.path,"?").concat(l)}_getCapabilitiesUrl(e){this.url=(0,m.An)(this.url).path;let t=this.url;switch(e){case"KVP":t+="?request=GetCapabilities&service=WMTS&version=".concat(this.version);break;case"RESTful":{const e="/".concat(this.version,"/WMTSCapabilities.xml"),i=new RegExp(e,"i");t=t.replace(i,""),t+=e;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,m.An)(e).query;if(!t)return null;const i={};return Object.keys(t).forEach((e=>{i[e.toLowerCase()]=t[e]})),i}_mergeParams(e,t){const i=this._getLowerCasedUrlParams(t);if(i){const t=Object.keys(i);t.length&&(e=e?(0,u.o8)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||ye.has(t)||(e[t]=i[t])})))}return e}};(0,l._)([(0,y.MZ)()],ve.prototype,"dimensionMap",void 0),(0,l._)([(0,y.MZ)()],ve.prototype,"layerMap",void 0),(0,l._)([(0,y.MZ)({type:D,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],ve.prototype,"activeLayer",void 0),(0,l._)([(0,v.w)("service","activeLayer",["layers"])],ve.prototype,"readActiveLayerFromService",null),(0,l._)([(0,v.w)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],ve.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,l._)([(0,g.K)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:L.A},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],ve.prototype,"writeActiveLayer",null),(0,l._)([(0,y.MZ)({type:String,value:"",json:{write:!0}})],ve.prototype,"copyright",void 0),(0,l._)([(0,y.MZ)({type:["show","hide"]})],ve.prototype,"listMode",void 0),(0,l._)([(0,y.MZ)({json:{read:!0,write:!0}})],ve.prototype,"blendMode",void 0),(0,l._)([(0,y.MZ)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],ve.prototype,"customParameters",void 0),(0,l._)([(0,v.w)(["portal-item","web-document"],"customParameters")],ve.prototype,"readCustomParameters",null),(0,l._)([(0,y.MZ)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],ve.prototype,"customLayerParameters",void 0),(0,l._)([(0,y.MZ)({type:w.A,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],ve.prototype,"fullExtent",void 0),(0,l._)([(0,y.MZ)({readOnly:!0})],ve.prototype,"fullExtents",null),(0,l._)([(0,y.MZ)({type:["WebTiledLayer"]})],ve.prototype,"operationalLayerType",void 0),(0,l._)([(0,y.MZ)()],ve.prototype,"resourceInfo",void 0),(0,l._)([(0,y.MZ)()],ve.prototype,"serviceMode",void 0),(0,l._)([(0,v.w)(["portal-item","web-document"],"serviceMode",["templateUrl"])],ve.prototype,"readServiceMode",null),(0,l._)([(0,y.MZ)({type:n.A.ofType(D)})],ve.prototype,"sublayers",void 0),(0,l._)([(0,v.w)("service","sublayers",["layers"])],ve.prototype,"readSublayersFromService",null),(0,l._)([(0,y.MZ)({readOnly:!0})],ve.prototype,"supportedSpatialReferences",null),(0,l._)([(0,y.MZ)({readOnly:!0})],ve.prototype,"tilemapCache",null),(0,l._)([(0,y.MZ)({json:{read:{source:"title"}}})],ve.prototype,"title",null),(0,l._)([(0,y.MZ)({json:{read:!1},readOnly:!0,value:"wmts"})],ve.prototype,"type",void 0),(0,l._)([(0,y.MZ)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],ve.prototype,"url",null),(0,l._)([(0,y.MZ)()],ve.prototype,"version",void 0),ve=de=(0,l._)([(0,f.$)("esri.layers.WMTSLayer")],ve);const fe=ve},24552:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});var r,l=i(35143),o=(i(35238),i(3825)),s=i(50076),n=i(77717),a=i(88685),u=i(90534),c=i(46053),d=(i(81806),i(76460),i(47249),i(28379)),p=i(85842),h=i(17707),m=i(25515),y=i(65624),v=i(11270),f=i(94729),g=i(21617),w=i(5682),M=i(16852),x=i(22848),S=i(88235),A=i(90565),T=i(76797),I=i(13312),b=i(13904);let _=r=class extends((0,y.d)((0,g.J)((0,w.j)((0,v.q)((0,f.A)((0,n.P)(m.A))))))){constructor(){super(...arguments),this.copyright="",this.fullExtent=new T.A(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,I.A.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=I.A.WebMercator,this.subDomains=null,this.tileInfo=new S.A({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new b.A({x:-20037508.342787,y:20037508.342787,spatialReference:I.A.WebMercator}),spatialReference:I.A.WebMercator,lods:[new x.A({level:0,scale:591657527.591555,resolution:156543.033928}),new x.A({level:1,scale:295828763.795777,resolution:78271.5169639999}),new x.A({level:2,scale:147914381.897889,resolution:39135.7584820001}),new x.A({level:3,scale:73957190.948944,resolution:19567.8792409999}),new x.A({level:4,scale:36978595.474472,resolution:9783.93962049996}),new x.A({level:5,scale:18489297.737236,resolution:4891.96981024998}),new x.A({level:6,scale:9244648.868618,resolution:2445.98490512499}),new x.A({level:7,scale:4622324.434309,resolution:1222.99245256249}),new x.A({level:8,scale:2311162.217155,resolution:611.49622628138}),new x.A({level:9,scale:1155581.108577,resolution:305.748113140558}),new x.A({level:10,scale:577790.554289,resolution:152.874056570411}),new x.A({level:11,scale:288895.277144,resolution:76.4370282850732}),new x.A({level:12,scale:144447.638572,resolution:38.2185141425366}),new x.A({level:13,scale:72223.819286,resolution:19.1092570712683}),new x.A({level:14,scale:36111.909643,resolution:9.55462853563415}),new x.A({level:15,scale:18055.954822,resolution:4.77731426794937}),new x.A({level:16,scale:9027.977411,resolution:2.38865713397468}),new x.A({level:17,scale:4513.988705,resolution:1.19432856685505}),new x.A({level:18,scale:2256.994353,resolution:.597164283559817}),new x.A({level:19,scale:1128.497176,resolution:.298582141647617}),new x.A({level:20,scale:564.248588,resolution:.14929107082380833}),new x.A({level:21,scale:282.124294,resolution:.07464553541190416}),new x.A({level:22,scale:141.062147,resolution:.03732276770595208}),new x.A({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){var t;const i=new u.s0(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&(null===(t=i.authority)||void 0===t?void 0:t.includes("{subDomain}"))&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new s.A("web-tile-layer:load","WebTileLayer (title: '".concat(this.title,"', id: '").concat(this.id,"') ").concat(e))}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){var i;return e||I.A.fromJSON(null===(i=t.fullExtent)||void 0===i?void 0:i.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:i}=this,r=new u.s0(t),l=r.scheme?r.scheme+"://":"//",o=l+r.authority+"/",s=r.authority;if(null!==s&&void 0!==s&&s.includes("{subDomain}")){if(i&&i.length>0&&s.split(".").length>1)for(const n of i)e.push(l+s.replaceAll(/\{subDomain\}/gi,n)+"/")}else e.push(o);return e.map(u.Il)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new u.s0(e),i=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(i.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){(0,u.BQ)(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=(0,u.S8)(e)),t.templateUrl=e}fetchTile(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=r,s=this.getTileUrl(e,t,i),n={responseType:"image",signal:l,query:{...this.refreshParameters}};return(0,o.A)(s,n).then((e=>e.data))}async fetchImageBitmapTile(e,t,i){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:s}=l;if(this.fetchTile!==r.prototype.fetchTile){const r=await this.fetchTile(e,t,i,l);return(0,M.C)(r,e,t,i,s)}const n=this.getTileUrl(e,t,i),a={responseType:"blob",signal:s,query:{...this.refreshParameters}},{data:u}=await(0,o.A)(n,a);return(0,M.C)(u,e,t,i,s)}getTileUrl(e,t,i){const{levelValues:r,tileServers:l,urlPath:o}=this;if(!r||!l||!o)return"";const s=r[e];return l[t%l.length]+(0,a.HC)(o,{level:s,z:s,col:i,x:i,row:t,y:t})}};(0,l._)([(0,c.MZ)({type:String,value:"",json:{write:!0}})],_.prototype,"copyright",void 0),(0,l._)([(0,c.MZ)({type:T.A,json:{write:!0},nonNullable:!0})],_.prototype,"fullExtent",void 0),(0,l._)([(0,c.MZ)({readOnly:!0,json:{read:!1,write:!1}})],_.prototype,"legendEnabled",void 0),(0,l._)([(0,c.MZ)({type:["show","hide"]})],_.prototype,"listMode",void 0),(0,l._)([(0,c.MZ)({json:{read:!0,write:!0}})],_.prototype,"blendMode",void 0),(0,l._)([(0,c.MZ)()],_.prototype,"levelValues",null),(0,l._)([(0,c.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],_.prototype,"isReference",void 0),(0,l._)([(0,c.MZ)({type:["WebTiledLayer"],value:"WebTiledLayer"})],_.prototype,"operationalLayerType",void 0),(0,l._)([(0,c.MZ)({readOnly:!0,json:{read:!1,write:!1}})],_.prototype,"popupEnabled",void 0),(0,l._)([(0,c.MZ)({type:I.A})],_.prototype,"spatialReference",void 0),(0,l._)([(0,d.w)("spatialReference",["spatialReference","fullExtent.spatialReference"])],_.prototype,"readSpatialReference",null),(0,l._)([(0,c.MZ)({type:[String],json:{write:!0}})],_.prototype,"subDomains",void 0),(0,l._)([(0,c.MZ)({type:S.A,json:{write:!0}})],_.prototype,"tileInfo",void 0),(0,l._)([(0,c.MZ)({readOnly:!0})],_.prototype,"tileServers",null),(0,l._)([(0,c.MZ)({json:{read:!1}})],_.prototype,"type",void 0),(0,l._)([(0,c.MZ)()],_.prototype,"urlPath",null),(0,l._)([(0,c.MZ)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],_.prototype,"urlTemplate",void 0),(0,l._)([(0,d.w)("urlTemplate",["urlTemplate","templateUrl"])],_.prototype,"readUrlTemplate",null),(0,l._)([(0,h.K)("urlTemplate",{templateUrl:{type:String}})],_.prototype,"writeUrlTemplate",null),(0,l._)([(0,c.MZ)({type:A.x,json:{write:!0}})],_.prototype,"wmtsInfo",void 0),_=r=(0,l._)([(0,p.$)("esri.layers.WebTileLayer")],_);const L=_},65660:(e,t,i)=>{i.d(t,{m:()=>l});const r=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function l(e){return null!=e&&r.some((t=>{let[i,r]=t;return e>=i&&e<=r}))}},83497:(e,t,i)=>{function r(e,t){if(e&&t)for(const i of e.children)if(i.localName in t){const e=t[i.localName];if("function"==typeof e){const t=e(i);t&&r(i,t)}else r(i,e)}}function*l(e,t){for(const i of e.children)if(i.localName in t){const e=t[i.localName];"function"==typeof e?yield e(i):yield*l(i,e)}}i.d(t,{i:()=>l,p:()=>r})},44067:(e,t,i)=>{i.d(t,{A:()=>o});var r=i(50076),l=i(50346);class o{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.lods[e.lods.length-1].level;this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){var r;const l=null===(r=this.tileInfo)||void 0===r?void 0:r.lodAt(e);return!l||e<this.minLOD||e>this.maxLOD?"unavailable":l.cols&&l.rows?i>=l.cols[0]&&i<=l.cols[1]&&t>=l.rows[0]&&t<=l.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,o){await(0,l.NO)(o);const s=this.getAvailability(e,t,i);if("unavailable"===s)throw new r.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return s}async fetchAvailabilityUpsample(e,t,i,r,o){await(0,l.NO)(o),r.level=e,r.row=t,r.col=i;const s=this.tileInfo;return s.updateTileInfo(r),this.fetchAvailability(e,t,i,o).catch((e=>{if((0,l.zf)(e))throw e;if(s.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r,o);throw e}))}}},90565:(e,t,i)=>{i.d(t,{x:()=>u});var r,l=i(35143),o=i(42553),s=i(53084),n=i(46053),a=(i(81806),i(76460),i(85842));let u=r=class extends o.oY{constructor(e){super(e)}clone(){return new r({customLayerParameters:(0,s.o8)(this.customLayerParameters),customParameters:(0,s.o8)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,l._)([(0,n.MZ)({json:{type:Object,write:!0}})],u.prototype,"customLayerParameters",void 0),(0,l._)([(0,n.MZ)({json:{type:Object,write:!0}})],u.prototype,"customParameters",void 0),(0,l._)([(0,n.MZ)({type:String,json:{write:!0}})],u.prototype,"layerIdentifier",void 0),(0,l._)([(0,n.MZ)({type:String,json:{write:!0}})],u.prototype,"tileMatrixSet",void 0),(0,l._)([(0,n.MZ)({type:String,json:{write:!0}})],u.prototype,"url",void 0),u=r=(0,l._)([(0,a.$)("esri.layers.support.WMTSLayerInfo")],u)},16852:(e,t,i)=>{i.d(t,{C:()=>s,m:()=>o});var r=i(50076),l=i(50346);async function o(e,t,i){let o;try{o=await createImageBitmap(e)}catch(s){throw new r.A("request:server","Unable to load ".concat(t),{url:t,error:s})}return(0,l.Te)(i),o}async function s(e,t,i,o,s){let n;try{n=await createImageBitmap(e)}catch(a){throw new r.A("request:server","Unable to load tile ".concat(t,"/").concat(i,"/").concat(o),{error:a,level:t,row:i,col:o})}return(0,l.Te)(s),n}}}]);
//# sourceMappingURL=1845.89d06016.chunk.js.map