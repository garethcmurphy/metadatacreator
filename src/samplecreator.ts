import { Sample } from "../shared/sdk/models";
import { DefaultInstrument, InstrumentFactory } from "./instrument";

const fs = require("fs");

export class SampleCreator {
  metadata: Object;
  sample: Sample;

  constructor() {
    this.metadata = {};
  }

  getPublish(inst: DefaultInstrument, tag: string) {
    this.sample = new Sample();
    this.sample.samplelId = inst.abbreviation + tag;
    this.sample.owner = inst.owner;
    this.sample.description =
      "This is a description of the sample setup for the " +
      inst.abbreviation +
      " instrument. The sample is a vanadium";
    this.sample.createdAt = inst.createdAt;
    this.sample.sampleCharacteristics = {
      propid: "string",
      substance: "string",
      s_size: "string",
      weight: "string",
      container: "string",
      energy_rang: "string",
      resolution: "string",
      pol_o: "string",
      pol_90: "string",
      pol_cirr: "string",
      pol_cirl: "string",
      high_harmonic: "string",
      arpes_energyres: "string",
      arpes_angularres: "string",
      arpes_analyzerrot: "string",
      smplprep: "string",
      smpl_ar_sputt: "string",
      smpl_heating: "string",
      smpl_evap: "string",
      smpl_evap_material: "string",
      smpl_evap_thick: "string",
      user_material: "string",
      gas_amount: "string",
      vacuum: "string",
      risk: "string",
      is_corrosive: "string",
      is_inflammable: "string",
      is_explosive: "string",
      high_volt: "string",
      high_temp: "string",
      other_risks: "string",
      disposal_condition: "string",
      sample_disposal: "string",
      sec_comment: "string",
      check_a: "string",
      check_b: "string",
      biosafety_level: "string",
      status: "string",
      version: "string",
      safetyid: "string"
    };
    this.sample.attachments = ["string"];
    this.sample.ownerGroup = inst.ownerGroup;
    this.sample.accessGroups = inst.accessGroups;
    this.sample.createdBy = inst.createdBy;
    this.sample.updatedBy = inst.updatedBy;
    this.sample.updatedAt = inst.updatedAt;
    return this.sample;
  }

  mainloop() {
    const inst_array = ["sonde", "nmx", "multiblade", "multigrid"];
    for (const inst_tag of inst_array) {
      console.log(inst_tag);
      const inst_fact = new InstrumentFactory();
      const inst = inst_fact.createInstrument(inst_tag);
      console.log(inst.abbreviation);

      for (const key of Object.keys(inst.source_folder_array)) {
        const source_folder = inst.source_folder_array[key];
        console.log("gm source", source_folder);
        const sample = this.getPublish(inst, "example");
        const key1 = "key" + inst_tag + key;
        this.metadata[key1] = {
          sample: sample
        };
      }
    }
    this.print();
  }

  print() {
    //console.log(this.metadata);
    const json = JSON.stringify(this.metadata, null, 4);
    fs.writeFile("sample.json", json, err => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
}

const sam = new SampleCreator();
sam.mainloop();
