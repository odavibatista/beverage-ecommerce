import{j as e,r as d,c as N,R as I,P as _}from"./globals-750fb78f.js";import{N as y,F as S}from"./Footer-a0c5b4e3.js";const f="_section_1c2j2_1",b="_whiteInformations_1c2j2_12",v="_userDashboard_1c2j2_22",w="_userPicture_1c2j2_32",E="_userName_1c2j2_40",H="_userEmail_1c2j2_46",P="_buttons_1c2j2_52",k="_shopHistory_1c2j2_68",D="_historyTitle_1c2j2_82",O="_buyHistory_1c2j2_88",L="_changeInfo_1c2j2_96",T="_changeInputs_1c2j2_103",C="_salesHistory_1c2j2_119",J="_links_1c2j2_152",s={section:f,whiteInformations:b,userDashboard:v,userPicture:w,userName:E,userEmail:H,buttons:P,shopHistory:k,historyTitle:D,buyHistory:O,changeInfo:L,changeInputs:T,salesHistory:C,links:J},U="_historySales_xeaym_1",A={historySales:U};function R({sale:t}){return e.jsxs("div",{className:A.historySales,children:[e.jsxs("p",{children:["VALOR: ",t.totalValue]}),e.jsxs("p",{children:["DIA: ",t.saleDate]})]})}function q(){const t=JSON.parse(localStorage.getItem("registeredUser")).email,r=JSON.parse(localStorage.getItem("registeredUser")).name,p=JSON.parse(localStorage.getItem("registeredUser")).memberSince,c=JSON.parse(localStorage.getItem("shopHistoryData"));JSON.parse(localStorage.getItem("registeredUser")).password;const h=c.map(a=>e.jsx(R,{sale:a}));function g(){localStorage.setItem("isLoggedIn",!1),window.location.reload()}function x(){const a=document.querySelector("#changeNameInput"),i=document.querySelector("#changeEmailInput"),l=document.querySelector("#changePasswordInput"),u=document.querySelector("#updateInfoErrorPopup"),m=document.querySelector("#registerSuccessPopup");let o=JSON.parse(localStorage.getItem("registeredUser"));a.value.length<3||i.value.length<8||l.value.length<8?(u.classList.add("open"),setTimeout(()=>{u.classList.remove("open")},2500)):(m.classList.add("open"),setTimeout(()=>{m.classList.remove("open")},2500),o.name=a.value,o.email=i.value,o.password=l.value,localStorage.setItem("registeredUser",JSON.stringify(o)),n("show"),window.location.reload())}const[j,n]=d.useState("show");return e.jsxs("section",{className:s.section,children:[e.jsx("div",{id:"updateInfoErrorPopup",className:"popup",style:{backgroundColor:"red",padding:"20px",width:"300px",height:"40px",margin:"20px",position:"fixed",bottom:0,left:0},children:e.jsx("p",{className:"popupText",children:"Insira e-mail e nome válidos!"})}),e.jsx("div",{id:"registerSuccessPopup",className:"popup",style:{backgroundColor:"green",padding:"20px",width:"300px",height:"40px",margin:"20px",position:"fixed",bottom:0,left:0},children:e.jsx("p",{className:"popupText",children:"Atualizado com sucesso!"})}),e.jsxs("div",{className:s.whiteInformations,children:[j==="show"?e.jsxs("div",{className:s.userDashboard,children:[e.jsx("img",{src:"https://i.imgur.com/Zfkdt2d.png",alt:"userIcon",className:s.userPicture}),e.jsx("h1",{className:s.userName,children:r}),e.jsx("h1",{className:s.userEmail,children:t}),e.jsxs("h1",{className:s.userEmail,children:["Membro desde: ",e.jsx("br",{}),p]}),e.jsx("button",{className:s.buttons,onClick:()=>n("change"),children:"Alterar Dados"}),e.jsx("button",{className:s.buttons,onClick:a=>{a.preventDefault(),g()},children:"Logout"})]}):e.jsxs("div",{className:s.userDashboard,children:[e.jsx("img",{src:"https://i.imgur.com/Zfkdt2d.png",alt:"userIcon",className:s.userPicture}),e.jsx("p",{className:s.changeInfo,children:"Nome:"}),e.jsx("input",{type:"text",name:"changeNameInput",id:"changeNameInput",className:s.changeInputs}),e.jsx("p",{className:s.changeInfo,children:"Email:"}),e.jsx("input",{type:"text",name:"changeEmailInput",id:"changeEmailInput",className:s.changeInputs}),e.jsx("p",{className:s.changeInfo,children:"Senha:"}),e.jsx("input",{type:"password",name:"changePasswordInput",id:"changePasswordInput",className:s.changeInputs}),e.jsx("button",{className:s.buttons,onClick:()=>{x()},children:"Salvar"}),e.jsx("button",{className:s.buttons,onClick:()=>n("show"),children:"Cancelar"})]}),e.jsxs("div",{className:s.shopHistory,children:[e.jsx("h1",{className:s.historyTitle,children:"Histórico de Compras"}),e.jsx("div",{className:s.buyHistory,children:c.length<1?e.jsxs("p",{children:["Você ainda não fez compras! Que tal ver as ",e.jsx("a",{href:"/beverage-ecommerce/src/pages/onsale.html",className:s.links,children:" ofertas "})]}):e.jsx("div",{className:s.salesHistory,children:h})})]})]})]})}JSON.parse(localStorage.getItem("isLoggedIn"))===!0||window.location.replace("/beverage-ecommerce/");function M(){const[t,r]=d.useState(!0);return t?(setTimeout(()=>{r(!1)},500),e.jsx(_,{})):e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(q,{}),e.jsx(S,{})]})}N.createRoot(document.getElementById("root")).render(e.jsx(I.StrictMode,{children:e.jsx(M,{})}));
