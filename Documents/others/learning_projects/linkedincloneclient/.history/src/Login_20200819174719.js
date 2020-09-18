import React, { useState } from "react";
import logo from "./assets/img/logo1.png";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="" />
        <h1> Welcome back</h1>
        <p>
          Don't miss your next opportunity, Sign in to stay updated on your
          proffessional world
        </p>

        <div className="login__container_input">
          <input
            placeholder="Email or Phone"
            type="text"
            onChange={(e) => setEmail()}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
