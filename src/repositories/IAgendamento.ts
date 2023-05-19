import { Agendamento } from "../entities/agendamento";

export interface IAgendamento {
  create(agendamento: Agendamento): Promise<void>;
  findAgendamento(dataInicio: Date, dataFim: Date): Promise<Agendamento | null>;
}
