(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[271],{92:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/config",function(){return n(2059)}])},1516:function(e,t){"use strict";function n(e,t,n,l){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let l=n(4788),r=n(8754),o=n(224),c=r._(n(7294)),i=n(4532),a=n(3353),u=n(1410),f=n(9064),s=n(370),d=n(9955),p=n(4224),h=n(508),g=n(1516),_=n(4266),v=new Set;function b(e,t,n,l,r){if(r||(0,a.isLocalURL)(t)){if(!l.bypassPrefetchedCheck){let r=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+r;if(v.has(o))return;v.add(o)}Promise.resolve(e.prefetch(t,n,l)).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let m=c.default.forwardRef(function(e,t){let n,r;let{href:u,as:v,children:m,prefetch:j,passHref:x,replace:C,shallow:M,scroll:w,locale:E,onClick:O,onMouseEnter:P,onTouchStart:k,legacyBehavior:N=!1}=e,L=o._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,N&&("string"==typeof n||"number"==typeof n)&&(n=c.default.createElement("a",null,n));let T=!1!==j,I=c.default.useContext(d.RouterContext),R=c.default.useContext(p.AppRouterContext),S=null!=I?I:R,z=!I,{href:A,as:U}=c.default.useMemo(()=>{if(!I){let e=y(u);return{href:e,as:v?y(v):e}}let[e,t]=(0,i.resolveHref)(I,u,!0);return{href:e,as:v?(0,i.resolveHref)(I,v):t||e}},[I,u,v]),B=c.default.useRef(A),D=c.default.useRef(U);N&&(r=c.default.Children.only(n));let F=N?r&&"object"==typeof r&&r.ref:t,[H,K,q]=(0,h.useIntersection)({rootMargin:"200px"}),G=c.default.useCallback(e=>{(D.current!==U||B.current!==A)&&(q(),D.current=U,B.current=A),H(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[U,F,A,q,H]);c.default.useEffect(()=>{S&&K&&T&&b(S,A,U,{locale:E},z)},[U,A,K,E,T,null==I?void 0:I.locale,S,z]);let W={ref:G,onClick(e){N||"function"!=typeof O||O(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,l,r,o,i,u,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,l,{shallow:o,locale:u,scroll:i}):t[r?"replace":"push"](l||n,{forceOptimisticNavigation:!s})};f?c.default.startTransition(h):h()}(e,S,A,U,C,M,w,E,z,T)},onMouseEnter(e){N||"function"!=typeof P||P(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&(T||!z)&&b(S,A,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},z)},onTouchStart(e){N||"function"!=typeof k||k(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&(T||!z)&&b(S,A,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},z)}};if((0,f.isAbsoluteUrl)(U))W.href=U;else if(!N||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,g.getDomainLocale)(U,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);W.href=t||(0,_.addBasePath)((0,s.addLocale)(U,e,null==I?void 0:I.defaultLocale))}return N?c.default.cloneElement(r,W):c.default.createElement("a",l._({},L,W),n)}),j=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let l=n(7294),r=n(29),o="function"==typeof IntersectionObserver,c=new Map,i=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,u=a||!o,[f,s]=(0,l.useState)(!1),d=(0,l.useRef)(null),p=(0,l.useCallback)(e=>{d.current=e},[]);(0,l.useEffect)(()=>{if(o){if(u||f)return;let e=d.current;if(e&&e.tagName){let l=function(e,t,n){let{id:l,observer:r,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},l=i.find(e=>e.root===n.root&&e.margin===n.margin);if(l&&(t=c.get(l)))return t;let r=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:r},i.push(n),c.set(n,t),t}(n);return o.set(e,t),r.observe(e),function(){if(o.delete(e),r.unobserve(e),0===o.size){r.disconnect(),c.delete(l);let e=i.findIndex(e=>e.root===l.root&&e.margin===l.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return l}}else if(!f){let e=(0,r.requestIdleCallback)(()=>s(!0));return()=>(0,r.cancelIdleCallback)(e)}},[u,n,t,f,d.current]);let h=(0,l.useCallback)(()=>{s(!1)},[]);return[p,f,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2059:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var l=n(5893),r=n(1664),o=n.n(r),c=n(7294);let i=e=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:e.size,height:e.size,fill:e.fill,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{className:"st0",d:"M496,293.984c9.031-0.703,16-8.25,16-17.297v-41.375c0-9.063-6.969-16.594-16-17.313l-54.828-4.281   c-3.484-0.266-6.484-2.453-7.828-5.688l-18.031-43.516c-1.344-3.219-0.781-6.906,1.5-9.547l35.75-41.813   c5.875-6.891,5.5-17.141-0.922-23.547l-29.25-29.25c-6.406-6.406-16.672-6.813-23.547-0.922l-41.813,35.75   c-2.641,2.266-6.344,2.844-9.547,1.516l-43.531-18.047c-3.219-1.328-5.422-4.375-5.703-7.828l-4.266-54.813   C293.281,6.969,285.75,0,276.688,0h-41.375c-9.063,0-16.594,6.969-17.297,16.016l-4.281,54.813c-0.266,3.469-2.469,6.5-5.688,7.828   l-43.531,18.047c-3.219,1.328-6.906,0.75-9.563-1.516l-41.797-35.75c-6.875-5.891-17.125-5.484-23.547,0.922l-29.25,29.25   c-6.406,6.406-6.797,16.656-0.922,23.547l35.75,41.813c2.25,2.641,2.844,6.328,1.5,9.547l-18.031,43.516   c-1.313,3.234-4.359,5.422-7.813,5.688L16,218c-9.031,0.719-16,8.25-16,17.313v41.359c0,9.063,6.969,16.609,16,17.313l54.844,4.266   c3.453,0.281,6.5,2.484,7.813,5.703l18.031,43.516c1.344,3.219,0.75,6.922-1.5,9.563l-35.75,41.813   c-5.875,6.875-5.484,17.125,0.922,23.547l29.25,29.25c6.422,6.406,16.672,6.797,23.547,0.906l41.797-35.75   c2.656-2.25,6.344-2.844,9.563-1.5l43.531,18.031c3.219,1.344,5.422,4.359,5.688,7.844l4.281,54.813   c0.703,9.031,8.234,16.016,17.297,16.016h41.375c9.063,0,16.594-6.984,17.297-16.016l4.266-54.813   c0.281-3.484,2.484-6.5,5.703-7.844l43.531-18.031c3.203-1.344,6.922-0.75,9.547,1.5l41.813,35.75   c6.875,5.891,17.141,5.5,23.547-0.906l29.25-29.25c6.422-6.422,6.797-16.672,0.922-23.547l-35.75-41.813   c-2.25-2.641-2.844-6.344-1.5-9.563l18.031-43.516c1.344-3.219,4.344-5.422,7.828-5.703L496,293.984z M256,342.516   c-23.109,0-44.844-9-61.188-25.328c-16.344-16.359-25.344-38.078-25.344-61.203c0-23.109,9-44.844,25.344-61.172   c16.344-16.359,38.078-25.344,61.188-25.344c23.125,0,44.844,8.984,61.188,25.344c16.344,16.328,25.344,38.063,25.344,61.172   c0,23.125-9,44.844-25.344,61.203C300.844,333.516,279.125,342.516,256,342.516z"})})});var a=n(1290),u=n(7875),f=n.n(u);let s=()=>{let[e,t]=(0,c.useState)(1),n=async()=>{let e=await a.x.game.config.$get();null!==e&&t(e)};(0,c.useEffect)(()=>{let e=requestAnimationFrame(()=>{n()});return()=>cancelAnimationFrame(e)},[]);let r=async e=>{let n=Math.max(Number(e.target.value),1);t(n),await a.x.game.config.$post({body:{displayNumber:n}})};return(0,l.jsx)("div",{className:f().container,children:(0,l.jsxs)("div",{className:f().card,children:[(0,l.jsxs)("div",{className:f().title,children:[(0,l.jsx)("h1",{children:"Gradius"}),(0,l.jsx)("h2",{children:"Config"})]}),(0,l.jsxs)("div",{className:f().config,children:[(0,l.jsx)("label",{children:"ディスプレイ枚数"}),(0,l.jsx)("input",{type:"number",value:e,onChange:r,min:1})]}),(0,l.jsxs)(o(),{href:"/game",className:f().button,children:["ゲーム画面",(0,l.jsx)("span",{})]}),(0,l.jsx)("div",{className:f()["icon-right"],children:(0,l.jsx)(i,{size:20,fill:"currentColor"})}),(0,l.jsx)("div",{className:f()["icon-left"],children:(0,l.jsx)(i,{size:20,fill:"currentColor"})})]})})};var d=s},7875:function(e){e.exports={container:"config_container__ouplF",card:"config_card__jWNV1",title:"config_title__caaHI",button:"config_button__r7ckh",config:"config_config__G7rn2","icon-right":"config_icon-right__gtWYq",rotation:"config_rotation__x4Olc","icon-left":"config_icon-left__oUAFB"}},1664:function(e,t,n){e.exports=n(5569)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=92)}),_N_E=e.O()}]);