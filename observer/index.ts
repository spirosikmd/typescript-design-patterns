import {CurrentConditionsDisplay} from './current-conditions.display';
import {HeatIndexDisplay} from './heat-index.display';
import {WeatherData} from './weather-data.subject';

console.log('=== OBSERVER ===');

let weatherData = new WeatherData();
new CurrentConditionsDisplay(weatherData);
new HeatIndexDisplay(weatherData);

setInterval(() => {
  weatherData.setMeasurements(getTemperature(), getHumidity(), getPressure());
}, 3000);

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
