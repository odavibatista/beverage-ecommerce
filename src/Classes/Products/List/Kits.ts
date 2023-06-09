import { products } from "./ShopProducts.ts";

export const kits = products.filter(kits => kits.cathegory === "kits")

console.log(kits)