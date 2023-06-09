import { products } from "./ShopProducts.ts";

export const energyDrinks = products.filter(energy => energy.cathegory === "energy-drinks")

console.log(energyDrinks)