import { describe, expect, it } from "vitest";
import { CreateAgendamento } from "./create-agendamento";
import { Agendamento } from "../entities/agendamento";

describe("criar agendamento", () => {
  it("gostaria de criar um agendamento", () => {
    const createAgendamento = new CreateAgendamento();

    const dataInicio = new Date();
    const dataFim = new Date();

    dataFim.setDate(dataFim.getDate() + 1);

    expect(
      createAgendamento.execute({
        cliente: "Joao",
        dataInicio,
        dataFim,
      })
    ).resolves.toBeInstanceOf(Agendamento);
  });
});
