import{p as r,j as o,c,R as i,N as a,F as n}from"./globals-fe495a7c.js";import{P as d}from"./ProcuctsHeader-84eccc45.js";import{P as l}from"./ProductCard-b2e7c6c8.js";const m="_section_1vf52_1",p={section:m},t=r.filter(s=>s.cathegory==="tools");console.log(t);function x(){const s=t.map(e=>o.jsx(l,{product:e}));return o.jsx("section",{className:p.section,children:s})}c.createRoot(document.getElementById("root")).render(o.jsxs(i.StrictMode,{children:[o.jsx(a,{}),o.jsx(d,{imageUrl:"https://i.imgur.com/WxYxw7Z.jpg",text:"Utensílios & utilidades",description:"Copos, abridores, e muito mais!"}),o.jsx(x,{}),o.jsx(n,{})]}));