import React, { Children } from "react";
import styles from "./styles.module.scss";
import { ProductCard } from "../../ProductCard/ProductCard";
import { sparklings } from "../../../Classes/Products/List/Sparklings";

export function SparklingsContainer ()  {
    const sparklingsCards = sparklings.map(sparklings => <ProductCard product={sparklings} />)
    return  (
            <section className={styles.section}>
                {sparklingsCards}
            </section>
    )
}