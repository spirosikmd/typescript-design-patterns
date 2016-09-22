import {Character} from './character';
import {Sword} from '../weapons/sword';

export class King extends Character {

  constructor () {
    super();

    this.setWeapon(new Sword());
  }
}
