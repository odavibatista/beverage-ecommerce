import { products } from "./ShopProducts.ts";

export const tools = products.filter(tool => tool.cathegory === "tools")

console.log(tools)