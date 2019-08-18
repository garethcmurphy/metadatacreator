import { BeamInstrumentation } from "./BeamInstrumentation";
import { DSC } from "./DSC";
import { Multiblade } from "./Multiblade";
import { Multigrid } from "./Multigrid";
import { Nmx } from "./Nmx";
import { Sonde } from "./Sonde";
import { V20 } from "./V20";
export class InstrumentFactory {
  // createInstrument(type: object);
  // createInstrument(type: object): Sonde;
  // createInstrument(type: object): Nmx;
  public createInstrument(instrument): Sonde | Nmx | Multigrid | Multiblade {
    if (instrument === "sonde") {
      const inst = new Sonde();
      return inst;
    } else if (instrument === "multigrid") {
      const inst = new Multigrid();
      return inst;
    } else if (instrument === "multiblade") {
      const inst = new Multiblade();
      return inst;
    } else if (instrument === "beaminstrumentation") {
      const inst = new BeamInstrumentation();
      return inst;
    } else if (instrument === "nmx") {
      const inst = new Nmx();
      return inst;
    } else if (instrument === "dsc") {
      const inst = new DSC();
      return inst;
    } else if (instrument === "v20") {
      const inst = new V20();
      return inst;
    }
  }
}
