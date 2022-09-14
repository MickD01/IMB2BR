import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex fw-semibold">
          <img src={Logo} alt="logo" width={30} height={21} />
          IMB2BR
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" end>
              <i className="fas fa-dashboard me-2" />
              Tablero
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/i" className="nav-link">
              <i className="fas fa-helmet-safety me-2" />
              Instalaciones
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/m" className="nav-link">
              <i className="fas fa-screwdriver-wrench me-2" />
              Mantenimientos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/u" className="nav-link">
              <i className="fas fa-ruler me-2" />
              Ultimas Millas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/c" className="nav-link">
              <i className="fas fa-person-digging me-2" />
              Contratistas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/p" className="nav-link">
              <i className="fas fa-user-tie me-2" />
              Personal
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/b" className="nav-link">
              <i className="fas fa-warehouse me-2" />
              Bodegas
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
