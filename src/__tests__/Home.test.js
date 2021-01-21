import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "../pages/Home/index";
import store from "../store";

test("renders Home page", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const textElement = screen.getByText(/Somos uma plataforma/i);
  expect(textElement).toBeInTheDocument();
});
