import React from "react";
import { Link } from "react-router-dom";

import c from "./Header.module.scss";

function Header({cart}) {
  return (
    <header className={c.header}>
      <div className={"container"}>
        <nav>
          <ul style={{ listStyleType: "none", display: "flex" }}>
            <li>
              <Link to="/">
                <img src="/images/90s.png" alt="logo" />
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className={c.cart}>
              <Link to="/cart">
                <img
                  src="/images/shopping-cart.svg"
                  alt="shoppingCart"
                  width="50"
                />
                <span data-testid="cartCount" className={cart.length ? c.exists : ''}>{cart.length ? cart.length : ''}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
