import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { CartProducts } from './components/Cart/CartProducts/CartProducts'
import { PageSpinner } from './components/Spinner/Spinner'

//@ts-ignore
if(JSON.parse(localStorage.getItem('isLoggedIn')) === true) {
}   else    {
    window.location.replace("/beverage-ecommerce/src/pages/signin.html")
}

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

