import styles from "./styles.module.scss";
import { ProductCard } from "../../ProductCard/ProductCard";
import { beers } from "../../../Classes/Products/List/Beers";



export function BeersContainer ()  {
    const beerCards = beers.map(beers => <ProductCard product={beers} />)
    return  (
            <section className={styles.section}>
                {beerCards}
            </section>
    )
}