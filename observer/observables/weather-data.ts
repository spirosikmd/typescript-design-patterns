import {WeatherDataState} from '../states/weather-data-state';
import {Observable} from '../observable';

export class WeatherData extends Observable {
  state: WeatherDataState;

  measurementsChanged () {
    this.setChanged();
    this.notifyObservers(this.state);
  }

  setMeasurements (temperature: number, humidity: number, pressure: number) {
    this.state = new WeatherDataState();
    this.state.setTemperature(temperature);
    this.state.setHumidity(humidity);
    this.state.setPressure(pressure);

    this.measurementsChanged();
  }
}
