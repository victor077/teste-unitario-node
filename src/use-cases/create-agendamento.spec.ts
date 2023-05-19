import { describe, expect, it } from "vitest";
import { CreateAgendamento } from "./create-agendamento";
import { Agendamento } from "../entities/agendamento";
import { InMemoryAgendamentoRepository } from "../repositories/in-memory/in-memory-agendamento";

describe("criar agendamento", () => {
  it("gostaria de criar um agendamento", () => {
    const agendamentoRepository = new InMemoryAgendamentoRepository();
    const createAgendamento = new CreateAgendamento(agendamentoRepository);

    const dataInicio = new Date();
    const dataFim = new Date();

    dataInicio.setDate(dataInicio.getDate() + 1);
    dataFim.setDate(dataFim.getDate() + 2);

    expect(
      createAgendamento.execute({
        cliente: "Joao",
        dataInicio,
        dataFim,
      })
    ).resolves.toBeInstanceOf(Agendamento);
  });
});
