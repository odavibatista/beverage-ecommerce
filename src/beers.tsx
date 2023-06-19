import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ProductsHeader } from './components/ProcuctsHeader/ProcuctsHeader'
import { BeersContainer } from './components/ProductsContainers/BeersContainer/BeersContainer'
import { PageSpinner } from './components/Spinner/Spinner'


function App() {
    const [loading, setLoading] = useState(true)
    if(loading) {
        setTimeout(() => {
            setLoading(false)
        }, 500)
        return <PageSpinner/>
    }

    return  (
        <>
        <Navbar/>
        <ProductsHeader imageUrl={"https://i.imgur.com/1mIWtfK.jpg"} text={"Cervejas triplamente geladas"} description={"Cervejas de diferentes tipos, linhas e sabores!"} />
        <BeersContainer/>
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

