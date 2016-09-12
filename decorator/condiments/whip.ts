import {CondimentDecorator} from '../condiment-decorator';
import {Beverage, Size} from '../beverage';

export class Whip extends CondimentDecorator {

  constructor (protected beverage: Beverage) {
    super();
  }

  getDescription (): string {
    return this.beverage.getDescription() + ', Whip';
  }

  cost (): number {
    let sizeCost = 0.60;
    if (this.getSize() === Size.Grande) {
      sizeCost = 0.95;
    } else if (this.getSize() === Size.Venti) {
      sizeCost = 1.15;
    }
    return 0.10 + this.beverage.cost() + sizeCost;
  }
}
