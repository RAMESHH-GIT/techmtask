import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders h1 tag with the correct text', () => {
  render(<App />);
  const h1Element = screen.getByText('Welcome To Task');
  expect(h1Element).toBeInTheDocument();
});
