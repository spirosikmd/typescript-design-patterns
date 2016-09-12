import {CondimentDecorator} from '../condiment-decorator';
import {Beverage, Size} from '../beverage';

export class Mocha extends CondimentDecorator {

  constructor (protected beverage: Beverage) {
    super();
  }

  getDescription (): string {
    return this.beverage.getDescription() + ', Mocha';
  }

  cost (): number {
    let sizeCost = 0.30;
    if (this.getSize() === Size.Grande) {
      sizeCost = 0.45;
    } else if (this.getSize() === Size.Venti) {
      sizeCost = 0.60;
    }
    return 0.20 + this.beverage.cost() + sizeCost;
  }
}
