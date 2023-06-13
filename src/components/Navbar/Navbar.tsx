import { Logo } from "../Logo/Logo"
import styles from "./styles.module.scss"
import { NavIcon } from "../NavIcon/NavIcon"

export function Navbar ()  {

    return(
        <nav className="sticky-top">
          <section className={styles.topSection}>
            <div>
              <a href="#"  className={styles.horizontal}>
                <img src="../../src/images/logo-old-david.png" alt="shopLogo" className={styles.headerLogo} />
                <h1 className={styles.headerTitle}>Old David's</h1>
              </a>
            </div>
            <div className={styles.searchBar}>
              <input type="text" className={styles.inputText} />
              <button className={styles.searchButton}>
                <img src="https://i.imgur.com/B5b9frM.png" alt="searchIcon" className={styles.searchIcon}/>
              </button>
            </div>
          </section>
          <section className={styles.bottomSection}>
            <NavIcon url="https://img.icons8.com/?size=512&id=118288&format=png" content="Ofertas"/>
            <NavIcon url="https://img.icons8.com/?size=512&id=TXax4v1cj9sq&format=png" content="Vinhos"/>
            <NavIcon url="https://img.icons8.com/?size=512&id=102450&format=png" content="Vodkas"/>
            <NavIcon url="https://img.icons8.com/?size=512&id=_Rxn-mdDAZCm&format=png" content="Espumantes"/>
            <NavIcon url="https://img.icons8.com/?size=512&id=100503&format=png" content="Cervejas"/>
            <NavIcon url="https://img.icons8.com/?size=512&id=102450&format=png" content="Destilados"/>
            <NavIcon url="https://img.icons8.com/?size=512&id=121591&format=png" content="Fermentados"/>
            <NavIcon url="https://img.icons8.com/?size=512&id=fMtMQwCqSTY6&format=png" content="Energéticos"/>
            <NavIcon url="https://img.icons8.com/?size=512&id=102644&format=png" content="Águas"/>
            <NavIcon url="https://img.icons8.com/?size=512&id=95050&format=png" content="Sucos"/>
            <NavIcon url="https://img.icons8.com/?size=512&id=79440&format=png" content="Gelos"/>
            <NavIcon url="https://img.icons8.com/?size=512&id=68669&format=png" content="Utensílios"/>
          </section>
        </nav>
    )


}