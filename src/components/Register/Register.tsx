import { useState } from 'react'
import styles from './styles.module.scss'

export function Register()  {
    /*Change the state for register/login's alternance*/
    const [signStatus, setSignStatus] = useState("register")

    /*Error for register inputs color*/
    function turnToRedRegister()    {
        //@ts-ignore
        document.querySelector('#nameInput').style.borderBottomColor = "red"
        //@ts-ignore
        document.querySelector('#emailInput').style.borderBottomColor = "red"
        //@ts-ignore
        document.querySelector('#passwordInput').style.borderBottomColor = "red"
    }

    /*Error for login inputs color*/
    function turnToRedLogin()   {
        //@ts-ignore
        document.querySelector('#loginEmail').style.borderBottomColor = "red"
        //@ts-ignore
        document.querySelector('#loginPassword').style.borderBottomColor = "red"
    }

    /*Return register inputs to neutral color*/
    function backToOriginalColorRegister    ()  {
        //@ts-ignore
        document.querySelector('#nameInput').style.borderBottomColor = "#2E1D1D"
        //@ts-ignore
        document.querySelector('#emailInput').style.borderBottomColor = "#2E1D1D"
        //@ts-ignore
        document.querySelector('#passwordInput').style.borderBottomColor = "#2E1D1D"
    }

    /*Return register inputs to neutral color*/
    function backToOriginalColorLogin    ()  {
        //@ts-ignore
        document.querySelector('#loginEmail').style.borderBottomColor = "#2E1D1D"
        //@ts-ignore
        document.querySelector('#loginPassword').style.borderBottomColor = "#2E1D1D"
    }

    /*Registering function */
    function registerUser() {
        const nameInput: any = document.getElementById('nameInput')
        const emailInput: any = document.getElementById('emailInput')
        const passwordInput: any = document.getElementById('passwordInput')
        const memberSinceDay: any = new Date().getDay()
        const memberSinceMonth: any = new Date().getMonth()
        const memberSinceYear: any = new Date().getFullYear()
    
        if(nameInput.value.length >= 3 && emailInput.checkValidity() && passwordInput.value.length >= 8)    {
            backToOriginalColorRegister()

            const userInfo = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value,
                memberSince: `${memberSinceDay}/${memberSinceMonth}/${memberSinceYear}`,
                shopHistory: []
            }

            localStorage.setItem('registeredUser', JSON.stringify(userInfo))
            localStorage.setItem('isLoggedIn', JSON.stringify(true))
            const registerSuccessPopup: any = document.querySelector("#registerSuccessPopup")

            
            registerSuccessPopup.classList.add("open")
            setTimeout(() => {
                registerSuccessPopup.classList.remove("open")
            }, 1000)

            setTimeout(() => {
                //@ts-ignore
                window.location.reload(true)
                window.location.replace("/beverage-ecommerce/")
            }, 300)

        }   else if(
            nameInput.value.length < 3 
            ||
            passwordInput.value.length < 8
            )   {
            turnToRedRegister()

            const registerFailPopup: any = document.querySelector("#registerFailPopup")

            registerFailPopup.classList.add("open")
                setTimeout(() => {
                    registerFailPopup.classList.remove("open")
            }, 2500)
        }
    }

    function loginUser  ()  {
        const loginEmail: any = document.getElementById('loginEmail')
        const loginPassword: any = document.getElementById('loginPassword')

        if  (//@ts-ignore
            loginEmail.value === JSON.parse(localStorage.getItem('registeredUser'))?.email
            //@ts-ignore
            && loginPassword.value === JSON.parse(localStorage.getItem('registeredUser'))?.password
            )   {
                const loginSuccessPopup: any = document.querySelector('#loginSuccessPopup')
                
                loginSuccessPopup.classList.add("open")
                setTimeout(() => {
                    loginSuccessPopup.classList.remove("open")
                }, 2500)

                localStorage.setItem('isLoggedIn', JSON.stringify(true))

                backToOriginalColorLogin()

                setTimeout(() => {
                    //@ts-ignore
                    window.location.reload(true)
                    window.location.replace("/beverage-ecommerce/")
                }, 300)
        }   else if(
            loginPassword.value.length < 3
            || loginEmail.value.length < 8
            //@ts-ignore
            || loginEmail.value !== JSON.parse(localStorage.getItem('registeredUser'))?.email
            //@ts-ignore
            || loginPassword.value !== JSON.parse(localStorage.getItem('registeredUser'))?.password
            )    {
            turnToRedLogin()
            const loginFailPopup: any = document.querySelector("#loginFailPopup")

            loginFailPopup.classList.add("open")
            setTimeout(() => {
                loginFailPopup.classList.remove("open")
        }, 2500)
        }
    }

    return(
            <section className={styles.section}>
            <div id="registerSuccessPopup" className='popup' style={{backgroundColor: "green", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Registrado com sucesso!</p>
            </div>
            <div id="registerFailPopup" className='popup' style={{backgroundColor: "red", padding: "50px", width:"300px", height:"60px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Nome deve ter 3 caracteres ou mais;<br/> Senha deve ter 8 caracteres ou mais!</p>
            </div>
            <div id="loginFailPopup" className='popup' style={{backgroundColor: "red", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Email ou senha incorretos!</p>
            </div>
            <div id="loginSuccessPopup" className='popup' style={{backgroundColor: "green", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Logado com sucesso!</p>
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
                                    setSignStatus('login')
                                    backToOriginalColorRegister()
                                }
                                
                                }>Quero fazer login</p>
                            <button 
                                className={styles.formButton}
                                id='registerButton'
                                onClick={(event)    =>  {
                                    event.preventDefault()
                                    registerUser()
                                }}>Cadastrar-me</button>
                                <p className={styles.terms}>Ao cadastrar-se, você concorda com os <a href="/src/pages/termsofuse.html" target='_blank' className={styles.links}>Termos de Uso</a> </p>
                        </form>
                    </div>  
                    
                    :

                    <div className={styles.login}>
                        <h1 className={styles.h1}>Login</h1>
                        <form className={styles.loginForm}>
                            <label htmlFor="loginEmail" className={styles.label}>Email</label>
                            <input type="text" name="loginEmail" className={styles.input} id="loginEmail" />
                            <label htmlFor="loginPassword" className={styles.label}>Senha</label>
                            <input type="password" name="loginPassword" aria-labelledby="password" className={styles.input} id="loginPassword"/>
                            <p
                                className={styles.changeStatus} 
                                onClick={()=> {
                                    setSignStatus('register')
                                    backToOriginalColorLogin()
                                }}>Quero me registrar</p>
                            <button
                                className={styles.formButton}
                                id='loginButton'
                                onClick={(event)    =>  {
                                    event.preventDefault()
                                    loginUser()
                                }}
                                >Logar</button>
                        </form>
                    </div>
                }
            </section>
        )
}
