import { Agendamento } from "../entities/agendamento";

interface CreateAgendamentoRequest {
  cliente: string;
  dataInicio: Date;
  dataFim: Date;
}

type CreateAgendamentoResponse = Agendamento;

export class CreateAgendamento {
  async execute({
    cliente,
    dataInicio,
    dataFim,
  }: CreateAgendamentoRequest): Promise<CreateAgendamentoResponse> {
    const agendamento = new Agendamento({ cliente, dataInicio, dataFim });
    return agendamento;
  }
}
