import React, { Children } from "react";
import styles from "./styles.module.scss";
import { ProductCard } from "../../ProductCard/ProductCard";
import { tools } from "../../../Classes/Products/List/Tools";

export function ToolsContainer ()  {
    const toolsCards = tools.map(tools => <ProductCard product={tools} />)
    return  (
            <section className={styles.section}>
                {toolsCards}
            </section>
    )
}