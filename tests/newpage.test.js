import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import SpecialTestPage from "../pages/SpecialTestPage";

describe("new page test", () => {
  it("renders element propertly", () => {
    render(<SpecialTestPage />);
    // check if all components are rendered
    expect(screen.getByText("newPage")).toBeInTheDocument();
  });
});
