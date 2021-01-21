import axios from "axios";
import { Provider } from "react-redux";
import Login from "../pages/Login/index";
import store from "../store";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
const mockedAxios = axios;

describe("When the user sign in ", () => {
  test("Should return the word professores in the home page.", async () => {
    const student = [
      {
        user: {
          email: "oi@gmail.com",
          password: 12345,
        },
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { student } });

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    userEvent.type(screen.getByRole("textbox"), "joana@gmail.com");
    userEvent.click(screen.getByRole("button"));
    const returnProfessor = await screen.findByText("professores");
    expect(returnProfessor).toBeInTheDocument();
  });
});
