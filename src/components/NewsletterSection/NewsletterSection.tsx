import styles from "./styles.module.scss";
import { NewsletterFeature } from "../NewsletterFeature/NewsletterFeature";

export function NewsletterSection   ()  {
    return  (
        <section className={styles.section}>
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
                        <input type="text" id="name" className={styles.formInputs} />
                        <br />
                        <br />
                        <label htmlFor="email" className={styles.labels}>EMAIL</label>
                        <input type="text" id="email" className={styles.formInputs} />
                        <br />
                        <a href="" className={styles.formButton}><p>Assinar</p></a>
                    </form>
                </div>
            </div>
        </section>
    )
}