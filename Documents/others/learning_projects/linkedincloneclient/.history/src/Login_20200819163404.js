import React from "react";
import logo from "./assets/img/logo1.png";
import "./Login.css";
function Login() {
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
          <input placeholder="Email or Phone" />
          <input placeholder="Password" />
        </div>

        {/* Welcome back */}
        {/* dont miss next opportuniy  */}
        {/* EMail password */}
        {/* button sigin */}
        {/* forgot password */}
        {/* Join now */}
      </div>
    </div>
  );
}

export default Login;
