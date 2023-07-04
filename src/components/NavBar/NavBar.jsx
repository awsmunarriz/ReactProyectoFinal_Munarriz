import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Ecommerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to={`/category/celular`}
                activeclassname="active"
                className="nav-link"
              >
                Celulares
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/category/tablet`}
                activeclassname="active"
                className="nav-link"
              >
                Tablets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/category/notebook`}
                activeclassname="active"
                className="nav-link"
              >
                Notebooks
              </NavLink>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
