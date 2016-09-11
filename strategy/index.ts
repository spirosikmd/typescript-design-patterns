import {Bloomy, EarthPower} from './strategy';

console.log('=== STRATEGY ===');

let bloomy = new Bloomy();
bloomy.attack();

bloomy.power = new EarthPower();
bloomy.attack();
