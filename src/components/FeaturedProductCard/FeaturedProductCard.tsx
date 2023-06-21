import styles from "./styles.module.scss";


let localStorageData = localStorage.getItem('shopCart');

if(localStorageData) {
//Se localStorageData for diferente de nulo, faça algo
}


export function FeaturedProductCard ({product}: any)  {

    const latePrice = product.price + (product.price * 0.18)
    const printedPrice = latePrice.toFixed(2)
    const addedFeaturedProductPopup: any = document.querySelector("#addedFeaturedProductPopup")

    function insertToCart(product: {}) {
        const localStorageData: any = localStorage.getItem("localStorageData")
        const shopCart = JSON.parse(localStorageData) || []
        shopCart.push(product)
        localStorage.setItem("localStorageData", JSON.stringify(shopCart))

        addedFeaturedProductPopup.classList.add("open")
        setTimeout(() => {
            addedFeaturedProductPopup.classList.remove("open")
        }, 2000)
    }

    function notAnyOnStock  ()  {
        const noStockPopup: any = document.querySelector("#notAnyOnStock")
        noStockPopup.classList.add("open")

        setTimeout(() => {
            noStockPopup.classList.remove("open")
        }, 2000)
    }
    
    return(
            <div className={styles.featuredProductCard}>
                <div id="addedFeaturedProductPopup"
                    className="popup"
                    style={{backgroundColor: "green", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                    <p className="popupText">Adicionado com sucesso!</p>
                </div>
                <span className={styles.productKind}>
                    <p className={styles.kind}>{product.kind}</p>
                </span>
                <img src={product.imgUrl} alt={product.name} className={styles.productImage} />
                <p className={styles.productName}>{product.name}</p>
                <div className={styles.splitter}></div>
                <p className={styles.latePrice}>De: <span className={styles.printedPrice}>R$ {printedPrice}</span></p>
                <p className={styles.newPrice}>{`Por: R$ ${product.price}`}</p>
                <button 
                    className={styles.button} 
                    onClick={product.inStock >= 1 ? () => insertToCart(product) : () =>  notAnyOnStock()}
                    >
                        {product.inStock >= 1 ?
                            "Adicionar" 
                            : 
                            "Avise-me"}
                </button>
            </div>
    )
}