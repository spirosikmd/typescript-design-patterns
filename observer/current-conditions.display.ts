import {Observer, DisplayElement, Subject} from './interfaces';
import {WeatherDataState} from './weather-data-state.state';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  state: WeatherDataState;

  constructor (private subject: Subject) {
    this.subject.registerObserver(this);
  }

  update (state: WeatherDataState): void {
    this.state = state;
    this.display();
  }

  display (): void {
    if (!this.state) {
      console.log('Current conditions: no conditions yet..');
      return;
    }
    console.log('Current conditions:', this.state.temperature, this.state.humidity, this.state.pressure);
  }
}
