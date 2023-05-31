import { inStock } from "../../Classes/Products/List/InStock.ts"
import { ProductCard } from "../ProductCard/ProductCard.tsx";



export function ProductsContainer   ()  {
    let productOne = Math.floor(Math.random()* 35 + 1)
    let productTwo = Math.floor(Math.random()* 35 + 1)
    if(productTwo === productOne)   productTwo = Math.floor(Math.random()* 35 + 1)
    let productThree = Math.floor(Math.random()* 35 + 1)
    if(productThree === productOne || productThree === productTwo)   productThree = Math.floor(Math.random()* 35 + 1)
    let productFour = Math.floor(Math.random()* 35 + 1)
    if(productFour === productOne || productFour === productTwo || productFour === productThree)   productFour = Math.floor(Math.random()* 35 + 1)
    let productFive = Math.floor(Math.random()* 35 + 1)
    if(productFive === productOne || productFive === productTwo || productFive === productThree || productFive === productFour)   productFive = Math.floor(Math.random()* 35 + 1)
    let productSix = Math.floor(Math.random()* 35 + 1)
    if(productSix === productOne || productSix === productTwo || productSix === productThree || productSix === productFour || productSix === productFive)   productSix = Math.floor(Math.random()* 35 + 1)

    return (
    <main id="products-container">
        <h1>Confira as nossas bebidas e encontre a que mais te agrade!</h1>
        <ProductCard
            product={inStock[productOne]}
        />
        <ProductCard
            product={inStock[productTwo]}
        />
        <ProductCard
            product={inStock[productThree]}
        />
        <ProductCard
            product={inStock[productFour]}
        />
        <ProductCard
            product={inStock[productFive]}
        />
        <ProductCard
            product={inStock[productSix]}
        />
    </main>
    )
}