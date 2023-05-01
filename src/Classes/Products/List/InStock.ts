import { products } from "./ShopProducts.js";

export const inStock = products.filter(equalOrOverThanOne => equalOrOverThanOne.inStock >= 1)

console.log(inStock)