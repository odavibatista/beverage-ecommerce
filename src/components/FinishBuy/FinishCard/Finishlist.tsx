import styles from "./styles.module.scss"

export function FinishCard ({product}: any) {
    return (
        <div className={styles.finishCard}>
            <p>1x {product.name}:</p>
            <p>R$ {product.price}</p>
        </div>
    )
}