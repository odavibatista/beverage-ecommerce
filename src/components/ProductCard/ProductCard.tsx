import styles from "./styles.module.scss";

let localStorageData = localStorage.getItem('shopCart');

if(localStorageData) {
}



export function ProductCard ({product}: any)  {
    //@ts-ignore
    function insertToCart(product: {}) {
        const localStorageData: any = localStorage.getItem("localStorageData")
        const shopCart = JSON.parse(localStorageData) || []
        shopCart.push(product)
        localStorage.setItem("localStorageData", JSON.stringify(shopCart))
        const popup: any = document.querySelector("#addedPopup")
        popup.classList.add("open")

        setTimeout(() => {
            popup.classList.remove("open")
        }, 2500)
        
    }

    function notAnyOnStock  ()  {
        const noStockPopup: any = document.querySelector("#notAnyOnStock")
        noStockPopup.classList.add("open")

        setTimeout(() => {
            noStockPopup.classList.remove("open")
        }, 2000)
    }
    
    
    

    return  (
        <div className={styles.productCard}>
            <div id="notAnyOnStock" className="popup"  style={{backgroundColor: "red", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Produto em falta!</p>
            </div>
            <div id="addedPopup" className="popup"  style={{backgroundColor: "green", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Adicionado ao carrinho!</p>
            </div>
            <span className={product.inStock >= 1 ? styles.inStock : styles.soldOut}>{product.kind}</span>
            <img src={product.imgUrl} alt={product.name} className={product.inStock >= 1 ? styles.inStock + " " + styles.image : styles.soldOut + " " + styles.image}/>
            <h2 className={styles.productName}>{product.name}</h2>
            <h4 className={styles.price}>{product.inStock >= 1 ? "R$ " + product.price : "SEM ESTOQUE"}</h4>
            <p className={styles.description}>{product.description}</p>
            <button
            type="button"
            className={styles.button}
            onClick={product.inStock >= 1 ? () => insertToCart(product) : () =>  notAnyOnStock()}>
                    {product.inStock >= 1 ? "Adicionar ao Carrinho" : "Avise-me"}
            </button>

        </div>
    )
}