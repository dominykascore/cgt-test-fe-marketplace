import React from "react";
import { Link } from "react-router-dom";

import c from "./Home.module.scss";

const Home = ({products, setCurrentProduct}) => {


  const clickHandler = (product) => {
    setCurrentProduct(product)
  }

  return (
    <div className={c.home}>
      <div className={"container"}>
        <div className={c.homeWrapper}>
          <h1>Welcome to our shop!</h1>
          <div data-testid="productsContainer" className={c.productsContainer}>
            {products.map((product, index) => (
              <div key={product.id} className={c.product}>
                <img src={product.image} alt="product" />
                <span>
                  You are probably interested in {product.name}.
                </span>
                <span>${product.price}</span>
                <Link to={`/products/${product.id}`}>
                  <button onClick={() => clickHandler(product)}>Get some</button>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
