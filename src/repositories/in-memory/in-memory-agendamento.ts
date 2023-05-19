import { areIntervalsOverlapping } from "date-fns";
import { Agendamento } from "../../entities/agendamento";
import { IAgendamento } from "../IAgendamento";

export class InMemoryAgendamentoRepository implements IAgendamento {
  public agendamentos: Agendamento[] = [];

  async create(agendamento: Agendamento): Promise<void> {
    this.agendamentos.push(agendamento);
  }

  async findAgendamento(
    dataInicio: Date,
    dataFim: Date
  ): Promise<Agendamento | null> {
    const dataA = this.agendamentos.find((agendamento) => {
      return areIntervalsOverlapping(
        {
          start: dataInicio,
          end: dataFim,
        },
        {
          start: agendamento.dataInicio,
          end: agendamento.dataFim,
        },
        { inclusive: true }
      );
    });

    if (!dataA) {
      return null;
    }

    return dataA;
  }
}
