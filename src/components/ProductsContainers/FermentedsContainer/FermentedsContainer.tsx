import React, { Children } from "react";
import styles from "./styles.module.scss";
import { ProductCard } from "../../ProductCard/ProductCard";
import { fermenteds } from "../../../Classes/Products/List/Fermenteds";


export function FermentedsContainer ()  {
    const fermentedsCards = fermenteds.map(fermenteds => <ProductCard product={fermenteds} />)
    return  (
            <section className={styles.section}>
                {fermentedsCards}
            </section>
    )
}