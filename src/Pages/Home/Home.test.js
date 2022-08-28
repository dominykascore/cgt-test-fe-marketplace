import React from "react";
import Home from "./Home";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";

test("renders products correctly", () => {
  const products = [
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

    {
      id: 3,
      name: "test",
      price: 1000000,
      image: "test",
    },
  ];

  let getByTestId;

  const component = render(
    <BrowserRouter>
      <Home products={products} />
    </BrowserRouter>
  );
  getByTestId = component.getByTestId;

  const productsEl = getByTestId("productsContainer");

  expect(productsEl.childElementCount).toBe(3);
});
