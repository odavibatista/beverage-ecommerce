import styles from "./styles.module.scss";
import { ProductCard } from "../../ProductCard/ProductCard";
import { wines } from "../../../Classes/Products/List/Wines";

export function WinesContainer ()  {
    const winesCards = wines.map(wines => <ProductCard product={wines} />)
    return  (
            <section className={styles.section}>
                {winesCards}
            </section>
    )
}