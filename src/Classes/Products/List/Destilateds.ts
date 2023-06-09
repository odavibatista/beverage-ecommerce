import { products } from "./ShopProducts.ts";

export const destilateds = products.filter(destilateds => destilateds.cathegory === "destilateds")

console.log(destilateds)