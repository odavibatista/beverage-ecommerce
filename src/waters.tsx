import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ProductsHeader } from './components/ProcuctsHeader/ProcuctsHeader'
import { WatersContainer } from './components/ProductsContainers/WatersContainer/WatersContainer'
import { PageSpinner } from './components/Spinner/Spinner'
import { VodkasContainers } from './components/ProductsContainers/VodkasContainers/VodkasContainers'

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
            <ProductsHeader imageUrl={"https://i.imgur.com/HcB5IId.jpg"} text={"Águas especiais"} description={"Muito mais do que somente água"}/>
            <WatersContainer/>
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
