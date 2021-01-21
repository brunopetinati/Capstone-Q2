import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import StudentsPage from "../pages/Lists/Students/index";
import store from "../store";

test("renders students page", () => {
  render(
    <Provider store={store}>
      <StudentsPage />
    </Provider>
  );
  const textElement = screen.getByText(/Cadastrar/i);
  expect(textElement).toBeInTheDocument();
});
