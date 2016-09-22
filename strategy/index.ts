/**
 * Strategy defines a family of algorithms, encapsulates each one
 * and makes them interchangeable. Strategy lets the algorithms
 * vary independently from clients that use it
 */

import {King} from './characters/king';
import {Bow} from './weapons/bow';

console.log('=== STRATEGY ===');

let king = new King();

king.attack();

king.setWeapon(new Bow());

king.attack();
