import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  const id = 2;
  const dataHeroe = {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  };

  test("getHeroeById debe retornar un héroe basado en una ID", () =>
    expect(getHeroeById(id)).toStrictEqual(dataHeroe));

  test("getHeroeById debe retornar undefined si no existe heroe", () =>
    expect(getHeroeById(100)).toBeUndefined());

  test("getHeroesByOwner('DC') debe traer a los heroes de DC", () => {
    const heroes = getHeroesByOwner("DC");
    expect(heroes).toHaveLength(3);
    for (const hero of heroes) {
      expect(hero.owner).toBe("DC");
    }
  });
  test("getHeroesByOwner('Marvel') debe traer a los heroes de Marvel", () => {
    const heroes = getHeroesByOwner("Marvel");
    expect(heroes).toHaveLength(2);
    for (const hero of heroes) {
      expect(hero.owner).toBe("Marvel");
    }
  });
});
