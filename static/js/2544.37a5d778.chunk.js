"use strict";(self.webpackChunkweb_arcgis_app=self.webpackChunkweb_arcgis_app||[]).push([[2544],{62544:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>y});var t=r(50076),n=r(90534),l=r(13096),i=r(39323),s=r(11668),o=r(31933),u=r(62487),c=r(67061);const d={FeatureLayer:!0,SceneLayer:!0};async function y(e){const{properties:a,url:t}=e,n={...a,url:t},l=await w(t,null===a||void 0===a?void 0:a.customParameters),{Constructor:i,layerId:s,sourceJSON:o,parsedUrl:u,layers:c,tables:d}=l;if(c.length+d.length===0)return null!=s&&(n.layerId=s),null!=o&&(n.sourceJSON=o),new i(n);const y=new(0,(await r.e(6095).then(r.bind(r,16095))).default)({title:u.title});return await async function(e,a,r){const t=a.sublayerConstructorProvider;for(const{id:l,serverUrl:i}of a.layers){var n;const s=v(a.sublayerInfos,l),o=f(i,l,s,null!==(n=s&&(null===t||void 0===t?void 0:t(s)))&&void 0!==n?n:a.Constructor,r);e.add(o)}if(a.tables.length){const t=await m("FeatureLayer");a.tables.forEach((n=>{let{id:l,serverUrl:i}=n;const s=f(i,l,v(a.tableInfos,l),t,r);e.tables.add(s)}))}}(y,l,n),y}function v(e,a){return e?e.find((e=>{let{id:r}=e;return r===a})):null}function f(e,a,r,t,n){const l={...n,layerId:a};return null!=e&&(l.url=e),null!=r&&(l.sourceJSON=r),"sublayerTitleMode"in t.prototype&&(l.sublayerTitleMode="service-name"),new t(l)}async function w(e,a){let r=(0,l.qg)(e);if(null==r&&(r=await async function(e,a){var r,t;const i=await(0,c.V)(e,{customParameters:a});let s=null,o=null;const u=i.type;if("Feature Layer"===u||"Table"===u?(s="FeatureServer",o=null!==(r=i.id)&&void 0!==r?r:null):"indexedVector"===u?s="VectorTileServer":i.hasOwnProperty("mapName")?s="MapServer":i.hasOwnProperty("bandCount")&&i.hasOwnProperty("pixelSizeX")?s="ImageServer":i.hasOwnProperty("maxRecordCount")&&i.hasOwnProperty("allowGeometryUpdates")?s="FeatureServer":i.hasOwnProperty("streamUrls")?s="StreamServer":h(i)?(s="SceneServer",o=i.id):i.hasOwnProperty("layers")&&h(null===(t=i.layers)||void 0===t?void 0:t[0])&&(s="SceneServer"),!s)return null;const d=null!=o?(0,l.iz)(e):null;return{title:null!=d&&i.name||(0,n.e7)(e),serverType:s,sublayer:o,url:{path:null!=d?d.serviceUrl:(0,n.An)(e).path}}}(e,a)),null==r)throw new t.A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:u,sublayer:y}=r;let v;const f={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},w="FeatureServer"===u,p="SceneServer"===u,b={parsedUrl:r,Constructor:null,layerId:(w||p)&&null!==y&&void 0!==y?y:void 0,layers:[],tables:[]};switch(u){case"MapServer":v=null!=y?"FeatureLayer":await async function(e,a){return(await(0,c.V)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{var S;const r=await(0,c.V)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;v=t?"LERC"!==(null===t||void 0===t||null===(S=t.format)||void 0===S?void 0:S.toUpperCase())||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,c.V)(r.url.path,{customParameters:a});if(v="SceneLayer",e){const a=null===e||void 0===e?void 0:e.layers;if("Voxel"===(null===e||void 0===e?void 0:e.layerType))v="VoxelLayer";else if(null!==a&&void 0!==a&&a.length){var L;const e=null===(L=a[0])||void 0===L?void 0:L.layerType;null!=e&&null!=o.XX[e]&&(v=o.XX[e])}}break}case"3DTilesServer":throw new t.A("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(v="FeatureLayer",null!=y){const r=await(0,c.V)(e,{customParameters:a});b.sourceJSON=r,v=(0,s.K)(r.type)}break;default:v=f[u]}if(d[v]&&null==y){var g;const r=await async function(e,a,r){var t,n;let l,o,u=!1;switch(a){case"FeatureServer":{const a=await(0,s.Q)(e,{customParameters:r});u=!!a.layersJSON,l=a.layersJSON||a.serviceJSON;break}case"SceneServer":{const a=await async function(e,a){var r;const t=await(0,c.V)(e,{customParameters:a}),n=null===(r=t.layers)||void 0===r?void 0:r[0];if(!n)return{serviceInfo:t};try{const{serverUrl:r}=await(0,i.L)(e),n=await(0,c.V)(r,{customParameters:a}).catch((()=>null));return n&&(t.tables=n.tables),{serviceInfo:t,tableServerUrl:r}}catch{return{serviceInfo:t}}}(e,r);l=a.serviceInfo,o=a.tableServerUrl;break}default:l=await(0,c.V)(e,{customParameters:r})}const d=null===(t=l)||void 0===t?void 0:t.layers,y=null===(n=l)||void 0===n?void 0:n.tables;return{layers:(null===d||void 0===d?void 0:d.map((e=>({id:e.id}))).reverse())||[],tables:(null===y||void 0===y?void 0:y.map((e=>({serverUrl:o,id:e.id}))).reverse())||[],layerInfos:u?d:[],tableInfos:u?y:[]}}(e,u,a);if(w&&(b.sublayerInfos=r.layerInfos,b.tableInfos=r.tableInfos),1!==r.layers.length+r.tables.length)b.layers=r.layers,b.tables=r.tables,w&&(null===(g=r.layerInfos)||void 0===g?void 0:g.length)&&(b.sublayerConstructorProvider=await async function(e){if(!e.length)return;const a=new Set,r=[];for(const{type:l}of e)a.has(l)||(a.add(l),r.push(m((0,s.K)(l))));const t=await Promise.all(r),n=new Map;return Array.from(a).forEach(((e,a)=>{n.set(e,t[a])})),e=>n.get(e.type)}(r.layerInfos));else if(w||p){var I,P,T,O,U,V;const e=null!==(I=null===(P=r.layerInfos)||void 0===P?void 0:P[0])&&void 0!==I?I:null===(T=r.tableInfos)||void 0===T?void 0:T[0];if(b.layerId=null!==(O=null===(U=r.layers[0])||void 0===U?void 0:U.id)&&void 0!==O?O:null===(V=r.tables[0])||void 0===V?void 0:V.id,b.sourceJSON=e,w){const a=null===e||void 0===e?void 0:e.type;v=(0,s.K)(a)}}}return b.Constructor=await m(v),b}function h(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function m(e){return(0,u.S[e])()}},39323:(e,a,r)=>{r.d(a,{L:()=>c});var t=r(55171),n=r(3825),l=r(50076),i=r(50346),s=r(13096),o=r(65308),u=r(70652);async function c(e,a){var r,c;const v=(0,s.qg)(e);if(!v)throw new l.A("invalid-url","Invalid scene service url");const f={...a,sceneServerUrl:v.url.path,layerId:null!==(r=v.sublayer)&&void 0!==r?r:void 0};if(null!==(c=f.sceneLayerItem)&&void 0!==c||(f.sceneLayerItem=await async function(e){const a=(await d(e)).serviceItemId;if(!a)return null;const r=new u.default({id:a,apiKey:e.apiKey}),l=await async function(e){const a=null===t.id||void 0===t.id?void 0:t.id.findServerInfo(e.sceneServerUrl);if(null!==a&&void 0!==a&&a.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(w){(0,i.QP)(w)}return null}(e);null!=l&&(r.portal=new o.A({url:l}));try{return r.load({signal:e.signal})}catch(h){return(0,i.QP)(h),null}}(f)),null==f.sceneLayerItem)return y(f.sceneServerUrl.replace("/SceneServer","/FeatureServer"),f);const w=await async function(e){let{sceneLayerItem:a,signal:r}=e;if(!a)return null;try{const e=(await a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const t=new u.default({portal:e.portal,id:e.id});return await t.load(),t}catch(t){return(0,i.QP)(t),null}}(f);if(null===w||void 0===w||!w.url)throw new l.A("related-service-not-found","Could not find feature service through portal item relationship");f.featureServiceItem=w;const h=await y(w.url,f);return h.portalItem=w,h}async function d(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function y(e,a){var r,t,i;const o=(0,s.qg)(e);if(!o)throw new l.A("invalid-feature-service-url","Invalid feature service url");const u=o.url.path,c=a.layerId;if(null==c)return{serverUrl:u};const y=d(a),v=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,f=null===(r=(null===v||void 0===v||null===(t=v.layers)||void 0===t?void 0:t[0])||(null===v||void 0===v||null===(i=v.tables)||void 0===i?void 0:i[0]))||void 0===r?void 0:r.customParameters,w=e=>{const r={query:{f:"json",...f},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(u,r)},h=w("anonymous").catch((()=>w("no-prompt"))),[m,p]=await Promise.all([h,y]),b=null===p||void 0===p?void 0:p.layers,S=m.data&&m.data.layers;if(!Array.isArray(S))throw new Error("expected layers array");if(Array.isArray(b)){for(let n=0;n<Math.min(b.length,S.length);n++)if(b[n].id===c)return{serverUrl:u,layerId:S[n].id}}else if(null!=c&&c<S.length)return{serverUrl:u,layerId:S[c].id};throw new Error("could not find matching associated sublayer")}},11668:(e,a,r)=>{r.d(a,{K:()=>y,Q:()=>l});var t=r(67061);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function l(e,a){var r;const{loadContext:n,...l}=a||{},i=n?await n.fetchServiceMetadata(e,l):await(0,t.V)(e,l);d(i),o(i);const s={serviceJSON:i};if((null!==(r=i.currentVersion)&&void 0!==r?r:0)<10.5)return s;const u="".concat(e,"/layers"),c=n?await n.fetchServiceMetadata(u,l):await(0,t.V)(u,l);return d(c),o(c),s.layersJSON={layers:c.layers,tables:c.tables},s}function i(e){const{type:a}=e;return!!a&&n.has(a)}function s(e){return"Table"===e.type}function o(e){var a,r;e.layers=null===(a=e.layers)||void 0===a?void 0:a.filter(i),e.tables=null===(r=e.tables)||void 0===r?void 0:r.filter(s)}function u(e){e.type||(e.type="Feature Layer")}function c(e){e.type||(e.type="Table")}function d(e){var a,r;null!==(a=e.layers)&&void 0!==a&&a.forEach(u),null===(r=e.tables)||void 0===r||r.forEach(c)}function y(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},62487:(e,a,r)=>{r.d(a,{S:()=>t});const t={BingMapsLayer:async()=>(await r.e(3993).then(r.bind(r,13993))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(1646),r.e(260),r.e(9231),r.e(9189),r.e(8664),r.e(5104),r.e(6861)]).then(r.bind(r,30188))).default,CSVLayer:async()=>(await r.e(1365).then(r.bind(r,1365))).default,CatalogLayer:async()=>(await Promise.all([r.e(8618),r.e(9122),r.e(2003),r.e(8105),r.e(1646),r.e(643),r.e(3848),r.e(6069),r.e(7872),r.e(6782),r.e(6245)]).then(r.bind(r,16245))).default,DimensionLayer:async()=>(await r.e(2798).then(r.bind(r,72798))).default,ElevationLayer:async()=>(await r.e(3875).then(r.bind(r,43875))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,38451))).default,GeoJSONLayer:async()=>(await r.e(709).then(r.bind(r,50709))).default,GeoRSSLayer:async()=>(await r.e(2551).then(r.bind(r,52551))).default,GroupLayer:async()=>(await r.e(6095).then(r.bind(r,16095))).default,ImageryLayer:async()=>(await Promise.all([r.e(9122),r.e(3092),r.e(6964),r.e(4439),r.e(7480),r.e(7333)]).then(r.bind(r,59051))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(3092),r.e(9844),r.e(6964),r.e(4439),r.e(2383),r.e(7480),r.e(6889)]).then(r.bind(r,86889))).default,IntegratedMesh3DTilesLayer:async()=>(await r.e(6790).then(r.bind(r,76790))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(260),r.e(3196)]).then(r.bind(r,3196))).default,KMLLayer:async()=>(await r.e(1324).then(r.bind(r,41324))).default,KnowledgeGraphLayer:async()=>(await Promise.all([r.e(8618),r.e(3620),r.e(7425),r.e(7216),r.e(2003),r.e(8153),r.e(5877),r.e(7118),r.e(6570)]).then(r.bind(r,26570))).default,LineOfSightLayer:async()=>(await r.e(2897).then(r.bind(r,22897))).default,LinkChartLayer:async()=>(await Promise.all([r.e(8618),r.e(3620),r.e(7425),r.e(7216),r.e(2003),r.e(8153),r.e(5877),r.e(7118),r.e(1002)]).then(r.bind(r,71002))).default,MapImageLayer:async()=>(await Promise.all([r.e(8618),r.e(9122),r.e(7872),r.e(5721),r.e(2951)]).then(r.bind(r,82951))).default,MapNotesLayer:async()=>(await r.e(3311).then(r.bind(r,43311))).default,MediaLayer:async()=>(await r.e(9522).then(r.bind(r,39522))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(8618),r.e(6799),r.e(5526)]).then(r.bind(r,1741))).default,OpenStreetMapLayer:async()=>(await r.e(803).then(r.bind(r,50803))).default,OrientedImageryLayer:async()=>(await r.e(2593).then(r.bind(r,52593))).default,PointCloudLayer:async()=>(await Promise.all([r.e(260),r.e(1830)]).then(r.bind(r,11830))).default,RouteLayer:async()=>(await Promise.all([r.e(1297),r.e(1301)]).then(r.bind(r,91301))).default,SceneLayer:async()=>(await Promise.all([r.e(8105),r.e(1646),r.e(643),r.e(260),r.e(9231),r.e(3848),r.e(6069),r.e(9189),r.e(8664),r.e(5104),r.e(8723)]).then(r.bind(r,48723))).default,StreamLayer:async()=>(await r.e(4369).then(r.bind(r,84369))).default,SubtypeGroupLayer:async()=>(await r.e(9005).then(r.bind(r,69005))).default,TileLayer:async()=>(await Promise.all([r.e(8618),r.e(9122),r.e(7872),r.e(5721),r.e(1174)]).then(r.bind(r,71174))).default,UnknownLayer:async()=>(await r.e(8896).then(r.bind(r,8896))).default,UnsupportedLayer:async()=>(await r.e(2043).then(r.bind(r,72043))).default,VectorTileLayer:async()=>(await Promise.all([r.e(5663),r.e(5995),r.e(117)]).then(r.bind(r,53451))).default,VideoLayer:async()=>(await r.e(9029).then(r.bind(r,79029))).default,VoxelLayer:async()=>(await Promise.all([r.e(260),r.e(8893)]).then(r.bind(r,8893))).default,WFSLayer:async()=>(await Promise.all([r.e(1316),r.e(6087)]).then(r.bind(r,4583))).default,WMSLayer:async()=>(await r.e(2015).then(r.bind(r,52015))).default,WMTSLayer:async()=>(await r.e(1845).then(r.bind(r,1845))).default,WebTileLayer:async()=>(await r.e(4552).then(r.bind(r,24552))).default}},67061:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(3825);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return r}}}]);
//# sourceMappingURL=2544.37a5d778.chunk.js.map