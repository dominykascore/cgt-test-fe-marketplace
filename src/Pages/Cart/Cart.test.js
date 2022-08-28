import React from "react";
import Cart from "./Cart";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

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
];

const setCart = () => {};

let component;

test("there are no items message appears if cart is empty", () => {
  component = render(
    <BrowserRouter>
      <Cart cart={emptyCart} setCart={setCart} />
    </BrowserRouter>
  );

  getByTestId = component.getByTestId;
  const noItems = getByTestId("noItems");

  expect(noItems.textContent).toBe(
    "There are no items in the cart currently! :)"
  );
});

test("cart items exist and they are displayed correctly", () => {
  component = render(
    <BrowserRouter>
      <Cart cart={cart} setCart={setCart} />
    </BrowserRouter>
  );

  getByTestId = component.getByTestId;
  const cartContainer = getByTestId("cartContainer");

  expect(cartContainer.childElementCount).toBe(2);
});

test("delete button removes an item", () => {
  component = render(
    <BrowserRouter>
      <Cart cart={cart} setCart={setCart} />
    </BrowserRouter>
  );

  const removeButtons = screen.getAllByText("Remove");

  userEvent.click(removeButtons[0]);

  expect(screen.getByText(/You have removed an item!/i)).toBeInTheDocument();
});

test("cart total is calculated correctly", () => {
  component = render(
    <BrowserRouter>
      <Cart cart={cart} setCart={setCart} />
    </BrowserRouter>
  );

  getByTestId = component.getByTestId;
  const total = getByTestId("total");

  expect(total.textContent).toBe("Total: $2000000");
});

test("checkout button works", () => {
  component = render(
    <BrowserRouter>
      <Cart cart={cart} setCart={setCart} />
    </BrowserRouter>
  );

  getByTestId = component.getByTestId;
  const checkout = getByTestId("checkout");

  userEvent.click(checkout);

  expect(screen.getByText(/You have checked out, wow!/i)).toBeInTheDocument();
});
