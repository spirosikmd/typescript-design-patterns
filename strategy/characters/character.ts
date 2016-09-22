import {Weapon} from '../weapons/weapon';

export class Character {
  private weapon: Weapon;

  attack () {
    console.log('King is attacking!');
    this.weapon.useWeapon();
  }

  setWeapon (weapon: Weapon) {
    this.weapon = weapon;
  }
}
