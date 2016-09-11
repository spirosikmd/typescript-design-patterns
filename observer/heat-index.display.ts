import {Observer, DisplayElement, Subject} from './interfaces';
import {WeatherDataState} from './weather-data-state.state';

export class HeatIndexDisplay implements Observer, DisplayElement {
  state: WeatherDataState;

  constructor (private subject: Subject) {
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  update (state: WeatherDataState): void {
    this.state = state;
    this.display();
  }

  display (): void {
    if (!this.state) {
      return;
    }
    console.log('Heat index:', this.calculateHeatIndex())
  }

  calculateHeatIndex () {
    // Fake heat index calculation
    return this.state.temperature * this.state.humidity * 16.923;
  }
}
