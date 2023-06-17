import { products } from "./ShopProducts.ts";

export const vodkas = products.filter(vodka => vodka.cathegory === "vodkas")

console.log(vodkas)

/*IMAGES SOURCE: https://imgur.com/a/mDEyDxh */