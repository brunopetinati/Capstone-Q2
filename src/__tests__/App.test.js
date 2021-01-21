import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import Home from "../pages/Home/index";
import Header from "../components/Header/index";

test("renders correct text, including platform", () => {
  render(
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
  const linkElement = screen.getByText(/plataforma/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders correct text, including Cadastro", () => {
  render(
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
  const linkElement = screen.getAllByText(/Cadastro/i);
  expect(linkElement[1]).toBeInTheDocument();
});
