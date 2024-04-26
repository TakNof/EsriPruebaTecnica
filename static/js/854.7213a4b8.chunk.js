"use strict";(self.webpackChunkweb_arcgis_app=self.webpackChunkweb_arcgis_app||[]).push([[854],{20854:(e,t,n)=>{n.d(t,{ElevationQuery:()=>x});var i=n(98773),l=n(50076),a=n(30726),s=n(50346),o=n(31633),r=n(66388),c=n(13904),u=n(23701),h=n(26346),p=n(2413),f=n(96138);class m{constructor(e,t){this.data=e,this.safeWidth=.99999999*(e.width-1),this.dx=(e.width-1)/(t[2]-t[0]),this.dy=(e.width-1)/(t[3]-t[1]),this.x0=t[0],this.y1=t[3]}}class d{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.tile=e,null!=t&&null!=e){const n=e.extent;this._samplerData=new m(t,n)}}get zmin(){return null!=this._samplerData?this._samplerData.data.minValue:0}get zmax(){return null!=this._samplerData?this._samplerData.data.maxValue:0}get hasNoDataValues(){var e;return!(null===(e=this._samplerData)||void 0===e||!e.data.hasNoDataValues)}sample(e,t){if(null==this._samplerData)return;const{safeWidth:n,data:i,dx:l,dy:a,y1:s,x0:o}=this._samplerData,{width:r,values:c,noDataValue:u}=i,h=y(a*(s-t),0,n),p=y(l*(e-o),0,n),f=Math.floor(h),m=Math.floor(p),d=f*r+m,v=d+r,x=c[d],w=c[v],g=c[d+1],T=c[v+1];if(x!==u&&w!==u&&g!==u&&T!==u){const e=p-m,t=x+(g-x)*e;return t+(w+(T-w)*e-t)*(h-f)}}}function y(e,t,n){return e<t?t:e>n?n:e}var v=n(11164);class x{async queryAll(e,t,n){if(!(e=null!==n&&void 0!==n&&n.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new l.A("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const i=w.fromGeometry(t);let a=!1;(null===n||void 0===n?void 0:n.returnSampleInfo)||(a=!0);const s={...E,...n,returnSampleInfo:!0},o=await this.query(e[e.length-1],i,s),r=await this._queryAllContinue(e,o,s);return r.geometry=r.geometry.export(),a&&delete r.sampleInfo,r}async query(e,t,n){if(!e)throw new l.A("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof w)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new l.A("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const i={...E,...n},s=new _(e,t.spatialReference,i),r=i.signal;return await e.load({signal:r}),await async function(e,t,n){let i;const a=e.layer.tileInfo.spatialReference;if(t instanceof w?i=await t.project(a,n):(await(0,h.initializeProjection)([{source:t.spatialReference,dest:a}],{signal:n}),i=(0,h.project)(t,a)),!i)throw new l.A("elevation-query:spatial-reference-mismatch","Cannot query elevation in '".concat(t.spatialReference.wkid,"' on an elevation service in '").concat(a.wkid,"'"));e.geometry=w.fromGeometry(i)}(s,t,r),await this._selectTiles(s,r),await D(s,r),function(e){e.geometry.coordinates.forEach((t=>{const n=t.elevationTile;let i=e.options.noDataValue;if(n){const e=n.sample(t.x,t.y);null!=e?i=e:t.elevationTile=null}t.z=i}))}(s),async function(e,t){const n=await e.geometry.project(e.outSpatialReference,t);(0,a.Lw)(n);const i={geometry:n.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=function(e){const t=e.layer.tileInfo,n=(0,o.GA)(t.spatialReference);return e.geometry.coordinates.map((i=>{let l=-1;return i.elevationTile&&i.elevationTile!==e.outsideExtentTile&&(l=t.lodAt(i.elevationTile.tile.level).resolution*n),{demResolution:l}}))}(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),i}(s,r)}async createSampler(e,t,n){if(!e)throw new l.A("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new l.A("elevation-query:invalid-extent","Invalid or undefined extent");const i={...E,...n};return this._createSampler(e,t,i)}async createSamplerAll(e,t,n){if(!(e=null!==n&&void 0!==n&&n.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new l.A("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new l.A("elevation-query:invalid-extent","Invalid or undefined extent");const i={...E,...n,returnSampleInfo:!0},a=await this._createSampler(e[e.length-1],t,i);return this._createSamplerAllContinue(e,t,a,i)}async _createSampler(e,t,n,i){const l=n.signal;await e.load({signal:l});const a=t.spatialReference,s=e.tileInfo.spatialReference;a.equals(s)||(await(0,h.initializeProjection)([{source:a,dest:s}],{signal:l}),t=(0,h.project)(t,s));const o=new A(e,t,n,i);return await this._selectTiles(o,l),await D(o,l),new f.hX(o.elevationTiles,o.layer.tileInfo,o.options.noDataValue)}async _createSamplerAllContinue(e,t,n,i){if(e.pop(),!e.length)return n;const l=n.samplers.filter((e=>!e.tile.hasNoDataValues)).map((e=>(0,p.VY)(e.extent))),a=await this._createSampler(e[e.length-1],t,i,l);if(0===a.samplers.length)return n;const s=n.samplers.concat(a.samplers),o=new f.hX(s,i.noDataValue);return this._createSamplerAllContinue(e,t,o,i)}async _queryAllContinue(e,t,n){const i=e.pop(),l=t.geometry.coordinates,s=t.sampleInfo;(0,a.Lw)(s);const o=[],r=[];for(let a=0;a<l.length;a++){const t=s[a];t.demResolution>=0?t.source||(t.source=i):e.length&&(o.push(l[a]),r.push(a))}if(!e.length||0===o.length)return t;const c=t.geometry.clone(o),u=await this.query(e[e.length-1],c,n),h=u.sampleInfo;if(!h)throw new Error("no sampleInfo");return r.forEach(((e,t)=>{l[e].z=u.geometry.coordinates[t].z,s[e].demResolution=h[t].demResolution})),this._queryAllContinue(e,t,n)}async _selectTiles(e,t){"geometry"===e.type&&function(e){if(null==e.layer.fullExtent)return;const t=new d(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const n=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const i=e.x,l=e.y;(i<n.xmin||i>n.xmax||l<n.ymin||l>n.ymax)&&(e.elevationTile=t)}))}(e);const n=e.options.demResolution;if("number"==typeof n)!function(e,t){const n=function(e,t){const{tileInfo:n,tilemapCache:i}=e.layer,l=t/(0,o.GA)(n.spatialReference),a=q(n,i);let s=a[0],r=0;for(let o=1;o<a.length;o++){const e=a[o];Math.abs(e.resolution-l)<Math.abs(s.resolution-l)&&(s=e,r=o)}return r}(e,t);e.selectTilesAtLOD(n)}(e,n);else if("finest-contiguous"===n)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==n)throw new l.A("elevation-query:invalid-dem-resolution","Invalid dem resolution value '".concat(n,'\', expected a number, "finest-contiguous" or "auto"'));await this._selectTilesAuto(e,t)}}async _selectTilesFinestContiguous(e,t){const{tileInfo:n,tilemapCache:i}=e.layer,l=R(n,i,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,l,t)}async _selectTilesFinestContiguousAt(e,t,n){const i=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const a=i.tilemapCache,o=e.getTilesToFetch();try{if(a&&!C(a))await(0,s.qr)(Promise.all(o.map((e=>a.fetchAvailability(e.level,e.row,e.col,{signal:n})))),n);else if(await D(e,n),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new l.A("elevation-query:has-unavailable-tiles")}catch(r){(0,s.QP)(r),await this._selectTilesFinestContiguousAt(e,t-1,n)}}async _selectTilesAuto(e,t){(function(e){const{tileInfo:t,tilemapCache:n}=e.layer,i=R(t,n,e.options.minDemResolution);e.selectTilesAtLOD(i,e.options.maximumAutoTileRequests)})(e),function(e){const t=e.layer.tileInfo;let n=0;const i={},l=e=>{null!=e.id&&(e.id in i?i[e.id]++:(i[e.id]=1,n++))},a=e=>{if(null==e.id)return;const t=i[e.id];1===t?(delete i[e.id],n--):i[e.id]=t-1};e.forEachTileToFetch(l,a);let s=!0;for(;s&&(s=!1,e.forEachTileToFetch((i=>{n<=e.options.maximumAutoTileRequests||(a(i),t.upsampleTile(i)&&(s=!0),l(i))}),a),s););}(e);const n=e.layer.tilemapCache;if(!n||C(n))return this._selectTilesAutoPrefetchUpsample(e,t);const l=e.getTilesToFetch(),a={},o=l.map((async e=>{const l=new v.U(null,0,0,0,(0,p.vt)()),o=await(0,i.Ke)(n.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:t}));!1!==o.ok?null!=e.id&&(a[e.id]=l):(0,s.QP)(o.error)}));await(0,s.qr)(Promise.all(o),t),e.remapTiles(a)}async _selectTilesAutoPrefetchUpsample(e,t){const n=e.layer.tileInfo;await D(e,t);let i=!1;e.forEachTileToFetch(((e,t)=>{n.upsampleTile(e)?i=!0:t()})),i&&await this._selectTilesAutoPrefetchUpsample(e,t)}}class w{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new w;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>e.clone())),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await(0,h.initializeProjection)([{source:this.spatialReference,dest:e}],{signal:t});const n=new r.A({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),i=(0,h.project)(n,e);if(!i)return null;const l=this.coordinates.map(((e,t)=>{const n=e.clone(),l=i.points[t];return n.x=l[0],n.y=l[1],n})),a=this.clone(l);return a.spatialReference=e,a}static fromGeometry(e){const t=new w;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof w)t.coordinates=e.coordinates.map((e=>e.clone())),t._exporter=(t,n)=>{const i=e.clone(t);return i.spatialReference=n,i};else switch(e.type){case"point":{const n=e,{hasZ:i,hasM:l}=n;t.coordinates=i&&l?[new g(n.x,n.y,n.z,n.m)]:i?[new g(n.x,n.y,n.z)]:l?[new g(n.x,n.y,null,n.m)]:[new g(n.x,n.y)],t._exporter=(t,n)=>e.hasM?new c.A(t[0].x,t[0].y,t[0].z,t[0].m,n):new c.A(t[0].x,t[0].y,t[0].z,n);break}case"multipoint":{const n=e,{hasZ:i,hasM:l}=n;t.coordinates=i&&l?n.points.map((e=>new g(e[0],e[1],e[2],e[3]))):i?n.points.map((e=>new g(e[0],e[1],e[2]))):l?n.points.map((e=>new g(e[0],e[1],null,e[2]))):n.points.map((e=>new g(e[0],e[1]))),t._exporter=(t,n)=>e.hasM?new r.A({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatialReference:n}):new r.A(t.map((e=>[e.x,e.y,e.z])),n);break}case"polyline":{const n=e,i=[],l=[],{hasZ:a,hasM:s}=e;let o=0;for(const e of n.paths)if(l.push([o,o+e.length]),o+=e.length,a&&s)for(const t of e)i.push(new g(t[0],t[1],t[2],t[3]));else if(a)for(const t of e)i.push(new g(t[0],t[1],t[2]));else if(s)for(const t of e)i.push(new g(t[0],t[1],null,t[2]));else for(const t of e)i.push(new g(t[0],t[1]));t.coordinates=i,t._exporter=(t,n)=>{const i=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),a=l.map((e=>i.slice(e[0],e[1])));return new u.A({paths:a,hasM:e.hasM,hasZ:!0,spatialReference:n})};break}}return t}}class g{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.x=e,this.y=t,this.z=n,this.m=i,this.tile=l,this.elevationTile=a}clone(){return new g(this.x,this.y,this.z,this.m)}}class T{constructor(e,t){this.layer=e,this.options=t}}class _ extends T{constructor(e,t,n){super(e,n),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const{tileInfo:t,tilemapCache:n}=this.layer,i=q(t,n)[e].level;this.geometry.coordinates.forEach((e=>e.tile=t.tileAt(i,e.x,e.y)))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const n of this.geometry.coordinates){var t;!n.elevationTile&&(null===(t=n.tile)||void 0===t?void 0:t.id)&&(n.elevationTile=e[n.tile.id])}}remapTiles(e){for(const n of this.geometry.coordinates){var t;const i=null===(t=n.tile)||void 0===t?void 0:t.id;n.tile=i?e[i]:null}}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){var n;const l=i.tile;if(!l)continue;const a=null===(n=i.tile)||void 0===n?void 0:n.id;i.elevationTile||!a||e[a]||(e[a]=l,t.push(l))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>{t.tile=null}))}}class A extends T{constructor(e,t,n,i){super(e,n),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.clone().intersection(e.fullExtent),this.maskExtents=i}selectTilesAtLOD(e,t){const n=this._maximumLodForRequests(t),i=Math.min(n,e);i<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(i)}_maximumLodForRequests(e){const{tileInfo:t,tilemapCache:n}=this.layer,i=q(t,n);if(!e)return i.length-1;const l=this.extent;if(null==l)return-1;for(let a=i.length-1;a>=0;a--){const n=i[a],s=n.resolution*t.size[0],o=n.resolution*t.size[1];if(Math.ceil(l.width/s)*Math.ceil(l.height/o)<=e)return a}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const n=t.id&&e[t.id];n&&(this._fetchedCandidates.add(t),this.elevationTiles.push(n))}}remapTiles(e){this._candidateTiles=I(this._candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const n=this._candidateTiles;this._candidateTiles=[],n.forEach((n=>{if(this._fetchedCandidates.has(n))return void(t&&t(n));let i=!1;e(n,(()=>i=!0)),i?t&&t(n):this._candidateTiles.push(n)})),this._candidateTiles=I(this._candidateTiles,t)}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(null==t)return;const{tileInfo:n,tilemapCache:i}=this.layer,l=q(n,i)[e],a=n.tileAt(l.level,t.xmin,t.ymin),s=a.extent;if(null==s)return;const o=l.resolution*n.size[0],r=l.resolution*n.size[1],c=Math.ceil((t.xmax-s[0])/o),u=Math.ceil((t.ymax-s[1])/r);for(let h=0;h<u;h++)for(let e=0;e<c;e++){const t=new v.U(null,a.level,a.row-h,a.col+e);n.updateTileInfo(t),this._tileIsMasked(t)||this._candidateTiles.push(t)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>e.extent&&(0,p.gR)(t,e.extent)))}}function R(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const i=q(e,t);let l=i.length-1;if(n>0){const t=n/(0,o.GA)(e.spatialReference),a=i.findIndex((e=>e.resolution<t));0===a?l=0:a>0&&(l=a-1)}return l}const E={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};function q(e,t){const n=e.lods;if(C(t)){const{effectiveMinLOD:e,effectiveMaxLOD:i}=t;return n.filter((t=>t.level>=e&&t.level<=i))}return n}async function D(e,t){const n=e.getTilesToFetch(),i={},l=e.options.cache,a=e.options.noDataValue,o=n.map((async n=>{if(null==n.id)return;const s="".concat(e.layer.uid,":").concat(n.id,":").concat(a),o=null!=l?l.get(s):null,r=null!=o?o:await e.layer.fetchTile(n.level,n.row,n.col,{noDataValue:a,signal:t});null!=l&&l.put(s,r),i[n.id]=new d(n,r)}));await(0,s.qr)(Promise.allSettled(o),t),e.populateElevationTiles(i)}function I(e,t){const n={},i=[];for(const a of e){const e=a.id;e&&!n[e]?(n[e]=a,i.push(a)):t&&t(a)}const l=i.sort(((e,t)=>e.level-t.level));return l.filter(((e,n)=>{for(let i=0;i<n;i++){const n=l[i].extent;if(n&&e.extent&&(0,p.gR)(n,e.extent))return t&&t(e),!1}return!0}))}function C(e){return null!=(null===e||void 0===e?void 0:e.tileInfo)}},96138:(e,t,n)=>{n.d(t,{bZ:()=>u,hX:()=>p});n(35238),n(81806);var i=n(54901),l=n(76460),a=n(31633),s=n(2413),o=n(45417),r=n(13904);const c=()=>l.A.getLogger("esri.layers.support.ElevationSampler");class u{queryElevation(e){return function(e,t){const n=f(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":!function(e,t,n){e.z=n.elevationAt(t.x,t.y)}(e,n,t);break;case"polyline":!function(e,t,n){m.spatialReference=t.spatialReference;const i=e.hasM&&!e.hasZ;for(let l=0;l<e.paths.length;l++){const a=e.paths[l],s=t.paths[l];for(let e=0;e<a.length;e++){const t=a[e],l=s[e];m.x=l[0],m.y=l[1],i&&(t[3]=t[2]),t[2]=n.elevationAt(m.x,m.y)}}e.hasZ=!0}(e,n,t);break;case"multipoint":!function(e,t,n){m.spatialReference=t.spatialReference;const i=e.hasM&&!e.hasZ;for(let l=0;l<e.points.length;l++){const a=e.points[l],s=t.points[l];m.x=s[0],m.y=s[1],i&&(a[3]=a[2]),a[2]=n.elevationAt(m.x,m.y)}e.hasZ=!0}(e,n,t)}return e}(e.clone(),this)}on(){return(0,i.hA)()}projectIfRequired(e,t){return f(e,t)}}class h extends u{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){super(),this.tile=e,this.noDataValue=n;const i=e.tile.extent;this.extent=(0,s.w1)(i,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this._aaExtent=i;const l=(0,a.GA)(t.spatialReference),o=t.lodAt(e.tile.level).resolution*l;this.demResolution={min:o,max:o}}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return null!=t&&this.containsAt(t.x,t.y)}containsAt(e,t){return(0,s.Rj)(this._aaExtent,e,t)}elevationAt(e,t){var n;if(!this.containsAt(e,t)){const n=this.extent,i="".concat(n.xmin,", ").concat(n.ymin,", ").concat(n.xmax,", ").concat(n.ymax);return c().warn("#elevationAt()","Point used to sample elevation (".concat(e,", ").concat(t,") is outside of the sampler extent (").concat(i,")")),this.noDataValue}return null!==(n=this.tile.sample(e,t))&&void 0!==n?n:this.noDataValue}}class p extends u{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){let i;super(),"number"==typeof t?(this.noDataValue=t,i=null):(i=t,this.noDataValue=n),this.samplers=i?e.map((e=>new h(e,i,this.noDataValue))):e;const l=this.samplers[0];if(l){this.extent=l.extent.clone();const{min:e,max:t}=l.demResolution;this.demResolution={min:e,max:t};for(let n=1;n<this.samplers.length;n++){const e=this.samplers[n];this.extent.union(e.extent),this.demResolution.min=Math.min(this.demResolution.min,e.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,e.demResolution.max)}}else this.extent=(0,s.w1)((0,s.vt)(),i.spatialReference),this.demResolution={min:0,max:0}}elevationAt(e,t){let n,i=!1;for(const l of this.samplers)if(l.containsAt(e,t)&&(i=!0,n=l.elevationAt(e,t),n!==l.noDataValue))return n;return null!=n?n:(i||c().warn("#elevationAt()","Point used to sample elevation (".concat(e,", ").concat(t,") is outside of the sampler")),this.noDataValue)}}function f(e,t){if(null==e)return null;const n=e.spatialReference;if(n.equals(t))return e;const i=(0,o.Cv)(e,t);return i||c().error("Cannot project geometry spatial reference (wkid:".concat(n.wkid,") to elevation sampler spatial reference (wkid:").concat(t.wkid,")")),i}const m=new r.A}}]);
//# sourceMappingURL=854.7213a4b8.chunk.js.map