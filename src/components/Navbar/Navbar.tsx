import { Logo } from "../Logo/Logo"
import styles from "./styles.module.scss"

export function Navbar ()  {
    return(
        <nav className="navbar navbar-expand-lg sticky-top" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <Logo/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Produtos
                </a>
                <ul className="dropdown-menu">
                    <li className="li-dropdown"><a className="dropdown-item" href="#">Cervejas</a></li>
                    <li className="li-dropdown"><a className="dropdown-item" href="#">Destilados</a></li>
                    <li className="li-dropdown"><a className="dropdown-item" href="#">Drinks</a></li>
                    <li className="li-dropdown"><a className="dropdown-item" href="#">Energéticos</a></li>
                    <li className="li-dropdown"><a className="dropdown-item" href="#">Vinhos</a></li>
                    <li className="li-dropdown"><a className="dropdown-item" href="#">Outros</a></li>
                </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}