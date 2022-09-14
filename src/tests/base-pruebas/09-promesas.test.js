import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe("Pruebas de 09-promesas", () => {
  test("getHeroeByIdAsync debe retornar un heroe", (done) => {
    const id = 2;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toStrictEqual({
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      });

      done();
    });
  });

  test("getHeroeByIdAsync debe obtener un error si no existe el heroe", (done) => {
    const id = 102;
    getHeroeByIdAsync(id).catch((e) => {
      expect(e).toBe("No se pudo encontrar el héroe con id 102");
      done();
    });
  });
});
