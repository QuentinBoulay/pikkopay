import { NavLink, Link } from "react-router-dom";
import logo_pikkopay from "../assets/logo_pikkopay.svg";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src={logo_pikkopay} alt="Logo Pikkopay"></img>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeClassName="active" className="btn-paiement">
              Paiement
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
