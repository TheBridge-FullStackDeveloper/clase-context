import React from "react";
import "./Header.scss"

const Header = () => {
  return (
    <div className="header-container">
      <span>Logo</span>
      <div>
        <span>Home</span>
        <span>About</span>
      </div>
      {/* <div className="message">
        hola
      </div>
      <div className="success">sucesss</div> */}
    </div>
  );
};

export default Header;
