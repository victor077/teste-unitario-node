import { expect, test } from "vitest";
import { getDataFutura } from "./get-data-futura";

test("pega uma data para agendar maior do que a data atual", () => {
  const ano = new Date().getFullYear();

  expect(getDataFutura(`2022-04-18}`).getFullYear()).toEqual(2023);
});
