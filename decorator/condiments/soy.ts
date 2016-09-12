import {CondimentDecorator} from '../condiment-decorator';
import {Beverage, Size} from '../beverage';

export class Soy extends CondimentDecorator {

  constructor (beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription (): string {
    return this.beverage.getDescription() + ', Soy';
  }

  cost (): number {
    let sizeCost = 0.10;
    if (this.getSize() === Size.Grande) {
      sizeCost = 0.15;
    } else if (this.getSize() === Size.Venti) {
      sizeCost = 0.20;
    }
    return 0.15 + this.beverage.cost() + sizeCost;
  }
}
