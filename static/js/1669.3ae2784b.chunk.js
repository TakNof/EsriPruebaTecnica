"use strict";(self.webpackChunkweb_arcgis_app=self.webpackChunkweb_arcgis_app||[]).push([[1669,4050],{43075:(e,n,t)=>{t.d(n,{A:()=>E,B:()=>T,C:()=>A,D:()=>L,E:()=>V,F:()=>H,G:()=>I,H:()=>_,I:()=>j,J:()=>C,K:()=>k,L:()=>q,M:()=>B,N:()=>J,a:()=>c,b:()=>a,c:()=>s,d:()=>u,e:()=>o,f:()=>l,g:()=>N,h:()=>f,i:()=>g,j:()=>d,k:()=>x,l:()=>y,m:()=>M,n:()=>w,o:()=>G,p:()=>R,q:()=>S,r:()=>m,s:()=>v,t:()=>h,u:()=>z,v:()=>D,w:()=>p,x:()=>P,y:()=>Z,z:()=>b});var i=t(52612),r=t(28778);function o(e){return i.G.extendedSpatialReferenceInfo(e)}function s(e,n,t){return i.G.clip(r.g,e,n,t)}function c(e,n,t){return i.G.cut(r.g,e,n,t)}function a(e,n,t){return i.G.contains(r.g,e,n,t)}function u(e,n,t){return i.G.crosses(r.g,e,n,t)}function l(e,n,t,o){return i.G.distance(r.g,e,n,t,o)}function f(e,n,t){return i.G.equals(r.g,e,n,t)}function g(e,n,t){return i.G.intersects(r.g,e,n,t)}function h(e,n,t){return i.G.touches(r.g,e,n,t)}function p(e,n,t){return i.G.within(r.g,e,n,t)}function d(e,n,t){return i.G.disjoint(r.g,e,n,t)}function G(e,n,t){return i.G.overlaps(r.g,e,n,t)}function m(e,n,t,o){return i.G.relate(r.g,e,n,t,o)}function x(e,n){return i.G.isSimple(r.g,e,n)}function v(e,n){return i.G.simplify(r.g,e,n)}function y(e,n){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.G.convexHull(r.g,e,n,t)}function M(e,n,t){return i.G.difference(r.g,e,n,t)}function w(e,n,t){return i.G.symmetricDifference(r.g,e,n,t)}function R(e,n,t){return i.G.intersect(r.g,e,n,t)}function z(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return i.G.union(r.g,e,n,t)}function S(e,n,t,o,s,c,a){return i.G.offset(r.g,e,n,t,o,s,c,a)}function D(e,n,t,o){let s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return i.G.buffer(r.g,e,n,t,o,s)}function P(e,n,t,o,s,c,a){return i.G.geodesicBuffer(r.g,e,n,t,o,s,c,a)}function Z(e,n,t){let o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return i.G.nearestCoordinate(r.g,e,n,t,o)}function b(e,n,t){return i.G.nearestVertex(r.g,e,n,t)}function E(e,n,t,o,s){return i.G.nearestVertices(r.g,e,n,t,o,s)}function T(e,n,t,r){if(null==n||null==r)throw new Error("Illegal Argument Exception");const o=i.G.rotate(n,t,r);return o.spatialReference=e,o}function A(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const r=i.G.flipHorizontal(n,t);return r.spatialReference=e,r}function L(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const r=i.G.flipVertical(n,t);return r.spatialReference=e,r}function V(e,n,t,o,s){return i.G.generalize(r.g,e,n,t,o,s)}function H(e,n,t,o){return i.G.densify(r.g,e,n,t,o)}function I(e,n,t,o){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return i.G.geodesicDensify(r.g,e,n,t,o,s)}function _(e,n,t){return i.G.planarArea(r.g,e,n,t)}function j(e,n,t){return i.G.planarLength(r.g,e,n,t)}function C(e,n,t,o){return i.G.geodesicArea(r.g,e,n,t,o)}function k(e,n,t,o){return i.G.geodesicLength(r.g,e,n,t,o)}function q(e,n,t){return null==n||null==t?[]:i.G.intersectLinesToPoints(r.g,e,n,t)}function B(e,n){i.G.changeDefaultSpatialReferenceTolerance(e,n)}function J(e){i.G.clearDefaultSpatialReferenceTolerance(e)}const N=Object.freeze(Object.defineProperty({__proto__:null,buffer:D,changeDefaultSpatialReferenceTolerance:B,clearDefaultSpatialReferenceTolerance:J,clip:s,contains:a,convexHull:y,crosses:u,cut:c,densify:H,difference:M,disjoint:d,distance:l,equals:f,extendedSpatialReferenceInfo:o,flipHorizontal:A,flipVertical:L,generalize:V,geodesicArea:C,geodesicBuffer:P,geodesicDensify:I,geodesicLength:k,intersect:R,intersectLinesToPoints:q,intersects:g,isSimple:x,nearestCoordinate:Z,nearestVertex:b,nearestVertices:E,offset:S,overlaps:G,planarArea:_,planarLength:j,relate:m,rotate:T,simplify:v,symmetricDifference:w,touches:h,union:z,within:p},Symbol.toStringTag,{value:"Module"}))},28778:(e,n,t)=>{t.d(n,{g:()=>i});const i={convertToGEGeometry:function(e,n){return null==n?null:e.convertJSONToGeometry(n)},exportPoint:function(e,n,t){const i=new r(e.getPointX(n),e.getPointY(n),t),o=e.hasZ(n),s=e.hasM(n);return o&&(i.z=e.getPointZ(n)),s&&(i.m=e.getPointM(n)),i},exportPolygon:function(e,n,t){return new o(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportPolyline:function(e,n,t){return new s(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportMultipoint:function(e,n,t){return new c(e.exportPoints(n),t,e.hasZ(n),e.hasM(n))},exportExtent:function(e,n,t){const i=e.hasZ(n),r=e.hasM(n),o=new a(e.getXMin(n),e.getYMin(n),e.getXMax(n),e.getYMax(n),t);if(i){const t=e.getZExtent(n);o.zmin=t.vmin,o.zmax=t.vmax}if(r){const t=e.getMExtent(n);o.mmin=t.vmin,o.mmax=t.vmax}return o}};class r{constructor(e,n,t){this.x=e,this.y=n,this.spatialReference=t,this.z=void 0,this.m=void 0}}class o{constructor(e,n,t,i){this.rings=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class s{constructor(e,n,t,i){this.paths=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class c{constructor(e,n,t,i){this.points=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class a{constructor(e,n,t,i,r){this.xmin=e,this.ymin=n,this.xmax=t,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},1669:(e,n,t)=>{t.r(n),t.d(n,{buffer:()=>i.v,changeDefaultSpatialReferenceTolerance:()=>i.M,clearDefaultSpatialReferenceTolerance:()=>i.N,clip:()=>i.c,contains:()=>i.b,convexHull:()=>i.l,crosses:()=>i.d,cut:()=>i.a,densify:()=>i.F,difference:()=>i.m,disjoint:()=>i.j,distance:()=>i.f,equals:()=>i.h,extendedSpatialReferenceInfo:()=>i.e,flipHorizontal:()=>i.C,flipVertical:()=>i.D,generalize:()=>i.E,geodesicArea:()=>i.J,geodesicBuffer:()=>i.x,geodesicDensify:()=>i.G,geodesicLength:()=>i.K,intersect:()=>i.p,intersectLinesToPoints:()=>i.L,intersects:()=>i.i,isSimple:()=>i.k,nearestCoordinate:()=>i.y,nearestVertex:()=>i.z,nearestVertices:()=>i.A,offset:()=>i.q,overlaps:()=>i.o,planarArea:()=>i.H,planarLength:()=>i.I,relate:()=>i.r,rotate:()=>i.B,simplify:()=>i.s,symmetricDifference:()=>i.n,touches:()=>i.t,union:()=>i.u,within:()=>i.w});t(52612),t(28778);var i=t(43075)}}]);
//# sourceMappingURL=1669.3ae2784b.chunk.js.map