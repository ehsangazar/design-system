import{r as a}from"./index-DOYzD9QA.js";import{a as d,u as b}from"./index-hsMOP9mU.js";function y({prop:e,defaultProp:c,onChange:r=()=>{}}){const[t,o]=h({defaultProp:c,onChange:r}),s=e!==void 0,u=s?e:t,i=d(r),f=a.useCallback(n=>{if(s){const l=typeof n=="function"?n(e):n;l!==e&&i(l)}else o(n)},[s,e,o,i]);return[u,f]}function h({defaultProp:e,onChange:c}){const r=a.useState(e),[t]=r,o=a.useRef(t),s=d(c);return a.useEffect(()=>{o.current!==t&&(s(t),o.current=t)},[t,o,s]),r}function g(e){const[c,r]=a.useState(void 0);return b(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const t=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const s=o[0];let u,i;if("borderBoxSize"in s){const f=s.borderBoxSize,n=Array.isArray(f)?f[0]:f;u=n.inlineSize,i=n.blockSize}else u=e.offsetWidth,i=e.offsetHeight;r({width:u,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}else r(void 0)},[e]),c}export{g as a,y as u};