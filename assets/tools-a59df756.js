import{j as t,c as r,R as i,r as n,P as a}from"./globals-750fb78f.js";import{N as c,F as m}from"./Footer-a0c5b4e3.js";import{P as d}from"./ProcuctsHeader-927b34a2.js";import{P as l}from"./ProductCard-37594f8b.js";import{p}from"./ShopProducts-07a154ac.js";const u="_section_1vf52_1",x={section:u},e=p.filter(o=>o.cathegory==="tools");console.log(e);function j(){const o=e.map(s=>t.jsx(l,{product:s}));return t.jsx("section",{className:x.section,children:o})}function f(){const[o,s]=n.useState(!0);return o?(setTimeout(()=>{s(!1)},300),t.jsx(a,{})):t.jsxs(t.Fragment,{children:[t.jsx(c,{}),t.jsx(d,{imageUrl:"https://i.imgur.com/WxYxw7Z.jpg",text:"Utensílios & utilidades",description:"Copos, abridores, e muito mais!"}),t.jsx(j,{}),t.jsx(m,{})]})}r.createRoot(document.getElementById("root")).render(t.jsx(i.StrictMode,{children:t.jsx(f,{})}));