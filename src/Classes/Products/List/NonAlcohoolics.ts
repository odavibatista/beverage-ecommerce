import { products } from "./ShopProducts.js";

export const nonalcohols = products.filter(nonalcohols => nonalcohols.cathegory === "non-alcoholoics")

console.log(nonalcohols)