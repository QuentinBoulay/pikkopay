import logo_pikkopay from "../assets/logo_pikkopay.svg";
import logo_instagram from "../assets/logo_instagram.svg";
import logo_youtube from "../assets/logo_youtube.svg";
import logo_linkedin from "../assets/logo_linkedin.svg";
import logo_twitter from "../assets/logo_twitter.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="col-1">
          <img src={logo_pikkopay} alt="Logo Pikkopay" />
          <p className="footer-paragraph">
            PikkoPay donne la possibilité de finaliser ses achats directement
            depuis le smartphone, et éviter ainsi les files d'attente en caisse.
            Grâce à notre technologie, les acheteurs pourront scanner les
            codes-barres de leurs articles et payer en utilisant une grande
            variété de méthodes de paiement. Pas d'attente, pas de
            téléchargement, pas d'inscription
          </p>
          <div className="social-container">
            <div className="social-link">
              <img src={logo_linkedin} alt="Linkedin" />
            </div>
            <div className="social-link">
              <img src={logo_twitter} alt="Twitter" />
            </div>
            <div className="social-link">
              <img src={logo_instagram} alt="Instagram" />
            </div>
            <div className="social-link">
              <img src={logo_youtube} alt="Youtube" />
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="col-2-1">
            <h3>Pikkopay</h3>
            <Link to="https://www.pikkopay.fr/">Home Page</Link>
          </div>
          <div className="col-2-2">
            <h3>Menu</h3>
            <Link to="https://www.pikkopay.fr/#Contact">Contact us</Link>
          </div>
        </div>
      </div>
      <p className="text-copyright">© 2023 <Link to="https://quentinboulay.fr/">Quentin Boulay</Link>, Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
