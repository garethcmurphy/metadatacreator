import { Sample } from "../shared/sdk/models";
import { DefaultInstrument, InstrumentFactory } from "./instrument";

import fs = require("fs");

export class SampleCreator {
  private metadata: object;
  private sample: Sample;

  constructor() {
    this.metadata = {};
  }

  getPublish(inst: DefaultInstrument, tag: string) {
    this.sample = new Sample();
    this.sample.sampleId = inst.abbreviation + tag;
    this.sample.owner = inst.owner;
    this.sample.description =
      "This is a description of the sample setup for the " +
      inst.abbreviation +
      " instrument. The sample is a vanadium";
    this.sample.createdAt = inst.createdAt;
    this.sample.sampleCharacteristics = {
      propid: "string",
      substance: "string",
      sampleSize: "string",
      weight: "string",
      container: "string",
      energyRange: "string",
      resolution: "string",
      polO: "string",
      pol90: "string",
      polCirr: "string",
      polCirl: "string",
      highHarmonic: "string",
      arpesEnergyResolution: "string",
      arpesAngularResolution: "string",
      arpesAnalyzeRot: "string",
      smplprep: "string",
      smplarsputt: "string",
      smplHeating: "string",
      smplEvap: "string",
      smplEvapMaterial: "string",
      smplEvapThick: "string",
      userMaterial: "string",
      gasAmount: "string",
      vacuum: "string",
      risk: "string",
      isCorrosive: "string",
      isInflammable: "string",
      isExplosive: "string",
      highVolt: "string",
      highTemp: "string",
      otherRisks: "string",
      disposalCondition: "string",
      sampleDisposal: "string",
      secComment: "string",
      checkA: "string",
      checkB: "string",
      biosafetyLevel: "string",
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

  public print() {
    const json = JSON.stringify(this.metadata, null, 4);
    fs.writeFile("sample.json", json, err => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
}

if (require.main === module) {
  const sam = new SampleCreator();
  sam.mainloop();
}
