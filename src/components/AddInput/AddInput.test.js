import { render, screen, fireEvent } from "@testing-library/react";

import AddInput from "./AddInput";

describe("AddInput", () => {
  it("render input", () => {
    render(<AddInput todos={[]} setTodos={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeVisible();
  });

  it("render add button", () => {
    render(<AddInput todos={[]} setTodos={jest.fn()} />);
    const addButton = screen.getByRole("button");
    expect(addButton).toBeVisible();
  });

  it("able to type in input", async () => {
    render(<AddInput todos={[]} setTodos={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  it("should have empty input when add button is clicked", async () => {
    render(<AddInput todos={[]} setTodos={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
    const addButton = screen.getByRole("button");
    addButton.click();
    expect(inputElement.value).toBe("");
  });
});
