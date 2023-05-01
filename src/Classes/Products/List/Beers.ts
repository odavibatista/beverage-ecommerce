import { products } from "./ShopProducts.js";

export const beers = products.filter(beer => beer.cathegory === "beers")

console.log(beers)