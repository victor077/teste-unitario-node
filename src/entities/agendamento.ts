export interface AgendamentoProps {
  cliente: string;
  dataInicio: Date;
  dataFim: Date;
}

export class Agendamento {
  private props: AgendamentoProps;

  get cliente() {
    return this.props.cliente;
  }

  get dataInicio() {
    return this.props.dataInicio;
  }
  get dataFim() {
    return this.props.dataFim;
  }

  constructor(props: AgendamentoProps) {
    const { dataFim, dataInicio } = props;

    if (dataInicio >= dataFim) {
      throw new Error("Data invalida");
    }

    if (dataInicio <= new Date()) {
      throw new Error("Data não disponivel");
    }

    this.props = props;
  }
}
