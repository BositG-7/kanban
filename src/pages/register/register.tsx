import React, { useState, useRef } from "react";
import Login from "../login/login";
import Confirmation from "../confirm/confirm";
import Style from "../register.module.scss";

interface RegistarProps {}

const Registar: React.FC<RegistarProps> = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [emailStyle, setEmailStyle] = useState({});
  const [nameStyle, setNameStyle] = useState({});
  const [passwordStyle, setPasswordStyle] = useState({});
  const [acceptTermsStyle, setAcceptTermsStyle] = useState({});
  const [confirmCode, setConfirmCode] = useState<number | null>(null);
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>("");
  const [nameErrorMsg, setNameErrorMsg] = useState<string>("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>("");
  const [acceptTermsErrorMsg, setAcceptTermsErrorMsg] = useState<string>("");

  const inputEmailRef = useRef<HTMLInputElement | null>(null);
  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const inputPasswordRef = useRef<HTMLInputElement | null>(null);
  const inputConfirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const acceptTermsRef = useRef<HTMLInputElement | null>(null);

  const goToLogin = () => {
    setShowLogin(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      email: inputEmailRef.current?.value,
      name: inputNameRef.current?.value,
      password: inputPasswordRef.current?.value,
      confirmPassword: inputConfirmPasswordRef.current?.value,
      acceptTerms: acceptTermsRef.current?.checked,
    };

    let errors: string[] = [];

    if (
      !formData.email ||
      formData.email.length <= 9 ||
      formData.email.length > 124
    ) {
      setEmailStyle({
        border: "solid 3px red",
      });
      setEmailErrorMsg("Email's length must be between 10 and 124 characters");
      errors.push("Email's length must be between 10 and 124 characters");
    } else {
      setEmailStyle({
        border: "solid 3px blue",
      });
      setEmailErrorMsg("");
    }

    if (
      !formData.name ||
      formData.name.length <= 9 ||
      formData.name.length > 150
    ) {
      setNameStyle({
        border: "solid 3px red",
      });
      setNameErrorMsg("Name's length must be between 10 and 150 characters");
      errors.push("Name's length must be between 10 and 150 characters");
    } else {
      setNameStyle({
        border: "solid 3px blue",
      });
      setNameErrorMsg("");
    }

    if (
      !formData.password ||
      formData.password.length <= 9 ||
      formData.password.length > 100
    ) {
      setPasswordStyle({
        border: "solid 3px red",
      });
      setPasswordErrorMsg(
        "Password's length must be between 10 and 100 characters"
      );
      errors.push("Password's length must be between 10 and 100 characters");
    } else if (formData.password !== formData.confirmPassword) {
      setPasswordStyle({
        border: "solid 3px red",
      });
      setPasswordErrorMsg("Passwords do not match");
      errors.push("Passwords do not match");
    } else {
      setPasswordStyle({
        border: "solid 3px blue",
      });
      setPasswordErrorMsg("");
    }

    if (!formData.acceptTerms) {
      setAcceptTermsStyle({
        border: "solid 3px red",
      });
      setAcceptTermsErrorMsg("Please accept the terms & conditions");
      errors.push("Please accept the terms & conditions");
    } else {
      setAcceptTermsStyle({
        border: "solid 3px blue",
      });
      setAcceptTermsErrorMsg("");
    }

    if (errors.length === 0) {
      setShowConfirmation(true);
      const generatedConfirmCode = Math.floor(Math.random() * 999999 + 1);
      setConfirmCode(generatedConfirmCode);
      console.log(generatedConfirmCode);
    }
  };

  if (showLogin) {
    return <Login />;
  }

  if (showConfirmation) {
    return (
      <Confirmation
        confirmCode={confirmCode}
        enteredEmail={inputEmailRef.current?.value}
      />
    );
  }

  return (
    <div className={Style.wrapper}>
      <h2>Registration</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div className={Style["input-box"]}>
          <input
            style={emailStyle}
            type="text"
            id="inputEmail"
            placeholder="Enter your email"
            required
            ref={inputEmailRef}
          />
          <p className={Style.errorMsg}>{emailErrorMsg}</p>
        </div>
        <div className={Style["input-box"]}>
          <input
            type="text"
            style={nameStyle}
            id="inputName"
            placeholder="Enter your name"
            required
            ref={inputNameRef}
          />
          <p className={Style.errorMsg}>{nameErrorMsg}</p>
        </div>
        <div className={Style["input-box"]}>
          <input
            type="password"
            style={passwordStyle}
            id="inputPassword"
            placeholder="Create password"
            required
            ref={inputPasswordRef}
          />
          <p className={Style.errorMsg}>{passwordErrorMsg}</p>
        </div>
        <div className={Style["input-box"]}>
          <input
            type="password"
            style={passwordStyle}
            id="inputConfirmPassword"
            placeholder="Confirm password"
            required
            ref={inputConfirmPasswordRef}
          />
          <p className={Style.errorMsg}>{passwordErrorMsg}</p>
        </div>
        <div className={Style.policy}>
          <input
            type="checkbox"
            style={acceptTermsStyle}
            id="acceptTerms"
            required
            ref={acceptTermsRef}
          />
          <label htmlFor="acceptTerms">
            <h3>I accept all terms & conditions</h3>
          </label>
          <p className={Style.errorMsg}>{acceptTermsErrorMsg}</p>
        </div>
        <div className={`${Style["input-box"]} ${Style.button}`}>
          <input type="submit" value="Register Now" />
        </div>
        <div className={Style.text}>
          <h3>
            Already have an account?{" "}
            <a href="#" onClick={goToLogin}>
              Login now
            </a>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Registar;
