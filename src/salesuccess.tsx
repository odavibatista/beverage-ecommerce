import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { PageSpinner } from './components/Spinner/Spinner'
import { NewsletterSuccess } from './components/NewsletterSuccess/NewsletterSuccess'
import { SaleSuccess } from './components/SaleSuccess/SaleSuccess'


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
            <SaleSuccess/>
        </>
    )
}
//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
