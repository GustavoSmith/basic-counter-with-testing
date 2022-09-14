import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../CounterApp";

describe("Pruebas de <CounterApp/>", () => {
  const initialValue = 20;

  test("Debe matchear con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor inicial de 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test("Debe incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);

    const increaseBtn = screen.getByRole("button", { name: "increase" });

    fireEvent.click(increaseBtn);

    expect(screen.getByText(`${initialValue + 1}`)).toBeTruthy();
  });

  test("Debe decrementar con el botón -1", () => {
    render(<CounterApp value={initialValue} />);

    const decreaseBtn = screen.getByRole("button", { name: "decrease" });

    fireEvent.click(decreaseBtn);

    expect(screen.getByText(`${initialValue - 1}`)).toBeTruthy();
  });

  test("El botón de reset debe resetear el state", () => {
    render(<CounterApp value={initialValue} />);

    const decreaseBtn = screen.getByRole("button", { name: "decrease" });
    const resetBtn = screen.getByRole("button", { name: "reset" });

    fireEvent.click(decreaseBtn);
    fireEvent.click(resetBtn);

    expect(screen.getByText(`${initialValue}`)).toBeTruthy();
  });
});
