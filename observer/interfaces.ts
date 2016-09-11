export interface State {
  get: () => any;
}

export interface Observer {
  update: (state: State) => void;
}

export interface DisplayElement {
  display: () => void;
}
