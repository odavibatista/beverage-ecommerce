import { products } from "./ShopProducts.ts";

export const ices = products.filter(ice => ice.cathegory === "ices")

console.log(ices)