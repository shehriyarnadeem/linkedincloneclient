import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
      </div>
      <div className="header__searchbar">
        <input />
      </div>
      <div className="header__right">{/* Menu bar */}</div>
    </div>
  );
}

export default Header;
