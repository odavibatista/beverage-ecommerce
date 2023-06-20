import styles from "./styles.module.scss";

export function CartProductCard ({product}: any)    {

        let localStorageData: any = localStorage.getItem("localStorageData")    
        //@ts-ignore  
        localStorageData = JSON.parse(localStorageData)

        function removeFromCart ()  {
            //@ts-ignore
            let localStorageData = JSON.parse(localStorage.getItem('localStorageData'))
            //@ts-ignore
            let index = localStorageData.indexOf(localStorageData.find(item => item.name === product.name))    
            localStorageData.splice(index, 1)         
            localStorage.setItem('localStorageData', JSON.stringify(localStorageData))
            const popup: any = document.querySelector(".popup");
            popup.classList.add("open");
            setTimeout(() => {
                popup.classList.remove("open")
            }, 2500)
            setTimeout(() => {
                //@ts-ignore
                window.location.reload(true)
            }, 300)

        }

        return  (            
            <div className={styles.cartProduct}>
                <div className="popup"  style={{backgroundColor: "red", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                    <p className="popupText">Produto removido!</p>
                </div>           
                <img src={product.imgUrl} alt={product.name} className={styles.productIcon} />                        
                <div className={styles.productInfo}>                                
                    <p className={styles.productName}>{product.name}</p>                                
                    <p className={styles.productPrice}>R$ {product.price}</p>                        
                </div>                        
                <button 
                    className={styles.button}
                    onClick={() =>  removeFromCart()}>
                    Remover
                </button>                    
            </div>    
        ) 
    }