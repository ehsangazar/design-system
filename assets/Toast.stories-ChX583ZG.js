import{j as e}from"./jsx-runtime-DATRzywu.js";import{B as a}from"./Box-DfU6h8pI.js";import{B as l}from"./Button-DT35nn0e.js";import{y as c}from"./index-BFRNsr6e.js";import"./index-DOYzD9QA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-DCh_DdtW.js";import"./index-H1wMl_tP.js";import"./index-Bdu5OmIK.js";import"./index-DMW9u2ZF.js";import"./as-child.prop-ByCI9gYn.js";import"./extract-props-8lbMlImM.js";import"./layout.props-B2ZFvd41.js";import"./padding.props-BDtdWJAm.js";import"./margin.props-DI7zkkCN.js";import"./button-ppyp4JaV.js";import"./base-button--__V3Yc6.js";import"./color.prop-Bz4j-_70.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-1IxjFv-s.js";import"./flex-iYgs-AWM.js";import"./flex.props-CpwMsmsJ.js";import"./gap.props-Dam2lYud.js";import"./spinner-D1wiBEAR.js";import"./index-BPSIym5F.js";import"./index-CgS8wkV7.js";import"./index-BqYKTgoX.js";import"./index-I7zvcfgS.js";const I={title:"Components/Toast",component:()=>null,argTypes:{}},r={args:{},render:()=>e.jsx(a,{children:e.jsx(l,{onClick:()=>{c("Hello world!")},children:"Click me"})})},o={args:{},render:()=>e.jsx(a,{children:e.jsx(l,{onClick:()=>{c("Hello world!",{position:"top-right",type:"success",autoClose:8e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:"Click me"})})};var t,s,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {},
  render: () => <Box>
      <Button onClick={() => {
      toast("Hello world!");
    }}>
        Click me
      </Button>
    </Box>
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: () => <Box>
      <Button onClick={() => {
      toast("Hello world!", {
        position: "top-right",
        type: "success",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }}>
        Click me
      </Button>
    </Box>
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const J=["Default","Custom"];export{o as Custom,r as Default,J as __namedExportsOrder,I as default};
