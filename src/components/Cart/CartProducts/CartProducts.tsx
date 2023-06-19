import { CartProductCard } from "../CartProductCard/CartProductCard";
import styles from "./styles.module.scss";

export function CartProducts ()    {

    //@ts-ignore
    let localStorageData = JSON.parse(localStorage.getItem('localStorageData'))

    //@ts-ignore
    const cartCards = localStorageData.map((products, index) => <CartProductCard key={index} product={products} />)
    return  (
            <section className={styles.section}>
                {
                    localStorageData.length < 1 ?
                    <div className={styles.emptyCart}>
                        <p className={styles.emptyCartTitle}>Oh não! Seu carrinho está vazio!</p>
                        <img src="https://i.imgur.com/iQj8GPa.png" alt="emptyCart" className={styles.emptyCartImage}    />
                        <p className={styles.emptyCartText}>Que tal dar uma olhada nas nossas <a href="/src/pages/onsale.html" className={styles.salesLink}> ofertas </a>e escolher algo interessante?</p>
                    </div>
                    :
                    <div className={styles.cartContainer}>
                        <p className={styles.cartTitle}>Meu Carrinho</p>
                        {cartCards}
                        <div className={styles.saleTotal}>
                            <p className={styles.totalText}>Total:</p>
                            <p className={styles.totalAmount}>R$ 123</p>
                        </div>
                        <button className={styles.finishSale}>Finalizar compra</button>
                    </div>
                }
            </section>
    )
}