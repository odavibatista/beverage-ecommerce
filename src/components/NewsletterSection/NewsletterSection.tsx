import styles from "./styles.module.scss";
import { NewsletterFeature } from "../NewsletterFeature/NewsletterFeature";

export function NewsletterSection   ()  {

    function verifyNewsletterInputs ()  {
        const newsletterNameInput: any = document.querySelector('#newsletterNameInput')
        const newsletterEmailInput: any = document.querySelector('#newsletterEmailInput')

        const newsletterFailPopup: any = document.querySelector('#newsletterFailPopup')
        const newsletterSuccessPopup: any = document.querySelector('#newsletterSuccessPopup')
        const alreadyRegisteredPopup: any = document.querySelector('#alreadyRegisteredPopup')
        

        //@ts-ignore
        if (newsletterEmailInput.value === JSON.parse(localStorage.getItem('newsLetterSubscribed'))?.email)   {
            alreadyRegisteredPopup.classList.add("open")

            setTimeout(() => {
                alreadyRegisteredPopup.classList.remove("open")
            }, 2500)

        }


        if  (
                newsletterNameInput.value.length >= 3
                && newsletterEmailInput.value.length >= 8
                //@ts-ignore
                && newsletterEmailInput.value !== JSON.parse(localStorage.getItem('newsLetterSubscribed'))?.email
            )   {

                newsletterSuccessPopup.classList.add("open")

                setTimeout(() => {
                    newsletterSuccessPopup.classList.remove("open")
                }, 2500)

                const newsLetterInfo = {
                    name: newsletterNameInput.value,
                    email: newsletterEmailInput.value,
                }

                localStorage.setItem('newsLetterSubscribed', JSON.stringify(newsLetterInfo))
                localStorage.setItem('isSubscribed', JSON.stringify(true))

                setTimeout(() => {
                    //@ts-ignore
                    window.location.replace("/src/pages/newslettersuccess.html")
                }, 300)

                //@ts-ignore
            }   else    {
                newsletterFailPopup.classList.add("open")

                setTimeout(() => {
                    newsletterFailPopup.classList.remove("open")
                }, 2500)
            }
    }

    return  (
        <section className={styles.section}>
            <div id="newsletterFailPopup" className="popup"  style={{backgroundColor: "red", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Insira e-mail e nome válidos!</p>
            </div>
            <div id="alreadyRegisteredPopup" className="popup"  style={{backgroundColor: "red", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Você já está cadastrado!</p>
            </div> 
            <div id="newsletterSuccessPopup" className='popup' style={{backgroundColor: "green", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Inscrito com sucesso!</p>
            </div>
            <p className={styles.pageTitle}>Inscreva-se na nossa Newsletter!</p>
            <p className={styles.pageSubTitle}>Ao assinar, nossa newsletter, você receberá:</p>
            <div className={styles.newsletterInfo}>
                <div className={styles.highlights}>
                    <NewsletterFeature text="Cupons de desconto exclusivos;" imgUrl="https://i.imgur.com/WbH9fQA.png"/>
                    <NewsletterFeature text="Receitas de drinks;" imgUrl="https://i.imgur.com/bXbIX7d.png"/>
                    <NewsletterFeature text="Lançamentos da loja;" imgUrl="https://i.imgur.com/4L4uMtD.png"/>
                    <NewsletterFeature text="Acesso ao clube fidelidade." imgUrl="https://i.imgur.com/rw0GUJk.png"/>
                </div>
                <span className={styles.separator}></span>
                <div className={styles.newsletterSign}>
                    <form className={styles.newsletterForm}>
                        <label htmlFor="name" className={styles.labels}>NOME</label>
                        <input type="text" id="newsletterNameInput" className={styles.formInputs} />
                        <br />
                        <br />
                        <label htmlFor="email" className={styles.labels}>EMAIL</label>
                        <input type="text" id="newsletterEmailInput" className={styles.formInputs} />
                        <br />
                        <button
                            className={styles.formButton}
                            onClick={(event) => {
                                event.preventDefault()
                                verifyNewsletterInputs()
                            } }
                        ><p>Assinar</p></button>
                    </form>
                </div>
            </div>
        </section>
    )
}