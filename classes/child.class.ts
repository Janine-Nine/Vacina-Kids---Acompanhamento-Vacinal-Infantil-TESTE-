export class Child {

  constructor(
    public id: string,
    public name: string,
    public birthDate: string,
    public gender: string,
    public responsibleName: string,
    public responsiblePhone: string
  ) {}

  getAge(): number {

    const birth = new Date(this.birthDate);

    const today = new Date();

    let age =
      today.getFullYear() -
      birth.getFullYear();

    const month =
      today.getMonth() -
      birth.getMonth();

    if (
      month < 0 ||
      (month === 0 &&
      today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  }

}
