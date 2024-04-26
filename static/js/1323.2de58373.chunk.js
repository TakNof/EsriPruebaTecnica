"use strict";(self.webpackChunkweb_arcgis_app=self.webpackChunkweb_arcgis_app||[]).push([[1323],{46530:(e,t,i)=>{function r(e){var t;const i=e.layer;return"floorInfo"in i&&null!==(t=i.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?o(e.view.floors,i.floorInfo.floorField):null}function n(e,t){var i;return"floorInfo"in t&&null!==(i=t.floorInfo)&&void 0!==i&&i.floorField?o(e,t.floorInfo.floorField):null}function o(e,t){if(null===e||void 0===e||!e.length)return null;const i=e.filter((e=>""!==e)).map((e=>"'".concat(e,"'")));return i.push("''"),"".concat(t," IN (").concat(i.join(","),") OR ").concat(t," IS NULL")}i.d(t,{E:()=>r,f:()=>n})},65419:(e,t,i)=>{i.d(t,{Sk:()=>o,Zx:()=>n,_X:()=>l});var r=i(49140);function n(e,t,i){const r=t.flatten((e=>{let{sublayers:t}=e;return t})).length;return r!==e.length||(!!e.some((e=>e.originIdOf("minScale")>i||e.originIdOf("maxScale")>i||e.originIdOf("renderer")>i||e.originIdOf("labelingInfo")>i||e.originIdOf("opacity")>i||e.originIdOf("labelsVisible")>i||e.originIdOf("source")>i))||!s(e,t))}function o(e,t,i){return!!e.some((e=>{const t=e.source,n=!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(null==t.gdbVersion||t.gdbVersion===i);return e.commitProperty("renderer"),e.commitProperty("labelingInfo"),e.commitProperty("opacity"),e.commitProperty("labelsVisible"),!n||e.originIdOf("renderer")>r.Gr.SERVICE||e.originIdOf("labelingInfo")>r.Gr.SERVICE||e.originIdOf("opacity")>r.Gr.SERVICE||e.originIdOf("labelsVisible")>r.Gr.SERVICE}))||!s(e,t)}function s(e,t){if(null===e||void 0===e||!e.length||null==t)return!0;const i=t.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).map((e=>e.id)).toArray();if(e.length>i.length)return!1;let r=0;const n=i.length;for(const{id:o}of e){for(;r<n&&i[r]!==o;)r++;if(r>=n)return!1}return!0}function l(e){return!!e&&e.some((e=>{var t;return null!=e.minScale||null!=(null===(t=e.layerDefinition)||void 0===t?void 0:t.minScale)}))}},16060:(e,t,i)=>{i.d(t,{LG:()=>c,mb:()=>y,yr:()=>p});var r=i(50346),n=i(63919),o=i(85827),s=i(59422),l=i(8794),a=i(96145),u=i(93345),h=i(98433),d=i(96673);function c(e){return e&&"render"in e}function p(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class y extends l.q{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,n=(0,r.Tw)();return(0,r.NY)(t,(()=>i.abort())),(0,r.NY)(i,(e=>n.reject(e))),this._uploadStatus={controller:i,resolver:n},this.source=e,n.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,n.D_)(this.transforms.displayViewScreenMat3),[i,r]=e.toScreenNoRotation([0,0],[this.x,this.y]),o=this.resolution/this.pixelRatio/e.resolution,l=o*this.width,a=o*this.height,u=Math.PI*this.rotation/180;(0,n.Tl)(t,t,(0,s.fA)(i,r)),(0,n.Tl)(t,t,(0,s.fA)(l/2,a/2)),(0,n.e$)(t,t,-u),(0,n.Tl)(t,t,(0,s.fA)(-l/2,-a/2)),(0,n.Oe)(t,t,(0,s.fA)(l,a)),(0,n.lw)(this.transforms.displayViewScreenMat3,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture(e){let{context:t,painter:i}=e;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const n=function(e){var t;return c(e)?e instanceof a.A?null===(t=e.getRenderedRasterPixels())||void 0===t?void 0:t.renderedRasterPixels:p(e):e}(this.source);try{if(null!=this._uploadStatus){const{controller:e,resolver:t}=this._uploadStatus,r={signal:e.signal},{width:o,height:s}=this,l=this._texture,a=i.textureUploadManager;await a.enqueueTextureUpdate({data:n,texture:l,width:o,height:s},r),t.resolve(),this._uploadStatus=null}else this._texture.setData(n);this.ready()}catch(o){(0,r.jH)(o)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,o.vt)()}}_createTexture(e){const t=this.immutable,i=new d.R;return i.internalFormat=t?u.H0.RGBA8:u.Ab.RGBA,i.wrapMode=u.pF.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new h.g(e,i)}}},96145:(e,t,i)=>{i.d(t,{A:()=>r});class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){var t;const i=this.pixelBlock;if(null==i)return;const r=this.filter({extent:this.extent,pixelBlock:null!==(t=this.originalPixelBlock)&&void 0!==t?t:i});if(null==r.pixelBlock)return;r.pixelBlock.maskIsAlpha&&(r.pixelBlock.premultiplyAlpha=!0);const n=r.pixelBlock.getAsRGBA(),o=e.createImageData(r.pixelBlock.width,r.pixelBlock.height);o.data.set(n),e.putImageData(o,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},70822:(e,t,i)=>{i.d(t,{A:()=>u});var r=i(35143),n=(i(76460),i(81806),i(47249),i(50076),i(85842)),o=i(61551),s=i(8995),l=i(13692);let a=class extends s.f{get hasHighlight(){return this.children.some((e=>e.hasData))}renderChildren(e){this.attributeView.update(),e.drawPhase===o.S5.HIGHLIGHT&&this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),(0,l.lB)(e,!0,(e=>{this._renderChildren(e,o.RI.All)})))}};a=(0,r._)([(0,n.$)("esri.views.2d.layers.graphics.HighlightGraphicContainer")],a);const u=a},93080:(e,t,i)=>{i.d(t,{Uh:()=>ee,ox:()=>K});var r=i(35143),n=i(39356),o=i(91967),s=i(18690),l=i(94643),a=i(50076),u=i(54901),h=i(81806),d=i(87663),c=i(50346),p=i(68134),y=i(31633),f=i(46053),m=(i(76460),i(85842)),g=i(76797),v=i(68002),x=i(53430),w=i(46530);function _(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function b(e,t){var i;return"number"==typeof e?e:null!==e&&void 0!==e&&null!==(i=e.stops)&&void 0!==i&&i.length?function(e){let t=0,i=0;for(let r=0;r<e.length;r++){const n=e[r].size;"number"==typeof n&&(t+=n,i++)}return t/i}(e.stops):t}function I(e,t){if(!t)return e;const i=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:i,minSize:r}=t;return(b(i,e)+b(r,e))/2}));let r=0;const n=i.length;if(0===n)return e;for(let s=0;s<n;s++)r+=i[s];const o=Math.floor(r/n);return Math.max(o,e)}function M(e){const t=null===e||void 0===e?void 0:e.renderer,i="touch"===(null===e||void 0===e?void 0:e.pointerType)?9:6;if(!t)return i;const r="visualVariables"in t?I(i,t.visualVariables):i;if("simple"===t.type)return _(r,t.symbol);if("unique-value"===t.type){var n;let e=r;return null!==(n=t.uniqueValueInfos)&&void 0!==n&&n.forEach((t=>{e=_(e,t.symbol)})),e}if("class-breaks"===t.type){let e=r;return t.classBreakInfos.forEach((t=>{e=_(e,t.symbol)})),e}return"dot-density"===t.type||t.type,r}var S=i(3825),A=i(1438),R=i(54994),T=i(34154),E=i(19902),F=i(80963),P=i(65419);function O(e,t){var i;const{dpi:r,gdbVersion:n,geometry:o,geometryPrecision:s,height:l,historicMoment:a,layerOption:u,mapExtent:h,maxAllowableOffset:d,returnFieldName:c,returnGeometry:p,returnUnformattedValues:y,returnZ:f,spatialReference:m,timeExtent:g,tolerance:v,width:x}=e.toJSON(),{dynamicLayers:w,layerDefs:_,layerIds:b}=V(e),I=null!=(null===t||void 0===t?void 0:t.geometry)?t.geometry:null,M={historicMoment:a,geometryPrecision:s,maxAllowableOffset:d,returnFieldName:c,returnGeometry:p,returnUnformattedValues:y,returnZ:f,tolerance:v},S=(null===I||void 0===I?void 0:I.toJSON())||o;M.imageDisplay="".concat(x,",").concat(l,",").concat(r),n&&(M.gdbVersion=n),S&&(delete S.spatialReference,M.geometry=JSON.stringify(S),M.geometryType=(0,E.$B)(S));const A=null!==(i=null!==m&&void 0!==m?m:null===S||void 0===S?void 0:S.spatialReference)&&void 0!==i?i:null===h||void 0===h?void 0:h.spatialReference;if(A&&(M.sr=(0,F.YX)(A)),M.time=g?[g.start,g.end].join(","):null,h){const{xmin:e,ymin:t,xmax:i,ymax:r}=h;M.mapExtent="".concat(e,",").concat(t,",").concat(i,",").concat(r)}return _&&(M.layerDefs=_),w&&!_&&(M.dynamicLayers=w),M.layers="popup"===u?"visible":u,b&&!w&&(M.layers+=":".concat(b.join(","))),M}function V(e){var t;const{mapExtent:i,floors:r,width:n,sublayers:o,layerIds:s,layerOption:l,gdbVersion:a}=e,u=null===o||void 0===o||null===(t=o.find((e=>null!=e.layer)))||void 0===t||null===(t=t.layer)||void 0===t?void 0:t.serviceSublayers,h="popup"===l,d={},c=(0,v.X_)({extent:i,width:n,spatialReference:null===i||void 0===i?void 0:i.spatialReference}),p=[],y=e=>{const t=0===c,i=0===e.minScale||c<=e.minScale,r=0===e.maxScale||c>=e.maxScale;if(e.visible&&(t||i&&r))if(e.sublayers)e.sublayers.forEach(y);else{if(!1===(null===s||void 0===s?void 0:s.includes(e.id))||h&&(!e.popupTemplate||!e.popupEnabled))return;p.unshift(e)}};if(null!==o&&void 0!==o&&o.forEach(y),o&&!p.length)d.layerIds=[];else{const e=(0,P.Sk)(p,u,a),t=p.map((e=>{const t=(0,w.f)(r,e);return e.toExportImageJSON(t)}));if(e)d.dynamicLayers=JSON.stringify(t);else{if(o){let e=p.map((e=>{let{id:t}=e;return t}));s&&(e=e.filter((e=>s.includes(e)))),d.layerIds=e}else(null===s||void 0===s?void 0:s.length)&&(d.layerIds=s);const e=function(e,t){const i=!(null===e||void 0===e||!e.length),r=t.filter((e=>null!=e.definitionExpression||i&&null!=e.floorInfo));return r.length?r.map((t=>{const i=(0,w.f)(e,t),r=(0,T.m)(i,t.definitionExpression);return{id:t.id,definitionExpression:null!==r&&void 0!==r?r:void 0}})):null}(r,p);if(null!=e&&e.length){const t={};for(const i of e)i.definitionExpression&&(t[i.id]=i.definitionExpression);Object.keys(t).length&&(d.layerDefs=JSON.stringify(t))}}}return d}var G,k=i(35238),B=i(82111),Z=i(42553),j=i(40565),N=(i(47249),i(17707)),H=i(13312);let L=G=class extends Z.oY{static from(e){return(0,j.PZ)(G,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}};(0,r._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"dpi",void 0),(0,r._)([(0,f.MZ)()],L.prototype,"floors",void 0),(0,r._)([(0,f.MZ)({type:String,json:{write:!0}})],L.prototype,"gdbVersion",void 0),(0,r._)([(0,f.MZ)({types:k.yR,json:{read:E.rS,write:!0}})],L.prototype,"geometry",void 0),(0,r._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"geometryPrecision",void 0),(0,r._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"height",void 0),(0,r._)([(0,f.MZ)({type:Date})],L.prototype,"historicMoment",void 0),(0,r._)([(0,N.K)("historicMoment")],L.prototype,"writeHistoricMoment",null),(0,r._)([(0,f.MZ)({type:[Number],json:{write:!0}})],L.prototype,"layerIds",void 0),(0,r._)([(0,f.MZ)({type:["top","visible","all","popup"],json:{write:!0}})],L.prototype,"layerOption",void 0),(0,r._)([(0,f.MZ)({type:g.A,json:{write:!0}})],L.prototype,"mapExtent",void 0),(0,r._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"maxAllowableOffset",void 0),(0,r._)([(0,f.MZ)({type:Boolean,json:{write:!0}})],L.prototype,"returnFieldName",void 0),(0,r._)([(0,f.MZ)({type:Boolean,json:{write:!0}})],L.prototype,"returnGeometry",void 0),(0,r._)([(0,f.MZ)({type:Boolean,json:{write:!0}})],L.prototype,"returnM",void 0),(0,r._)([(0,f.MZ)({type:Boolean,json:{write:!0}})],L.prototype,"returnUnformattedValues",void 0),(0,r._)([(0,f.MZ)({type:Boolean,json:{write:!0}})],L.prototype,"returnZ",void 0),(0,r._)([(0,f.MZ)({type:H.A,json:{write:!0}})],L.prototype,"spatialReference",void 0),(0,r._)([(0,f.MZ)()],L.prototype,"sublayers",void 0),(0,r._)([(0,f.MZ)({type:B.A,json:{write:!0}})],L.prototype,"timeExtent",void 0),(0,r._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"tolerance",void 0),(0,r._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"width",void 0),L=G=(0,r._)([(0,m.$)("esri.rest.support.IdentifyParameters")],L);const D=L;var U=i(28379),q=i(31608);let C=class extends Z.oY{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return n.A.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:i,geometry:r}=e;i&&(t.attributes={...i}),null!=r&&(t.geometry=r.toJSON(),t.geometryType=q.Y.toJSON(r.type))}};(0,r._)([(0,f.MZ)({type:String,json:{write:!0}})],C.prototype,"displayFieldName",void 0),(0,r._)([(0,f.MZ)({type:n.A})],C.prototype,"feature",void 0),(0,r._)([(0,U.w)("feature",["attributes","geometry"])],C.prototype,"readFeature",null),(0,r._)([(0,N.K)("feature")],C.prototype,"writeFeature",null),(0,r._)([(0,f.MZ)({type:Number,json:{write:!0}})],C.prototype,"layerId",void 0),(0,r._)([(0,f.MZ)({type:String,json:{write:!0}})],C.prototype,"layerName",void 0),C=(0,r._)([(0,m.$)("esri.rest.support.IdentifyResult")],C);const z=C;async function Q(e,t,i){const r=(t=function(e){return D.from(e)}(t)).geometry?[t.geometry]:[],n=(0,R.Dl)(e);return n.path+="/identify",(0,A.el)(r).then((e=>{const r=O(t,{geometry:null===e||void 0===e?void 0:e[0]}),o=(0,R.lF)({...n.query,f:"json",...r}),s=(0,R.jV)(o,i);return(0,S.A)(n.path,s).then(J).then((e=>function(e,t){if(null===t||void 0===t||!t.length)return e;const i=new Map;function r(e){i.set(e.id,e),e.sublayers&&e.sublayers.forEach(r)}t.forEach(r);for(const n of e.results)n.feature.sourceLayer=i.get(n.layerId);return e}(e,t.sublayers)))}))}function J(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>z.fromJSON(e))),t}var W=i(98976),Y=i(76940),$=i(2257);let X=null;function K(e,t){return"tile"===t.type||"map-image"===t.type}let ee=class extends o.A{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=(0,c.sg)((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([(0,p.on)((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])}async fetchPopupFeaturesAtLocation(e,t){var i,r;const{layerView:{layer:n,view:{scale:o}}}=this;if(!e)throw new a.A("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:n});const s=function(e,t,i){const r=[];if(!e)return r;const n=e=>{const o=0===e.minScale||t<=e.minScale,s=0===e.maxScale||t>=e.maxScale;if(e.visible&&o&&s)if(e.sublayers)e.sublayers.forEach(n);else if(e.popupEnabled){const t=(0,$.D8)(e,{...i,defaultPopupTemplateEnabled:!1});null!=t&&r.unshift({sublayer:e,popupTemplate:t})}};return e.map(n),r}(n.sublayers,o,t);if(!s.length)return[];const l=await async function(e,t){var i;if(null!==(i=e.capabilities)&&void 0!==i&&null!==(i=i.operations)&&void 0!==i&&i.supportsQuery)return!0;try{return await Promise.any(t.map((e=>{let{sublayer:t}=e;return t.load().then((()=>t.capabilities.operations.supportsQuery))})))}catch{return!1}}(n,s);if((null!==(i=null===(r=n.capabilities)||void 0===r||null===(r=r.operations)||void 0===r?void 0:r.supportsIdentify)&&void 0!==i&&!i||!(n.version>=10.5))&&!l)throw new a.A("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:n});return l?this._fetchPopupFeaturesUsingQueries(e,s,t):this._fetchPopupFeaturesUsingIdentify(e,s,t)}clearHighlights(){var e;null===(e=this.highlightGraphics)||void 0===e||e.removeAll()}highlight(e){var t,i;const r=this.highlightGraphics;if(!r)return(0,u.hA)();let o=null;if(e instanceof n.A?o=[e]:l.A.isCollection(e)&&e.length>0?o=e.toArray():Array.isArray(e)&&e.length>0&&(o=e),o=null===(t=o)||void 0===t?void 0:t.filter(s.Ru),null===(i=o)||void 0===i||!i.length)return(0,u.hA)();for(const n of o){const e=n.sourceLayer;null!=e&&"geometryType"in e&&"point"===e.geometryType&&(n.visible=!1)}return r.addMany(o),(0,u.hA)((()=>{var e;return r.removeMany(null!==(e=o)&&void 0!==e?e:[])}))}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:r,highlightGraphicUpdated:n}=this;if(r&&n)for(const o of e){const e=o.sourceLayer&&"renderer"in o.sourceLayer&&o.sourceLayer.renderer;o.sourceLayer&&"geometryType"in o.sourceLayer&&"point"===o.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(o).then((async s=>{var l;s||(s=new Y.A);let a=null;const u="visualVariables"in e?null===(l=e.visualVariables)||void 0===l?void 0:l.find((e=>"size"===e.type)):void 0;u&&(X||(X=(await Promise.resolve().then(i.bind(i,15492))).getSize),a=X(u,o,{view:t.type,scale:t.scale,shape:"simple-marker"===s.type?s.style:null})),a||(a="width"in s&&"height"in s&&null!=s.width&&null!=s.height?Math.max(s.width,s.height):"size"in s?s.size:16),r.includes(o)&&(o.symbol=new Y.A({style:"square",size:a,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),n(o,"symbol"),o.visible=!0)}))}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:i},highlightGraphics:r,highlightGraphicUpdated:n}=this;if(this._highlightGeometriesResolution=e,!n||null===r||void 0===r||!r.length||!t.capabilities.operations.supportsQuery)return;const o=this._getTargetResolution(e),s=new Map;for(const u of r)if(!this._featuresResolutions.has(u)||this._featuresResolutions.get(u)>o){const e=u.sourceLayer;(0,d.tE)(s,e,(()=>new Map)).set(u.getObjectId(),u)}const l=Array.from(s,(e=>{let[t,r]=e;const n=t.createQuery();return n.objectIds=[...r.keys()],n.outFields=[t.objectIdField],n.returnGeometry=!0,n.maxAllowableOffset=o,n.outSpatialReference=i.spatialReference,t.queryFeatures(n)})),a=await Promise.all(l);if(!this.destroyed)for(const{features:u}of a)for(const e of u){const t=e.sourceLayer,i=s.get(t).get(e.getObjectId());i&&r.includes(i)&&(i.geometry=e.geometry,n(i,"geometry"),this._featuresResolutions.set(i,o))}}_getTargetResolution(e){const t=e*(0,y.GA)(this.layerView.view.spatialReference),i=t/16;return i<=10?0:e/t*i}async _fetchPopupFeaturesUsingIdentify(e,t,i){const r=await this._createIdentifyParameters(e,t,i);if(null==r)return[];const{results:n}=await Q(this.layerView.layer.parsedUrl,r,i);return n.map((e=>e.feature))}async _createIdentifyParameters(e,t,i){const{floors:r,layer:n,timeExtent:o,view:{spatialReference:s,scale:l}}=this.layerView;if(!t.length)return null;await Promise.all(t.map((e=>{let{sublayer:t}=e;return t.load(i).catch((()=>{}))})));const a=Math.min((0,h.A)("mapservice-popup-identify-max-tolerance"),n.allSublayers.reduce(((e,t)=>t.renderer?M({renderer:t.renderer,pointerType:null===i||void 0===i?void 0:i.pointerType}):e),2)),u=this.createFetchPopupFeaturesQueryGeometry(e,a),d=(0,v.i1)(l,s),c=Math.round(u.width/d),p=new g.A({xmin:u.center.x-d*c,ymin:u.center.y-d*c,xmax:u.center.x+d*c,ymax:u.center.y+d*c,spatialReference:u.spatialReference});return new D({floors:r,gdbVersion:"gdbVersion"in n?n.gdbVersion:void 0,geometry:e,height:c,layerOption:"popup",mapExtent:p,returnGeometry:!0,spatialReference:s,sublayers:n.sublayers,timeExtent:o,tolerance:a,width:c})}async _fetchPopupFeaturesUsingQueries(e,t,i){const{layerView:{floors:r,timeExtent:n}}=this,o=t.map((async t=>{var o;let{sublayer:s,popupTemplate:l}=t;if(await s.load(i).catch((()=>{})),s.capabilities&&!s.capabilities.operations.supportsQuery)return[];const a=s.createQuery(),u=M({renderer:s.renderer,pointerType:null===i||void 0===i?void 0:i.pointerType}),h=this.createFetchPopupFeaturesQueryGeometry(e,u),d=new Set,[p]=await Promise.all([(0,$.TO)(s,l),null===(o=s.renderer)||void 0===o?void 0:o.collectRequiredFields(d,s.fieldsIndex)]);(0,c.Te)(i),(0,x._w)(d,s.fieldsIndex,p);const y=Array.from(d).sort();if(a.geometry=h,a.outFields=y,a.timeExtent=n,r){const e=r.clone(),t=(0,w.f)(e,s);null!=t&&(a.where=a.where?"(".concat(a.where,") AND (").concat(t,")"):t)}const f=this._getTargetResolution(h.width/u),m=await function(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,W.lw)():Promise.resolve()}(l);(0,c.Te)(i);const g="point"===s.geometryType||m&&m.arcadeUtils.hasGeometryOperations(l);g||(a.maxAllowableOffset=f);let{features:v}=await s.queryFeatures(a,i);const _=g?0:f;v=await async function(e,t,i){const r=e.renderer;return r&&"defaultSymbol"in r&&!r.defaultSymbol&&(t=r.valueExpression?await Promise.all(t.map((e=>r.getSymbolAsync(e,i).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=r.getSymbol(e)))),t}(s,v,i);for(const e of v)this._featuresResolutions.set(e,_);return v}));return(await Promise.allSettled(o)).reduce(((e,t)=>"fulfilled"===t.status?[...e,...t.value]:e),[]).filter(s.Ru)}};(0,r._)([(0,f.MZ)({constructOnly:!0})],ee.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,r._)([(0,f.MZ)({constructOnly:!0})],ee.prototype,"layerView",void 0),(0,r._)([(0,f.MZ)({constructOnly:!0})],ee.prototype,"highlightGraphics",void 0),(0,r._)([(0,f.MZ)({constructOnly:!0})],ee.prototype,"highlightGraphicUpdated",void 0),(0,r._)([(0,f.MZ)({constructOnly:!0})],ee.prototype,"updatingHandles",void 0),ee=(0,r._)([(0,m.$)("esri.views.layers.support.MapServiceLayerViewHelper")],ee)},2257:(e,t,i)=>{i.d(t,{D8:()=>o,TO:()=>n});var r=i(53430);async function n(e){var t,i;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==n)return[];const o=await n.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:s}=n,{objectIdField:l,typeIdField:a,globalIdField:u,relationships:h}=e;if(o.includes("*"))return["*"];const d=s?(0,r.eX)(e):[],c=(0,r.DB)(e.fieldsIndex,[...o,...d]);return a&&c.push(a),c&&l&&null!==(t=e.fieldsIndex)&&void 0!==t&&t.has(l)&&!c.includes(l)&&c.push(l),c&&u&&null!==(i=e.fieldsIndex)&&void 0!==i&&i.has(u)&&!c.includes(u)&&c.push(u),h&&h.forEach((t=>{var i;const{keyField:r}=t;c&&r&&(null===(i=e.fieldsIndex)||void 0===i?void 0:i.has(r))&&!c.includes(r)&&c.push(r)})),c}function o(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}},55754:(e,t,i)=>{i.d(t,{V:()=>o});i(35238);var r=i(31633),n=i(76797);function o(e,t,i){var o;let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new n.A,l=0;if("2d"===i.type)l=t*(null!==(o=i.resolution)&&void 0!==o?o:0);else if("3d"===i.type){const n=i.overlayPixelSizeInMapUnits(e),o=i.basemapSpatialReference;l=null==o||o.equals(i.spatialReference)?t*n:(0,r.GA)(o)/(0,r.GA)(i.spatialReference)}const a=e.x-l,u=e.y-l,h=e.x+l,d=e.y+l,{spatialReference:c}=i;return s.xmin=Math.min(a,h),s.ymin=Math.min(u,d),s.xmax=Math.max(a,h),s.ymax=Math.max(u,d),s.spatialReference=c,s}new n.A}}]);
//# sourceMappingURL=1323.2de58373.chunk.js.map