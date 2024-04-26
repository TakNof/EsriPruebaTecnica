"use strict";(self.webpackChunkweb_arcgis_app=self.webpackChunkweb_arcgis_app||[]).push([[8664],{14522:(e,t,n)=>{n.d(t,{T:()=>i,U:()=>r});var o=n(15941);function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=(0,o.qE)(e,0,s);for(let o=0;o<4;o++)t[n+o]=Math.floor(256*u(r*c[o]))}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=0;for(let o=0;o<4;o++)n+=e[t+o]*a[o];return n}const c=[1,256,65536,16777216],a=[1/256,1/65536,1/16777216,1/4294967296],s=i(new Uint8ClampedArray([255,255,255,255]));function u(e){return e-Math.floor(e)}},62562:(e,t,n)=>{n.d(t,{MA:()=>d,m0:()=>h,wH:()=>w});var o=n(50076),r=n(53084),i=n(76460),c=n(87041),a=n(66470);const s=()=>i.A.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function u(e,t,n){let r="",i=0;for(;i<n;){const c=e[t+i];if(c<128)r+=String.fromCharCode(c),i++;else if(c>=192&&c<224){if(i+1>=n)throw new o.A("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&c)<<6|63&e[t+i+1];r+=String.fromCharCode(a),i+=2}else if(c>=224&&c<240){if(i+2>=n)throw new o.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&c)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];r+=String.fromCharCode(a),i+=3}else{if(!(c>=240&&c<248))throw new o.A("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new o.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&c)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(a);i+=4}}}return r}function l(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let o=0;for(let r=0;r<t.length;r++){const i=t[r],c=i.valueType||i.type,a=A[c];n.fields[i.property]=a(e,o),o+=p[c].BYTES_PER_ELEMENT}return n.byteCount=o,n}function f(e,t,n){const r=[];let i,c,a=0;for(c=0;c<e;c+=1){if(i=t[c],i>0){if(r.push(u(n,a,i-1)),0!==n[a+i-1])throw new o.A("string-array-error","Invalid string array: missing null termination.")}else r.push(null);a+=i}return r}function d(e,t){return new(0,p[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function g(e,t,n){const i=null!=t.header?l(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},c={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let a=i.byteCount;for(let l=0;l<t.ordering.length;l++){var s,u;const e=t.ordering[l],n=(0,r.o8)(t[e]);if(n.count=null!==(s=i.fields.count)&&void 0!==s?s:0,"String"===n.valueType){if(n.byteOffset=a,n.byteCount=i.fields[e+"ByteCount"],"UTF-8"!==n.encoding)throw new o.A("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding});if(n.timeEncoding&&"ECMA_ISO8601"!==n.timeEncoding)throw new o.A("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:n.timeEncoding})}else{if(!U(n.valueType))throw new o.A("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const e=C(n.valueType);a+=a%e!=0?e-a%e:0,n.byteOffset=a,n.byteCount=e*n.valuesPerElement*n.count}}a+=null!==(u=n.byteCount)&&void 0!==u?u:0,c.entries[e]=n}return c.byteCount=a-c.byteOffset,c}function y(e,t,n){if(t!==e&&s().error("Invalid ".concat(n," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new o.A("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function w(e,t){const n=l(e,t&&t.header);let o=n.byteCount;const r={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,c=null!=i.vertexCount?i.vertexCount:i.count;for(const u of t.ordering){if(!t.vertexAttributes[u])continue;const e={...t.vertexAttributes[u],byteOffset:o,count:c},n=b[u]||"_"+u;r.vertexAttributes[n]=e,o+=C(e.valueType)*e.valuesPerElement*c}const a=i.faceCount;if(t.faces&&a){r.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:o,count:a};r.faces[e]=n,o+=C(n.valueType)*n.valuesPerElement*a}}const s=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&s){r.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:o,count:s};r.featureAttributes[e]=n,o+=("UInt64"===n.valueType?8:C(n.valueType))*n.valuesPerElement*s}}return y(o,e.byteLength,"geometry"),r.byteCount=o-r.byteOffset,r}const b={position:a.r.POSITION,normal:a.r.NORMAL,color:a.r.COLOR,uv0:a.r.UV0,region:a.r.UVREGION};function h(e,t,n){if("lepcc-rgb"===e.encoding)return(0,c.mb)(t);if("lepcc-intensity"===e.encoding)return(0,c.Ax)(t);if(null!=e.encoding&&""!==e.encoding)throw new o.A("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(s().warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(s().warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const r=g(t,e,n);y(r.byteOffset+r.byteCount,t.byteLength,"attribute");const i=r.entries.attributeValues||r.entries.objectIds;if(i){if("String"===i.valueType){const e=r.entries.attributeByteCounts,n=d(t,e),o=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,i);return i.timeEncoding?function(e,t,n){return f(e,t,n).map((e=>{const t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}(e.count,n,o):f(e.count,n,o)}return d(t,i)}throw new o.A("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const p={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},A={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function U(e){return p.hasOwnProperty(e)}function C(e){return U(e)?p[e].BYTES_PER_ELEMENT:0}},68664:(e,t,n)=>{n.d(t,{Q7:()=>E,s1:()=>U});n(35238);var o=n(3825),r=(n(18690),n(50076),n(81806),n(78393)),i=(n(34761),n(13191)),c=(n(20664),n(9392)),a=(n(26346),n(98510),n(13312));n(64232);a.A.WGS84;var s=n(2413),u=(n(93582),n(97015),n(62562));n(34111),n(90707);n(69539);var l,f=n(55855);!function(e){e[e.INVISIBLE=0]="INVISIBLE",e[e.TRANSPARENT=1]="TRANSPARENT",e[e.OPAQUE=2]="OPAQUE"}(l||(l={}));n(4212),n(14522),n(59581),n(34981),n(81449);var d=n(7223);n(24245);d.n;d.n;var g;n(64839),n(27374),n(66470);!function(e){e[e.Uniform=0]="Uniform",e[e.Varying=1]="Varying",e[e.COUNT=2]="COUNT"}(g||(g={}));var y,w;n(59046),n(89299),n(72468),n(5517),n(21390),n(42759),n(72106),n(43425);function b(e){return{...h,...e,type:y.Solid}}!function(e){e[e.Solid=0]="Solid",e[e.Sketch=1]="Sketch",e[e.Mixed=2]="Mixed",e[e.COUNT=3]="COUNT"}(y||(y={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(w||(w={}));const h={color:(0,f.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.OPAQUE,hasSlicePlane:!1};(0,f.fA)(0,0,0,.2),l.OPAQUE;n(51990);var p=n(59231);(0,s.vt)();var A;async function U(e,t,n,r,i,c,a,s){const l=[];for(const o of t)if(o&&i.includes(o.name)){const t="".concat(e,"/nodes/").concat(n,"/attributes/").concat(o.key,"/0");l.push({url:t,storageInfo:o})}const f=await Promise.allSettled(l.map((e=>(0,o.A)(e.url,{responseType:"array-buffer",query:{...a,token:c},signal:null===s||void 0===s?void 0:s.signal}).then((t=>(0,u.m0)(e.storageInfo,t.data)))))),d=[];for(const o of r){const e={};for(let t=0;t<f.length;t++){const n=f[t];if("fulfilled"===n.status){const r=n.value;e[l[t].storageInfo.name]=v(r,o)}}d.push(e)}return d}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"}(A||(A={}));const C=-32768,m=-(2**31);function v(e,t){if(!e)return null;const n=e[t];return(0,r.IY)(e)?n===C?null:n:(0,r._G)(e)?n===m?null:n:n!=n?null:n}b({color:[0,0,0,0],opacity:0});function E(e){null!=e&&(e[3]=-1)}(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,s.vt)(),(0,s.vt)(),new p.ab,(0,c.vt)(),new Array(72),(0,i.vt)()},87041:(e,t,n)=>{n.d(t,{Ax:()=>h,Me:()=>u,mb:()=>y});var o=n(50076);const r=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function c(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+i.identifierOffset,i.identifierLength)),version:t.getUint16(n+i.versionOffset,r),checksum:t.getUint32(n+i.checksumOffset,r)}}const a={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function s(e,t){return{sizeLo:e.getUint32(t+a.sizeLo,r),sizeHi:e.getUint32(t+a.sizeHi,r),minX:e.getFloat64(t+a.minX,r),minY:e.getFloat64(t+a.minY,r),minZ:e.getFloat64(t+a.minZ,r),maxX:e.getFloat64(t+a.maxX,r),maxY:e.getFloat64(t+a.maxY,r),maxZ:e.getFloat64(t+a.maxZ,r),errorX:e.getFloat64(t+a.errorX,r),errorY:e.getFloat64(t+a.errorY,r),errorZ:e.getFloat64(t+a.errorZ,r),count:e.getUint32(t+a.count,r),reserved:e.getUint32(t+a.reserved,r)}}function u(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:u}=c(e,t,n);if(n+=i.byteCount,"LEPCC     "!==r)throw new o.A("lepcc-decode-error","Bad identifier");if(u>1)throw new o.A("lepcc-decode-error","Unknown version");const f=s(t,n);if(n+=a.byteCount,f.sizeHi*2**32+f.sizeLo!==e.byteLength)throw new o.A("lepcc-decode-error","Bad size");const d=new Float64Array(3*f.count),g=[],y=[],w=[],b=[];if(n=l(e,n,g),n=l(e,n,y),n=l(e,n,w),n=l(e,n,b),n!==e.byteLength)throw new o.A("lepcc-decode-error","Bad length");let h=0,p=0;for(let o=0;o<g.length;o++){p+=g[o];let e=0;for(let t=0;t<y[o];t++){e+=w[h];const t=b[h];d[3*h]=Math.min(f.maxX,f.minX+2*f.errorX*e),d[3*h+1]=Math.min(f.maxY,f.minY+2*f.errorY*p),d[3*h+2]=Math.min(f.maxZ,f.minZ+2*f.errorZ*t),h++}}return{errorX:f.errorX,errorY:f.errorY,errorZ:f.errorZ,result:d}}function l(e,t,n){const o=[];t=f(e,t,o);const r=[];for(let i=0;i<o.length;i++){r.length=0,t=f(e,t,r);for(let e=0;e<r.length;e++)n.push(r[e]+o[i])}return t}function f(e,t,n){const i=new DataView(e,t),c=i.getUint8(0),a=31&c,s=!!(32&c),u=(192&c)>>6;let l=0;if(0===u)l=i.getUint32(1,r),t+=5;else if(1===u)l=i.getUint16(1,r),t+=3;else{if(2!==u)throw new o.A("lepcc-decode-error","Bad count type");l=i.getUint8(1),t+=2}if(s)throw new o.A("lepcc-decode-error","LUT not implemented");const f=Math.ceil(l*a/8),d=new Uint8Array(e,t,f);let g=0,y=0,w=0;const b=-1>>>32-a;for(let o=0;o<l;o++){for(;y<a;)g|=d[w]<<y,y+=8,w+=1;n[o]=g&b,g>>>=a,y-=a,y+a>32&&(g|=d[w-1]>>8-y)}return t+w}const d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function g(e,t){return{sizeLo:e.getUint32(t+d.sizeLo,r),sizeHi:e.getUint32(t+d.sizeHi,r),count:e.getUint32(t+d.count,r),colorMapCount:e.getUint16(t+d.colorMapCount,r),lookupMethod:e.getUint8(t+d.lookupMethod),compressionMethod:e.getUint8(t+d.compressionMethod)}}function y(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:a}=c(e,t,n);if(n+=i.byteCount,"ClusterRGB"!==r)throw new o.A("lepcc-decode-error","Bad identifier");if(a>1)throw new o.A("lepcc-decode-error","Unknown version");const s=g(t,n);if(n+=d.byteCount,s.sizeHi*2**32+s.sizeLo!==e.byteLength)throw new o.A("lepcc-decode-error","Bad size");if((2===s.lookupMethod||1===s.lookupMethod)&&0===s.compressionMethod){if(3*s.colorMapCount+s.count+n!==e.byteLength||s.colorMapCount>256)throw new o.A("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*s.colorMapCount),r=new Uint8Array(e,n+3*s.colorMapCount,s.count),i=new Uint8Array(3*s.count);for(let e=0;e<s.count;e++){const n=r[e];i[3*e]=t[3*n],i[3*e+1]=t[3*n+1],i[3*e+2]=t[3*n+2]}return i}if(0===s.lookupMethod&&0===s.compressionMethod){if(3*s.count+n!==e.byteLength||0!==s.colorMapCount)throw new o.A("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(s.lookupMethod<=2&&1===s.compressionMethod){if(n+3!==e.byteLength||1!==s.colorMapCount)throw new o.A("lepcc-decode-error","Bad count");const r=t.getUint8(n),i=t.getUint8(n+1),c=t.getUint8(n+2),a=new Uint8Array(3*s.count);for(let e=0;e<s.count;e++)a[3*e]=r,a[3*e+1]=i,a[3*e+2]=c;return a}throw new o.A("lepcc-decode-error","Bad method "+s.lookupMethod+","+s.compressionMethod)}const w={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function b(e,t){return{sizeLo:e.getUint32(t+w.sizeLo,r),sizeHi:e.getUint32(t+w.sizeHi,r),count:e.getUint32(t+w.count,r),scaleFactor:e.getUint16(t+w.scaleFactor,r),bitsPerPoint:e.getUint8(t+w.bitsPerPoint),reserved:e.getUint8(t+w.reserved)}}function h(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:a}=c(e,t,n);if(n+=i.byteCount,"Intensity "!==r)throw new o.A("lepcc-decode-error","Bad identifier");if(a>1)throw new o.A("lepcc-decode-error","Unknown version");const s=b(t,n);if(n+=w.byteCount,s.sizeHi*2**32+s.sizeLo!==e.byteLength)throw new o.A("lepcc-decode-error","Bad size");const u=new Uint16Array(s.count);if(8===s.bitsPerPoint){if(s.count+n!==e.byteLength)throw new o.A("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,s.count);for(let e=0;e<s.count;e++)u[e]=t[e]*s.scaleFactor}else if(16===s.bitsPerPoint){if(2*s.count+n!==e.byteLength)throw new o.A("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,s.count);for(let e=0;e<s.count;e++)u[e]=t[e]*s.scaleFactor}else{const t=[];if(f(e,n,t)!==e.byteLength)throw new o.A("lepcc-decode-error","Bad size");for(let e=0;e<s.count;e++)u[e]=t[e]*s.scaleFactor}return u}}}]);
//# sourceMappingURL=8664.dddcbcfe.chunk.js.map