import { products } from "../../Classes/Products/List/ShopProducts.js";
import { ProductCard } from "../ProductCard/ProductCard.jsx";

export function ProductsContainer   ()  {
    let productOne = Math.floor(Math.random()*20 + 1)
    let productTwo = Math.floor(Math.random()*20 + 1)
    if(productTwo === productOne)   productTwo = Math.floor(Math.random()*20 + 1)
    let productThree = Math.floor(Math.random()*20 + 1)
    if(productThree === productOne || productThree === productTwo)   productThree = Math.floor(Math.random()*20 + 1)
    
    return (
    <main id="products-container">
        <ProductCard
        name={products[productOne].name}
        description={products[productOne].description}
        kind={products[productOne].kind}
        price={products[productOne].price}
        imgUrl={products[productOne].imgUrl}
        />
        <ProductCard
        name={products[productTwo].name}
        description={products[productTwo].description}
        kind={products[productTwo].kind}
        price={products[productTwo].price}
        imgUrl={products[productTwo].imgUrl}
        />
        <ProductCard
        name={products[productThree].name}
        description={products[productThree].description}
        kind={products[productThree].kind}
        price={products[productThree].price}
        imgUrl={products[productThree].imgUrl}
        />
    </main>
    )
}