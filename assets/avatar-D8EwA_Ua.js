import{r as t}from"./index-DOYzD9QA.js";import{y as v}from"./index-H1wMl_tP.js";import{c as L,a as E,u as g}from"./index-hsMOP9mU.js";import{P as m}from"./index-DB_b48On.js";import{j as c}from"./jsx-runtime-DATRzywu.js";import{o as w}from"./as-child.prop-ByCI9gYn.js";import{s as x}from"./color.prop-Bz4j-_70.js";import{o as R}from"./high-contrast.prop-BhzBAZU8.js";import{r as I}from"./radius.prop-1IxjFv-s.js";import{v as b}from"./extract-props-8lbMlImM.js";import{d as k}from"./get-subtree-OsBVLi08.js";import{r as _}from"./margin.props-DI7zkkCN.js";var u="Avatar",[F,aa]=L(u),[M,p]=F(u),A=t.forwardRef((e,r)=>{const{__scopeAvatar:s,...a}=e,[n,o]=t.useState("idle");return c.jsx(M,{scope:s,imageLoadingStatus:n,onImageLoadingStatusChange:o,children:c.jsx(m.span,{...a,ref:r})})});A.displayName=u;var S="AvatarImage",y=t.forwardRef((e,r)=>{const{__scopeAvatar:s,src:a,onLoadingStatusChange:n=()=>{},...o}=e,l=p(S,s),i=j(a,o.referrerPolicy),d=E(f=>{n(f),l.onImageLoadingStatusChange(f)});return g(()=>{i!=="idle"&&d(i)},[i,d]),i==="loaded"?c.jsx(m.img,{...o,ref:r,src:a}):null});y.displayName=S;var N="AvatarFallback",h=t.forwardRef((e,r)=>{const{__scopeAvatar:s,delayMs:a,...n}=e,o=p(N,s),[l,i]=t.useState(a===void 0);return t.useEffect(()=>{if(a!==void 0){const d=window.setTimeout(()=>i(!0),a);return()=>window.clearTimeout(d)}},[a]),l&&o.imageLoadingStatus!=="loaded"?c.jsx(m.span,{...n,ref:r}):null});h.displayName=N;function j(e,r){const[s,a]=t.useState("idle");return g(()=>{if(!e){a("error");return}let n=!0;const o=new window.Image,l=i=>()=>{n&&a(i)};return a("loading"),o.onload=l("loaded"),o.onerror=l("error"),o.src=e,r&&(o.referrerPolicy=r),()=>{n=!1}},[e,r]),s}var P=A,$=y,T=h;const z=["1","2","3","4","5","6","7","8","9"],q=["solid","soft"],B={...w,size:{type:"enum",className:"rt-r-size",values:z,default:"3",responsive:!0},variant:{type:"enum",className:"rt-variant",values:q,default:"soft"},...x,...R,...I,fallback:{type:"ReactNode",required:!0}},G=t.forwardRef((e,r)=>{const{asChild:s,children:a,className:n,style:o,color:l,radius:i,...d}=b(e,B,_);return t.createElement(P,{"data-accent-color":l,"data-radius":i,className:v("rt-reset","rt-AvatarRoot",n),style:o,asChild:s},k({asChild:s,children:a},t.createElement(C,{ref:r,...d})))});G.displayName="Avatar";const C=t.forwardRef(({fallback:e,...r},s)=>{const[a,n]=t.useState("idle");return t.createElement(t.Fragment,null,a==="idle"||a==="loading"?t.createElement("span",{className:"rt-AvatarFallback"}):null,a==="error"?t.createElement(T,{className:v("rt-AvatarFallback",{"rt-one-letter":typeof e=="string"&&e.length===1,"rt-two-letters":typeof e=="string"&&e.length===2}),delayMs:0},e):null,t.createElement($,{ref:s,className:"rt-AvatarImage",...r,onLoadingStatusChange:o=>{var l;(l=r.onLoadingStatusChange)==null||l.call(r,o),n(o)}}))});C.displayName="AvatarImpl";export{G as i};