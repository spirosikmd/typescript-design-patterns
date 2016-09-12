import {Observer, DisplayElement} from '../interfaces';
import {WeatherDataState} from '../states/weather-data-state';
import {Observable} from '../observable';

export class HeatIndexDisplay implements Observer, DisplayElement {
  state: WeatherDataState;

  constructor (private observable: Observable) {
    this.observable.registerObserver(this);
  }

  update (state: WeatherDataState): void {
    this.state = state;
    this.display();
  }

  display (): void {
    console.log('Heat index:', this.calculateHeatIndex())
  }

  calculateHeatIndex () {
    // Fake heat index calculation
    let data = this.state.get();
    return data.temperature * data.humidity * 16.923;
  }
}
