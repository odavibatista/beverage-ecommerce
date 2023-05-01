import { products } from "./ShopProducts.js";

export const drinks = products.filter(drinks => drinks.cathegory === "drinks")

console.log(drinks)