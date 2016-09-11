import {State} from './interfaces';

export class WeatherDataState implements State {
  temperature: number;
  humidity: number;
  pressure: number;

  get (): {temperature: number, humidity: number, pressure: number} {
    return {
      temperature: this.temperature,
      humidity: this.humidity,
      pressure: this.pressure
    };
  }
}
