import{r as o,R as st}from"./index-DOYzD9QA.js";import{y as it}from"./index-H1wMl_tP.js";import{c as _}from"./index-DW48STyt.js";import{u as F}from"./index-DMW9u2ZF.js";import{c as Pe}from"./index-DPl6ftfI.js";import{P as j,d as ct}from"./index-CgS8wkV7.js";import{u as K,a as Q}from"./index-E68bJuf7.js";import{j as y}from"./jsx-runtime-DATRzywu.js";import{c as lt,o as ut,s as dt,f as ft,a as pt,h as ht,b as Ce,l as gt,d as mt}from"./floating-ui.dom-D0xtKlXs.js";import{F as vt,r as yt}from"./index-BqYKTgoX.js";import{a as Ct,u as xt}from"./index-C4f--Jk_.js";import{P as be}from"./index-9CeOK3Lz.js";import{a as wt,S as Et}from"./index-Bdu5OmIK.js";import{R as Pt}from"./index-BPSIym5F.js";import{D as bt}from"./index-CTg5oan3.js";import{o as Rt}from"./as-child.prop-ByCI9gYn.js";import{o as Tt,e as At}from"./color.prop-Bz4j-_70.js";import{e as Ot}from"./radius.prop-1IxjFv-s.js";var St=st.useId||(()=>{}),Dt=0;function kt(e){const[r,t]=o.useState(St());return K(()=>{t(n=>n??String(Dt++))},[e]),r?`radix-${r}`:""}function _t(e,r=globalThis==null?void 0:globalThis.document){const t=Q(e);o.useEffect(()=>{const n=a=>{a.key==="Escape"&&t(a)};return r.addEventListener("keydown",n,{capture:!0}),()=>r.removeEventListener("keydown",n,{capture:!0})},[t,r])}var Lt="DismissableLayer",oe="dismissableLayer.update",Nt="dismissableLayer.pointerDownOutside",Mt="dismissableLayer.focusOutside",xe,Re=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Te=o.forwardRef((e,r)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:n,onPointerDownOutside:a,onFocusOutside:s,onInteractOutside:i,onDismiss:d,...l}=e,u=o.useContext(Re),[c,f]=o.useState(null),h=(c==null?void 0:c.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=o.useState({}),m=F(r,v=>f(v)),g=Array.from(u.layers),[C]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),E=g.indexOf(C),x=c?g.indexOf(c):-1,T=u.layersWithOutsidePointerEventsDisabled.size>0,w=x>=E,P=It(v=>{const O=v.target,B=[...u.branches].some(D=>D.contains(O));!w||B||(a==null||a(v),i==null||i(v),v.defaultPrevented||d==null||d())},h),R=$t(v=>{const O=v.target;[...u.branches].some(D=>D.contains(O))||(s==null||s(v),i==null||i(v),v.defaultPrevented||d==null||d())},h);return _t(v=>{x===u.layers.size-1&&(n==null||n(v),!v.defaultPrevented&&d&&(v.preventDefault(),d()))},h),o.useEffect(()=>{if(c)return t&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(xe=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(c)),u.layers.add(c),we(),()=>{t&&u.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=xe)}},[c,h,t,u]),o.useEffect(()=>()=>{c&&(u.layers.delete(c),u.layersWithOutsidePointerEventsDisabled.delete(c),we())},[c,u]),o.useEffect(()=>{const v=()=>p({});return document.addEventListener(oe,v),()=>document.removeEventListener(oe,v)},[]),y.jsx(j.div,{...l,ref:m,style:{pointerEvents:T?w?"auto":"none":void 0,...e.style},onFocusCapture:_(e.onFocusCapture,R.onFocusCapture),onBlurCapture:_(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:_(e.onPointerDownCapture,P.onPointerDownCapture)})});Te.displayName=Lt;var jt="DismissableLayerBranch",Bt=o.forwardRef((e,r)=>{const t=o.useContext(Re),n=o.useRef(null),a=F(r,n);return o.useEffect(()=>{const s=n.current;if(s)return t.branches.add(s),()=>{t.branches.delete(s)}},[t.branches]),y.jsx(j.div,{...e,ref:a})});Bt.displayName=jt;function It(e,r=globalThis==null?void 0:globalThis.document){const t=Q(e),n=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{const s=d=>{if(d.target&&!n.current){let l=function(){Ae(Nt,t,u,{discrete:!0})};const u={originalEvent:d};d.pointerType==="touch"?(r.removeEventListener("click",a.current),a.current=l,r.addEventListener("click",a.current,{once:!0})):l()}else r.removeEventListener("click",a.current);n.current=!1},i=window.setTimeout(()=>{r.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),r.removeEventListener("pointerdown",s),r.removeEventListener("click",a.current)}},[r,t]),{onPointerDownCapture:()=>n.current=!0}}function $t(e,r=globalThis==null?void 0:globalThis.document){const t=Q(e),n=o.useRef(!1);return o.useEffect(()=>{const a=s=>{s.target&&!n.current&&Ae(Mt,t,{originalEvent:s},{discrete:!1})};return r.addEventListener("focusin",a),()=>r.removeEventListener("focusin",a)},[r,t]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function we(){const e=new CustomEvent(oe);document.dispatchEvent(e)}function Ae(e,r,t,{discrete:n}){const a=t.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});r&&a.addEventListener(e,r,{once:!0}),n?ct(a,s):a.dispatchEvent(s)}var Ht="Portal",Oe=o.forwardRef((e,r)=>{var d;const{container:t,...n}=e,[a,s]=o.useState(!1);K(()=>s(!0),[]);const i=t||a&&((d=globalThis==null?void 0:globalThis.document)==null?void 0:d.body);return i?vt.createPortal(y.jsx(j.div,{...n,ref:r}),i):null});Oe.displayName=Ht;var q=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Z(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let t,n,a;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==r.length)return!1;for(n=t;n--!==0;)if(!Z(e[n],r[n]))return!1;return!0}if(a=Object.keys(e),t=a.length,t!==Object.keys(r).length)return!1;for(n=t;n--!==0;)if(!{}.hasOwnProperty.call(r,a[n]))return!1;for(n=t;n--!==0;){const s=a[n];if(!(s==="_owner"&&e.$$typeof)&&!Z(e[s],r[s]))return!1}return!0}return e!==e&&r!==r}function Se(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ee(e,r){const t=Se(e);return Math.round(r*t)/t}function ne(e){const r=o.useRef(e);return q(()=>{r.current=e}),r}function Ft(e){e===void 0&&(e={});const{placement:r="bottom",strategy:t="absolute",middleware:n=[],platform:a,elements:{reference:s,floating:i}={},transform:d=!0,whileElementsMounted:l,open:u}=e,[c,f]=o.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[h,p]=o.useState(n);Z(h,n)||p(n);const[m,g]=o.useState(null),[C,E]=o.useState(null),x=o.useCallback(b=>{b!==R.current&&(R.current=b,g(b))},[]),T=o.useCallback(b=>{b!==v.current&&(v.current=b,E(b))},[]),w=s||m,P=i||C,R=o.useRef(null),v=o.useRef(null),O=o.useRef(c),B=l!=null,D=ne(l),I=ne(a),z=ne(u),S=o.useCallback(()=>{if(!R.current||!v.current)return;const b={placement:r,strategy:t,middleware:h};I.current&&(b.platform=I.current),lt(R.current,v.current,b).then(M=>{const L={...M,isPositioned:z.current!==!1};W.current&&!Z(O.current,L)&&(O.current=L,yt.flushSync(()=>{f(L)}))})},[h,r,t,I,z]);q(()=>{u===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,f(b=>({...b,isPositioned:!1})))},[u]);const W=o.useRef(!1);q(()=>(W.current=!0,()=>{W.current=!1}),[]),q(()=>{if(w&&(R.current=w),P&&(v.current=P),w&&P){if(D.current)return D.current(w,P,S);S()}},[w,P,S,D,B]);const G=o.useMemo(()=>({reference:R,floating:v,setReference:x,setFloating:T}),[x,T]),k=o.useMemo(()=>({reference:w,floating:P}),[w,P]),N=o.useMemo(()=>{const b={position:t,left:0,top:0};if(!k.floating)return b;const M=Ee(k.floating,c.x),L=Ee(k.floating,c.y);return d?{...b,transform:"translate("+M+"px, "+L+"px)",...Se(k.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:M,top:L}},[t,d,k.floating,c.x,c.y]);return o.useMemo(()=>({...c,update:S,refs:G,elements:k,floatingStyles:N}),[c,S,G,k,N])}const Wt=e=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:n,padding:a}=typeof e=="function"?e(t):e;return n&&r(n)?n.current!=null?Ce({element:n.current,padding:a}).fn(t):{}:n?Ce({element:n,padding:a}).fn(t):{}}}},Gt=(e,r)=>({...ut(e),options:[e,r]}),Ut=(e,r)=>({...dt(e),options:[e,r]}),Yt=(e,r)=>({...gt(e),options:[e,r]}),zt=(e,r)=>({...ft(e),options:[e,r]}),Xt=(e,r)=>({...pt(e),options:[e,r]}),Vt=(e,r)=>({...ht(e),options:[e,r]}),qt=(e,r)=>({...Wt(e),options:[e,r]});var Kt="Arrow",De=o.forwardRef((e,r)=>{const{children:t,width:n=10,height:a=5,...s}=e;return y.jsx(j.svg,{...s,ref:r,width:n,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?t:y.jsx("polygon",{points:"0,0 30,0 15,10"})})});De.displayName=Kt;var Zt=De,ie="Popper",[ke,_e]=Pe(ie),[Jt,Le]=ke(ie),Ne=e=>{const{__scopePopper:r,children:t}=e,[n,a]=o.useState(null);return y.jsx(Jt,{scope:r,anchor:n,onAnchorChange:a,children:t})};Ne.displayName=ie;var Me="PopperAnchor",je=o.forwardRef((e,r)=>{const{__scopePopper:t,virtualRef:n,...a}=e,s=Le(Me,t),i=o.useRef(null),d=F(r,i);return o.useEffect(()=>{s.onAnchorChange((n==null?void 0:n.current)||i.current)}),n?null:y.jsx(j.div,{...a,ref:d})});je.displayName=Me;var ce="PopperContent",[Qt,er]=ke(ce),Be=o.forwardRef((e,r)=>{var fe,pe,he,ge,me,ve;const{__scopePopper:t,side:n="bottom",sideOffset:a=0,align:s="center",alignOffset:i=0,arrowPadding:d=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:c=0,sticky:f="partial",hideWhenDetached:h=!1,updatePositionStrategy:p="optimized",onPlaced:m,...g}=e,C=Le(ce,t),[E,x]=o.useState(null),T=F(r,U=>x(U)),[w,P]=o.useState(null),R=Ct(w),v=(R==null?void 0:R.width)??0,O=(R==null?void 0:R.height)??0,B=n+(s!=="center"?"-"+s:""),D=typeof c=="number"?c:{top:0,right:0,bottom:0,left:0,...c},I=Array.isArray(u)?u:[u],z=I.length>0,S={padding:D,boundary:I.filter(rr),altBoundary:z},{refs:W,floatingStyles:G,placement:k,isPositioned:N,middlewareData:b}=Ft({strategy:"fixed",placement:B,whileElementsMounted:(...U)=>mt(...U,{animationFrame:p==="always"}),elements:{reference:C.anchor},middleware:[Gt({mainAxis:a+O,alignmentAxis:i}),l&&Ut({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Yt():void 0,...S}),l&&zt({...S}),Xt({...S,apply:({elements:U,rects:ye,availableWidth:rt,availableHeight:nt})=>{const{width:ot,height:at}=ye.reference,V=U.floating.style;V.setProperty("--radix-popper-available-width",`${rt}px`),V.setProperty("--radix-popper-available-height",`${nt}px`),V.setProperty("--radix-popper-anchor-width",`${ot}px`),V.setProperty("--radix-popper-anchor-height",`${at}px`)}}),w&&qt({element:w,padding:d}),nr({arrowWidth:v,arrowHeight:O}),h&&Vt({strategy:"referenceHidden",...S})]}),[M,L]=He(k),X=Q(m);K(()=>{N&&(X==null||X())},[N,X]);const Ze=(fe=b.arrow)==null?void 0:fe.x,Je=(pe=b.arrow)==null?void 0:pe.y,Qe=((he=b.arrow)==null?void 0:he.centerOffset)!==0,[et,tt]=o.useState();return K(()=>{E&&tt(window.getComputedStyle(E).zIndex)},[E]),y.jsx("div",{ref:W.setFloating,"data-radix-popper-content-wrapper":"",style:{...G,transform:N?G.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:et,"--radix-popper-transform-origin":[(ge=b.transformOrigin)==null?void 0:ge.x,(me=b.transformOrigin)==null?void 0:me.y].join(" "),...((ve=b.hide)==null?void 0:ve.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:y.jsx(Qt,{scope:t,placedSide:M,onArrowChange:P,arrowX:Ze,arrowY:Je,shouldHideArrow:Qe,children:y.jsx(j.div,{"data-side":M,"data-align":L,...g,ref:T,style:{...g.style,animation:N?void 0:"none"}})})})});Be.displayName=ce;var Ie="PopperArrow",tr={top:"bottom",right:"left",bottom:"top",left:"right"},$e=o.forwardRef(function(r,t){const{__scopePopper:n,...a}=r,s=er(Ie,n),i=tr[s.placedSide];return y.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:y.jsx(Zt,{...a,ref:t,style:{...a.style,display:"block"}})})});$e.displayName=Ie;function rr(e){return e!==null}var nr=e=>({name:"transformOrigin",options:e,fn(r){var C,E,x;const{placement:t,rects:n,middlewareData:a}=r,i=((C=a.arrow)==null?void 0:C.centerOffset)!==0,d=i?0:e.arrowWidth,l=i?0:e.arrowHeight,[u,c]=He(t),f={start:"0%",center:"50%",end:"100%"}[c],h=(((E=a.arrow)==null?void 0:E.x)??0)+d/2,p=(((x=a.arrow)==null?void 0:x.y)??0)+l/2;let m="",g="";return u==="bottom"?(m=i?f:`${h}px`,g=`${-l}px`):u==="top"?(m=i?f:`${h}px`,g=`${n.floating.height+l}px`):u==="right"?(m=`${-l}px`,g=i?f:`${p}px`):u==="left"&&(m=`${n.floating.width+l}px`,g=i?f:`${p}px`),{data:{x:m,y:g}}}});function He(e){const[r,t="center"]=e.split("-");return[r,t]}var or=Ne,ar=je,sr=Be,ir=$e,[ee,zr]=Pe("Tooltip",[_e]),te=_e(),Fe="TooltipProvider",cr=700,ae="tooltip.open",[lr,le]=ee(Fe),We=e=>{const{__scopeTooltip:r,delayDuration:t=cr,skipDelayDuration:n=300,disableHoverableContent:a=!1,children:s}=e,[i,d]=o.useState(!0),l=o.useRef(!1),u=o.useRef(0);return o.useEffect(()=>{const c=u.current;return()=>window.clearTimeout(c)},[]),y.jsx(lr,{scope:r,isOpenDelayed:i,delayDuration:t,onOpen:o.useCallback(()=>{window.clearTimeout(u.current),d(!1)},[]),onClose:o.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>d(!0),n)},[n]),isPointerInTransitRef:l,onPointerInTransitChange:o.useCallback(c=>{l.current=c},[]),disableHoverableContent:a,children:s})};We.displayName=Fe;var re="Tooltip",[ur,Y]=ee(re),Ge=e=>{const{__scopeTooltip:r,children:t,open:n,defaultOpen:a=!1,onOpenChange:s,disableHoverableContent:i,delayDuration:d}=e,l=le(re,e.__scopeTooltip),u=te(r),[c,f]=o.useState(null),h=kt(),p=o.useRef(0),m=i??l.disableHoverableContent,g=d??l.delayDuration,C=o.useRef(!1),[E=!1,x]=xt({prop:n,defaultProp:a,onChange:v=>{v?(l.onOpen(),document.dispatchEvent(new CustomEvent(ae))):l.onClose(),s==null||s(v)}}),T=o.useMemo(()=>E?C.current?"delayed-open":"instant-open":"closed",[E]),w=o.useCallback(()=>{window.clearTimeout(p.current),p.current=0,C.current=!1,x(!0)},[x]),P=o.useCallback(()=>{window.clearTimeout(p.current),p.current=0,x(!1)},[x]),R=o.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{C.current=!0,x(!0),p.current=0},g)},[g,x]);return o.useEffect(()=>()=>{p.current&&(window.clearTimeout(p.current),p.current=0)},[]),y.jsx(or,{...u,children:y.jsx(ur,{scope:r,contentId:h,open:E,stateAttribute:T,trigger:c,onTriggerChange:f,onTriggerEnter:o.useCallback(()=>{l.isOpenDelayed?R():w()},[l.isOpenDelayed,R,w]),onTriggerLeave:o.useCallback(()=>{m?P():(window.clearTimeout(p.current),p.current=0)},[P,m]),onOpen:w,onClose:P,disableHoverableContent:m,children:t})})};Ge.displayName=re;var se="TooltipTrigger",Ue=o.forwardRef((e,r)=>{const{__scopeTooltip:t,...n}=e,a=Y(se,t),s=le(se,t),i=te(t),d=o.useRef(null),l=F(r,d,a.onTriggerChange),u=o.useRef(!1),c=o.useRef(!1),f=o.useCallback(()=>u.current=!1,[]);return o.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),y.jsx(ar,{asChild:!0,...i,children:y.jsx(j.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...n,ref:l,onPointerMove:_(e.onPointerMove,h=>{h.pointerType!=="touch"&&!c.current&&!s.isPointerInTransitRef.current&&(a.onTriggerEnter(),c.current=!0)}),onPointerLeave:_(e.onPointerLeave,()=>{a.onTriggerLeave(),c.current=!1}),onPointerDown:_(e.onPointerDown,()=>{u.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:_(e.onFocus,()=>{u.current||a.onOpen()}),onBlur:_(e.onBlur,a.onClose),onClick:_(e.onClick,a.onClose)})})});Ue.displayName=se;var ue="TooltipPortal",[dr,fr]=ee(ue,{forceMount:void 0}),Ye=e=>{const{__scopeTooltip:r,forceMount:t,children:n,container:a}=e,s=Y(ue,r);return y.jsx(dr,{scope:r,forceMount:t,children:y.jsx(be,{present:t||s.open,children:y.jsx(Oe,{asChild:!0,container:a,children:n})})})};Ye.displayName=ue;var H="TooltipContent",ze=o.forwardRef((e,r)=>{const t=fr(H,e.__scopeTooltip),{forceMount:n=t.forceMount,side:a="top",...s}=e,i=Y(H,e.__scopeTooltip);return y.jsx(be,{present:n||i.open,children:i.disableHoverableContent?y.jsx(Xe,{side:a,...s,ref:r}):y.jsx(pr,{side:a,...s,ref:r})})}),pr=o.forwardRef((e,r)=>{const t=Y(H,e.__scopeTooltip),n=le(H,e.__scopeTooltip),a=o.useRef(null),s=F(r,a),[i,d]=o.useState(null),{trigger:l,onClose:u}=t,c=a.current,{onPointerInTransitChange:f}=n,h=o.useCallback(()=>{d(null),f(!1)},[f]),p=o.useCallback((m,g)=>{const C=m.currentTarget,E={x:m.clientX,y:m.clientY},x=mr(E,C.getBoundingClientRect()),T=vr(E,x),w=yr(g.getBoundingClientRect()),P=xr([...T,...w]);d(P),f(!0)},[f]);return o.useEffect(()=>()=>h(),[h]),o.useEffect(()=>{if(l&&c){const m=C=>p(C,c),g=C=>p(C,l);return l.addEventListener("pointerleave",m),c.addEventListener("pointerleave",g),()=>{l.removeEventListener("pointerleave",m),c.removeEventListener("pointerleave",g)}}},[l,c,p,h]),o.useEffect(()=>{if(i){const m=g=>{const C=g.target,E={x:g.clientX,y:g.clientY},x=(l==null?void 0:l.contains(C))||(c==null?void 0:c.contains(C)),T=!Cr(E,i);x?h():T&&(h(),u())};return document.addEventListener("pointermove",m),()=>document.removeEventListener("pointermove",m)}},[l,c,i,u,h]),y.jsx(Xe,{...e,ref:s})}),[hr,gr]=ee(re,{isInside:!1}),Xe=o.forwardRef((e,r)=>{const{__scopeTooltip:t,children:n,"aria-label":a,onEscapeKeyDown:s,onPointerDownOutside:i,...d}=e,l=Y(H,t),u=te(t),{onClose:c}=l;return o.useEffect(()=>(document.addEventListener(ae,c),()=>document.removeEventListener(ae,c)),[c]),o.useEffect(()=>{if(l.trigger){const f=h=>{const p=h.target;p!=null&&p.contains(l.trigger)&&c()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[l.trigger,c]),y.jsx(Te,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:f=>f.preventDefault(),onDismiss:c,children:y.jsxs(sr,{"data-state":l.stateAttribute,...u,...d,ref:r,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[y.jsx(wt,{children:n}),y.jsx(hr,{scope:t,isInside:!0,children:y.jsx(Pt,{id:l.contentId,role:"tooltip",children:a||n})})]})})});ze.displayName=H;var Ve="TooltipArrow",qe=o.forwardRef((e,r)=>{const{__scopeTooltip:t,...n}=e,a=te(t);return gr(Ve,t).isInside?null:y.jsx(ir,{...a,...n,ref:r})});qe.displayName=Ve;function mr(e,r){const t=Math.abs(r.top-e.y),n=Math.abs(r.bottom-e.y),a=Math.abs(r.right-e.x),s=Math.abs(r.left-e.x);switch(Math.min(t,n,a,s)){case s:return"left";case a:return"right";case t:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function vr(e,r,t=5){const n=[];switch(r){case"top":n.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":n.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":n.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":n.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return n}function yr(e){const{top:r,right:t,bottom:n,left:a}=e;return[{x:a,y:r},{x:t,y:r},{x:t,y:n},{x:a,y:n}]}function Cr(e,r){const{x:t,y:n}=e;let a=!1;for(let s=0,i=r.length-1;s<r.length;i=s++){const d=r[s].x,l=r[s].y,u=r[i].x,c=r[i].y;l>n!=c>n&&t<(u-d)*(n-l)/(c-l)+d&&(a=!a)}return a}function xr(e){const r=e.slice();return r.sort((t,n)=>t.x<n.x?-1:t.x>n.x?1:t.y<n.y?-1:t.y>n.y?1:0),wr(r)}function wr(e){if(e.length<=1)return e.slice();const r=[];for(let n=0;n<e.length;n++){const a=e[n];for(;r.length>=2;){const s=r[r.length-1],i=r[r.length-2];if((s.x-i.x)*(a.y-i.y)>=(s.y-i.y)*(a.x-i.x))r.pop();else break}r.push(a)}r.pop();const t=[];for(let n=e.length-1;n>=0;n--){const a=e[n];for(;t.length>=2;){const s=t[t.length-1],i=t[t.length-2];if((s.x-i.x)*(a.y-i.y)>=(s.y-i.y)*(a.x-i.x))t.pop();else break}t.push(a)}return t.pop(),r.length===1&&t.length===1&&r[0].x===t[0].x&&r[0].y===t[0].y?r:r.concat(t)}var Er=We,Xr=Ge,Vr=Ue,qr=Ye,Kr=ze,Zr=qe;function Pr(e){switch(e){case"tomato":case"red":case"ruby":case"crimson":case"pink":case"plum":case"purple":case"violet":return"mauve";case"iris":case"indigo":case"blue":case"sky":case"cyan":return"slate";case"teal":case"jade":case"mint":case"green":return"sage";case"grass":case"lime":return"olive";case"yellow":case"amber":case"orange":case"brown":case"gold":case"bronze":return"sand";case"gray":return"gray"}}const br=["inherit","light","dark"],Rr=["solid","translucent"],Tr=["90%","95%","100%","105%","110%"],A={...Rt,hasBackground:{type:"boolean",default:!0},appearance:{type:"enum",values:br,default:"inherit"},accentColor:{type:"enum",values:Tt,default:"indigo"},grayColor:{type:"enum",values:At,default:"auto"},panelBackground:{type:"enum",values:Rr,default:"translucent"},radius:{type:"enum",values:Ot,default:"medium"},scaling:{type:"enum",values:Tr,default:"100%"}},$=()=>{},J=o.createContext(void 0);function Jr(){const e=o.useContext(J);if(e===void 0)throw new Error("`useThemeContext` must be used within a `Theme`");return e}const Ar=o.forwardRef((e,r)=>o.useContext(J)===void 0?o.createElement(Er,{delayDuration:200},o.createElement(bt,{dir:"ltr"},o.createElement(Ke,{...e,ref:r}))):o.createElement(de,{...e,ref:r}));Ar.displayName="Theme";const Ke=o.forwardRef((e,r)=>{const{appearance:t=A.appearance.default,accentColor:n=A.accentColor.default,grayColor:a=A.grayColor.default,panelBackground:s=A.panelBackground.default,radius:i=A.radius.default,scaling:d=A.scaling.default,hasBackground:l=A.hasBackground.default,...u}=e,[c,f]=o.useState(t);o.useEffect(()=>f(t),[t]);const[h,p]=o.useState(n);o.useEffect(()=>p(n),[n]);const[m,g]=o.useState(a);o.useEffect(()=>g(a),[a]);const[C,E]=o.useState(s);o.useEffect(()=>E(s),[s]);const[x,T]=o.useState(i);o.useEffect(()=>T(i),[i]);const[w,P]=o.useState(d);return o.useEffect(()=>P(d),[d]),o.createElement(de,{...u,ref:r,isRoot:!0,hasBackground:l,appearance:c,accentColor:h,grayColor:m,panelBackground:C,radius:x,scaling:w,onAppearanceChange:f,onAccentColorChange:p,onGrayColorChange:g,onPanelBackgroundChange:E,onRadiusChange:T,onScalingChange:P})});Ke.displayName="ThemeRoot";const de=o.forwardRef((e,r)=>{const t=o.useContext(J),{asChild:n,isRoot:a,hasBackground:s,appearance:i=(t==null?void 0:t.appearance)??A.appearance.default,accentColor:d=(t==null?void 0:t.accentColor)??A.accentColor.default,grayColor:l=(t==null?void 0:t.resolvedGrayColor)??A.grayColor.default,panelBackground:u=(t==null?void 0:t.panelBackground)??A.panelBackground.default,radius:c=(t==null?void 0:t.radius)??A.radius.default,scaling:f=(t==null?void 0:t.scaling)??A.scaling.default,onAppearanceChange:h=$,onAccentColorChange:p=$,onGrayColorChange:m=$,onPanelBackgroundChange:g=$,onRadiusChange:C=$,onScalingChange:E=$,...x}=e,T=n?Et:"div",w=l==="auto"?Pr(d):l,P=e.appearance==="light"||e.appearance==="dark",R=s===void 0?a||P:s;return o.createElement(J.Provider,{value:o.useMemo(()=>({appearance:i,accentColor:d,grayColor:l,resolvedGrayColor:w,panelBackground:u,radius:c,scaling:f,onAppearanceChange:h,onAccentColorChange:p,onGrayColorChange:m,onPanelBackgroundChange:g,onRadiusChange:C,onScalingChange:E}),[i,d,l,w,u,c,f,h,p,m,g,C,E])},o.createElement(T,{"data-is-root-theme":a?"true":"false","data-accent-color":d,"data-gray-color":w,"data-has-background":R?"true":"false","data-panel-background":u,"data-radius":c,"data-scaling":f,ref:r,...x,className:it("radix-themes",{light:i==="light",dark:i==="dark"},x.className)}))});de.displayName="ThemeImpl";export{Zr as A,Kr as C,Te as D,Jr as H,Ar as I,qr as P,Xr as R,Vr as T,ar as a,sr as b,_e as c,ir as d,Oe as e,or as f,Pr as g,A as s,kt as u};
