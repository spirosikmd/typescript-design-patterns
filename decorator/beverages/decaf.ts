import {Beverage} from '../beverage';

export class Decaf extends Beverage {

  constructor () {
    super();
    this.description = 'Decaf';
  }

  cost (): number {
    return 1.05;
  }
}
