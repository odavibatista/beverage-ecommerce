import{j as e,c as o,R as a,r as n,P as i,N as c,F as d}from"./globals-47b881bb.js";import{P as m}from"./ProcuctsHeader-ce839760.js";import{P as p}from"./ProductCard-39af3d31.js";import{p as l}from"./ShopProducts-07a154ac.js";const j="_section_17ddy_1",u={section:j},r=l.filter(s=>s.cathegory==="beers");console.log(r);function x(){const s=r.map(t=>e.jsx(p,{product:t}));return e.jsx("section",{className:u.section,children:s})}function f(){const[s,t]=n.useState(!0);return s?(setTimeout(()=>{t(!1)},500),e.jsx(i,{})):e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx(m,{imageUrl:"https://i.imgur.com/1mIWtfK.jpg",text:"Cervejas triplamente geladas",description:"Cervejas de diferentes tipos, linhas e sabores!"}),e.jsx(x,{}),e.jsx(d,{})]})}o.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(f,{})}));
