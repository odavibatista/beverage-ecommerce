import React, { Children } from "react";
import styles from "./styles.module.scss";
import { ProductCard } from "../../ProductCard/ProductCard";
import { onSale } from "../../../Classes/Products/List/OnSale";
import { FeaturedProductCard } from "../../FeaturedProductCard/FeaturedProductCard";


export function OnSaleContainer ()  {
    const onSaleCards = onSale.map(onSale => <FeaturedProductCard product={onSale} />)
    return  (
            <section className={styles.section}>
                {onSaleCards}
            </section>
    )
}