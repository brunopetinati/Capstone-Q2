import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ProfilePage from "../pages/Lists/Students/Profile/index";
import store from "../store";

test("renders student's profile page", () => {
  render(
    <Provider store={store}>
      <ProfilePage />
    </Provider>
  );
  const textElement = screen.getByText(/Obter Informações/i);
  expect(textElement).toBeInTheDocument();
});
