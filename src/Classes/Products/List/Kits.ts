import { products } from "./ShopProducts.js";

export const kits = products.filter(kits => kits.cathegory === "kits")

console.log(kits)