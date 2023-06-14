import {  Navbar  } from "./components/Navbar/Navbar"
import { FirstContainer } from "./components/FirstContainer/FirstContainer"
import { ProductsContainer } from "./components/ProductsContainer/ProductsContainer"
import { FeaturedContainer } from "./components/FeaturedContainer/FeaturedContainer"
import { NewsletterFeature } from "./components/NewsletterFeature/NewsletterFeature"
import { NewsletterSection } from "./components/NewsletterSection/NewsletterSection"
import { AboutUs } from "./components/AboutUs/AboutUs"


export function App() {

  return (
    <>
      <Navbar/>
      <FirstContainer/>
      <FeaturedContainer/>
      <NewsletterSection/>
      <AboutUs/>
    </>
      
  )
}


