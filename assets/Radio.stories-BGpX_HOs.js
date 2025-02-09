import{j as e}from"./jsx-runtime-DATRzywu.js";import{e as b}from"./radio-D3r8LWiV.js";import{C as S}from"./COLORS-z2Hurcq-.js";import{F as r}from"./Flex--R-A2Lhl.js";import{T as l}from"./Text-RBGMEwGn.js";import"./index-DOYzD9QA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-H1wMl_tP.js";import"./index-DW48STyt.js";import"./index-DMW9u2ZF.js";import"./color.prop-Bz4j-_70.js";import"./high-contrast.prop-BhzBAZU8.js";import"./margin.props-DI7zkkCN.js";import"./extract-props-8lbMlImM.js";import"./flex-iYgs-AWM.js";import"./layout.props-B2ZFvd41.js";import"./padding.props-BDtdWJAm.js";import"./index-Bdu5OmIK.js";import"./flex.props-CpwMsmsJ.js";import"./as-child.prop-ByCI9gYn.js";import"./gap.props-Dam2lYud.js";import"./text--g2-jWHw.js";import"./truncate.prop-DhqNRCQA.js";import"./weight.prop-DAtMV9Xl.js";const n=b,U={component:n,argTypes:{size:{control:"select",options:["1","2","3"]},variant:{control:"select",options:["classic","surface","soft"]},color:{control:"select",options:S},highContrast:{control:"boolean"}},parameters:{docs:{description:{component:"Another description, overriding the comments"}}}},a={args:{},render:i=>e.jsxs(r,{align:"start",direction:"column",gap:"1",children:[e.jsx(r,{asChild:!0,gap:"2",children:e.jsxs(l,{as:"label",size:"2",children:[e.jsx(n,{name:"example",...i}),"Default"]})}),e.jsx(r,{asChild:!0,gap:"2",children:e.jsxs(l,{as:"label",size:"2",children:[e.jsx(n,{name:"example",...i}),"Comfortable"]})}),e.jsx(r,{asChild:!0,gap:"2",children:e.jsxs(l,{as:"label",size:"2",children:[e.jsx(n,{name:"example",...i}),"Compact"]})})]})},s={args:{size:"1",variant:"classic",color:"blue",highContrast:!1}},o={args:{size:"2",variant:"surface",color:"green",highContrast:!0}},t={args:{size:"3",variant:"soft",color:"red",highContrast:!1}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: props => <Flex align="start" direction="column" gap="1">
      <Flex asChild gap="2">
        <Text as="label" size="2">
          <Radio name="example" {...props} />
          Default
        </Text>
      </Flex>

      <Flex asChild gap="2">
        <Text as="label" size="2">
          <Radio name="example" {...props} />
          Comfortable
        </Text>
      </Flex>

      <Flex asChild gap="2">
        <Text as="label" size="2">
          <Radio name="example" {...props} />
          Compact
        </Text>
      </Flex>
    </Flex>
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,x,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: "1",
    variant: "classic",
    color: "blue",
    highContrast: false
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var u,h,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "2",
    variant: "surface",
    color: "green",
    highContrast: true
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var C,z,j;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "3",
    variant: "soft",
    color: "red",
    highContrast: false
  }
}`,...(j=(z=t.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const V=["Default","SmallClassic","MediumSurface","LargeSoft"];export{a as Default,t as LargeSoft,o as MediumSurface,s as SmallClassic,V as __namedExportsOrder,U as default};
