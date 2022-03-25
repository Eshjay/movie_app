import React from "react";
import logo from '../img/MyTestApp.png';
const Header = () => {
  return (
    <header className="App-header">
      <img className="logo"
       alt='logo'
       src={logo}
       />
    </header>
  );
};

export default Header;