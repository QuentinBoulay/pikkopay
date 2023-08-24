import { HashLink as Link } from 'react-router-hash-link';
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
            <Link to="/#paiement" className="btn-paiement">
              Paiement
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
