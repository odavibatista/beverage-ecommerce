import { products } from "./ShopProducts.js";

export const snacks = products.filter(snacks => snacks.cathegory === "snacks")

console.log(snacks)