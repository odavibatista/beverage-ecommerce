import { products } from "./ShopProducts.ts";

export const vodkas = products.filter(vodka => vodka.cathegory === "vodkas")

console.log(vodkas)