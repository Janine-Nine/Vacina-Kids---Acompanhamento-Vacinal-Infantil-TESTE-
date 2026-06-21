export class Vaccine {

  constructor(
    public id: string,
    public name: string,
    public description: string,
    public diseasePrevented: string,
    public dose: string,
    public recommendedAge: string,
    public mandatory: boolean
  ) {}

}
