import styles from "./styles.module.scss";
import { ProductCard } from "../../ProductCard/ProductCard";
import { ices } from "../../../Classes/Products/List/Ices";

export function IcesContainer ()  {
    const icesCards = ices.map(ices => <ProductCard product={ices} />)
    return  (
            <section className={styles.section}>
                {icesCards}
            </section>
    )
}