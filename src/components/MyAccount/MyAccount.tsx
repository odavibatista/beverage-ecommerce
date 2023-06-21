import { useState } from 'react'
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
    //@ts-ignore
    const userPassword: any = JSON.parse(localStorage.getItem('registeredUser')).password

    function logOut ()  {
        //@ts-ignore
        localStorage.setItem('isLoggedIn', false)
        window.location.reload()
    }

    const [dataStatus, setDataStatus] = useState("show")
    
    return(
            <section className={styles.section}>
                <div className={styles.whiteInformations}>
                    {
                    dataStatus === "show" ?
                    <div className={styles.userDashboard}>
                    <img src="https://i.imgur.com/Zfkdt2d.png" alt="userIcon" className={styles.userPicture} />
                    <h1 className={styles.userName}>{userName}</h1>
                    <h1 className={styles.userEmail}>{userEmail}</h1>
                    <h1 className={styles.userEmail}>Membro desde: <br/>{userMemberSince}</h1>
                    <button 
                    className={styles.buttons}
                    onClick={() => setDataStatus("change")}
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
                :
                <div className={styles.userDashboard}>
                    <img src="https://i.imgur.com/Zfkdt2d.png" alt="userIcon" className={styles.userPicture} />
                    <p className={styles.changeInfo}>Nome:</p>
                    <input type="text" name="changeNameInput" id="changeNameInput" value={userName} className={styles.changeInputs} />
                    <p className={styles.changeInfo}>Email:</p>
                    <input type="text" name="changeEmailInput" id="changeEmailInput" value={userEmail} className={styles.changeInputs} />
                    <p className={styles.changeInfo}>Senha:</p>
                    <input type="password" name="changePasswordInput" id="changePasswordInput" value={userPassword} className={styles.changeInputs} />
                    <button 
                    className={styles.buttons}
                    >
                        Salvar
                    </button>
                    <button 
                        className={styles.buttons} 
                        onClick={() => setDataStatus("show")}>
                            Cancelar
                    </button>
                </div>
                }
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