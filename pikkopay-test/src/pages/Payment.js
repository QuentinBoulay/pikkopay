import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img_header from "../assets/img_header.jpg";
import linePikkopay from "../assets/line_pikkopay_2.svg";
import PaymentForm from "../components/PaymentForm";

function Payment() {
  return (
    <>
      <div className="paiement-group">
        <Navbar />
        <div className="paiement-container">
          <div className="col-1">
            <h1>Payez et partez&nbsp;!</h1>
            <h2>
              Une <span className="underline-text">expérience</span> fluide et
              sans attente
            </h2>
            <p>
              Découvrez une expérience d'achat révolutionnaire avec notre
              application ! Scannez vos articles en magasin et réglez vos achats
              en un instant directement depuis l'app.
            </p>
            <img src={linePikkopay} alt="Line Pikkopay" />
          </div>
          <div className="col-2">
            <img src={img_header} alt="Paiement sans contact" />
          </div>
        </div>
      </div>
      <PaymentForm />
      <Footer />
    </>
  );
}

export default Payment;
