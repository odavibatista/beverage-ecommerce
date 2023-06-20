import { useState } from 'react'
import styles from './styles.module.scss'

export function Register()  {
    const [signStatus, setSignStatus] = useState("register")

    return(
            <section className={styles.section}>
            <div id="registerPopup" className='popup'>
                <p className="popupText">Registrado com sucesso!</p>
            </div>
            {
                signStatus === 'register' ? 
                <div className={styles.register}>
                    <h1 className={styles.h1}>Registro</h1>
                    <form className={styles.registerForm} id='registerForm'>
                        <label htmlFor="name" className={styles.label}>Nome</label>
                        <input type="text" name="name" id="name" className={styles.input} autoFocus/>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="text" name="email" id="email" className={styles.input} />
                        <label htmlFor="password" className={styles.label}>Senha</label>
                        <input type="password" name="password" id="password" aria-labelledby="password" className={styles.input} />
                        <p className={styles.changeStatus} onClick={()=> setSignStatus('login')}>Quero fazer login</p>
                        <button className={styles.formButton} id='registerButton'>Cadastrar-me</button>
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
                        <p className={styles.changeStatus} onClick={()=> setSignStatus('register')}>Quero me registrar</p>
                        <button type="submit" className={styles.formButton}>Logar</button>
                    </form>
                </div>
            }
                

            </section>
        )
}
