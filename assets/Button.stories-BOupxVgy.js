import{j as r}from"./jsx-runtime-DATRzywu.js";import{B as tr}from"./Button-DT35nn0e.js";import{C as sr}from"./COLORS-z2Hurcq-.js";import{e as ar}from"./index-C28YhiDS.js";import{j as cr}from"./index-B-j8V5Ow.js";import{g as ir}from"./react.esm-CeVk_Jwh.js";import{M as er}from"./react-icons.esm-BhrHwaDZ.js";import"./index-DOYzD9QA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./button-ppyp4JaV.js";import"./index-H1wMl_tP.js";import"./base-button--__V3Yc6.js";import"./index-Bdu5OmIK.js";import"./index-DMW9u2ZF.js";import"./as-child.prop-ByCI9gYn.js";import"./color.prop-Bz4j-_70.js";import"./high-contrast.prop-BhzBAZU8.js";import"./radius.prop-1IxjFv-s.js";import"./flex-iYgs-AWM.js";import"./extract-props-8lbMlImM.js";import"./layout.props-B2ZFvd41.js";import"./padding.props-BDtdWJAm.js";import"./margin.props-DI7zkkCN.js";import"./flex.props-CpwMsmsJ.js";import"./gap.props-Dam2lYud.js";import"./spinner-D1wiBEAR.js";import"./index-BPSIym5F.js";import"./index-CgS8wkV7.js";import"./index-BqYKTgoX.js";import"./index-I7zvcfgS.js";import"./test-utils-DAtBjxr8.js";import"./client-B3t08NZk.js";const Qr={component:tr,argTypes:{children:{control:"text"},variant:{control:"select",options:["classic","solid","soft","surface","outline","ghost"]},size:{control:"select",options:["1","2","3","4"]},highContrast:{control:"boolean"},radius:{control:"select",options:["none","small","medium","large","full"]},loading:{control:"boolean"},color:{control:"select",options:sr},onClick:{action:"clicked"}},parameters:{docs:{description:{component:"Another description, overriding the comments"}}}},h=cr.fn(),e={args:{children:"Button",onClick:h},play:async({canvasElement:or})=>{const g=ir(or).getByRole("button");g==null||g.click(),await new Promise(nr=>setTimeout(nr,1e3)),ar(h).toHaveBeenCalled()}},o={args:{children:"Button",size:"2"}},n={args:{children:"Button",size:"3"}},t={args:{children:"Button",size:"1"}},s={args:{children:"Button",loading:!0}},a={args:{children:"Button",highContrast:!0}},c={args:{children:"Button",variant:"classic"}},i={args:{children:"Button",variant:"solid"}},m={args:{children:"Button",variant:"soft"}},l={args:{children:"Button",variant:"surface"}},p={args:{children:"Button",variant:"outline"}},d={args:{children:r.jsxs(r.Fragment,{children:["Button ",r.jsx(er,{})]})}},u={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(er,{}),"Button"]})}};var B,f,v;e.parameters={...e.parameters,docs:{...(B=e.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Button",
    onClick: mockClickHandler
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    button?.click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect(mockClickHandler).toHaveBeenCalled();
  }
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,C,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Button",
    size: "2"
  }
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var x,y,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Button",
    size: "3"
  }
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var z,H,I;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Button",
    size: "1"
  }
}`,...(I=(H=t.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var L,M,R;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: "Button",
    loading: true
  }
}`,...(R=(M=s.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var b,w,E;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Button",
    highContrast: true
  }
}`,...(E=(w=a.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var O,F,G;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "classic"
  }
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var T,D,P;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "solid"
  }
}`,...(P=(D=i.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var _,A,Q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "soft"
  }
}`,...(Q=(A=m.parameters)==null?void 0:A.docs)==null?void 0:Q.source}}};var q,J,K;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "surface"
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,U,V;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "outline"
  }
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var W,X,Y;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: <>
        Button <MagnifyingGlassIcon />
      </>
  }
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: <>
        <MagnifyingGlassIcon />
        Button
      </>
  }
}`,...(rr=($=u.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};const qr=["Default","Large","Medium","Small","Loading","HighContrast","Classic","Solid","Soft","Surface","Outline","RightIcon","LeftIcon"];export{c as Classic,e as Default,a as HighContrast,o as Large,u as LeftIcon,s as Loading,n as Medium,p as Outline,d as RightIcon,t as Small,m as Soft,i as Solid,l as Surface,qr as __namedExportsOrder,Qr as default};
