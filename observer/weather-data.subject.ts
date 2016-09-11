import {Subject, Observer} from './interfaces';
import {WeatherDataState} from './weather-data-state.state';

export class WeatherData implements Subject {
  private observers: Observer[];
  private state: WeatherDataState;

  constructor () {
    this.observers = [];
  }

  registerObserver (observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver (observer: Observer): void {
    for (let index = 0; index < this.observers.length; index++) {
      if (observer === this.observers[index]) {
        this.observers.splice(index, 1);
      }
    }
  }

  notifyObservers (): void {
    this.observers.forEach((observer: Observer) => {
      observer.update(this.state);
    })
  }

  measurementsChanged () {
    this.notifyObservers();
  }

  setMeasurements (temperature: number, humidity: number, pressure: number) {
    this.state = new WeatherDataState();
    this.state.pressure = pressure;
    this.state.humidity = humidity;
    this.state.temperature = temperature;

    this.measurementsChanged();
  }
}
