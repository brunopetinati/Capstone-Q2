import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Login from "../pages/Login/index";
import store from "../store";

test("renders login page", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const textElement = screen.getByText(/Login/i);
  expect(textElement).toBeInTheDocument();
});
