import{r as a}from"./index-DOYzD9QA.js";import{y as m}from"./index-H1wMl_tP.js";import{S as u}from"./index-CiphzMdQ.js";import{o as n}from"./as-child.prop-ByCI9gYn.js";import{v as i}from"./extract-props-8lbMlImM.js";import{r as c}from"./margin.props-DI7zkkCN.js";const v=["all","x","y","top","bottom","left","right"],y=["border-box","padding-box"],e=["current","0"],f={...n,side:{type:"enum",className:"rt-r-side",values:v,default:"all",responsive:!0},clip:{type:"enum",className:"rt-r-clip",values:y,default:"border-box",responsive:!0},p:{type:"enum",className:"rt-r-p",values:e,parseValue:r,responsive:!0},px:{type:"enum",className:"rt-r-px",values:e,parseValue:r,responsive:!0},py:{type:"enum",className:"rt-r-py",values:e,parseValue:r,responsive:!0},pt:{type:"enum",className:"rt-r-pt",values:e,parseValue:r,responsive:!0},pr:{type:"enum",className:"rt-r-pr",values:e,parseValue:r,responsive:!0},pb:{type:"enum",className:"rt-r-pb",values:e,parseValue:r,responsive:!0},pl:{type:"enum",className:"rt-r-pl",values:e,parseValue:r,responsive:!0}};function r(s){return s==="current"?"inset":s}const d=a.forwardRef((s,p)=>{const{asChild:t,className:l,...o}=i(s,f,c);return a.createElement(t?u:"div",{...o,ref:p,className:m("rt-Inset",l)})});d.displayName="Inset";export{d as o};