import { products } from "./ShopProducts.js";

export const nonalcohols = products.filter(nonalcohols => nonalcohols.cathegory === "non-alcoholics")

console.log(nonalcohols)