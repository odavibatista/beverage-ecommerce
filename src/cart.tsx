import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { CartProducts } from './components/Cart/CartProducts/CartProducts'
import { PageSpinner } from './components/Spinner/Spinner'
//@ts-ignore
let localStorageData = JSON.parse(localStorage.getItem('localStorageData'))

function App() {
    const [loading, setLoading] = useState(true)
    if(loading) {
        setTimeout(() => {
            setLoading(false)
        }, 100)
        return <PageSpinner/>
    }

    return  (
        <>
            <Navbar/>
            <CartProducts/>
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

