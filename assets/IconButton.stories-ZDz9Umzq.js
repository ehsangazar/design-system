import{j as n}from"./jsx-runtime-DATRzywu.js";import{C as j}from"./COLORS-z2Hurcq-.js";import{o as H}from"./icon-button-BvuPrXIr.js";import{w as I}from"./index-C28YhiDS.js";import{j as B,e as M}from"./index-B-j8V5Ow.js";import{M as r}from"./react-icons.esm-BhrHwaDZ.js";import"./index-DOYzD9QA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-H1wMl_tP.js";import"./base-button--__V3Yc6.js";import"./index-Bdu5OmIK.js";import"./index-DMW9u2ZF.js";import"./as-child.prop-ByCI9gYn.js";import"./color.prop-Bz4j-_70.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-1IxjFv-s.js";import"./flex-iYgs-AWM.js";import"./extract-props-8lbMlImM.js";import"./layout.props-B2ZFvd41.js";import"./padding.props-BDtdWJAm.js";import"./margin.props-DI7zkkCN.js";import"./flex.props-CpwMsmsJ.js";import"./gap.props-Dam2lYud.js";import"./spinner-D1wiBEAR.js";import"./index-BPSIym5F.js";import"./index-CgS8wkV7.js";import"./index-BqYKTgoX.js";import"./index-I7zvcfgS.js";const G=H,so={title:"Components/IconButton",component:G,argTypes:{size:{control:"select",options:["1","2"]},variant:{control:"select",options:["solid","soft"]},color:{control:"select",options:j},highContrast:{control:"boolean"}}},o=B.fn(),e={args:{size:"3",variant:"solid",color:"blue",onClick:o,children:n.jsx(r,{width:"20",height:"20"})},play:async({canvasElement:x})=>{const c=I(x).getByRole("button");c==null||c.click(),await new Promise(z=>setTimeout(z,1e3)),M(o).toHaveBeenCalled()}},t={args:{size:"1",variant:"solid",color:"blue",children:n.jsx(r,{width:"15",height:"15"}),onClick:o}},i={args:{size:"2",variant:"solid",color:"blue",children:n.jsx(r,{width:"25",height:"25"}),onClick:o}},a={args:{size:"1",variant:"soft",color:"blue",children:n.jsx(r,{width:"15",height:"15"}),onClick:o}},s={args:{size:"2",variant:"soft",color:"blue",children:n.jsx(r,{width:"25",height:"25"}),onClick:o}};var l,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: "3",
    variant: "solid",
    color: "blue",
    onClick: mockClickHandler,
    children: <MagnifyingGlassIcon width="20" height="20" />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const IconButton = canvas.getByRole("button");
    IconButton?.click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect(mockClickHandler).toHaveBeenCalled();
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: "1",
    variant: "solid",
    color: "blue",
    children: <MagnifyingGlassIcon width="15" height="15" />,
    onClick: mockClickHandler
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,k,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "2",
    variant: "solid",
    color: "blue",
    children: <MagnifyingGlassIcon width="25" height="25" />,
    onClick: mockClickHandler
  }
}`,...(f=(k=i.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var C,v,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "1",
    variant: "soft",
    color: "blue",
    children: <MagnifyingGlassIcon width="15" height="15" />,
    onClick: mockClickHandler
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var w,b,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "2",
    variant: "soft",
    color: "blue",
    children: <MagnifyingGlassIcon width="25" height="25" />,
    onClick: mockClickHandler
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const co=["Default","SmallSolid","LargeSolid","SmallSoft","LargeSoft"];export{e as Default,s as LargeSoft,i as LargeSolid,a as SmallSoft,t as SmallSolid,co as __namedExportsOrder,so as default};
