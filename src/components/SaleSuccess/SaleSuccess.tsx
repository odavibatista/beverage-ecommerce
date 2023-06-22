import styles from "./styles.module.scss";

export function SaleSuccess   ()  {
    //@ts-ignore
    const userEmail: any = JSON.parse(localStorage.getItem('newsLetterSubscribed')).email
    //@ts-ignore
    const userName: any = JSON.parse(localStorage.getItem('newsLetterSubscribed')).name

    return  (
        <section className={styles.section}>
            <img src="https://i.imgur.com/nWSzv3n.png" alt="shopLogo" className={styles.logo} />
            <h1 className={styles.title}>{userName}, obrigado por ter comprado conosco!</h1>
            <p className={styles.description}>Seu pedido está sendo processado, e logo deve constar no seu histórico de compras.<br/> Assim que ele for confirmado, você receberá uma notificação em seu email ({userEmail}).</p>
            <a href="/beverage-ecommerce/" className={styles.link}>Voltar</a>
        </section>
    )
}