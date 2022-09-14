import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("debe retornar un array de la forma [string, number]", () => {
    const [letters, numbers] = retornaArreglo();
    /* const testArr = ["ABC", 123]; */
    /* 
      expect(letters).toBe(testArr[0]);
      expect(numbers).toBe(testArr[1]); 
    */
    /* 
      expect(typeof letters).toBe("string");
      expect(typeof numbers).toBe("number"); 
    */

    expect(letters).toStrictEqual(expect.any(String));
    expect(numbers).toStrictEqual(expect.any(Number));
  });
});
