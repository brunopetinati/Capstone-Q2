import AlertFlag from "../components/AlertFlag/index";
import { render, screen } from "@testing-library/react";

describe("When the alert is shown", () => {
  test("Should render the phrase Cadastrado com sucesso", () => {
    render(<AlertFlag severity="success" text="Cadastrado com sucesso" />);
    const fromScreen = screen.getByText("Cadastrado com sucesso");
    expect(fromScreen.textContent).toBeInTheDocument;
  });
});
