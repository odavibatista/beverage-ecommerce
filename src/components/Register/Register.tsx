import { useState } from 'react'
import styles from './styles.module.scss'

export function Register()  {
    /*Change the state for register/login's alternance*/
    const [signStatus, setSignStatus] = useState("register")

    /*Error color*/
    function turnToRed()    {
        document.querySelector('#nameInput').style.borderBottomColor = "red"
        document.querySelector('#emailInput').style.borderBottomColor = "red"
        document.querySelector('#passwordInput').style.borderBottomColor = "red"
    }

    /*Return to neutral color*/
    function backToOriginalColor    ()  {
        document.querySelector('#nameInput').style.borderBottomColor = "#2E1D1D"
        document.querySelector('#emailInput').style.borderBottomColor = "#2E1D1D"
        document.querySelector('#passwordInput').style.borderBottomColor = "#2E1D1D"
    }

    /*Registering function */
    function registerUser() {
        const nameInput: any = document.getElementById('nameInput');
        const emailInput: any = document.getElementById('emailInput');
        const passwordInput: any = document.getElementById('passwordInput');
    
        if(nameInput.value.length >= 3 && emailInput.checkValidity() && passwordInput.value.length >= 8)    {
            backToOriginalColor()
            const userInfo = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            }
            localStorage.setItem('registeredUser', JSON.stringify(userInfo));
            const registerSuccessPopup: any = document.querySelector("#registerSuccessPopup")
            registerSuccessPopup.classList.add("open")
    
            setTimeout(() => {
                registerSuccessPopup.classList.remove("open")
            }, 2500)

        }else if(nameInput.value.length < 3 || passwordInput.value.length < 8)    {
            //@ts-ignore
            turnToRed()
            const registerFailPopup: any = document.querySelector("#registerFailPopup")
            registerFailPopup.classList.add("open")
                setTimeout(() => {
                    registerFailPopup.classList.remove("open")
            }, 2500)
        }
            return false;
        }
    return(
            <section className={styles.section}>
            <div id="registerSuccessPopup" className='popup' style={{backgroundColor: "green", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Registrado com sucesso!</p>
            </div>
            <div id="registerFailPopup" className='popup' style={{backgroundColor: "red", padding: "50px", width:"300px", height:"60px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Nome deve ter 3 caracteres ou mais;<br/> Senha deve ter 8 caracteres ou mais!</p>
            </div>
                {
                    signStatus === 'register' ? 
                    <div className={styles.register}>
                        <h1 className={styles.h1}>Registro</h1>
                        <form className={styles.registerForm} id='registerForm'>
                            <label htmlFor="name" className={styles.label}>Nome</label>
                            <input type="text" name="name" id="nameInput" className={styles.input}/>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="text" name="email" id="emailInput" className={styles.input} />
                            <label htmlFor="password" className={styles.label}>Senha</label>
                            <input type="password" name="passwordInput" id="passwordInput" aria-labelledby="password" className={styles.input} />
                            <p
                                className={styles.changeStatus}
                                onClick={()=> {
                                    backToOriginalColor()
                                    setSignStatus('login')
                                }
                                
                                }>Quero fazer login</p>
                            <button 
                                className={styles.formButton}
                                id='registerButton'
                                onClick={(event)=> {
                                event.preventDefault()
                                registerUser()
                                }}>Cadastrar-me</button>
                        </form>
                    </div>  
                    
                    :

                    <div className={styles.login}>
                        <h1 className={styles.h1}>Login</h1>
                        <form className={styles.loginForm}>
                            <label htmlFor="loginEmail" className={styles.label}>Email</label>
                            <input type="text" name="loginEmail" className={styles.input} />
                            <label htmlFor="loginPassword" className={styles.label}>Senha</label>
                            <input type="password" name="loginPassword" aria-labelledby="password" className={styles.input} />
                            <p
                                className={styles.changeStatus} 
                                onClick={()=> {
                                    setSignStatus('register')
                                    backToOriginalColor()
                                }}>Quero me registrar</p>
                            <button type="submit" className={styles.formButton}>Logar</button>
                        </form>
                    </div>
                }
            </section>
        )
}
