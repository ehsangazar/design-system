import{j as e}from"./jsx-runtime-DATRzywu.js";import{B as m}from"./Box-DfU6h8pI.js";import{e as i}from"./index-DOYzD9QA.js";import{F as x}from"./Flex--R-A2Lhl.js";import{T as g}from"./ThemeContext-DcLDf27X.js";import{b as h}from"./borderRadiusHandler-CFXOe0Qa.js";import{C as f}from"./react-icons.esm-BhrHwaDZ.js";import{C as y}from"./Card-DUF9Kk-w.js";import"./box-DCh_DdtW.js";import"./index-H1wMl_tP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bdu5OmIK.js";import"./index-DMW9u2ZF.js";import"./as-child.prop-ByCI9gYn.js";import"./extract-props-8lbMlImM.js";import"./layout.props-B2ZFvd41.js";import"./padding.props-BDtdWJAm.js";import"./margin.props-DI7zkkCN.js";import"./flex-iYgs-AWM.js";import"./flex.props-CpwMsmsJ.js";import"./gap.props-Dam2lYud.js";import"./card-364RsAqN.js";const b=({children:o,bg:r="gray-light"})=>e.jsx(m,{children:i.Children.map(o,t=>i.isValidElement(t)?i.cloneElement(t,{bg:r}):t)}),j=({children:o,bg:r})=>{const[t,a]=i.useState(!1),{theme:p}=i.useContext(g);return e.jsx(m,{my:"1",style:{border:`1px solid var(--${r}-4)`,borderRadius:h(p.radius),overflow:"hidden"},children:i.Children.map(o,d=>i.isValidElement(d)?i.cloneElement(d,{isOpen:t,setIsOpen:a,bg:r}):d)})},v=({children:o,isOpen:r,setIsOpen:t,bg:a})=>e.jsx(y,{style:{padding:"0",margin:"0",borderRadius:"0"},bg:a,variant:"ghost",hoverEnabled:!0,children:e.jsxs(x,{justify:"between",p:"3",style:{borderBottom:r?`1px solid var(--${a}-8)`:"",cursor:"pointer"},onClick:()=>t&&t(!r),children:[o,e.jsx(f,{width:"20px",height:"20px",style:{transform:r?"rotate(180deg)":""}})]})}),C=({children:o,isOpen:r})=>e.jsx(m,{style:{maxHeight:r?"1000px":"0",opacity:r?"1":"0",overflow:"hidden",transitionDuration:"0.6s",cursor:"default"},children:e.jsx(m,{p:"3",children:o})}),n={Root:b,Item:j,Header:v,Panel:C},q=o=>e.jsxs(n.Root,{...o,children:[e.jsxs(n.Item,{children:[e.jsx(n.Header,{children:"Lorem ipsum dolor sit amet consectetur"}),e.jsx(n.Panel,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),e.jsxs(n.Item,{children:[e.jsx(n.Header,{children:"Lorem ipsum dolor sit amet consectetur"}),e.jsx(n.Panel,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]}),M={title:"Components/Accordion",component:q,argTypes:{bg:{control:"select",options:["gray","gray-light","gray-medium","gray-dark","gold","bronze","brown","yellow","amber","orange","tomato","red","ruby","crimson","pink","plum","purple","violet","iris","indigo","blue","cyan","teal","jade","green","grass"]}}},s={args:{bg:"cyan"}};var l,c,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    bg: "cyan"
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const N=["Default"];export{s as Default,N as __namedExportsOrder,M as default};
