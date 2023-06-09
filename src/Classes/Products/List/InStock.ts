import { products } from "./ShopProducts.ts";

export const inStock = products.filter(equalOrOverThanOne => equalOrOverThanOne.inStock >= 1)

console.log(inStock)