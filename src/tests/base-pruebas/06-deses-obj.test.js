import { usContext } from "../../base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("usContext debe retornar un objeto", () => {
    const testContext = {
      nombreClave: "Spider-Cop",
      anios: 25,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const props = {
      clave: "Spider-Cop",
      edad: 25,
    };

    const context = usContext(props);

    expect(context).toStrictEqual(testContext);
  });
});
