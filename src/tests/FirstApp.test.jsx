import { render, screen } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe("Pruebas en <FirstApp/>", () => {
  const title = "Soy el test";
  const subtitle = "Soy el subtitulo";

  test("Debe matchear con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el mensaje 'Soy el test'", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Debe mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle)).toHaveLength(2);
  });
});
