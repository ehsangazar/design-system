import{y as p}from"./index-H1wMl_tP.js";const m=["initial","xs","sm","md","lg","xl"];function v(o,s){return Object.prototype.hasOwnProperty.call(o,s)}function f(o){return typeof o=="object"&&Object.keys(o).some(s=>m.includes(s))}function b({className:o,customProperties:s,...n}){const u=$({allowArbitraryValues:!0,className:o,...n}),t=g({customProperties:s,...n});return[u,t]}function $({allowArbitraryValues:o,value:s,className:n,propValues:u,parseValue:t=l=>l}){const l=[];if(s){if(typeof s=="string"&&u.includes(s))return d(n,s,t);if(f(s)){const a=s;for(const i in a){if(!v(a,i)||!m.includes(i))continue;const e=a[i];if(e!==void 0){if(u.includes(e)){const c=d(n,e,t),r=i==="initial"?c:`${i}:${c}`;l.push(r)}else if(o){const c=i==="initial"?n:`${i}:${n}`;l.push(c)}}}return l.join(" ")}if(o)return n}}function d(o,s,n){const u=o?"-":"",t=n(s),l=t==null?void 0:t.startsWith("-"),a=l?"-":"",i=l?t==null?void 0:t.substring(1):t;return`${a}${o}${u}${i}`}function g({customProperties:o,value:s,propValues:n,parseValue:u=t=>t}){let t={};if(!(!s||typeof s=="string"&&n.includes(s))){if(typeof s=="string"&&(t=Object.fromEntries(o.map(l=>[l,s]))),f(s)){const l=s;for(const a in l){if(!v(l,a)||!m.includes(a))continue;const i=l[a];if(!n.includes(i))for(const e of o)t={[a==="initial"?e:`${e}-${a}`]:i,...t}}}for(const l in t){const a=t[l];a!==void 0&&(t[l]=u(a))}return t}}function y(...o){let s={};for(const n of o)n&&(s={...s,...n});return Object.keys(s).length?s:void 0}function j(...o){return Object.assign({},...o)}function P(o,...s){let n,u;const t={...o},l=j(...s);for(const a in l){let i=t[a];const e=l[a];if(e.default!==void 0&&i===void 0&&(i=e.default),e.type==="enum"&&![e.default,...e.values].includes(i)&&!f(i)&&(i=e.default),t[a]=i,"className"in e&&e.className){delete t[a];const c="responsive"in e;if(!i||f(i)&&!c)continue;if(f(i)&&(e.default!==void 0&&i.initial===void 0&&(i.initial=e.default),e.type==="enum"&&([e.default,...e.values].includes(i.initial)||(i.initial=e.default))),e.type==="enum"){const r=$({allowArbitraryValues:!1,value:i,className:e.className,propValues:e.values,parseValue:e.parseValue});n=p(n,r);continue}if(e.type==="string"||e.type==="enum | string"){const r=e.type==="string"?[]:e.values,[N,V]=b({className:e.className,customProperties:e.customProperties,propValues:r,parseValue:e.parseValue,value:i});u=y(u,V),n=p(n,N);continue}if(e.type==="boolean"&&i){n=p(n,e.className);continue}}}return t.className=p(n,o.className),t.style=y(u,o.style),t}export{b as R,$ as g,y as l,P as v};
