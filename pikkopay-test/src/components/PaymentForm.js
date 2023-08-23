import mastercard_logo from "../assets/mastercard_logo.png";
import visa_logo from "../assets/visa_logo.png";
import ae_logo from "../assets/ae_logo.png";
import jcb_logo from "../assets/jcb_logo.png";
import React, { useState, useEffect, useMemo } from "react";
import Loader from "./Loader";

function PaymentForm() {
  const [isLoading, setLoading] = useState(false);
  const [isInit, setInit] = useState(false);

  const style = useMemo(
    () => ({
      input: {
        base: {
          color: "black",
          fontSize: "18px",
        },
        hover: {
          color: "grey",
        },
        focus: {
          color: "grey",
        },
        invalid: {
          color: "red",
        },
        placeholder: {
          base: {
            color: "grey",
          },
        },
      },
      checkbox: {
        label: {
          base: {
            color: "black",
          },
          unchecked: {
            color: "red",
          },
        },
        box: {
          base: {
            color: "black",
            hover: {
              color: "red",
            },
          },
          unchecked: {
            color: "red",
          },
        },
      },
    }),
    []
  ); // empty dependency array means useMemo will only compute the style object once

  function handlePayment() {
    setLoading(true);
    window.paygreenjs.submitPayment();
  }

  useEffect(() => {
    if (window.paygreenjs) {
      if (isInit) {
        window.paygreenjs.unmount(true);
      }
      window.paygreenjs.init({
        publicKey: "pk_6d92047e838d4870b74857ba47e2eebd",
        mode: "instrument",
        paymentMethod: "conecs",
        modeOptions: {
          shopId: "sh_69b974d635c34df18c807baed0794836",
        },
        style,
      });
      setInit(true);
    }
  }, [style, isInit]);

  return (
    <>
      <div className="form-container">
        <h2>
          Payez maintenant ou <span className="underline-text">jamais</span>
        </h2>
        <div className="icons-payment">
          <img src={mastercard_logo} alt="Mastercard logo" />
          <img src={visa_logo} alt="Visa logo" />
          <img src={ae_logo} alt="American Express logo" />
          <img src={jcb_logo} alt="JCB logo" />
        </div>
        {isLoading ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : (
          ""
        )}
        <div id="paygreen-container"></div>
        <div
          id="yourCustomDiv"
          className={`${isLoading ? "display-none" : ""}`}
        >
          <div id="paygreen-pan-frame"></div>
          <div id="paygreen-cvv-frame"></div>
          <div id="paygreen-exp-frame"></div>
          <div className="submit-button" onClick={handlePayment}>
            {" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0.333008C14.593 0.333008 6.83598 7.22601 5.54698 16.333C5.53298 16.334 5.52198 16.335 5.49998 16.333L5.46898 16.838C5.38798 17.548 5.33398 18.266 5.33398 18.999V21.666C2.38798 21.666 0.000976562 24.066 0.000976562 26.999V56.332C0.000976562 59.265 2.38898 61.665 5.33398 61.665H42.667C45.614 61.665 48 59.265 48 56.332V26.999C48 24.066 45.613 21.666 42.667 21.666V18.999C42.667 18.265 42.613 17.548 42.532 16.838L42.501 16.333C42.479 16.335 42.468 16.334 42.454 16.333C41.165 7.22601 33.407 0.333008 24 0.333008ZM24 8.33301C24.736 8.33301 25.457 8.41001 26.151 8.55201C29.623 9.26601 32.479 11.672 33.828 14.859C34.096 15.494 34.306 16.158 34.448 16.849C34.591 17.545 34.667 18.263 34.667 19V21.667H13.334V19C13.334 18.264 13.442 17.528 13.584 16.833C13.785 15.848 14.154 14.932 14.605 14.067C14.742 13.808 14.865 13.542 15.022 13.296C15.184 13.039 15.371 12.803 15.553 12.562C15.771 12.276 15.995 11.996 16.241 11.734C16.414 11.549 16.597 11.375 16.783 11.203C17.089 10.92 17.409 10.653 17.747 10.406C17.93 10.272 18.113 10.137 18.304 10.015C18.676 9.77801 19.069 9.57501 19.471 9.38501C19.662 9.29401 19.847 9.19301 20.044 9.11401C20.478 8.93901 20.933 8.81401 21.393 8.69701C21.585 8.64801 21.769 8.57901 21.966 8.54101C22.626 8.41301 23.305 8.33301 24.002 8.33301H24Z"
                fill="black"
              />
            </svg>
            Payez 1 €
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentForm;
