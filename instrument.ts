class Sonde {
  email: string;

  constructor() {
    this.email = "test@kjd.com";
  }
}

class Nmx {
  email: string;

  constructor() {
    this.email = "test@kjd.com";
  }
}

class InstrumentFactory {
  createInstrument(type: Object);
  createInstrument(type: Object): Sonde;
  createInstrument(type: Object): Nmx;

  public createInstrument(instrument): Sonde | Nmx {
    if (instrument === "sonde") {
      const inst = new Sonde();
      return inst;
    } else if (instrument === "nmx") {
      const inst = new Nmx();
      return inst;
    }
  }
}
