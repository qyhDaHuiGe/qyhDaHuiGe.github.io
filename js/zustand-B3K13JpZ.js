import{r as w,g as j,R as V}from"./react-vendor-D4ezllkW.js";var $={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const h=t=>{let e;const n=new Set,o=(s,f)=>{const c=typeof s=="function"?s(e):s;if(!Object.is(c,e)){const i=e;e=f??(typeof c!="object"||c===null)?c:Object.assign({},e,c),n.forEach(a=>a(e,i))}},r=()=>e,S={setState:o,getState:r,getInitialState:()=>v,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>{n.clear()}},v=e=t(o,r,S);return S},I=t=>t?h(t):h;var b={exports:{}},D={},_={exports:{}},R={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=w;function A(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var P=typeof Object.is=="function"?Object.is:A,T=d.useState,W=d.useEffect,q=d.useLayoutEffect,C=d.useDebugValue;function z(t,e){var n=e(),o=T({inst:{value:n,getSnapshot:e}}),r=o[0].inst,u=o[1];return q(function(){r.value=n,r.getSnapshot=e,y(r)&&u({inst:r})},[t,n,e]),W(function(){return y(r)&&u({inst:r}),t(function(){y(r)&&u({inst:r})})},[t]),C(n),n}function y(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!P(t,n)}catch{return!0}}function B(t,e){return e()}var F=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?B:z;R.useSyncExternalStore=d.useSyncExternalStore!==void 0?d.useSyncExternalStore:F;_.exports=R;var L=_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=w,M=L;function U(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var k=typeof Object.is=="function"?Object.is:U,G=M.useSyncExternalStore,H=E.useRef,J=E.useEffect,K=E.useMemo,N=E.useDebugValue;D.useSyncExternalStoreWithSelector=function(t,e,n,o,r){var u=H(null);if(u.current===null){var l={hasValue:!1,value:null};u.current=l}else l=u.current;u=K(function(){function S(i){if(!v){if(v=!0,s=i,i=o(i),r!==void 0&&l.hasValue){var a=l.value;if(r(a,i))return f=a}return f=i}if(a=f,k(s,i))return a;var m=o(i);return r!==void 0&&r(a,m)?a:(s=i,f=m)}var v=!1,s,f,c=n===void 0?null:n;return[function(){return S(e())},c===null?void 0:function(){return S(c())}]},[e,n,o,r]);var p=G(t,u[0],u[1]);return J(function(){l.hasValue=!0,l.value=p},[p]),N(p),p};b.exports=D;var Q=b.exports;const X=j(Q);var O={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:Y}=V,{useSyncExternalStoreWithSelector:Z}=X;let x=!1;const tt=t=>t;function et(t,e=tt,n){(O?"production":void 0)!=="production"&&n&&!x&&(x=!0);const o=Z(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return Y(o),o}const g=t=>{const e=typeof t=="function"?I(t):t,n=(o,r)=>et(e,o,r);return Object.assign(n,e),n},rt=t=>t?g(t):g;export{rt as c};
