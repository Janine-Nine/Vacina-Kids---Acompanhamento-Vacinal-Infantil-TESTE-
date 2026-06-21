export interface Vacina {

  id?: string;

  criancaId: string;

  nome: string;

  descricao?: string;

  dataPrevista: string;

  dataAplicacao?: string;

  status: 'APLICADA' | 'PENDENTE' | 'ATRASADA';

}
