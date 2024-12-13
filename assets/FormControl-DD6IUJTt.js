import{j as e}from"./jsx-runtime-DATRzywu.js";import{e as l}from"./index-DOYzD9QA.js";import{L as d}from"./Label-BPD3ZJRx.js";import{S as p}from"./Small-ewsdUpbv.js";import{F as t}from"./Flex-KVqUSlUp.js";import{B as m}from"./Box-B6uAxP2q.js";import{I as c}from"./Input--MpiTdOs.js";const u=({placeholder:n,defaultValue:o,label:i,type:s,errorMessage:r,component:a=c})=>e.jsxs(t,{direction:"column",pt:"2",children:[e.jsx(d,{children:i}),e.jsx(m,{children:l.cloneElement(a,{type:s,placeholder:n,defaultValue:o})}),r&&e.jsx(t,{height:"20px",align:"center",children:e.jsx(p,{color:"red",children:r})})]});u.__docgenInfo={description:"",methods:[],displayName:"FormControl",props:{label:{required:!0,tsType:{name:"string"},description:""},component:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"",defaultValue:{value:`React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...rest }, ref) => {
    return (
      <RadixTextField.Root ref={ref} {...rest}>
        {icon && <RadixTextField.Slot>{icon}</RadixTextField.Slot>}
      </RadixTextField.Root>
    );
  }
)`,computed:!0}},placeholder:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""}}};export{u as F};
