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
        <ProductsHeader imageUrl={"https://i.imgur.com/F3CCbE9.jpg"} text={"Especialmente espumante"} description={"Seja para fazer festa ou só para aproveitar, aqui você encontra o melhor para te agradar!"}/>
        <Footer/>
    </React.StrictMode>,
)

