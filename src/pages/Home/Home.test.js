import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "./index";
import store from "./../../store";

test("renders Home page", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const linkElement = screen.getByText(/Somos uma plataforma/i);
  expect(linkElement).toBeInTheDocument();
});
