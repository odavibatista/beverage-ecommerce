import { products } from "./ShopProducts.ts";

export const tools = products.filter(tool => tool.cathegory === "tools")

console.log(tools)

/*IMAGES SOURCE: https://imgur.com/a/MafJ7qG */