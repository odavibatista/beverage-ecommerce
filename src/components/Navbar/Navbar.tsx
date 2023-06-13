import styles from "./styles.module.scss"
import { NavIcon } from "../NavIcon/NavIcon"
import { useState } from "react";

export function Navbar ()  {
  const [changeContent, setChangeContent] = useState("+")

    return(
        <>
          <nav className={" navbar navbar-expand-lg sticky-top"} style={{backgroundColor: "#FFD600", display: "flex", justifyContent: "center"}}>
            <div className="container-fluid d-flex flex-row align-items-center justify-content-center" style={{padding: "0 152px", }}>
              <a href="#"  className={styles.horizontal + " navbar-brand"}>
                    <img src="../../src/images/logo-old-david.png" alt="shopLogo" className={styles.headerLogo} />
                    <h1 className={styles.headerTitle}>Old David's</h1>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className={styles.ul + " navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between align-content-center"}>
                  <li className="nav-item">
                    <form className="d-flex nav-link active" role="search">
                      <div className={styles.searchBar}>
                        <input type="text" className={styles.inputText} />
                        <button className={styles.searchButton}>
                          <img src="https://i.imgur.com/B5b9frM.png" alt="searchIcon" className={styles.searchIcon}/>
                        </button>
                      </div>
                    </form>
                  </li>
                  <li className="nav-item">
                    <a href="" className={styles.navOptions}>
                      <img src="https://i.imgur.com/Zfkdt2d.png" alt="userIcon" className={styles.navOptionsIcon} />
                      <p className={styles.navOptionsText}>Registrar-se</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className={styles.navOptions}>
                      <img src="https://i.imgur.com/L7Xn5WE.png" alt="cartIcon" className={styles.navOptionsIcon} />
                      <p className={styles.navOptionsText}>Carrinho</p>
                    </a>
                  </li>
                  <li className="nav-item">
                  <a className={styles.options} data-bs-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapse" style={{height: "37px", textDecoration: "none", fontSize: "36px"}} onClick={() => setChangeContent(changeContent === "+" ? "x" : "+")}>
                    {changeContent}
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section className={styles.bottomSection + " collapse"} id="collapse">
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
      </>
    )


}