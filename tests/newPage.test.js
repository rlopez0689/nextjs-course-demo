import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import NewPage from "../pages/NewPage";

describe("new page page", () => {
  it("renders links", () => {
    render(<NewPage />);
    // check if all components are rendered
    expect(screen.getByText("newPage")).toBeInTheDocument();
  });
});
