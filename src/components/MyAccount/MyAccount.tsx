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

    function updateStatus() {
        const changeNameInput: any = document.querySelector('#changeNameInput')
        const changeEmailInput: any = document.querySelector('#changeEmailInput')
        const changePasswordInput: any = document.querySelector('#changePasswordInput')
        const updateInfoErrorPopup: any = document.querySelector('#updateInfoErrorPopup')
        const registerSuccessPopup: any = document.querySelector('#registerSuccessPopup')

        //@ts-ignore
        let registeredUser: any = JSON.parse(localStorage.getItem('registeredUser'))

        if  (changeNameInput.value.length < 3 || changeEmailInput.value.length < 8 || changePasswordInput.value.length < 8) {
            updateInfoErrorPopup.classList.add("open")

                setTimeout(() => {
                    updateInfoErrorPopup.classList.remove("open")
                }, 2500)
        }   else    {
            registerSuccessPopup.classList.add("open")

            setTimeout(() => {
                registerSuccessPopup.classList.remove("open")
            }, 2500)
            registeredUser.name = changeNameInput.value
            registeredUser.email = changeEmailInput.value
            registeredUser.password = changePasswordInput.value
            localStorage.setItem('registeredUser', JSON.stringify(registeredUser))

            setDataStatus("show")

            window.location.reload()
        }
    }

    const [dataStatus, setDataStatus] = useState("show")
    
    return(
            <section className={styles.section}>
            <div id="updateInfoErrorPopup" className="popup"  style={{backgroundColor: "red", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Insira e-mail e nome válidos!</p>
            </div>
            <div id="registerSuccessPopup" className='popup' style={{backgroundColor: "green", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Atualizado com sucesso!</p>
            </div>
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
                    <input type="text" name="changeNameInput" id="changeNameInput"  className={styles.changeInputs} />
                    <p className={styles.changeInfo}>Email:</p>
                    <input type="text" name="changeEmailInput" id="changeEmailInput"  className={styles.changeInputs} />
                    <p className={styles.changeInfo}>Senha:</p>
                    <input type="password" name="changePasswordInput" id="changePasswordInput"  className={styles.changeInputs} />
                    <button 
                    className={styles.buttons}
                    onClick={() => {
                        updateStatus()
                        
                    }}
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