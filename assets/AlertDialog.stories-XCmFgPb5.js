import{j as t}from"./jsx-runtime-DATRzywu.js";import{b as k}from"./theme-panel-CSMZ4W-R.js";import"./avatar-D8EwA_Ua.js";import"./badge-WYd7FBhG.js";import"./blockquote-B1aX90yh.js";import"./box-dIRF3yzu.js";import"./button-DlIg2oA8.js";import"./card-DjmxA0G7.js";import"./checkbox-suhBuqXn.js";import"./code-BqqRhTy1.js";import"./container-CcvEL_10.js";import"./em-CgMa3jHa.js";import"./flex-DizmmxEJ.js";import"./grid-Cdmq7Oh9.js";import"./heading-C_4PyfHG.js";import"./icon-button-DlkbCCHS.js";import"./inset-ELfBekpL.js";import"./kbd-CbKaWsxS.js";import"./link-dHmBfXiH.js";import"./popover-DNDZvuPF.js";import"./progress-DxhZ2Cdb.js";import"./quote-DKy_mfZO.js";import"./radio-HH2KKyzX.js";import"./scroll-area-6v5qm58n.js";import"./separator-Bp8zJ2XE.js";import"./skeleton-HRpAQmjt.js";import"./slider-DJsaJPqC.js";import"./spinner-DhpBpra-.js";import"./strong-BbEtxIHs.js";import"./switch-BP-7dulp.js";import"./text-area-qoFm9yfp.js";import"./text-field-CB59ONGJ.js";import"./text-aCQFVNJJ.js";import"./theme-BRjMs0op.js";import"./tooltip-DWYHKP_J.js";import{B as m}from"./Button-x1aLSahm.js";import{F as h}from"./Flex-KVqUSlUp.js";import{g as v}from"./react.esm-C2bIEThp.js";import{j as u,e as a}from"./index-Cic5z-Xg.js";import"./index-DOYzD9QA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-H1wMl_tP.js";import"./index-hsMOP9mU.js";import"./index-8yDGVWmJ.js";import"./index-DW48STyt.js";import"./index-CiphzMdQ.js";import"./extract-props-8lbMlImM.js";import"./as-child.prop-ByCI9gYn.js";import"./color.prop-Bz4j-_70.js";import"./high-contrast.prop-BhzBAZU8.js";import"./base-button-CBJ6VwA4.js";import"./radius.prop-1IxjFv-s.js";import"./index-BiRJhuWk.js";import"./index-DB_b48On.js";import"./index-D3Yvp5t9.js";import"./index-C5aZREpB.js";import"./margin.props-DI7zkkCN.js";import"./index-Dc3Ir2cb.js";import"./index-CTg5oan3.js";import"./layout.props-B2ZFvd41.js";import"./padding.props-BDtdWJAm.js";import"./index-BhWjwwOa.js";import"./index-kb0X7lFJ.js";import"./index-BdQq_4o_.js";import"./get-subtree-OsBVLi08.js";import"./truncate.prop-DhqNRCQA.js";import"./weight.prop-DAtMV9Xl.js";import"./flex.props-CpwMsmsJ.js";import"./gap.props-Dam2lYud.js";import"./floating-ui.dom-D0xtKlXs.js";import"./test-utils-BWP06zSf.js";import"./client-BfJwlU97.js";const o=k,x=u.fn(),g=u.fn(),b=i=>t.jsxs(o.Root,{children:[t.jsx(o.Trigger,{children:t.jsx(m,{color:"red",children:"Revoke access"})}),t.jsxs(o.Content,{...i,children:[t.jsx(o.Title,{children:"Revoke access"}),t.jsx(o.Description,{size:"2",children:"Are you sure? This application will no longer be accessible and any existing sessions will be expired."}),t.jsxs(h,{gap:"3",mt:"4",justify:"end",children:[t.jsx(o.Cancel,{children:t.jsx(m,{"data-testid":"button-cancel",variant:"soft",color:"gray",onClick:g,children:"Cancel"})}),t.jsx(o.Action,{children:t.jsx(m,{"data-testid":"button-action",variant:"solid",color:"red",onClick:x,children:"Revoke access"})})]})]})]}),Wt={title:"Components/AlertDialog",component:b,argTypes:{align:{control:"select",options:["start","center"]},size:{control:"select",options:["1","2","3","4"]},width:{control:"text"},minWidth:{control:"text"},maxWidth:{control:"text"},height:{control:"text"},minHeight:{control:"text"},maxHeight:{control:"text"}}},e={args:{},play:async({canvasElement:i})=>{const s=v(i).getByRole("button");s.click(),await new Promise(n=>setTimeout(n,1e3));const r=document.querySelector("[data-testid='button-action']");r==null||r.click(),a(x).toHaveBeenCalled(),s.click(),await new Promise(n=>setTimeout(n,1e3));const c=document.querySelector("[data-testid='button-cancel']");c==null||c.click(),a(g).toHaveBeenCalled()}};var l,p,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    button.click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    const actionButton = document.querySelector("[data-testid='button-action']") as HTMLElement;
    actionButton?.click();
    expect(mockClickSuccessHandler).toHaveBeenCalled();
    button.click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    const cancelButton = document.querySelector("[data-testid='button-cancel']") as HTMLElement;
    cancelButton?.click();
    expect(mockClickCancelHandler).toHaveBeenCalled();
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const _t=["Default"];export{e as Default,_t as __namedExportsOrder,Wt as default};