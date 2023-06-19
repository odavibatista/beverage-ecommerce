import styles from "./styles.module.scss";

export function CartProductCard ({product}: any)    {

        let localStorageData: any = localStorage.getItem("localStorageData")    
        //@ts-ignore  
        localStorageData = JSON.parse(localStorageData)

        return  (            
            <div className={styles.cartProduct}>                        
                <img src={product.imgUrl} alt={product.name} className={styles.productIcon} />                        
                <div className={styles.productInfo}>                                
                    <p className={styles.productName}>{product.name}</p>                                
                    <p className={styles.productPrice}>R$ {product.price}</p>                        
                </div>                        
                <button 
                    className={styles.button}
                    onClick={() =>  {               
                    //@ts-ignore
                    let localStorageData = JSON.parse(localStorage.getItem('localStorageData'))
                    //@ts-ignore
                    let index = localStorageData.indexOf(localStorageData.find(item => item.name === product.name))    
                    localStorageData.splice(index, 1)         
                    localStorage.setItem('localStorageData', JSON.stringify(localStorageData))
                    //@ts-ignore  
                    window.location.reload(true);           
                    }}>
                    Remover
                </button>                    
            </div>    
        ) 
    }