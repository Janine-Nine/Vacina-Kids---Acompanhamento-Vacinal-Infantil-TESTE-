export interface Child {
  id?: string;

  name: string;

  birthDate: string;

  gender: 'Masculino' | 'Feminino' | 'Outro';

  bloodType?: string;

  allergies?: string[];

  responsibleName: string;

  responsiblePhone: string;

  responsibleEmail?: string;

  createdAt?: Date;

  updatedAt?: Date;
}
