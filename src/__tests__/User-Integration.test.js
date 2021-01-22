import axios from "axios";
import { Provider } from "react-redux";
import User from "../pages/Register/User/index";
import store from "../store";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
const mockedAxios = axios;

describe("When the user sign up ", () => {
  test("Should return the word Login.", async () => {
    const student = [
      {
        register: {
          name: "Joana",
          email: "jo@gmail.com",
          password: 12345,
          passwordConfirm: 12345,
        },
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { student } });

    render(
      <Provider store={store}>
        <User />
      </Provider>
    );
    userEvent.type(screen.queryByTitle("textbox"), "jo@gmail.com");
    userEvent.click(screen.getByRole("button"));
    const returnProfessor = screen.queryByText("Login");
    expect("Login").toMatch("Login");
  });
});
