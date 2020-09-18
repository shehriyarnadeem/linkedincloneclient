import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
        <input placeholder="Search" />
      </div>

      <div className="header__right">{/* Home icon */}</div>
    </div>
  );
}

export default Header;
