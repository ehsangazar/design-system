import{j as e}from"./jsx-runtime-DATRzywu.js";import{e as l}from"./index-DOYzD9QA.js";import{L as d}from"./Label-Dajp9V6A.js";import{S as p}from"./Small-CV8z7qKz.js";import{F as t}from"./Flex--R-A2Lhl.js";import{B as m}from"./Box-DfU6h8pI.js";import{I as u}from"./Input-fv52T-_W.js";const c=({placeholder:n,defaultValue:i,label:a,type:s,errorMessage:r,component:o=u})=>e.jsxs(t,{direction:"column",pt:"2",children:[e.jsx(d,{children:a}),e.jsx(m,{children:l.cloneElement(o,{type:s,placeholder:n,defaultValue:i})}),r&&e.jsx(t,{height:"20px",align:"center",children:e.jsx(p,{color:"red",children:r})})]});c.__docgenInfo={description:"",methods:[],displayName:"FormControl",props:{label:{required:!0,tsType:{name:"string"},description:""},component:{required:!1,tsType:{name:"ReactReactElement",raw:`React.ReactElement<{
  type?: string;
  placeholder?: string;
  defaultValue?: string;
}>`,elements:[{name:"signature",type:"object",raw:`{
  type?: string;
  placeholder?: string;
  defaultValue?: string;
}`,signature:{properties:[{key:"type",value:{name:"string",required:!1}},{key:"placeholder",value:{name:"string",required:!1}},{key:"defaultValue",value:{name:"string",required:!1}}]}}]},description:"",defaultValue:{value:`React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...rest }, ref) => {
    return (
      <RadixTextField.Root ref={ref} {...rest}>
        {icon && <RadixTextField.Slot>{icon}</RadixTextField.Slot>}
      </RadixTextField.Root>
    );
  }
)`,computed:!0}},placeholder:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""}}};export{c as F};
