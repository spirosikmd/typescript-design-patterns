import {Power} from './interfaces';

export class WaterPower implements Power {
  usePower () {
    console.log('Water power attack!');
  }
}

export class EarthPower implements Power {
  usePower () {
    console.log('Earth power attack!');
  }
}

export class Monster {
  power: Power;

  attack () {
    this.power.usePower();
  }
}

export class Bloomy extends Monster {

  constructor () {
    super();
    this.power = new WaterPower();
  }
}
