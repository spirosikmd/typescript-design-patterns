import {Weapon} from '../weapons/weapon';

export abstract class Character {
  private weapon: Weapon;

  attack () {
    this.weapon.useWeapon();
  }

  setWeapon (weapon: Weapon) {
    this.weapon = weapon;
  }
}
