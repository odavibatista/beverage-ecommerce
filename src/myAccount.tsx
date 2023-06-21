import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { PageSpinner } from './components/Spinner/Spinner'
import { MyAccount } from './components/MyAccount/MyAccount'

//@ts-ignore
if(JSON.parse(localStorage.getItem('isLoggedIn')) === true) {
}   else    {
    window.location.replace("/beverage-ecommerce/")
}

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
            <MyAccount/>
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

