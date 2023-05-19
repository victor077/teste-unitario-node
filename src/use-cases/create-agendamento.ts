import { Agendamento } from "../entities/agendamento";
import { IAgendamento } from "../repositories/IAgendamento";

interface CreateAgendamentoRequest {
  cliente: string;
  dataInicio: Date;
  dataFim: Date;
}

type CreateAgendamentoResponse = Agendamento;

export class CreateAgendamento {
  constructor(private agendamentoRepository: IAgendamento) {}
  async execute({
    cliente,
    dataInicio,
    dataFim,
  }: CreateAgendamentoRequest): Promise<CreateAgendamentoResponse> {
    const dataAgendamentoFeito =
      await this.agendamentoRepository.findAgendamento(dataInicio, dataFim);

    if (dataAgendamentoFeito) {
      throw new Error("data de agendamento já cadastrada");
    }
    const agendamento = new Agendamento({ cliente, dataInicio, dataFim });

    await this.agendamentoRepository.create(agendamento);
    return agendamento;
  }
}
