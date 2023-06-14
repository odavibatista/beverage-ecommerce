import styles from "./styles.module.scss";

export function NewsletterFeature  ({imgUrl, text}: any)  {

    return (
        <div className={styles.newsletterFeature}>
            <img src={imgUrl} alt="newsletterFeature" className={styles.newsletterHighlight} />
            <p className={styles.text}>- {text}</p>
        </div>
    )
}