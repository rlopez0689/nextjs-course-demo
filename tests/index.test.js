import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("Index page", () => {
  it("renders links", () => {
    render(<Index />);
    // check if all components are rendered
    expect(screen.getByText("The Home Page")).toBeInTheDocument();
    expect(screen.getByText("NextJS Is a great framework")).toBeInTheDocument();
    expect(screen.getByText("Something else")).toBeInTheDocument();
  });
});
