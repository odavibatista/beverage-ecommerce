import { products } from "./ShopProducts.js";
export const energyDrinks = products.filter(energy => energy.cathegory === "energy-drinks");
console.log(energyDrinks);
