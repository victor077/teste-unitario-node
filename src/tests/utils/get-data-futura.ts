// recebe "2022-08-10" e retorna "2023-08-10"

import { parseISO, setYear } from "date-fns";

export function getDataFutura(data: string): Date {
  return setYear(parseISO(data), new Date(data).getFullYear() + 1);
}
