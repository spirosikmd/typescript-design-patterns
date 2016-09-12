/**
 * Observer ...
 */

console.log('=== OBSERVER ===');

import {CurrentConditionsDisplay} from './observers/current-conditions';
import {HeatIndexDisplay} from './observers/heat-index';
import {WeatherData} from './observables/weather-data';

let weatherData = new WeatherData();
new CurrentConditionsDisplay(weatherData);
new HeatIndexDisplay(weatherData);

// These measurements could come from an API!

let getTemperature = (): number => {
  return Math.floor((Math.random() * 30) + 1);
};

let getHumidity = (): number => {
  return Math.floor((Math.random() * 100) + 1);
};

let getPressure = (): number => {
  return Math.floor((Math.random() * 1000) + 1);
};

weatherData.setMeasurements(getTemperature(), getHumidity(), getPressure());

weatherData.setMeasurements(getTemperature(), getHumidity(), getPressure());
