import styles from './styles.module.scss'

export function MyAccount   ()  {
    //@ts-ignore
    const userEmail: any = JSON.parse(localStorage.getItem('registeredUser')).email
    //@ts-ignore
    const userName: any = JSON.parse(localStorage.getItem('registeredUser')).name
    //@ts-ignore
    const userMemberSince: any = JSON.parse(localStorage.getItem('registeredUser')).memberSince
    //@ts-ignore
    const shopHistory: any = JSON.parse(localStorage.getItem('registeredUser')).shopHistory

    function logOut ()  {
        localStorage.setItem('isLoggedIn', false)
        window.location.reload()
    }

    
    return(
            <section className={styles.section}>
                <div className={styles.whiteInformations}>
                    <div className={styles.userDashboard}>
                        <img src="https://i.imgur.com/Zfkdt2d.png" alt="userIcon" className={styles.userPicture} />
                        <h1 className={styles.userName}>{userName}</h1>
                        <h1 className={styles.userEmail}>{userEmail}</h1>
                        <h1 className={styles.userEmail}>Membro desde: <br/>{userMemberSince}</h1>
                        <button 
                        className={styles.buttons}
                        >
                            Alterar Dados
                        </button>
                        <button 
                        className={styles.buttons} 
                        onClick={(event) =>{
                            event.preventDefault()
                            logOut()
                        }}>
                            Logout
                        </button>
                    </div>
                    <div className={styles.shopHistory}>
                        <h1 className={styles.historyTitle}>Histórico de Compras</h1>
                        <div className={styles.buyHistory}>
                            {shopHistory.length < 1 ?
                            <p>Você ainda não fez compras! Que tal ver as ofertas?</p>
                            :
                            <p>A</p>
                            }
                        </div>
                    </div>
                </div>
            </section>
            )
}