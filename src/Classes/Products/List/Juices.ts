import { products } from "./ShopProducts.js";

export const juices = products.filter(juice => juice.cathegory === "juices")

juices.sort((a, b) => a.inStock - b.inStock)