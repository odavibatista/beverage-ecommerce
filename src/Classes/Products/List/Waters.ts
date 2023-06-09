import { products } from "./ShopProducts.ts";

export const waters = products.filter(water => water.cathegory === "waters")

console.log(waters)