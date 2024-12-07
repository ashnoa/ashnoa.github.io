import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

test("renders learn react link", () => {
  render(<NotFound />);
  const notFoundElement = screen.getByText(/404/i);
  expect(notFoundElement).toBeInTheDocument();
});
