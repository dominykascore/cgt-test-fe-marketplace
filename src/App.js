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
      <Header />
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
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Main>
  );
}

export default App;

// <main>
//   <header>
//     90s shop
//     <nav>
//       <ul style={{listStyleType: 'none', display: 'flex'}}>
//         <li><a href="/">Home</a></li>
//         |
//         <li><a href="/cart">Cart ({cartItems().length})</a></li>
//       </ul>
//     </nav>
//     <hr/>
//   </header>

//   {
//     window.location.pathname === '/' && (
//       <div>
//         Welcome to our shop!

//         <p>
//           You are probably interested in <a href="/products/a">A</a>.
//         </p>

//         <p>
//           Check out the newest product <a href="/products/b">B</a>!
//         </p>
//       </div>
//     )
//   }
//   {
//     window.location.pathname === '/products/b' && (
//       <div>
//         <h1>Product B</h1>
//         <p>Price: 30 USD</p>

//         <button onClick={() => console.warn('Not implemented!')}>
//           Add to cart
//         </button>

//         <div><img src={pictureB} width={640}/></div>
//       </div>
//     )
//   }
//   {
//     window.location.pathname === '/products/a' && (
//       <div>
//         <h1>Product A</h1>
//         <p>Price: 10 USD</p>

//         <button onClick={() => console.warn('Not implemented!')}>
//           Add to cart
//         </button>

//         <div><img src={pictureA} width={640}/></div>
//       </div>
//     )
//   }
//   {
//     window.location.pathname === '/cart' && (
//       <div>
//         Are you ready to purchase these?

//         <ul>
//           {cartItems().map((cartItem) => <li key={cartItem}>{cartItem}</li>)}
//         </ul>
//       </div>
//     )
//   }
// </main>
