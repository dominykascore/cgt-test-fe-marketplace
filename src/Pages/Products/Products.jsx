import React, { useState } from "react";

import c from "./Products.module.scss";

const Products = ({ currentProduct, cart, setCart }) => {
 
  const [addItem, setAddItem] = useState(false)


  const clickHandler = () => {
    setAddItem(!addItem)
    setTimeout(() => {
      setAddItem(false)
    }, 1000);
    setCart([...cart, currentProduct]);
  };

  return (
    <div className={c.products}>
      <div className={"container"}>
        <div className={c.productsWrapper}>
          <h1 data-testid='productName' >{currentProduct.name}</h1>
          <span className={c.price}>${currentProduct.price}</span>

          <div>
            <img src={currentProduct.image} width={640} alt='product' />
          </div>
          <button onClick={() => clickHandler()}>Add to cart</button>
          {addItem ? (
            <span className={c.addMessage}>Item added!</span>
          ) : ""}
        </div>
      </div>
    </div>
  );
};

export default Products;
