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
        const popup: any = document.querySelector("#addedPopup")
        popup.classList.add("open")

        setTimeout(() => {
            popup.classList.remove("open")
        }, 2000)
    }
    
    return(
        <>
            <div className={styles.featuredProductCard}>
                <div id="addedPopup" className="popup"  style={{backgroundColor: "green", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                    <p className="popupText">Adicionado ao carrinho!</p>
                </div>
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