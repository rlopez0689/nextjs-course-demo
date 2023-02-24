import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NewPage from "../pages/NewPage";

describe("new page test", () => {
  it("renders element propertly", () => {
    render(<NewPage />);
    // check if all components are rendered
    expect(screen.getByText("newPage")).toBeInTheDocument();
  });
});
