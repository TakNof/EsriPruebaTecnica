"use strict";(self.webpackChunkweb_arcgis_app=self.webpackChunkweb_arcgis_app||[]).push([[7147],{27147:(e,t,n)=>{n.r(t),n.d(t,{create:()=>c});n(35238);var i=n(18364),a=n(76460),o=n(31633),l=n(46069),r=n(26346),s=n(38496),u=n(79629),d=n(56623);async function c(e,t,n){let o;if(m(e)||e instanceof i.A){var l;const i=await async function(e){return m(e)?e.load():(await e.load(),await Promise.allSettled(e.layers.items.map((e=>e.load()))),e)}(e);return o=await i.createElevationSampler(t,{demResolution:null!==(l=null===n||void 0===n?void 0:n.demResolution)&&void 0!==l?l:"finest-contiguous"}),v(o,t,{material:null===n||void 0===n?void 0:n.material})}return"string"==typeof(null===n||void 0===n?void 0:n.demResolution)?(a.A.getLogger("esri.geometry.support.meshUtils.elevation").error("create()","demResolution must be a number when used directly with a sampler"),null):v(e,t,{material:null===n||void 0===n?void 0:n.material,demResolution:null===n||void 0===n?void 0:n.demResolution})}function v(e,t,n){var i,a;const c=(0,o.GA)(t.spatialReference),v=(null!==(i=null===n||void 0===n?void 0:n.demResolution)&&void 0!==i?i:e.demResolution.min)/c,m=Math.round(t.width/v),f=Math.round(t.height/v),w=m+1,h=f+1,R=new Float64Array(w*h*3),y=new Float32Array(w*h*2);let g=0,A=0;const b=new Uint32Array(m*f*2*3);let k=0,x=0;const _=!e.spatialReference.equals(t.spatialReference);p.spatialReference=t.spatialReference;const{xmin:C,ymin:F,height:M,width:S}=t;for(let o=0;o<h;o++){const t=F+M*(o/f);for(let n=0;n<w;n++){var U;const i=C+S*(n/m);if(R[g++]=i,R[g++]=t,_){var j;p.x=i,p.y=t;const n=(0,r.project)(p,e.spatialReference);R[g++]=null!==(j=e.elevationAt(n.x,n.y))&&void 0!==j?j:0}else R[g++]=null!==(U=e.elevationAt(i,t))&&void 0!==U?U:0;const a=n/m,l=o/f;y[A++]=a,y[A++]=l,o!==f&&n!==m&&(b[x++]=k+1,b[x++]=k+w+1,b[x++]=k+w,b[x++]=k,b[x++]=k+1,b[x++]=k+w),k++}}return new l.A({vertexAttributes:new d.H({position:R,uv:y}),components:[new u.A({faces:(0,s.Dg)(b),shading:"smooth",material:null!==(a=null===n||void 0===n?void 0:n.material)&&void 0!==a?a:null})],spatialReference:t.spatialReference})}function m(e){return"type"in e&&("elevation"===e.type||"base-elevation"===e.type)}const p=new(n(13904).A)}}]);
//# sourceMappingURL=7147.897b1dbc.chunk.js.map