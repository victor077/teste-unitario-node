import { expect, test } from "vitest";
import { getDataFutura } from "./get-data-futura";

test("pega uma data para agendar maior do que a data atual", () => {
  const ano = getDataFutura(`2022-04-18`).getFullYear()
    console.log(ano);
    
  expect(ano).toEqual(2023);
});
