export enum Size {
  Tall, Grande, Venti
}

export abstract class Beverage {
  description = 'Unknown Beverage';
  size = Size.Tall;

  getDescription (): string {
    return this.description;
  }

  getSize (): Size {
    return this.size;
  }

  setSize (newSize: Size) {
    this.size = newSize;
  }

  abstract cost (): number;
}
