import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ProductsHeader } from './components/ProcuctsHeader/ProcuctsHeader'
import { IcesContainer } from './components/ProductsContainers/IcesContainer/IcesContainer'



//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar/>
        <ProductsHeader imageUrl={"https://i.imgur.com/1IQHpMm.jpg"} text={"Saborosamente gelado"} description={"Para gelar ou para harmonizar... nós temos de tudo!"} />
        <IcesContainer/>
        <Footer/>
    </React.StrictMode>,
)