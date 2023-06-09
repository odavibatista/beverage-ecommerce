import { products } from "./ShopProducts.ts";

export const juices = products.filter(juice => juice.cathegory === "juices")

console.log(juices)