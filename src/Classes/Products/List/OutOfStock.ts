import { products } from "./ShopProducts.ts";

export const outOfStock = products.filter(lessThanOneInStock => lessThanOneInStock.inStock === 0)

console.log(outOfStock)