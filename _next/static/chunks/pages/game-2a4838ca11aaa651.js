(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{171:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return n(9961)}])},9961:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var i=n(5893),r=n(1163),a=n(7294),s=n(2237);let u=e=>e*Math.PI/180,l=(e,t)=>{let n=(t-e.createdAt)/1e3,i=300*n*Math.cos(u(e.direction)),r=300*n*Math.sin(u(e.direction)),a=e.createdPosition.x+i,s=e.createdPosition.y+r;return[a,s]},c=e=>{let{bullet:t,currentTime:n}=e,[r,a]=l(t,n);return(0,i.jsx)(s.Cd,{x:r,y:a,radius:5,fill:"red"})};var o=n(1733),d=n(1290),h=n(4420),m=n.n(h);let x=()=>{let e=(0,r.useRouter)(),t=void 0===e.query.display?null:Number(e.query.display);if(null===t){let t=()=>{let[t,n]=(0,a.useState)(0),r=async()=>{let e=await d.x.game.config.$get();null!==e&&n(e)};return(0,a.useEffect)(()=>{r()},[]),(0,i.jsx)(i.Fragment,{children:[...Array(t)].map((t,n)=>(0,i.jsx)("button",{onClick:()=>e.push({query:{display:n}}),children:n},n))})};return(0,i.jsx)(t,{})}let n=()=>{let[e,n]=(0,a.useState)([]),[r,u]=(0,a.useState)([]),[l,h]=(0,a.useState)([]),[x,y]=(0,a.useState)(Date.now()),[p]=m()(o.D.images.spaceship_png),[f]=m()(o.D.images.enemy_spaceship_png),g=async e=>{let t=await d.x.player.$get({query:{display:e}});null!==t&&n(t)},w=async e=>{let t=await d.x.enemy.$get({query:{display:e}});null!==t&&u(t)},_=async e=>{let t=await d.x.bullet.$get({query:{display:e}});null!==t&&h(t)};return(0,a.useEffect)(()=>{let e=requestAnimationFrame(()=>{g(t),w(t),_(t),y(Date.now())});return()=>cancelAnimationFrame(e)}),(0,i.jsx)("div",{children:(0,i.jsxs)(s.Hf,{width:1920,height:1080,children:[(0,i.jsx)(s.mh,{children:e.map(e=>(0,i.jsx)(s.Ee,{image:p,width:100,height:100,rotation:"red"===e.team?90:-90,x:e.position.x+50,y:e.position.y-50},e.id))}),(0,i.jsx)(s.mh,{children:r.map(e=>(0,i.jsx)(s.Ee,{image:f,width:50,height:50,rotation:90,x:e.createdPosition.x,y:e.createdPosition.y},e.id))}),(0,i.jsx)(s.mh,{children:l.map(e=>(0,i.jsx)(c,{bullet:e,currentTime:x},e.id))})]})})};return(0,i.jsx)(n,{})};var y=x}},function(e){e.O(0,[289,774,888,179],function(){return e(e.s=171)}),_N_E=e.O()}]);