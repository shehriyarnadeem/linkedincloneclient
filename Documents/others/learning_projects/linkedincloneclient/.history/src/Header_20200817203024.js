import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
        <input placeholder="Search" />
      </div>

      <div className="header__menu">
        <HomeIcon />
        <HomeIcon />
        <HomeIcon />
        <HomeIcon />
        <HomeIcon />
        <HomeIcon />
        {/* Home icon */}
        {/* network icon */}
        {/* Jobs */}
        {/* Messaging */}
        {/* Notifications */}
      </div>

      <div className="header__right">
        <HomeIcon />
        <HomeIcon />

        {/* Home icon */}
        {/* network icon */}
        {/* Jobs */}
        {/* Messaging */}
        {/* Notifications */}
      </div>
    </div>
  );
}

export default Header;
