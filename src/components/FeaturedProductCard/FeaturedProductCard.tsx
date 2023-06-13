import styles from "./styles.module.scss";

export function FeaturedProductCard ({product}: any)  {

    const latePrice = product.price + (product.price * 0.18)
    const printedPrice = latePrice.toFixed(2)
    
    return(
        <>
            <div className={styles.featuredProductCard}>
                <span className={styles.productKind}>
                    <p className={styles.kind}>{product.kind}</p>
                </span>
                <img src={product.imgUrl} alt={product.name} className={styles.productImage} />
                <p className={styles.productName}>{product.name}</p>
                <div className={styles.splitter}></div>
                <p className={styles.latePrice}>De: <span className={styles.printedPrice}>R$ {printedPrice}</span></p>
                <p className={styles.newPrice}>{`Por: R$ ${product.price}`}</p>
                <button className={styles.button}>Comprar</button>
            </div>
        </>
    )
}