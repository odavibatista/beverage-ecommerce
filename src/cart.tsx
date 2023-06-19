import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { CartProducts } from './components/Cart/CartProducts/CartProducts'
//@ts-ignore
let localStorageData = JSON.parse(localStorage.getItem('localStorageData'))

//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar/>
        <CartProducts/>
        <Footer/>
    </React.StrictMode>,
)

