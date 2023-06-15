import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ProductsHeader } from './components/ProcuctsHeader/ProcuctsHeader'



//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar/>
        <ProductsHeader imageUrl={"https://i.imgur.com/1mIWtfK.jpg"} text={"Cervejas triplamente geladas"} description={"Cervejas de diferentes tipos, linhas e sabores!"} />
        <Footer/>
    </React.StrictMode>,
)

