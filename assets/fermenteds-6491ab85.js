import{j as e,c as r,R as n,N as c,F as a}from"./globals-b0631895.js";import{P as i}from"./ProcuctsHeader-66f7e0cc.js";import{P as d}from"./ProductCard-6fc862ee.js";import{p as m}from"./ShopProducts-07a154ac.js";const p="_section_1vf52_1",f={section:p},s=m.filter(t=>t.cathegory==="fermenteds");console.log(s);function l(){const t=s.map(o=>e.jsx(d,{product:o}));return e.jsx("section",{className:f.section,children:t})}r.createRoot(document.getElementById("root")).render(e.jsxs(n.StrictMode,{children:[e.jsx(c,{}),e.jsx(i,{imageUrl:"https://i.imgur.com/LPRMAUs.jpg",text:"Fortemente fermentados",description:"Maltados e enriquecidos de sabor para você!"}),e.jsx(l,{}),e.jsx(a,{})]}));