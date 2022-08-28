import React from "react";
import Products from "./Products";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

let getByTestId;
const currentProduct = {
  id: 2,
  name: "Friendly Alien",
  price: 1000000,
  image: "/images/a.jpg",
};
const cart = [];
const setCart = () => {};
let component;

beforeEach(() => {
  component = render(
    <BrowserRouter>
      <Products currentProduct={currentProduct} cart={cart} setCart={setCart} />
    </BrowserRouter>
  );
});

test("renders correct product", () => {
  getByTestId = component.getByTestId;

  const productName = getByTestId("productName");

  expect(productName.textContent).toBe(currentProduct.name);
});

test("adds to cart button fires", () => {
  const button = screen.getByText(/Add to cart/i);

  expect(button).toBeInTheDocument();
  userEvent.click(button);

  expect(screen.getByText(/Item Added!/i)).toBeInTheDocument();
});
