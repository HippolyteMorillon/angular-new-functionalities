export interface Hero {
  id: number;
  name: string;
}

export class HeroForm {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {}
}
