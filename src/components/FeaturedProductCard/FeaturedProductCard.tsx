import styles from "./styles.module.scss";


let localStorageData = localStorage.getItem('shopCart');

if(localStorageData) {
//Se localStorageData for diferente de nulo, faça algo
}


export function FeaturedProductCard ({product}: any)  {

    const latePrice = product.price + (product.price * 0.18)
    const printedPrice = latePrice.toFixed(2)

    function insertToCart(product: {}) {
        const localStorageData: any = localStorage.getItem("localStorageData")
        const shopCart = JSON.parse(localStorageData) || []
        shopCart.push(product)
        localStorage.setItem("localStorageData", JSON.stringify(shopCart))
    }
    
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
                <button className={styles.button} onClick={() => insertToCart(product)}>Comprar</button>
            </div>
        </>
    )
}