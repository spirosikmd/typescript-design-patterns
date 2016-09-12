import {Observer, DisplayElement} from '../interfaces';
import {WeatherDataState} from '../states/weather-data-state';
import {Observable} from '../observable';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  state: WeatherDataState;

  constructor (private observable: Observable) {
    this.observable.registerObserver(this);
  }

  update (state: WeatherDataState): void {
    this.state = state;
    this.display();
  }

  display (): void {
    let data = this.state.get();
    console.log('Current conditions:', data.temperature, data.humidity, data.pressure);
  }
}
