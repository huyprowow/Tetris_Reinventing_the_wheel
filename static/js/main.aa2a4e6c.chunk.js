(this["webpackJsonptetris-reinvent-the-whell"]=this["webpackJsonptetris-reinvent-the-whell"]||[]).push([[0],{18:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var r,o,c=t(0),i=t.n(c),a=t(10),u=t.n(a),l=(t(18),t(2)),s=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},d=function(n,e,t){for(var r=t.x,o=t.y,c=0;c<n.tetromino.length;c+=1)for(var i=0;i<n.tetromino[c].length;i+=1)if(0!==n.tetromino[c][i]&&(!e[c+n.pos.y+o]||!e[c+n.pos.y+o][i+n.pos.x+r]||"clear"!==e[c+n.pos.y+o][i+n.pos.x+r][1]))return!0;return!1},f=t(3),b=t(4),p=t.p+"static/media/bg.d63cfd51.png",x=b.a.div(r||(r=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n"])),p),j=b.a.div(o||(o=Object(f.a)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n\n  aside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n  }\n"])));var h,O,g,v,m,y=t(8),w={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78,78"}},k=function(){var n="IJLOSTZ",e=n[Math.floor(Math.random()*n.length)];return w[e]},S=function(n,e){var t=Object(c.useState)(s()),r=Object(l.a)(t,2),o=r[0],i=r[1],a=Object(c.useState)(0),u=Object(l.a)(a,2),d=u[0],f=u[1];return Object(c.useEffect)((function(){f(0);var t=function(t){var r=t.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(e,t){e.forEach((function(e,o){0!==e&&(r[t+n.pos.y][o+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(f((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};i((function(n){return t(n)}))}),[n,e]),[o,i,d]},I=b.a.div(h||(h=Object(f.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n"])),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),J=b.a.div(O||(O=Object(f.a)(["\n  width: auto;\n  /* border-radius: 5px; */\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"])),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),A=t(1),E=function(n){var e=n.type;return Object(A.jsx)(J,{type:e,color:w[e].color,children:console.log("rerender cell")})},z=i.a.memo(E),L=function(n){var e=n.stage;return Object(A.jsx)(I,{width:e[0].length,height:e.length,children:e.map((function(n){return n.map((function(n,e){return Object(A.jsx)(z,{type:n[0]},e)}))}))})},T=b.a.div(g||(g=Object(f.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"])),(function(n){return n.gameOver?"red":"#999"})),Z=function(n){var e=n.gameOver,t=n.text;return Object(A.jsx)(T,{gameOver:e,children:t})},C=b.a.button(v||(v=Object(f.a)(["\n  box-sizing: border-box;\n\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  color: white;\n  background: #333;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"]))),H=function(n){var e=n.callback;return Object(A.jsx)(C,{onClick:e,children:"Start Game"})},M=b.a.div(m||(m=Object(f.a)(["\n  box-sizing: border-box;\n  text-align:center;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"])),(function(n){return n.gameOver?"red":"#999"})),N=function(){return Object(A.jsxs)(M,{children:["Tutorial:",Object(A.jsxs)("pre",{children:["s\u1eed d\u1ee5ng (\u2190,\u2192) \u0111\u1ec3 di chuy\u1ec3n",Object(A.jsx)("br",{}),"s\u1eed d\u1ee5ng (\u2191) \u0111\u1ec3 xoay kh\u1ed1i  ",Object(A.jsx)("br",{}),"\u1ea5n gi\u1eef \u2193 \u0111\u1ec3 drop nhanh h\u01a1n"]})]})},P=function(){var n=Object(c.useState)(null),e=Object(l.a)(n,2),t=e[0],r=e[1],o=Object(c.useState)(!1),i=Object(l.a)(o,2),a=i[0],u=i[1],f=function(){var n=Object(c.useState)({pos:{x:0,y:0},tetromino:w[0].shape,collided:!1}),e=Object(l.a)(n,2),t=e[0],r=e[1];function o(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()}var i=Object(c.useCallback)((function(){r({pos:{x:4,y:0},tetromino:k().shape,collided:!1})}),[]);return[t,function(n){var e=n.x,t=n.y,o=n.collided;r((function(n){return Object(y.a)(Object(y.a)({},n),{},{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:o})}))},i,function(n,e){var c=JSON.parse(JSON.stringify(t));c.tetromino=o(c.tetromino,e);for(var i=c.pos.x,a=1;d(c,n,{x:0,y:0});)if(c.pos.x+=a,(a=-(a+(a>0?1:-1)))>c.tetromino[0].length)return o(c.tetromino,-e),void(c.pos.x=i);r(c)}]}(),b=Object(l.a)(f,4),p=b[0],h=b[1],O=b[2],g=b[3],v=S(p,O),m=Object(l.a)(v,3),I=m[0],J=m[1],E=function(n){var e=Object(c.useState)(0),t=Object(l.a)(e,2),r=t[0],o=t[1],i=Object(c.useState)(0),a=Object(l.a)(i,2),u=a[0],s=a[1],d=Object(c.useState)(0),f=Object(l.a)(d,2),b=f[0],p=f[1],x=[40,100,300,1200],j=Object(c.useCallback)((function(){n>0&&(o((function(e){return e+x[n-1]*(b+1)})),s((function(e){return e+n})))}),[b,x,n]);return Object(c.useEffect)((function(){j()}),[j,n,r]),[r,o,u,s,b,p]}(m[2]),z=Object(l.a)(E,6),T=z[0],C=z[1],M=z[2],P=z[3],R=z[4],G=z[5];console.log("re-render");var K=function(n){d(p,I,{x:n,y:0})||h({x:n,y:0})},B=function(){M>10*(R+1)&&(G((function(n){return n+1})),r(1e3/(R+1)+200)),d(p,I,{x:0,y:1})?(p.pos.y<1&&(console.log("GAME OVER!!!"),u(!0),r(null)),h({x:0,y:0,collided:!0})):h({x:0,y:1,collided:!1})};!function(n,e){var t=Object(c.useRef)();Object(c.useEffect)((function(){t.current=n}),[n]),Object(c.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){clearInterval(n)}}}),[e])}((function(){B()}),t);var D=function(n){var e=n.keyCode;a||(37===e?K(-1):39===e?K(1):40===e?(console.log("interval off"),r(null),B()):38===e&&g(I,1))};return Object(A.jsx)(x,{role:"button",tabIndex:"0",onKeyDown:function(n){return D(n)},onKeyUp:function(n){var e=n.keyCode;console.log("interval on"),a||40===e&&r(1e3/(R+1)+200)},children:Object(A.jsxs)(j,{children:[Object(A.jsx)(L,{stage:I}),Object(A.jsxs)("aside",{children:[a?Object(A.jsx)(Z,{gameOver:a,text:"gameOver"}):Object(A.jsxs)("div",{children:[Object(A.jsx)(Z,{text:"Score:".concat(T)}),Object(A.jsx)(Z,{text:"Rows:".concat(M)}),Object(A.jsx)(Z,{text:"Level:".concat(R)})]}),Object(A.jsx)(H,{callback:function(){J(s()),r(1e3),O(),C(0),P(0),G(0),u(!1)}})]}),Object(A.jsx)(N,{})]})})},R=function(){return Object(A.jsx)("div",{className:"App",children:Object(A.jsx)(P,{})})};u.a.render(Object(A.jsx)(R,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.aa2a4e6c.chunk.js.map