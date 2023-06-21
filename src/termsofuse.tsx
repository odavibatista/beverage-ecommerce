import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { PageSpinner } from './components/Spinner/Spinner'
import { TermsOfUse } from './components/TermsOfUse/TermsOfUse'

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
            <TermsOfUse/>
        </>
    )
}

//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)

