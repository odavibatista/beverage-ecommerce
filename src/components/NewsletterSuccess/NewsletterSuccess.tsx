import styles from "./styles.module.scss";

export function NewsletterSuccess   ()  {
    //@ts-ignore
    const userEmail: any = JSON.parse(localStorage.getItem('newsLetterSubscribed')).email
    //@ts-ignore
    const userName: any = JSON.parse(localStorage.getItem('newsLetterSubscribed')).name

    return  (
        <section className={styles.section}>
            <img src="https://i.imgur.com/nWSzv3n.png" alt="shopLogo" className={styles.logo} />
            <h1 className={styles.title}>{userName}, obrigado por se inscrever!</h1>
            <p className={styles.description}>Colocamos o seu email ({userEmail}) no nosso banco de inscritos.<br/> Iremos lhe contatar para enviar nossas notícias! :)</p>
            <a href="/beverage-ecommerce/" className={styles.link}>Voltar</a>
        </section>
    )
}