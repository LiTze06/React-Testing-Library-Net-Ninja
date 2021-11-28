import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "./Todo";

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("add a new todo will appear in list", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "new stuff" } });
    fireEvent.click(buttonElement);

    const divElement = screen.getByText(/new stuff/i);
    expect(divElement).toBeInTheDocument();
  });

  it("add more than 1 todo will appear in list", () => {
    render(<MockTodo />);
    addTask(["example 1", "Example 2", "example 3"]);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(3);
  });

  it("task should not have completed class when initially render", () => {
    render(<MockTodo />);
    addTask(["example 1"]);
    const divElement = screen.getByText(/example 1/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task t have completed class when initially render", () => {
    render(<MockTodo />);
    addTask(["example 1"]);
    const divElement = screen.getByText(/example 1/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
