import { FinishCard } from "./FinishCard/Finishlist";
import styles from "./styles.module.scss"

export function FinishBuy   ()  {
    //@ts-ignore
    let localStorageData = JSON.parse(localStorage.getItem('localStorageData'))
    //@ts-ignore
    const finishCards =   localStorageData.map(products => <FinishCard product={products} /> );

    const totalPrice:   number[]    =   []
    //@ts-ignore
    localStorageData.map(product => totalPrice.push(product.price))
    const totalValue: string = totalPrice.reduce((acc, cv) =>   acc + cv, 0).toFixed(2)
    return  (
        <section className={styles.section}>
            <div className={styles.address}>
                <h1 className={styles.titles}>Endereço de Entrega</h1>
                <form className={styles.addressForm}>
                    <label htmlFor="street"  className={styles.labels}>Logradouro:*</label>
                    <input type="text" id="street" name="street" className={styles.textInputs}/>
                    <div className={styles.separation}>
                        <label htmlFor="number"  className={styles.labels} style={{height: "25px"}}>Número:* </label>
                        <input type="text" id="number" name="number" className={styles.textInputs} style={{width: "106px"}}/>
                        <label htmlFor="complement"  className={styles.labels} style={{height: "25px"}}>Complemento: </label>
                        <input type="text" id="complement" name="complement" className={styles.textInputs} style={{width: "140px"}}/>
                    </div>
                    <div className={styles.separation}>
                        <label htmlFor="postalCode"  className={styles.labels}>CEP:*</label>
                        <input type="text" id="postalCode" name="postalCode" className={styles.textInputs} style={{width: "130px"}}/>
                        <label htmlFor="city" className={styles.labels}>Cidade:*</label>
                        <input type="text" id="city" name="city" className={styles.textInputs} style={{width: "175px"}}/>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="addressConfirm" name="addressConfirm"/>
                        <label htmlFor="addressConfirm" className={styles.labels}>Confirmo que as informações inseridas acima são verdadeiras</label>
                    </div>
                </form>
            </div>
            <div className={styles.contact}>
                <h1 className={styles.titles}>Informações para Contato</h1>
                <form className={styles.contactForm}>
                    <div className={styles.separation}>
                        <label htmlFor="phoneNumber" className={styles.labels}>Telefone/Celular:</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" className={styles.textInputs} style={{width: "200px"}}/>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="ageConfirm" name="ageConfirm" />
                        <label htmlFor="ageConfirm" className={styles.labels} style={{height: "20px", width: "75%"}}>Confirmo ser maior de 18 anos, e confirmo que a encomenda será recebida por uma pessoa maior de idade</label>
                    </div>
                </form>
            </div>
            <div className={styles.resume}>
                <h1 className={styles.titles}>Itens</h1>
                {finishCards}
                <div className={styles.saleTotal}>
                    <p className={styles.totalText}>Total</p>
                    <p className={styles.totalAmount}>R$ {totalValue}</p>
                </div>
                <button 
                className={styles.finishButton}
                onClick={(event) =>  {
                    event.preventDefault()
                }}
                >Finalizar Compra</button>
            </div>
        </section>
    )
}