import { products } from "./ShopProducts.ts";

export const sparklings = products.filter(sparkling => sparkling.cathegory === "sparklings")

console.log(sparklings)

/*IMAGES SOURCE: https://imgur.com/a/KbdA1rO */