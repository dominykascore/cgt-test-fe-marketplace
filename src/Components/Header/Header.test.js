import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";

let getByTestId;
let emptyCart = [];
let cart = [
    {
        id: 1,
        name: "test",
        price: 1000000,
        image: "test",
      },
    
      {
        id: 2,
        name: "test",
        price: 1000000,
        image: "test",
      },
]

let component;

test("cart is empty initially, no count visible", () => {
    component = render(
        <BrowserRouter>
        <Header cart={emptyCart} />
      </BrowserRouter>
    )

    getByTestId = component.getByTestId;
    const count = getByTestId("cartCount");

    expect(count.className).toBe("");
})

test("cart is filled in, count is visible", () => {
    component = render(
        <BrowserRouter>
          <Header cart={cart} />
        </BrowserRouter>
      );

      getByTestId = component.getByTestId;
      const count = getByTestId('cartCount');
      
      expect(count.className).toBe('exists')
      expect(count.textContent).toBe("2")
});