import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import SearchById from "./index";
import store from "./../../store";

test("renders SearchById component", () => {
  render(
    <Provider store={store}>
      <SearchById />
    </Provider>
  );
  const textElement = screen.getByText(/Obter Informações/i);
  expect(textElement).toBeInTheDocument();
});
