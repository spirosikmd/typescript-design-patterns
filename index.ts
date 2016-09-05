/**
 * Strategy Pattern
 */

interface Power {
  usePower: () => void;
}

class WaterPower implements Power {
  usePower () {
    console.log('Water power attack');
  }
}

class EarthPower implements Power {
  usePower () {
    console.log('Earth power attack');
  }
}

class Monster {
  private _power: Power;

  set power (value: Power) {
    this._power = value;
  }

  attack () {
    this._power.usePower();
  }
}

class Bloomy extends Monster {

  constructor () {
    super();
    this.power = new WaterPower();
  }
}

let bloomy = new Bloomy();
bloomy.attack();

bloomy.power = new EarthPower();
bloomy.attack();
