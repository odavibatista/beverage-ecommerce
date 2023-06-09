import { products } from "./ShopProducts.ts";

export const fermenteds = products.filter(fermenteds => fermenteds.cathegory === "fermenteds")

console.log(fermenteds)