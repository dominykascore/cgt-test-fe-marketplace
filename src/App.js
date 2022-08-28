import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { Cart, Home, Products } from "./Pages/index";

import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "a space man",
      price: 1000000,
      image: "/images/a.jpg",
    },
    {
      id: 2,
      name: "a friendly alien",
      price: 1000000,
      image: "/images/b.jpg",
    },
  ]);

  const [currentProduct, setCurrentProduct] = useState(null);

  const [cart, setCart] = useState([]);
  return (
    <Main>
      <Header cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <Home products={products} setCurrentProduct={setCurrentProduct} />
          }
        />
        <Route
          path={`/products/:id`}
          element={
            <Products
              currentProduct={currentProduct}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Main>
  );
}

export default App;