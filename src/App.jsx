import {  Navbar  } from "./components/Navbar/Navbar"
import { FirstContainer } from "./components/FirstContainer/FirstContainer"
import { ProductsContainer } from "./components/ProductsContainer/ProductsContainer"
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'

export function App() {

  return (
    <>
      <Navbar/>
      <FirstContainer/>
      <ProductsContainer/>
    </>
      
  )
}


