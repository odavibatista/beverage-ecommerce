import { Product } from "../../Classes/Product";
import { FinishCard } from "./FinishCard/Finishlist";
import styles from "./styles.module.scss"

let shopHistoryData = localStorage.getItem('shopHistory');

if(shopHistoryData)    {
}

export function FinishBuy   ()  {

    //@ts-ignore
    let localStorageData = JSON.parse(localStorage.getItem('localStorageData'))
    //@ts-ignore
    const finishCards: any   =  localStorageData.map(products => <FinishCard product={products} /> );

    const totalPrice:   number[]    =   []
    //@ts-ignore
    localStorageData.map(product => totalPrice.push(product.price))
    const totalValue: string = totalPrice.reduce((acc, cv) =>   acc + cv, 0).toFixed(2)

    function finishBuy()    {
        //@ts-ignore
        const street: any = document.getElementById('street').value
        //@ts-ignore
        const number: any  = document.getElementById('number').value
        //@ts-ignore
        const postalCode: any  = document.getElementById('postalCode').value
        //@ts-ignore
        const city: any  = document.getElementById('city').value
        //@ts-ignore
        const addressConfirm: any  = document.getElementById('addressConfirm').checked
        //@ts-ignore
        const ageConfirm: any  = document.getElementById('ageConfirm').checked
        //@ts-ignore
        const complement = document.getElementById('complement').value
        //@ts-ignore
        const totalAmount = document.getElementById('totalAmount').innerText

        //@ts-ignore
        const shopHistoryData: any = localStorage.getItem("shopHistoryData")
        const shopHistory = JSON.parse(shopHistoryData) || []
        const date = new Date()

        let userData: any = {}
        let saleResume: any = {}
        
            if  (      addressConfirm === true 
                    && ageConfirm === true 
                    && street.length >= 8 
                    && number.length >= 1
                    && postalCode.length >= 8
                    && city.length >= 3
                )    {
                    
                userData = {
                    street: street,
                    complement: complement?
                    number: number,
                    postalCode: postalCode,
                    city: city,
                }

                saleResume = {
                    totalValue: totalAmount,
                    saleDate: `${date.getDate()}/${date.getUTCMonth()+1}/${date.getFullYear()}`
                }
                
                shopHistory.push(saleResume)
                localStorage.setItem("shopHistoryData", JSON.stringify(shopHistory))
                const clearedCart: Product[] = []
                localStorage.setItem("localStorageData", JSON.stringify(clearedCart))

                setTimeout(() => {
                    //@ts-ignore
                    window.location.reload(true)
                    window.location.replace("/src/pages/salesuccess.html")
                }, 300)
                
            }   else    {
                const saleFailPopup: any = document.querySelector("#saleFailPopup")

                saleFailPopup.classList.add("open")
                setTimeout(() => {
                    saleFailPopup.classList.remove("open")
            }, 2500) 
            }
        }

    return  (
        <section className={styles.section}>
            <div id="saleFailPopup" className='popup' style={{backgroundColor: "red", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Preencha os campos obrigatórios!</p>
            </div>
            <div className={styles.address}>
                <h1 className={styles.titles}>Endereço de Entrega</h1>
                <form className={styles.addressForm}>
                    <label htmlFor="street"  className={styles.labels}>Logradouro:*</label>
                    <input type="text" id="street" name="street" className={styles.textInputs}/>
                    <div className={styles.separation}>
                        <label htmlFor="number"  className={styles.labels} style={{height: "25px"}}>Número:* </label>
                        <input type="text" id="number" name="number" className={styles.textInputs} style={{width: "106px"}} maxLength={5}/>
                        <label htmlFor="complement"  className={styles.labels} style={{height: "25px"}}>Complemento: </label>
                        <input type="text" id="complement" name="complement" className={styles.textInputs} maxLength={30} style={{width: "140px"}}/>
                    </div>
                    <div className={styles.separation}>
                        <label htmlFor="postalCode"  className={styles.labels}>CEP:*</label>
                        <input type="text" id="postalCode" name="postalCode" className={styles.textInputs} maxLength={12} style={{width: "130px"}}/>
                        <label htmlFor="city" className={styles.labels}>Cidade:*</label>
                        <input type="text" id="city" name="city" className={styles.textInputs} maxLength={20} style={{width: "175px"}}/>
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
                        <label htmlFor="phoneNumber" className={styles.labels}>Telefone/Celular:*</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" maxLength={15} className={styles.textInputs} style={{width: "200px"}}/>
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
                    <p className={styles.totalAmount} id="totalAmount">R$ {totalValue}</p>
                </div>
                <button 
                className={styles.finishButton}
                onClick={(event) =>  {
                    event.preventDefault()
                    finishBuy()
                }}
                >Finalizar Compra</button>
            </div>
        </section>
    )
}