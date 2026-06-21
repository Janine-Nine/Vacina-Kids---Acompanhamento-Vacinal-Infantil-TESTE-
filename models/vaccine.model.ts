export interface Vaccine {

  id?: string;

  name: string;

  description: string;

  diseasePrevented: string;

  dose: string;

  recommendedAge: string;

  mandatory: boolean;

  campaignAvailable?: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}
