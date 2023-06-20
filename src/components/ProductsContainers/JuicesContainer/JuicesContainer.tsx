import styles from "./styles.module.scss";
import { ProductCard } from "../../ProductCard/ProductCard";
import { juices } from "../../../Classes/Products/List/Juices";


export function JuicesContainer ()  {
    const juicesCards = juices.map(juice => <ProductCard product={juice} />)
    return  (
            <section className={styles.section}>
                {juicesCards}
            </section>
    )
}