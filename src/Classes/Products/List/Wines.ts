import { products } from "./ShopProducts.js";

export const wines = products.filter(wines => wines.cathegory === "wines")

console.log(wines)