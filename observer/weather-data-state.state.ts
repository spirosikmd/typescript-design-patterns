import {State} from './interfaces';

export interface WeatherDataValues {
  temperature: number;
  humidity: number;
  pressure: number;
}

export class WeatherDataState implements State {
  private temperature: number;
  private humidity: number;
  private pressure: number;

  setTemperature (value: number): void {
    this.temperature = value;
  }

  setHumidity (value: number): void {
    this.humidity = value;
  }

  setPressure (value: number): void {
    this.pressure = value;
  }

  get (): WeatherDataValues {
    return {
      temperature: this.temperature,
      humidity: this.humidity,
      pressure: this.pressure
    };
  }
}
