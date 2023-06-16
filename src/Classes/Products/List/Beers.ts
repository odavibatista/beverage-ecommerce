import { products } from "./ShopProducts.ts";

export const beers = products.filter(beer => beer.cathegory === "beers")

console.log(beers)

/*IMAGE SOURCES: https://imgur.com/a/QwNA1Zd*/