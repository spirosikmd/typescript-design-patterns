import {Beverage, Size} from './beverage';

export abstract class CondimentDecorator extends Beverage {
  protected beverage: Beverage;

  abstract getDescription (): string;

  getSize (): Size {
    return this.beverage.getSize();
  }
}
