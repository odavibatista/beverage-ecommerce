import styles from "./styles.module.scss";

export function NavIcon ({url, content}: any)    {
    return  (
        <>
            <a href={``} className={styles.iconCategories}>
                <img src={url} alt={content} className={styles.categoryImages}/>
                <p className={styles.categoryNames}>{content}</p>
            </a>
        </>

    )
}