import{j as e}from"./jsx-runtime-DATRzywu.js";import{useMDXComponents as t}from"./index-CXkfE6bf.js";import"./index-DOYzD9QA.js";import"./_commonjsHelpers-Cpj98o6Y.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Here's your content in Markdown format:"}),`
`,e.jsx(n.h1,{id:"introduction-to-design-system-gaz",children:"Introduction to Design System Gaz"}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"To install the Gaz Design System, run the following command:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @ehsangazar/design-system
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Wrap your application with the ",e.jsx(n.code,{children:"ThemeWrapper"})," component to apply theming and enable the design system:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ThemeWrapper } from "@ehsangazar/design-system";
import "@ehsangazar/design-system/dist/design-system.css";

<ThemeWrapper
  customTheme={{
    appearance: "dark",
    accentColor: "teal",
  }}
>
  <Outlet />
</ThemeWrapper>;
`})}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"Gaz Design System is a comprehensive UI component library built on top of Radix UI. It offers a collection of accessible and customizable components with opinionated defaults, providing a robust foundation for building modern web applications that prioritize consistency and accessibility."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Built on Radix UI primitives"}),": Leverages Radix UI for accessible and high-quality base components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fully accessible components"}),": Ensures inclusive design by default."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dark/Light mode support"}),": Seamless support for both dark and light themes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable theming"}),": Easily adapt to your brand’s style with flexible theming options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type-safe with TypeScript"}),": Provides strong type safety for better developer experience."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Modern design patterns"}),": Implements best practices for UI design."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistent APIs"}),": Ensures intuitive and uniform APIs across components."]}),`
`]}),`
`,e.jsx(n.h2,{id:"available-components",children:"Available Components"}),`
`,e.jsx(n.p,{children:"The Gaz Design System includes a variety of commonly used components, such as:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Buttons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Input fields"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Modal dialogs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Navigation menus"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Form elements"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Typography"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Layout components"})}),`
`]}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsxs(n.p,{children:["Although the design system provides opinionated defaults, it is highly customizable. Use the ",e.jsx(n.code,{children:"customTheme"})," prop in the ",e.jsx(n.code,{children:"ThemeWrapper"})," component to tailor the appearance to your needs. You can modify design tokens such as colors, spacing, and typography to align with your brand."]})]})}function c(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{c as default};
