import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ProductsHeader } from './components/ProcuctsHeader/ProcuctsHeader'
import { VodkasContainers } from './components/ProductsContainers/VodkasContainers/VodkasContainers'
import { PageSpinner } from './components/Spinner/Spinner'

function App() {
    const [loading, setLoading] = useState(true)
    if(loading) {
        setTimeout(() => {
            setLoading(false)
        }, 300)
        return <PageSpinner/>
    }

    return  (
        <>
            <Navbar/>
            <ProductsHeader imageUrl={"https://i.imgur.com/FhqVsfB.jpg"} text={"Vodka, de verdade!"} description={"Leve uma autêntica vodka, mas aprecie com moderação."}/>
            <VodkasContainers/>
            <Footer/>
        </>
    )
}

//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)

