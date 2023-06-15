import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ProductsHeader } from './components/ProcuctsHeader/ProcuctsHeader'
import { ToolsContainer } from './components/ProductsContainers/ToolsContainer/ToolsContainer'



//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar/>
        <ProductsHeader imageUrl={"https://i.imgur.com/WxYxw7Z.jpg"} text={"Utensílios & utilidades"} description={"Copos, abridores, e muito mais!"}/>
        <ToolsContainer/>
        <Footer/>
    </React.StrictMode>,
)

