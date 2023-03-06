// __tests__/index.test.jsx

import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Home from "../src/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByText(/Get started/i);

    expect(heading).toBeInTheDocument();
  });
});
