import shopCart from "../../Shopcart";
import styles from "./styles.module.scss";

let localStorageData = localStorage.getItem('shopCart');

if(localStorageData) {
//Se localStorageData for diferente de nulo, faça algo
}



export function ProductCard ({product}: any)  {
    //@ts-ignore
    function insertToCart(product: {}) {
        const localStorageData = localStorage.getItem("localStorageData")
        const shopCart = JSON.parse(localStorageData) || [];
        shopCart.push(product)
        localStorage.setItem("localStorageData", JSON.stringify(shopCart))
    }

function notAnyOnStock  ()  {
    alert("Produto em falta! :(")
}

    return  (
        <div className={styles.productCard}>
            <span className={product.inStock >= 1 ? styles.inStock : styles.soldOut}>{product.kind}</span>
            <img src={product.imgUrl} alt={product.name} className={product.inStock >= 1 ? styles.inStock + " " + styles.image : styles.soldOut + " " + styles.image}/>
            <h2 className={styles.productName}>{product.name}</h2>
            <h4 className={styles.price}>{product.inStock >= 1 ? "R$ " + product.price : "SEM ESTOQUE"}</h4>
            <p className={styles.description}>{product.description}</p>
            <button className={styles.button} onClick={product.inStock >= 1 ? () => insertToCart(product) : () =>  notAnyOnStock()}>
                    {product.inStock >= 1 ? "Adicionar ao Carrinho" : "Avise-me"}
            </button>
        </div>
    )
}