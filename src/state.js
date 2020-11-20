class State {
  constructor() {
    this.name = 'unnamed';
  }

  set name(value) {
    this.name = value;
  }

  get name() {
    return this.name;
  }
}

export default State;