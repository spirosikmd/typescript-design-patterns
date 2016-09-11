import {WeatherDataState} from './weather-data-state.state';
import {Observable} from './observable';

export class WeatherData extends Observable {
  state: WeatherDataState;

  measurementsChanged () {
    this.setChanged();
    this.notifyObservers(this.state);
  }

  setMeasurements (temperature: number, humidity: number, pressure: number) {
    this.state = new WeatherDataState();
    this.state.pressure = pressure;
    this.state.humidity = humidity;
    this.state.temperature = temperature;

    this.measurementsChanged();
  }
}
