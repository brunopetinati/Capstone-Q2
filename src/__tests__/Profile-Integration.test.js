import axios from "axios";
import { Provider } from "react-redux";
import ProfilePage from "../pages/Lists/Students/Profile/index";
import store from "../store";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
const mockedAxios = axios;

describe("When user enters a valid ID", () => {
  test("Should return student's name, group and postscript", async () => {
    const student = [
      {
        students: {
          id: 1,
          name: "Joana",
          group: "3B",
          postscript: "comedian wannabe",
        },
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { student } });

    render(
      <Provider store={store}>
        <ProfilePage />
      </Provider>
    );
    userEvent.type(screen.getByTestId("test"), "1");
    userEvent.click(screen.getByTestId("testbutton"));
    const returnStudent = await screen.findAllByText("Joana");
    expect(returnStudent).toHaveLength(1);
  });
});
