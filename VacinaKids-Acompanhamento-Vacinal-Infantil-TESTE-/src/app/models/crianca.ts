export interface Crianca {
  id?: string;

  nome: string;

  dataNascimento: string;

  idade: number;

  responsavel?: string;

  foto?: string;

  statusVacinal: 'EM_DIA' | 'PENDENTE' | 'ATRASADA';
}
