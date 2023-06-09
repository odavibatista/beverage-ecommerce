import { products } from "./ShopProducts.ts";

export const beers = products.filter(beer => beer.cathegory === "beers")

console.log(beers)