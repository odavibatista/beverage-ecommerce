import { products } from "./ShopProducts.js";

export const juices = products.filter(juice => juice.cathegory === "juices")

console.log(juices)