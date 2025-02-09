import{j as e}from"./jsx-runtime-DATRzywu.js";import{C as s}from"./Checkbox-BIDhBYNh.js";import{C as v}from"./COLORS-z2Hurcq-.js";import{T as i}from"./Text-RBGMEwGn.js";import{F as p}from"./Flex--R-A2Lhl.js";import{g as z}from"./react.esm-CeVk_Jwh.js";import{e as c}from"./index-B-j8V5Ow.js";import"./index-DOYzD9QA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./checkbox-Csf2AgEu.js";import"./index-H1wMl_tP.js";import"./index-DMW9u2ZF.js";import"./index-DPl6ftfI.js";import"./index-DW48STyt.js";import"./index-C4f--Jk_.js";import"./index-E68bJuf7.js";import"./index-kb0X7lFJ.js";import"./index-9CeOK3Lz.js";import"./index-CgS8wkV7.js";import"./index-BqYKTgoX.js";import"./index-I7zvcfgS.js";import"./index-Bdu5OmIK.js";import"./color.prop-Bz4j-_70.js";import"./high-contrast.prop-BhzBAZU8.js";import"./extract-props-8lbMlImM.js";import"./margin.props-DI7zkkCN.js";import"./text--g2-jWHw.js";import"./as-child.prop-ByCI9gYn.js";import"./truncate.prop-DhqNRCQA.js";import"./weight.prop-DAtMV9Xl.js";import"./flex-iYgs-AWM.js";import"./layout.props-B2ZFvd41.js";import"./padding.props-BDtdWJAm.js";import"./flex.props-CpwMsmsJ.js";import"./gap.props-Dam2lYud.js";import"./test-utils-DAtBjxr8.js";import"./client-B3t08NZk.js";const ce={title:"Components/Checkbox",component:s,argTypes:{size:{control:"select",options:["1","2","3"]},variant:{control:"select",options:["classic","surface","soft"]},color:{control:"select",options:v},highContrast:{control:"boolean"},checked:{control:"boolean"}}},r={args:{size:"2",variant:"classic",color:"gray"},render:o=>e.jsx(i,{as:"label",size:"2",children:e.jsxs(p,{gap:"2",children:[e.jsx(s,{...o}),"Agree to Terms and Conditions"]})}),play:async({canvasElement:o})=>{const m=z(o),a=m.getByRole("checkbox");c(a).toBeInTheDocument();const C=m.getByText("Agree to Terms and Conditions");c(C).toBeInTheDocument(),a.click(),await new Promise(k=>setTimeout(k,1e3)),c(a).toHaveAttribute("data-state","checked")}},t={args:{size:"2",variant:"surface",color:"red"},render:o=>e.jsx(i,{as:"label",size:"2",children:e.jsxs(p,{gap:"2",children:[e.jsx(s,{...o}),"Agree to Terms and Conditions"]})})},n={args:{size:"2",variant:"soft",color:"blue"},render:o=>e.jsx(i,{as:"label",size:"2",children:e.jsxs(p,{gap:"2",children:[e.jsx(s,{...o}),"Agree to Terms and Conditions"]})})};var l,d,x;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: "2",
    variant: "classic",
    color: "gray"
  },
  render: props => <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox {...props} />
        Agree to Terms and Conditions
      </Flex>
    </Text>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    const label = canvas.getByText("Agree to Terms and Conditions");
    expect(label).toBeInTheDocument();
    checkbox.click();
    await new Promise(r => setTimeout(r, 1000));
    expect(checkbox).toHaveAttribute("data-state", "checked");
  }
}`,...(x=(d=r.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,u,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "2",
    variant: "surface",
    color: "red"
  },
  render: props => <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox {...props} />
        Agree to Terms and Conditions
      </Flex>
    </Text>
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,T,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "2",
    variant: "soft",
    color: "blue"
  },
  render: props => <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox {...props} />
        Agree to Terms and Conditions
      </Flex>
    </Text>
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const ie=["Default","Surface","Soft"];export{r as Default,n as Soft,t as Surface,ie as __namedExportsOrder,ce as default};
