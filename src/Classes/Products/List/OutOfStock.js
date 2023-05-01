import { products } from "./ShopProducts.js";
export const outOfStock = products.filter(lessThanOneInStock => lessThanOneInStock.inStock === 0);
console.log(outOfStock);
