import styles from "./styles.module.scss";
import { ProductCard } from "../../ProductCard/ProductCard";
import { vodkas } from "../../../Classes/Products/List/Vodkas";

export function VodkasContainers ()  {
    const vodkasCards = vodkas.map(vodkas => <ProductCard product={vodkas} />)
    return  (
            <section className={styles.section}>
                {vodkasCards}
            </section>
    )
}