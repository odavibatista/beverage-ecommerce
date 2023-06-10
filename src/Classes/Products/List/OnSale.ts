import { products } from "./ShopProducts.ts";

export const onSale = products.filter(isOnSale => isOnSale.onSale === true)

console.log(onSale)