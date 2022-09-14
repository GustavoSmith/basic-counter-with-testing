import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Macho2611",
    };
    const user = getUser();

    expect(user).toStrictEqual(testUser);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "Gustavo";
    const testUser = {
      uid: "ABC567",
      username: nombre,
    };
    const user = getUsuarioActivo(nombre);
    expect(user).toStrictEqual(testUser);
  });
});
