
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders the Little Lemon reservation form", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /reserve a table/i })
  ).toBeInTheDocument();

  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
});

test("shows validation message when date and time are missing", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: /make your reservation/i,
  });

  fireEvent.click(button);

  expect(
    screen.getByText(/please select a date and time/i)
  ).toBeInTheDocument();
});

test("allows a valid table reservation", () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2026-10-10" },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "19:00" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "4" },
  });

  fireEvent.click(
    screen.getByRole("button", { name: /make your reservation/i })
  );

expect(
  screen.getByText(
    "Table reserved for 4 guest(s) on 2026-10-10 at 19:00."
  )
).toBeInTheDocument();
});

