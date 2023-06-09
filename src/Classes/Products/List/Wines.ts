import { products } from "./ShopProducts.ts";

export const wines = products.filter(wines => wines.cathegory === "wines")

console.log(wines)