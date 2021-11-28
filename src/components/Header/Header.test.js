import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("render same text passed into title prop", () => {
    render(<Header title="MY Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("render heading", () => {
    render(<Header title="MY Header" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  // Find by - need to use async/await
  // it("render same text passed into title prop", async () => {
  //   render(<Header title="MY Header" />);
  //   const headingElement = await screen.findByText(/my header/i);
  //   expect(headingElement).toBeInTheDocument();
  // });

  // Query by
  it("incorect title not render in the document", () => {
    render(<Header title="MY Header" />);
    const headingElement = screen.queryByText(/my 1/i);
    expect(headingElement).not.toBeInTheDocument();
  });
});
