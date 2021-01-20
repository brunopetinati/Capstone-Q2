import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import User from "./index";
import store from "./../../../store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <User />
    </Provider>
  );
  const linkElement = screen.getByText(/Cadastro/i);
  expect(linkElement).toBeInTheDocument();
});
