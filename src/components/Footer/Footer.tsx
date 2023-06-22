import styles from "./styles.module.scss"

export function Footer   ()  {
    return(
        <footer className={styles.footer}>
            <section className={styles.section}>
                <div className={styles.infoSection}>
                    <h1 className={styles.infoTitle}>Fale Conosco</h1>
                    <p className={styles.listing}><img src="https://i.imgur.com/zhKXzTh.png" alt="phoneIcon" className={styles.icon} /> (11) 2441-5914</p>
                    <p className={styles.listing}><img src="https://i.imgur.com/P8a2jAW.png" alt="whatsAppIcon" className={styles.icon} /> (11) 91240-5122</p>
                    <p className={styles.listing}><img src="https://i.imgur.com/V5XmI0D.png" alt="emailIcon"  className={styles.icon} /> contato@olddavid.com</p>
                </div>
                <div className={styles.infoSection} style={{marginTop: "-45px"}}>
                    <h1 className={styles.infoTitle}>Dúvidas</h1>
                    <a target="_blank" href="/src/pages/privacypolitics.html" className={styles.listing + " " + styles.links}>Políticas de Privacidade</a>
                    <a target="_blank" href="/src/pages/payments.html" className={styles.listing + " " + styles.links}>Formas de Pagamento</a>
                    <a target="_blank" href="/src/pages/termsofuse.html" className={styles.listing + " " + styles.links}>Termos de Uso</a>
                </div>
                <div className={styles.infoSection}>
                    <h1 className={styles.infoTitle} style={{marginTop: "-85px"}} id="credits">Créditos</h1>
                    <a href="https://icons8.com" target="_blank" className={styles.listing + " " + styles.links}>Icons by Icons8</a>
                    <a href="https://unsplash.com/pt-br" target="_blank" className={styles.listing + " " + styles.links}>Images by Unsplash</a>
                </div>
                <img src="https://i.imgur.com/SlOBT7U.png" alt="alcoholRestriction" className={styles.alcoholRestriction} />
            </section>
            <div className={styles.seal}>
                <p className={styles.sealText}>Old David’s Beverage Shop is a fictional drinks and beverages shop created by daviebatista. All of its external pictures belong to other parties, and are credited on the webpage’s footer.</p>
            </div>
        </footer>
    )
}