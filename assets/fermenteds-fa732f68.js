import{j as e,c as o,R as n,r as a,P as c,N as i,F as d}from"./globals-d86d934e.js";import{P as m}from"./ProcuctsHeader-bdcbb56e.js";import{P as p}from"./ProductCard-9665fa2e.js";import{p as u}from"./ShopProducts-07a154ac.js";const f="_section_1vf52_1",l={section:f},r=u.filter(t=>t.cathegory==="fermenteds");console.log(r);function x(){const t=r.map(s=>e.jsx(p,{product:s}));return e.jsx("section",{className:l.section,children:t})}function j(){const[t,s]=a.useState(!0);return t?(setTimeout(()=>{s(!1)},300),e.jsx(c,{})):e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsx(m,{imageUrl:"https://i.imgur.com/LPRMAUs.jpg",text:"Fortemente fermentados",description:"Maltados e enriquecidos de sabor para você!"}),e.jsx(x,{}),e.jsx(d,{})]})}o.createRoot(document.getElementById("root")).render(e.jsx(n.StrictMode,{children:e.jsx(j,{})}));