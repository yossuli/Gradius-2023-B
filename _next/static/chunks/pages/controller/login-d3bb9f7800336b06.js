(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[321],{9840:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/controller/login",function(){return e(1107)}])},1107:function(t,n,e){"use strict";e.r(n);var i=e(5893),l=e(24),s=e(1163),o=e(7294),a=e(5371),u=e(1290),_=e(5030),c=e.n(_);let r=()=>{let[t,n]=(0,o.useState)(""),[e,_]=(0,o.useState)(!0),[r,x]=(0,l.KO)(a.K),d=(0,s.useRouter)();null!==r&&d.push("/controller");let p=async()=>{if(e)return;let n=await u.x.login.$post({body:{name:t}});x(n),null!==n&&await u.x.session.player.$post({body:{id:n.id}})},b=t=>{n(t.target.value),_(""===t.target.value)};return(0,i.jsxs)("div",{className:c().container,children:[(0,i.jsx)("p",{className:c().text,children:"INIAD.tsにようこそ"}),(0,i.jsx)("p",{className:c().text2,children:"ゲームで使用する名前を入力してください"}),(0,i.jsx)("div",{className:c().box,children:(0,i.jsx)("input",{type:"text",value:t,onChange:b,className:c().input})}),(0,i.jsx)("div",{className:c().box,children:(0,i.jsx)("button",{onClick:p,disabled:e,className:c().button,children:"決定"})})]})};n.default=r},5030:function(t){t.exports={container:"login_container__Ii8_9",text:"login_text__T48w7",text2:"login_text2__TH55L",box:"login_box__miWTn",input:"login_input__GGz0l",button:"login_button__hA0yL"}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=9840)}),_N_E=t.O()}]);