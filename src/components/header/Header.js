import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <section className="container">
        <div className="logo">
          <img src="https://static.wikia.nocookie.net/logopedia/images/2/20/Annapurna.jpg" />
        </div>

        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;
