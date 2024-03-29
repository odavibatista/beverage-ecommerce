import styles from "./styles.module.scss"
import { NavIcon } from "../NavIcon/NavIcon"
import { useState } from "react";

export function Navbar ()  {
  const [changeContent, setChangeContent] = useState("+")

    return(
        <>
          <nav className={" navbar navbar-expand-lg sticky-top flex-column"} style={{backgroundColor: "#F1C376"}}>
            <div className="container-fluid align-items-center justify-content-center" style={{padding: "0 152px", }}>
              <a href="/beverage-ecommerce/"  className={styles.horizontal + " navbar-brand"}>
                    <img src="https://i.imgur.com/nWSzv3n.png" alt="shopLogo" className={styles.headerLogo} />
                    <h1 className={styles.headerTitle}>Old David's</h1>
              </a>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
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
                    <a href={
                      //@ts-ignore
                      JSON.parse(localStorage.getItem('isLoggedIn')) === true ?
                      "/src/pages/myaccount.html"
                      :
                      "/src/pages/signin.html"
                      }
                      className={styles.navOptions}
                    >
                      <img src="https://i.imgur.com/Zfkdt2d.png" alt="userIcon" className={styles.navOptionsIcon} />
                      <p className={styles.navOptionsText}>
                        {
                          //@ts-ignore
                          JSON.parse(localStorage.getItem('isLoggedIn')) === true ?
                          //@ts-ignore
                          JSON.parse(localStorage.getItem('registeredUser')).name 
                          :
                          "LOGIN/REGISTRO"
                        }
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href={
                      //@ts-ignore
                      JSON.parse(localStorage.getItem('isLoggedIn')) === null || JSON.parse(localStorage.getItem('isLoggedIn')) === false?
                      "/src/pages/signin.html"
                      :
                      "/src/pages/cart.html"
                      } className={styles.navOptions}>
                      <img src="https://i.imgur.com/L7Xn5WE.png" alt="cartIcon" className={styles.navOptionsIcon} />
                      <p className={styles.navOptionsText}>CARRINHO</p>
                    </a>
                  </li>
                  <li className="nav-item">
                  <a className={styles.options}
                    id="optionLink"
                    data-bs-toggle="collapse" 
                    href="#collapse" 
                    role="button" 
                    aria-expanded="false"
                    aria-controls="collapse"
                    style={{  height: "37px", textDecoration: "none", fontSize: "36px"}}
                    onClick={() => setChangeContent(changeContent === "+" ? "x" : "+")}>
                    {changeContent}
                  </a>
                  </li>
                </ul>
              </div>
            </div>
            <section className={styles.bottomSection + " collapse"} id="collapse">
            <NavIcon url="https://img.icons8.com/?size=512&id=118288&format=png" content="Ofertas" link="/src/pages/onsale.html" />
            <NavIcon url="https://img.icons8.com/?size=512&id=TXax4v1cj9sq&format=png" content="Vinhos" link="/src/pages/wines.html" />
            <NavIcon url="https://img.icons8.com/?size=512&id=116701&format=png" content="Vodkas" link="/src/pages/vodkas.html" />
            <NavIcon url="https://img.icons8.com/?size=512&id=_Rxn-mdDAZCm&format=png" content="Espumantes" link="/src/pages/sparklings.html" />
            <NavIcon url="https://img.icons8.com/?size=512&id=100503&format=png" content="Cervejas" link="/src/pages/beers.html" />
            <NavIcon url="https://img.icons8.com/?size=512&id=102450&format=png" content="Destilados" link="/src/pages/destilateds.html" />
            <NavIcon url="https://img.icons8.com/?size=512&id=121591&format=png" content="Fermentados" link="/src/pages/fermenteds.html" />
            <NavIcon url="https://img.icons8.com/?size=512&id=fMtMQwCqSTY6&format=png" content="Energéticos" link="/src/pages/energy-drinks.html" />
            <NavIcon url="https://img.icons8.com/?size=512&id=102644&format=png" content="Águas" link="/src/pages/waters.html" />
            <NavIcon url="https://img.icons8.com/?size=512&id=95050&format=png" content="Sucos" link="/src/pages/juices.html" />
            <NavIcon url="https://img.icons8.com/?size=512&id=79440&format=png" content="Gelos" link="/src/pages/ices.html" />
            <NavIcon url="https://img.icons8.com/?size=512&id=68669&format=png" content="Utensílios" link="/src/pages/tools.html" />
            </section> 
          </nav>
          
      </>
    )


}