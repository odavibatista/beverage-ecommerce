import styles from "./styles.module.scss";

export function ProductCard ({product}: any)  {
    return  (
        <div className={styles.productCard}>
            <span className={product.inStock >= 1 ? styles.inStock : styles.soldOut}>{product.kind}</span>
            <img src={product.imgUrl} alt={product.name} className={product.inStock >= 1 ? styles.inStock + " " + styles.image : styles.soldOut + " " + styles.image}/>
            <h2 className={styles.productName}>{product.name}</h2>
            <h4 className={styles.price}>{product.inStock >= 1 ? "R$ " + product.price : "SEM ESTOQUE"}</h4>
            <p className={styles.description}>{product.description}</p>
            <a className={styles.button} href={product.inStock >= 1 ? "youtube.com" : "google.com"} target="blank">
                    {product.inStock >= 1 ? "Adicionar ao Carrinho" : "Avise-me"}
            </a>
        </div>
    )
}