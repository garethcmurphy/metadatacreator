import { Sample } from "../shared/sdk/models";
import { DefaultInstrument, InstrumentFactory } from "./instrument";

import fs = require("fs");

export class SampleCreator {
  private metadata: object;
  private sample: Sample;

  constructor() {
    this.metadata = {};
  }

  public getPublish(inst: DefaultInstrument, tag: string) {
    this.sample = new Sample();
    this.sample.sampleId = inst.abbreviation + tag;
    this.sample.owner = inst.owner;
    this.sample.description =
      "This is a description of the sample setup for the " +
      inst.abbreviation +
      " instrument. The sample is a vanadium";
    this.sample.createdAt = inst.createdAt;
    this.sample.sampleCharacteristics = {
      arpesAnalyzeRot: "string",
      arpesAngularResolution: "string",
      arpesEnergyResolution: "string",
      biosafetyLevel: "string",
      checkA: "string",
      checkB: "string",
      container: "string",
      disposalCondition: "string",
      energyRange: "string",
      gasAmount: "string",
      highHarmonic: "string",
      highTemp: "string",
      highVolt: "string",
      isCorrosive: "string",
      isExplosive: "string",
      isInflammable: "string",
      otherRisks: "string",
      pol90: "string",
      polCirl: "string",
      polCirr: "string",
      polO: "string",
      propid: "string",
      resolution: "string",
      risk: "string",
      safetyid: "string",
      sampleDisposal: "string",
      sampleSize: "string",
      secComment: "string",
      smplEvap: "string",
      smplEvapMaterial: "string",
      smplEvapThick: "string",
      smplHeating: "string",
      smplarsputt: "string",
      smplprep: "string",
      status: "string",
      substance: "string",
      userMaterial: "string",
      vacuum: "string",
      version: "string",
      weight: "string",
    };
    this.sample.attachments = ["string"];
    this.sample.ownerGroup = inst.ownerGroup;
    this.sample.accessGroups = inst.accessGroups;
    this.sample.createdBy = inst.createdBy;
    this.sample.updatedBy = inst.updatedBy;
    this.sample.updatedAt = inst.updatedAt;
    return this.sample;
  }

  public mainloop() {
    const instrumentList = ["sonde", "nmx", "multiblade", "multigrid"];
    for (const instrumentTag of instrumentList) {
      const instrumentFactory = new InstrumentFactory();
      const inst = instrumentFactory.createInstrument(instrumentTag);

      for (const key of Object.keys(inst.sourceFolderArray)) {
        const sourceFolder = inst.sourceFolderArray[key];
        // console.log("gm source", source_folder);
        const sample = this.getPublish(inst, "example");
        const key1 = "key" + instrumentTag + key;
        this.metadata[key1] = {
          sample: sample,
        };
      }
    }
    this.print();
  }

  public print() {
    const json = JSON.stringify(this.metadata, null, 4);
    fs.writeFile("sample.json", json, err => {
      if (err) {
        throw err;
      }
      // console.log("The file has been saved!");
    });
  }
}

if (require.main === module) {
  const sam = new SampleCreator();
  sam.mainloop();
}
