import { expect, test } from "vitest";
import { Agendamento } from "./agendamento";
import { getDataFutura } from "../tests/utils/get-data-futura";

test("criar um agendamento", () => {
  const dataInicio = getDataFutura("2023-05-20");
  const dataFim = getDataFutura("2023-05-23");

  const agendamento = new Agendamento({
    cliente: "Joao",
    dataFim,
    dataInicio,
  });

  expect(agendamento).toBeInstanceOf(Agendamento);
  expect(agendamento.cliente).toEqual("Joao");
});

test("nao pode fazer um agendamento com a data final sendo antes da data de inicio", () => {
  const dataInicio = getDataFutura("2023-05-19");
  const dataFim = getDataFutura("2023-05-18");

  expect(() => {
    return new Agendamento({
      cliente: "Joao",
      dataFim,
      dataInicio,
    });
  }).toThrow();
});

test("não pode agendar em uma data que já passou", () => {
  const dataInicio = new Date();
  const dataFim = new Date();

  dataFim.setDate(dataInicio.getDate() - 1);
  dataFim.setDate(dataFim.getDate() + 3);

  expect(() => {
    return new Agendamento({
      cliente: "Joao",
      dataFim,
      dataInicio,
    });
  }).toThrow();
});
