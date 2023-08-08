import React, { useState } from "react";
import Registar from "../register/register";

import style from "../login.module.scss";
interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  const [showRegistar, setShowRegistar] = useState<boolean>(false);

  const goToRegister = () => {
    setShowRegistar(true);
  };

  if (showRegistar) {
    return <Registar />;
  }

  return (
    <div className={style.wrapper}>
      <h2>Login</h2>
      <form action="#">
        <div className={style["input-box"]}>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className={style["input-box"]}>
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className={style["input-box"]}>
          <input type="password" placeholder="password" required />
        </div>

        <div className={`${style["input-box"]} ${style.button}`}>
          <input type="submit" value="Login" />
        </div>
        <div className={style.text}>
          <h3>
            don't have an account?{" "}
            <a href="#" onClick={goToRegister}>
              Registar now
            </a>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Login;
