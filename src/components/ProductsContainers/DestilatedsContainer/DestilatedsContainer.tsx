import React, { Children } from "react";
import styles from "./styles.module.scss";
import { ProductCard } from "../../ProductCard/ProductCard";
import { destilateds } from "../../../Classes/Products/List/Destilateds";


export function DestilatedsContainer ()  {
    const destilatedsCards = destilateds.map(destilateds => <ProductCard product={destilateds} />)
    return  (
            <section className={styles.section}>
                {destilatedsCards}
            </section>
    )
}