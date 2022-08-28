import React, { useState } from "react";

import c from "./Cart.module.scss";

const Cart = ({ cart, setCart }) => {
  const [checkout, setCheckout] = useState(false);
  const [removeItem, setRemoveItem] = useState(false)

  const clickHandler = (index) => {
    setRemoveItem(!removeItem)
    setTimeout(() => {
      setRemoveItem(false)
    }, 1000);
    setCart((current) =>
      current.filter((item, idx) => {
        return idx !== index;
      })
    );
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach(element => {
       total = element.price + total;
    });

    return total
  };

  return (
    <div className={c.cart}>
      <div className={"container"}>
        <div className={c.cartWrapper}>
          <h1>Are you ready to purchase these?</h1>
          {cart.length ? (
            <>
              <div data-testid='cartContainer' className={c.items}>
                {cart.map((item, index) => (
                  <div  key={index} className={c.item}>
                    <img src={item.image} alt="product" />
                    <div className={c.itemDetails}>
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </div>
                    <button onClick={() => clickHandler(index)}>Remove</button>
                  </div>
                ))}
              </div>
             {removeItem ? (
                <span className={c.removedItem}>You have removed an item!</span>

             ) : ""}
             
              
              <span data-testid="total" className={c.total}>Total: ${getTotal()}</span>
              
              <button data-testid="checkout" className={c.checkout} onClick={() => setCheckout(true)}>
                Checkout
              </button>
              {checkout ? <span className={c.checkoutMessage}>You have checked out, wow!</span> : ""}
            </>
          ) : (
            <h1 data-testid='noItems'>There are no items in the cart currently! :)</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
