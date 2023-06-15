import styles from "./styles.module.scss";

export function NavIcon ({url, content, link}: any)    {
    return  (
        <>
            <a href={link} className={styles.iconCategories}>
                <img src={url} alt={content} className={styles.categoryImages}/>
                <p className={styles.categoryNames}>{content}</p>
            </a>
        </>

    )
}