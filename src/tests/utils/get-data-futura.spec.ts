import { expect, test } from "vitest";
import { getDataFutura } from "./get-data-futura";

test("pega uma data para agendar maior do que a data atual", () => {
  const anoAtual = new Date().getFullYear();
  const anoFuturo = getDataFutura(`${anoAtual}-04-18`).getFullYear();

  expect(anoFuturo).toEqual(2024);
});
