import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ProductsHeader } from './components/ProcuctsHeader/ProcuctsHeader'
import { WatersContainer } from './components/ProductsContainers/WatersContainer/WatersContainer'



//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar/>
        <ProductsHeader imageUrl={"https://i.imgur.com/HcB5IId.jpg"} text={"Águas especiais"} description={"Muito mais do que somente água"}/>
        <WatersContainer/>
        <Footer/>
    </React.StrictMode>,
)
