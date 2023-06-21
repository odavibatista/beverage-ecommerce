import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/globals.scss'
import { PageSpinner } from './components/Spinner/Spinner'
import { PrivacyPolitics } from './components/PrivacyPolitics/PrivacyPolitics'

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
            <PrivacyPolitics/>
        </>
    )
}

//@ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)

