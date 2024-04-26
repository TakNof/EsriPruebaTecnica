"use strict";(self.webpackChunkweb_arcgis_app=self.webpackChunkweb_arcgis_app||[]).push([[2951],{68002:(e,r,t)=>{t.d(r,{X_:()=>o,i1:()=>n,zx:()=>l});var i=t(15941),s=t(31633);const a=96;function o(e,r){const t=r||e.extent,i=e.width,o=(0,s.GA)(null===t||void 0===t?void 0:t.spatialReference);return t&&i?t.width/i*o*s.dy*a:0}function n(e,r){return e/((0,s.GA)(r)*s.dy*a)}function l(e,r,t){return function(e,r){return 0===r||(0,i.Sp)(e,r)||e<r}(e,r)&&function(e,r){return 0===r||(0,i.Sp)(e,r)||e>r}(e,t)}},82951:(e,r,t)=>{t.r(r),t.d(r,{default:()=>k});var i=t(35143),s=t(3825),a=t(82111),o=t(50076),n=t(27741),l=t(77717),y=t(50346),p=t(46053),u=t(40565),c=(t(47249),t(81806),t(28379)),d=t(85842),h=t(17707),m=t(49140),f=t(76797),g=t(68002),v=t(80963),b=t(25515),S=t(12406),_=t(36648),x=t(19502),M=t(65624),I=t(31362),w=t(11270),Z=t(94729),L=t(21617),P=t(5682),O=t(73907),E=t(78817),T=t(95363),A=t(1420),D=t(16852),F=t(39568),N=t(65419),R=t(38278),j=t(67478);let J=class extends((0,M.d)((0,E.e)((0,P.j)((0,O.I)((0,_.V)((0,x.b)((0,w.q)((0,Z.A)((0,l.P)((0,L.J)((0,S.p)((0,I.d)(b.A))))))))))))){constructor(){super(...arguments),this._exportImageParameters=new A.g({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(y.QP).then((()=>this._fetchService(r)))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,t,i){var s,a;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten((e=>{let{sublayers:r}=e;return r&&r.toArray().reverse()})).toArray();let n=!1;if(null!==(s=this.capabilities)&&void 0!==s&&s.operations.supportsExportMap&&null!==(a=this.capabilities)&&void 0!==a&&null!==(a=a.exportMap)&&void 0!==a&&a.supportsDynamicLayers){const e=(0,m.aB)(i.origin);if(e===m.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;n=(0,N.Zx)(o,e,m.Gr.SERVICE)}else if(e>m.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");n=(0,N.Zx)(o,e.sublayers,(0,m.aB)(e.origin))}}const l=[],y={writeSublayerStructure:n,...i};let p=n;o.forEach((e=>{const r=e.write({},y);l.push(r),p=p||"user"===e.originOf("visible")})),l.some((e=>Object.keys(e).length>1))&&(r.layers=l),p&&(r.visibleLayers=o.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,r,t,i){var s,a;const o=(null===i||void 0===i?void 0:i.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=null!==(s=null===i||void 0===i?void 0:i.floors)&&void 0!==s?s:null,this._exportImageParameters.scale=(0,g.X_)({extent:e,width:r})*o;const n=this._exportImageParameters.toJSON(),l=null===i||void 0===i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},y=null===(a=e)||void 0===a?void 0:a.spatialReference,p=(0,v.YX)(y);n.dpi*=o;const u={};if(null!==i&&void 0!==i&&i.timeExtent){const{start:e,end:r}=i.timeExtent.toJSON();u.time=e&&r&&e===r?""+e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==r&&void 0!==r?r:"null")}else this.timeInfo&&!this.timeInfo.hasLiveData&&(u.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:r+","+t,...n,...l,...u}}async fetchImage(e,r,t,i){const{data:s}=await this._fetchImage("image",e,r,t,i);return s}async fetchImageBitmap(e,r,t,i){const{data:s,url:a}=await this._fetchImage("blob",e,r,t,i);return(0,D.m)(s,a,null===i||void 0===i?void 0:i.signal)}async fetchRecomputedExtents(){const e={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,s.A)(this.url,e),{extent:t,fullExtent:i,timeExtent:o}=r,n=t||i;return{fullExtent:n&&f.A.fromJSON(n),timeExtent:o&&a.A.fromJSON({start:o[0],end:o[1]})}}loadAll(){return(0,n.g)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,R.D)(this,e)}async _fetchImage(e,r,t,i,a){var n,l,p;const u={responseType:e,signal:null!==(n=null===a||void 0===a?void 0:a.signal)&&void 0!==n?n:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,t,i,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},c=this.parsedUrl.path+"/export";if(null!=(null===(l=u.query)||void 0===l?void 0:l.dynamicLayers)&&(null===(p=this.capabilities)||void 0===p||null===(p=p.exportMap)||void 0===p||!p.supportsDynamicLayers))throw new o.A("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:u.query});try{const{data:e}=await(0,s.A)(c,u);return{data:e,url:c}}catch(d){if((0,y.zf)(d))throw d;throw new o.A("mapimagelayer:image-fetch-error","Unable to load image: ".concat(c),{error:d})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:t}=await(0,s.A)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});t&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,p.MZ)((0,j.P6)("dateFieldsTimeReference"))],J.prototype,"dateFieldsTimeZone",void 0),(0,i._)([(0,p.MZ)({type:Boolean})],J.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,p.MZ)()],J.prototype,"dpi",void 0),(0,i._)([(0,p.MZ)()],J.prototype,"gdbVersion",void 0),(0,i._)([(0,p.MZ)()],J.prototype,"imageFormat",void 0),(0,i._)([(0,c.w)("imageFormat",["supportedImageFormatTypes"])],J.prototype,"readImageFormat",null),(0,i._)([(0,p.MZ)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],J.prototype,"imageMaxHeight",void 0),(0,i._)([(0,p.MZ)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],J.prototype,"imageMaxWidth",void 0),(0,i._)([(0,p.MZ)()],J.prototype,"imageTransparency",void 0),(0,i._)([(0,p.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],J.prototype,"isReference",void 0),(0,i._)([(0,p.MZ)({json:{read:!1,write:!1}})],J.prototype,"labelsVisible",void 0),(0,i._)([(0,p.MZ)({type:["ArcGISMapServiceLayer"]})],J.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.MZ)({json:{read:!1,write:!1}})],J.prototype,"popupEnabled",void 0),(0,i._)([(0,p.MZ)((0,j.P6)("preferredTimeReference"))],J.prototype,"preferredTimeZone",void 0),(0,i._)([(0,p.MZ)()],J.prototype,"sourceJSON",void 0),(0,i._)([(0,p.MZ)({json:{write:{ignoreOrigin:!0}}})],J.prototype,"sublayers",void 0),(0,i._)([(0,h.K)("sublayers",{layers:{type:[F.A]},visibleLayers:{type:[u.jz]}})],J.prototype,"writeSublayers",null),(0,i._)([(0,p.MZ)({type:["show","hide","hide-children"]})],J.prototype,"listMode",void 0),(0,i._)([(0,p.MZ)({json:{read:!1},readOnly:!0,value:"map-image"})],J.prototype,"type",void 0),(0,i._)([(0,p.MZ)(T.OZ)],J.prototype,"url",void 0),J=(0,i._)([(0,d.$)("esri.layers.MapImageLayer")],J);const k=J},1420:(e,r,t)=>{t.d(r,{g:()=>c});var i=t(35143),s=t(91967),a=t(34154),o=t(46053),n=(t(81806),t(76460),t(47249),t(85842)),l=t(68002),y=t(46530),p=t(65419);const u={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends s.A{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=(0,y.f)(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,p.Sk)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(u[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const r=!(null===(e=this.floors)||void 0===e||!e.length),t=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return t.length?JSON.stringify(t.reduce(((e,r)=>{const t=(0,y.f)(this.floors,r),i=(0,a.m)(t,r.definitionExpression);return null!=i&&(e[r.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,t=this.scale,i=r=>{r.visible&&(0===t||(0,l.zx)(t,r.minScale,r.maxScale))&&(r.sublayers?r.sublayers.forEach(i):e.unshift(r))};r&&r.forEach(i);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((r,t)=>e[t]!==r))?e:s}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};(0,i._)([(0,o.MZ)({readOnly:!0})],c.prototype,"dynamicLayers",null),(0,i._)([(0,o.MZ)()],c.prototype,"floors",void 0),(0,i._)([(0,o.MZ)({readOnly:!0})],c.prototype,"hasDynamicLayers",null),(0,i._)([(0,o.MZ)()],c.prototype,"layer",null),(0,i._)([(0,o.MZ)({readOnly:!0})],c.prototype,"layers",null),(0,i._)([(0,o.MZ)({readOnly:!0})],c.prototype,"layerDefs",null),(0,i._)([(0,o.MZ)({type:Number})],c.prototype,"scale",void 0),(0,i._)([(0,o.MZ)({readOnly:!0})],c.prototype,"version",null),(0,i._)([(0,o.MZ)({readOnly:!0})],c.prototype,"visibleSublayers",null),c=(0,i._)([(0,n.$)("esri.layers.support.ExportImageParameters")],c)},46530:(e,r,t)=>{function i(e){var r;const t=e.layer;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField&&"floors"in e.view?a(e.view.floors,t.floorInfo.floorField):null}function s(e,r){var t;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField?a(e,r.floorInfo.floorField):null}function a(e,r){if(null===e||void 0===e||!e.length)return null;const t=e.filter((e=>""!==e)).map((e=>"'".concat(e,"'")));return t.push("''"),"".concat(r," IN (").concat(t.join(","),") OR ").concat(r," IS NULL")}t.d(r,{E:()=>i,f:()=>s})}}]);
//# sourceMappingURL=2951.e7d3b30c.chunk.js.map