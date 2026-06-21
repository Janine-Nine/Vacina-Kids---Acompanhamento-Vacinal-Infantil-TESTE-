export interface Campaign {

  id?: string;

  title: string;

  description: string;

  targetAudience: string;

  startDate: string;

  endDate: string;

  active: boolean;

  imageUrl?: string;

  createdAt?: Date;

  updatedAt?: Date;
}
