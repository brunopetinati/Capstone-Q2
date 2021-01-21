import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Login from "./index";
import store from "./../../store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
