import React, { Children } from "react";
import styles from "./styles.module.scss";
import { ProductCard } from "../../ProductCard/ProductCard";
import { energyDrinks } from "../../../Classes/Products/List/EnergyDrinks";



export function EnergyDrinksContainer ()  {
    const energyDrinksCards = energyDrinks.map(energyDrinks => <ProductCard product={energyDrinks} />)
    return  (
            <section className={styles.section}>
                {energyDrinksCards}
            </section>
    )
}