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
        <ProductsHeader imageUrl={"https://i.imgur.com/YShchE9.jpg"} text={"Sucos de frutas"} description={"Pro dia a dia ou pra ir na bebida, vai um suco aí?"} />
        <Footer/>
    </React.StrictMode>,
)