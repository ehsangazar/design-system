import{j as e}from"./jsx-runtime-DATRzywu.js";import{useMDXComponents as s}from"./index-CXkfE6bf.js";import"./index-DOYzD9QA.js";import"./_commonjsHelpers-Cpj98o6Y.js";function t(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"typography-in-themes",children:"Typography in Themes"}),`
`,e.jsx(n.h2,{id:"base-components",children:"Base Components"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"Text"})," and ",e.jsx(n.strong,{children:"Heading"})," components to render titles and body copy. These components share ",e.jsx(n.code,{children:"size"})," and ",e.jsx(n.code,{children:"weight"})," props and map to the underlying type system to ensure consistent typography throughout your app."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"typographic-principles",children:"Typographic Principles"}),`
`,e.jsx(n.p,{children:"The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Heading mb="2" size="4">Typographic principles</Heading>
<Text>
  The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant.
</Text>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"formatting-components",children:"Formatting Components"}),`
`,e.jsx(n.p,{children:"You can compose formatting components to add emphasis, signal importance, present code, and more."}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Text>
  The <Em>most</Em> important thing to remember is,{" "}
  <Strong>stay positive</Strong>.
</Text>
`})}),`
`,e.jsxs(n.p,{children:[`Output:
`,e.jsxs(n.em,{children:["The most important thing to remember is, ",e.jsx(n.strong,{children:"stay positive"}),"."]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"type-scale",children:"Type Scale"}),`
`,e.jsxs(n.p,{children:["The typographic system is based on a ",e.jsx(n.strong,{children:"9-step size scale"}),". Each step includes values for font size, line height, and letter spacing, designed to work in harmony."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Text size="6">The quick brown fox jumps over the lazy dog.</Text>
`})}),`
`,e.jsx(n.h3,{id:"type-scale-steps",children:"Type Scale Steps"}),`
`,e.jsx(n.p,{children:`Step 1: Size 12px, Letter Spacing 0.0025em, Line Height 16px
Step 2: Size 14px, Letter Spacing 0em, Line Height 20px
Step 3: Size 16px, Letter Spacing 0em, Line Height 24px
Step 4: Size 18px, Letter Spacing -0.0025em, Line Height 26px
Step 5: Size 20px, Letter Spacing -0.005em, Line Height 28px
Step 6: Size 24px, Letter Spacing -0.00625em, Line Height 30px
Step 7: Size 28px, Letter Spacing -0.0075em, Line Height 36px
Step 8: Size 35px, Letter Spacing -0.01em, Line Height 40px
Step 9: Size 60px, Letter Spacing -0.025em, Line Height 60px`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"font-weight",children:"Font Weight"}),`
`,e.jsx(n.p,{children:"The typography system supports the following weights. These can be customized to map to your typeface."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Light"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Regular"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Medium"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Bold"})}),`
`]}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Text size="6">
  <Flex direction="column">
    <Text weight="light">Light</Text>
    <Text weight="regular">Regular</Text>
    <Text weight="medium">Medium</Text>
    <Text weight="bold">Bold</Text>
  </Flex>
</Text>
`})}),`
`,e.jsx(n.h3,{id:"default-font-weights",children:"Default Font Weights"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Light: 300"}),`
`,e.jsx(n.li,{children:"Regular: 400"}),`
`,e.jsx(n.li,{children:"Medium: 500"}),`
`,e.jsx(n.li,{children:"Bold: 700"}),`
`]})]})}function a(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{a as default};
