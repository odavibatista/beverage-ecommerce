import{j as t,c as r,R as a,r as n,P as c,N as i,F as d}from"./globals-d86d934e.js";import{P as m}from"./ProcuctsHeader-bdcbb56e.js";import{P as p}from"./ProductCard-9665fa2e.js";import{p as u}from"./ShopProducts-07a154ac.js";const x="_section_1vf52_1",j={section:x},o=u.filter(s=>s.cathegory==="vodkas");console.log(o);function l(){const s=o.map(e=>t.jsx(p,{product:e}));return t.jsx("section",{className:j.section,children:s})}function f(){const[s,e]=n.useState(!0);return s?(setTimeout(()=>{e(!1)},300),t.jsx(c,{})):t.jsxs(t.Fragment,{children:[t.jsx(i,{}),t.jsx(m,{imageUrl:"https://i.imgur.com/FhqVsfB.jpg",text:"Vodka, de verdade!",description:"Leve uma autêntica vodka, mas aprecie com moderação."}),t.jsx(l,{}),t.jsx(d,{})]})}r.createRoot(document.getElementById("root")).render(t.jsx(a.StrictMode,{children:t.jsx(f,{})}));