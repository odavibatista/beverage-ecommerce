import{j as t,c as o,R as i,r as a,P as c,N as n,F as u}from"./globals-47b881bb.js";import{P as d}from"./ProcuctsHeader-ce839760.js";import{P as m}from"./ProductCard-39af3d31.js";import{p}from"./ShopProducts-07a154ac.js";const j="_section_1vf52_1",x={section:j},r=p.filter(s=>s.cathegory==="juices");r.sort((s,e)=>s.inStock-e.inStock);function f(){const s=r.map(e=>t.jsx(m,{product:e}));return t.jsx("section",{className:x.section,children:s})}function l(){const[s,e]=a.useState(!0);return s?(setTimeout(()=>{e(!1)},300),t.jsx(c,{})):t.jsxs(t.Fragment,{children:[t.jsx(n,{}),t.jsx(d,{imageUrl:"https://i.imgur.com/YShchE9.jpg",text:"Sucos de frutas",description:"Pro dia a dia ou pra ir na bebida, vai um suco aí?"}),t.jsx(f,{}),t.jsx(u,{})]})}o.createRoot(document.getElementById("root")).render(t.jsx(i.StrictMode,{children:t.jsx(l,{})}));