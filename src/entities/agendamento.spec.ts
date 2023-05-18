import { expect, test } from "vitest";
import { Agendamento } from "./agendamento";

test("create an agendamento", () => {
  const dataInicio = new Date();
  const dataFim = new Date();

  dataFim.setDate(dataFim.getDate() + 1);

  const agendamento = new Agendamento({
    cliente: "Joao",
    dataFim,
    dataInicio,
  });

  expect(agendamento).toBeInstanceOf(Agendamento);
  expect(agendamento.cliente).toEqual("Joao");
});

test("nao pode criar um agendamento com a data de inicio antes da hora do termino", () => {
  const dataInicio = new Date();
  const dataFim = new Date();

  dataFim.setDate(dataFim.getDate() - 1);

  expect(() => {
    return new Agendamento({
      cliente: "Joao",
      dataFim,
      dataInicio,
    });
  }).toThrow();
});
