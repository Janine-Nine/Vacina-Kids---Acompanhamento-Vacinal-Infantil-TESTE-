export interface VaccinationRecord {

  id?: string;

  childId: string;

  vaccineId: string;

  appliedDate?: string;

  expectedDate: string;

  dose: string;

  status:
    | 'Aplicada'
    | 'Pendente'
    | 'Atrasada';

  notes?: string;

  createdAt?: Date;

  updatedAt?: Date;
}
