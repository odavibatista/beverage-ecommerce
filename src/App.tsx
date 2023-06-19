import {  Navbar  } from "./components/Navbar/Navbar"
import { FirstContainer } from "./components/FirstContainer/FirstContainer"
import { FeaturedContainer } from "./components/FeaturedContainer/FeaturedContainer"
import { NewsletterSection } from "./components/NewsletterSection/NewsletterSection"
import { AboutUs } from "./components/AboutUs/AboutUs"
import { Footer } from "./components/Footer/Footer"
import { useEffect, useState } from "react"
import { PageSpinner } from "./components/Spinner/Spinner"


export function App() {
  const [loading, setLoading] = useState(true)
  if(loading) {
    setTimeout(() => {
      setLoading(false)
    }, 500)
    return <PageSpinner/>
  }



  return (
    <>
      <Navbar/>
      <FirstContainer/>
      <FeaturedContainer/>
      <NewsletterSection/>
      <AboutUs/>
      <Footer/>
    </>
      
  )
}


