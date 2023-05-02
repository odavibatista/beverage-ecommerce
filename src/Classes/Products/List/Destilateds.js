import { products } from "./ShopProducts.js";
export const destilateds = products.filter(destilateds => destilateds.cathegory === "destilateds");
console.log(destilateds);
