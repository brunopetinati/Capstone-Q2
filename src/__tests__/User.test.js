import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import User from "../pages/Register/User/index";
import store from "../store";

test("renders registering page", () => {
  render(
    <Provider store={store}>
      <User />
    </Provider>
  );
  const textElement = screen.getByText(/Cadastro/i);
  expect(textElement).toBeInTheDocument();
});
