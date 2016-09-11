import {Observer, State} from './interfaces';

export class Observable {
  private observers: Observer[];
  private changed: boolean;

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

  notifyObservers (state: State): void {
    if (this.changed) {
      this.observers.forEach((observer: Observer) => {
        observer.update(state);
      });
      this.changed = false;
    }
  }

  setChanged () {
    this.changed = true;
  }
}
