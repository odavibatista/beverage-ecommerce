import styles from './styles.module.scss'

export function HistorySales    ({sale}: any)   {

    return  (
        <div className={styles.historySales}>
            <p>VALOR: {sale.totalValue}</p>
            <p>DIA: {sale.saleDate}</p>
        </div>
    )
}