import styles from "./styles.module.scss";
import { ProductCard } from "../../ProductCard/ProductCard";
import { waters } from "../../../Classes/Products/List/Waters";

export function WatersContainer ()  {
    const watersCards = waters.map(waters => <ProductCard product={waters} />)
    return  (
            <section className={styles.section}>
                {watersCards}
            </section>
    )
}