import{r as t}from"./index-DOYzD9QA.js";import{y as u}from"./index-H1wMl_tP.js";import{S as f}from"./index-Bdu5OmIK.js";import{o as p}from"./as-child.prop-ByCI9gYn.js";import{s as y}from"./color.prop-Bz4j-_70.js";import{o as b}from"./high-contrast.prop-BhzBAZU8.js";import{r as v}from"./radius.prop-1IxjFv-s.js";import{p as E}from"./flex-iYgs-AWM.js";import{s as g}from"./spinner-D1wiBEAR.js";import{V as $}from"./index-BPSIym5F.js";import{v as h}from"./extract-props-8lbMlImM.js";import{r as N}from"./margin.props-DI7zkkCN.js";const z=["1","2","3","4"],B=["classic","solid","soft","surface","outline","ghost"],n={...p,size:{type:"enum",className:"rt-r-size",values:z,default:"2",responsive:!0},variant:{type:"enum",className:"rt-variant",values:B,default:"solid"},...y,...b,...v,loading:{type:"boolean",className:"rt-loading",default:!1}};function j(e,a){if(e!==void 0)return typeof e=="string"?a(e):Object.fromEntries(Object.entries(e).map(([r,s])=>[r,a(s)]))}function I(e){return e==="3"?"3":"2"}function w(e){switch(e){case"1":return"1";case"2":case"3":return"2";case"4":return"3"}}const x=t.forwardRef((e,a)=>{const{size:r=n.size.default}=e,{className:s,children:i,asChild:l,color:m,radius:c,disabled:o=e.loading,...d}=h(e,n,N);return t.createElement(l?f:"button",{"data-disabled":o||void 0,"data-accent-color":m,"data-radius":c,...d,ref:a,className:u("rt-reset","rt-BaseButton",s),disabled:o},e.loading?t.createElement(t.Fragment,null,t.createElement("span",{style:{display:"contents",visibility:"hidden"},"aria-hidden":!0},i),t.createElement($,null,i),t.createElement(E,{asChild:!0,align:"center",justify:"center",position:"absolute",inset:"0"},t.createElement("span",null,t.createElement(g,{size:j(r,w)})))):i)});x.displayName="BaseButton";export{x as n,I as p,j as s};
