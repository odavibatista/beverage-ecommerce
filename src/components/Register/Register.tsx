import styles from './styles.module.scss'

export function Register()  {

    const registerButton: any = document.getElementById('registerButton')

    function storeRegisterInfo() {
        const registerForm: any = document.getElementById('registerForm')
        registerForm.preventDefault()
        const name: any = registerForm.querySelector('#name')
        const email: any = registerForm.querySelector('#email')
        const password: any = registerForm.querySelector('#password')
        //@ts-ignore
        localStorage.setItem('registeredUser',  [name = name.value, email = email.value, password = password.value])
        const registerPopup: any = document.querySelector("#registerPopup")
        registerPopup.classList.add("open")

        setTimeout(() => {
            registerPopup.classList.remove("open")
        }, 2500)

    }

    return(
            <section className={styles.section}>
            <div id="registerPopup" className="popup"  style={{backgroundColor: "green", padding: "20px", width:"300px", height:"40px", margin: "20px", position: "fixed", bottom: 0, left:  0}}>
                <p className="popupText">Registrado com sucesso!</p>
            </div>
                <div className={styles.register}>
                    <h1 className={styles.h1}>Registro</h1>
                    <form className={styles.registerForm} id='registerForm'>
                        <label htmlFor="name" className={styles.label}>Nome</label>
                        <input type="text" name="name" id="name" className={styles.input} autoFocus/>
                        <span id="name-error"></span>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="text" name="email" id="email" className={styles.input} />
                        <span id="email-error"></span>
                        <label htmlFor="password" className={styles.label}>Senha</label>
                        <input type="password" name="password" id="password" aria-labelledby="password" className={styles.input} />
                        <div className={styles.strengthMeter}></div>
                        <span id="password-error"></span>
                        <button className={styles.formButton} id='registerButton'>Cadastrar-me</button>
                    </form>
                </div>
                <div className={styles.login}>
                    <h1 className={styles.h1}>Login</h1>
                    <form className={styles.loginForm}>
                        <label htmlFor="loginEmail" className={styles.label}>Email</label>
                        <input type="text" name="loginEmail" className={styles.input} />
                        <label htmlFor="loginPassword" className={styles.label}>Senha</label>
                        <input type="password" name="loginPassword" aria-labelledby="password" className={styles.input} />
                        <div className={styles.strengthMeter}></div>
                        <button type="submit" className={styles.formButton}>Logar</button>
                    </form>
                </div>
            </section>
        )
}
