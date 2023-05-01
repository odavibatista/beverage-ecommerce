import { products } from "./ShopProducts.js";
export const fermenteds = products.filter(fermenteds => fermenteds.cathegory === "fermenteds");
console.log(fermenteds);
