/**
 * Decorator attaches additional responsibilities to an object
 * dynamically. Decorators provide a flexible alternative to sub-classing
 * for extending functionality.
 *
 * Advantages:
 *  - Adheres to the Open-Closed principle, introducing new decorators does not require changing existing code.
 *  - Due to composition, objects cen be decorated as many times as we like to change behaviour at runtime.
 * Disadvantages:
 *  - Can result in many small classes that can overwhelm the design and developers working with an API.
 *  - It can cause typing issues, as decorators can be inserted transparently, without the client knowing
 *    it's dealing with a decorator.
 *  - Adds complexity as to when instantiating an object you have to instantiate decorators and wrap it with them.
 */

console.log('=== DECORATOR ===');

import {Espresso} from './beverages/espresso';
import {DarkRoast} from './beverages/dark-roast';
import {Mocha} from './condiments/mocha';
import {Whip} from './condiments/whip';
import {HouseBlend} from './beverages/house-blend';
import {Soy} from './condiments/soy';
import {Size} from './beverage';

let espresso = new Espresso();
console.log(espresso.getDescription() + ' $' + espresso.cost());

let darkRoast = new DarkRoast();
darkRoast.setSize(Size.Grande);
darkRoast = new Mocha(darkRoast);
darkRoast = new Mocha(darkRoast);
darkRoast = new Whip(darkRoast);
darkRoast = new Whip(darkRoast);
console.log(darkRoast.getDescription() + ' $' + darkRoast.cost());

let houseBlend = new HouseBlend();
houseBlend.setSize(Size.Venti);
houseBlend = new Soy(houseBlend);
houseBlend = new Mocha(houseBlend);
houseBlend = new Whip(houseBlend);
console.log(houseBlend.getDescription() + ' $' + houseBlend.cost());
