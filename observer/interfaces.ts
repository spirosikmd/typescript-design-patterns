export interface State {
  get: () => any;
}

export interface Observer {
  update: (state: State) => void;
}

export interface DisplayElement {
  display: () => void;
}

export interface Subject {
  registerObserver: (observer: Observer) => void;
  removeObserver: (observer: Observer) => void;
  notifyObservers: (state: State) => void;
}
