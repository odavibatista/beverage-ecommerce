import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ProductsHeader } from './components/ProcuctsHeader/ProcuctsHeader'
import { OnSaleContainer } from './components/ProductsContainers/OnSaleContainer/OnSaleContainer'



//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar/>
        <ProductsHeader imageUrl={"https://i.imgur.com/fF3EwPD.jpg"} text={"Ofertas especiais para você"} description={"Aproveite os descontos para levar o melhor pelo menor preço!"}/>
        <OnSaleContainer/>
        <Footer/>
    </React.StrictMode>,
)

