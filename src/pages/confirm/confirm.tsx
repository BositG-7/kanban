import React, { useState, useRef } from "react";
import Registar from "../register/register";
import Login from "../login/login";
import style from "./confirm.module.scss";

interface ConfirmationProps {
  confirmCode: number | null;
  enteredEmail: any;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  confirmCode,
  enteredEmail,
}) => {
  const [back, setBack] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const inputConfirmationRef = useRef<HTMLInputElement | null>(null);

  const handleBackRegistar = () => {
    setBack(true);
  };

  const handleCheckConfirmation = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredCode = inputConfirmationRef.current?.value;
    if (enteredCode === confirmCode?.toString()) {
      setLogin(true);
    } else {
      setErrorMsg("Incorrect verification code. Please try again.");
    }
  };

  if (back) {
    return <Registar />;
  }

  if (login) {
    return <Login />;
  }

  return (
    <>
      <div className={style.wrapper}>
        <h2>Account recovery</h2>
        <p className={style.confirmText}>
          {`An email with a verification code was just sent to `}
          <span className={style.targetEmail}>{enteredEmail}</span>
        </p>
        <form action="#" onSubmit={handleCheckConfirmation}>
          <div className={style.inputBox}>
            <input
              type="text"
              placeholder="Enter code"
              required
              ref={inputConfirmationRef}
            />
            <p className={style.errorMsg}>{errorMsg}</p>
          </div>
          <div className={`${style.button}`}>
            <input type="submit" value="Next" />
          </div>
          <div className={style.text}>
            <div className={style.nextWay}>
              <h3>
                <a href="">Try another way</a>
                <a href="#" onClick={handleBackRegistar}>
                  Back
                </a>
              </h3>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Confirmation;
