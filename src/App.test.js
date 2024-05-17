import { render, screen, fireEvent } from '@testing-library/react';
import AddTask from './components/AddTask.tsx';

test("should render correctly", () => {
  render(<AddTask />);
  // <input />
  const inputElement = screen.getByPlaceholderText('Add Task');
  // <button />
  const buttonElement = screen.getByRole("button", { type: "submit" });

  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveValue("");
  expect(buttonElement).toBeInTheDocument();
});