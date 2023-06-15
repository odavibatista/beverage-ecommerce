import styles from "./styles.module.scss";

export function ProductsHeader  ({imageUrl, text, description}: any)  {
    return  (
        <section className={styles.section} style={{background: `url('${imageUrl}')`}}>
            <p className={styles.text}>{text}</p>
            <p className={styles.description}>{description}</p>
        </section>
    )
}