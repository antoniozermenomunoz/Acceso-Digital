import { Link } from "react-router-dom";
import Logo from "../../Img/Logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header-akron">
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <picture>
              <img src={Logo} alt="Logo Akron Lubricantes" height="55" />
            </picture>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuNavegacion"
            aria-controls="menuNavegacion"
            aria-expanded="false"
            aria-label="Alternar navegación"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="menuNavegacion"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link className="nav-link nav-link-akron" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link nav-link-akron" to="/Ingresar">
                  Ingresar
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link nav-link-akron" to="/Registrar">
                  Registrar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export { Header };
