import{j as e}from"./jsx-runtime-DATRzywu.js";import{useMDXComponents as r}from"./index-CXkfE6bf.js";import"./index-DOYzD9QA.js";import"./_commonjsHelpers-Cpj98o6Y.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"breakpoints-in-gaz-themes",children:"Breakpoints in Gaz Themes"}),`
`,e.jsxs(n.p,{children:["Gaz Themes provides built-in ",e.jsx(n.strong,{children:"breakpoints"})," to easily create adaptive layouts for different screen sizes."]}),`
`,e.jsx(n.h2,{id:"available-sizes",children:"Available Sizes"}),`
`,e.jsxs(n.p,{children:["Each breakpoint corresponds to a fixed screen width. Breakpoints are ",e.jsx(n.strong,{children:"min-width based"}),", meaning they apply when the screen width is equal to or greater than the specified value."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"initial"}),": 0px (Phones - portrait)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"xs"}),": 520px (Phones - landscape)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"sm"}),": 768px (Tablets - portrait)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"md"}),": 1024px (Tablets - landscape)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"lg"}),": 1280px (Laptops)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"xl"}),": 1640px (Desktops)"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Most component size and layout props accept a ",e.jsx(n.strong,{children:"Responsive object"})," to modify the given prop across different breakpoints."]}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.p,{children:"You can define component sizes for different screen sizes by passing an object with breakpoint keys and corresponding values:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Heading
  size={{
    initial: "3", // For phones (portrait)
    md: "5", // For tablets (landscape)
    xl: "7", // For desktops
  }}
/>
`})}),`
`,e.jsx(n.p,{children:"In this example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Heading"})," size will be ",e.jsx(n.code,{children:'"3"'})," on phones (portrait)."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Heading"})," size will change to ",e.jsx(n.code,{children:'"5"'})," on tablets (landscape)."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Heading"})," size will be ",e.jsx(n.code,{children:'"7"'})," on desktops (larger screens)."]}),`
`]}),`
`,e.jsx(n.p,{children:"This approach ensures a responsive design that adapts to varying screen sizes."})]})}function d(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{d as default};
