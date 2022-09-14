// AAA - Arrange, Act, Assert / Organizar, Actuar, Afirmar

describe("Pruebas en <Demo>", () => {
  test("Esta prueba no debe de fallar", () => {
    // 1. Inicialización
    const message1 = "Hola Mundo";
    // 2. Estímulo
    const message2 = message1.trim();
    // 3. Observar el comportamiento, ver si es el esperado

    expect(message2).toBe(message1);
  });
});
