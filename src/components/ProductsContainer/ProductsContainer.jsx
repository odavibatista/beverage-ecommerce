import { products } from "../../Classes/Products/List/ShopProducts.js";
import { ProductCard } from "../ProductCard/ProductCard.jsx";



export function ProductsContainer   ()  {
    let productOne = Math.floor(Math.random()*20 + 1)
    let productTwo = Math.floor(Math.random()*20 + 1)
    if(productTwo === productOne)   productTwo = Math.floor(Math.random()*20 + 1)
    let productThree = Math.floor(Math.random()*20 + 1)
    if(productThree === productOne || productThree === productTwo)   productThree = Math.floor(Math.random()*20 + 1)
    let productFour = Math.floor(Math.random()*20 + 1)
    if(productFour === productOne || productFour === productTwo || productFour === productThree)   productFour = Math.floor(Math.random()*20 + 1)
    let productFive = Math.floor(Math.random()*20 + 1)
    if(productFive === productOne || productFive === productTwo || productFive === productThree || productFive === productFour)   productFive = Math.floor(Math.random()*20 + 1)
    let productSix = Math.floor(Math.random()*20 + 1)
    if(productSix === productOne || productSix === productTwo || productSix === productThree || productSix === productFour || productSix === productFive)   productSix = Math.floor(Math.random()*20 + 1)

    return (
    <main id="products-container">
        <h1>Confira as nossas bebidas e encontre a que mais te agrade!</h1>
        <ProductCard
            product={products[productOne]}
        />
        <ProductCard
            product={products[productTwo]}
        />
        <ProductCard
            product={products[productThree]}
        />
        <ProductCard
            product={products[productFour]}
        />
        <ProductCard
            product={products[productFive]}
        />
        <ProductCard
            product={products[productSix]}
        />
    </main>
    )
}