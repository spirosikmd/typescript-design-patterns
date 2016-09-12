/**
 * Strategy ...
 */

console.log('=== STRATEGY ===');

import {Bloomy, EarthPower} from './strategy';

let bloomy = new Bloomy();
bloomy.attack();

bloomy.power = new EarthPower();
bloomy.attack();
