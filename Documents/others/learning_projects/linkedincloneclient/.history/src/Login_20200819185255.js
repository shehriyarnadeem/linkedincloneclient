import React, { useState } from "react";
import logo from "./assets/img/logo1.png";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("sds");
  };

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
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              placeholder="Email or Phone"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
