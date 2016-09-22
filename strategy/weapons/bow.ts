import {Weapon} from './weapon';

export class Bow implements Weapon {

  useWeapon (): void {
    console.log('...with bow');
  }
}
