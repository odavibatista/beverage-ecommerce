import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ProductsHeader } from './components/ProcuctsHeader/ProcuctsHeader'
import { WinesContainer } from './components/ProductsContainers/WinesContainer/WinesContainer'



//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar/>
        <ProductsHeader imageUrl={"https://i.imgur.com/8zInI6Q.jpg"} text={"Vinhos"} description={"A mais nobre das bebidas, para todos os gostos"}/>
        <WinesContainer/>
        <Footer/>
    </React.StrictMode>,
)

