import { DatasetLifecycle, OrigDatablock, RawDataset, Sample } from "../shared/sdk/models";
import { DefaultInstrument, InstrumentFactory } from "./instrument";
import { FilesInfo } from "./filesinfo";

const fs = require("fs");

export class SampleCreator {
  metadata: Object;
  sample: Sample;
  dataset: RawDataset;
  orig: OrigDatablock;
  lifecycle: DatasetLifecycle;

  constructor() {
    this.metadata = {};
  }

  getPublish(inst: DefaultInstrument, tag, dat: RawDataset, file_info: FilesInfo) {
    this.sample = new Sample();
    this.sample.samplelId = "string";
    this.sample.owner = "string";
    this.sample.description = "string";
    this.sample.createdAt = new Date();
    this.sample.sampleCharacteristics = { "x": "y" };
    this.sample.attachments = ["string"];
    this.sample.ownerGroup = "string";
    this.sample.accessGroups = ["string"];
    this.sample.createdBy = "string";
    this.sample.updatedBy = "string";
    this.sample.updatedAt = new Date();
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
        const file_info = new FilesInfo(source_folder);
        const dat = this.getDataset(inst, key, file_info);
        const life = this.getLifeCycle(inst, dat);
        const orig = this.getOrig(inst, dat, file_info);
        const pub = this.getPublish(inst, key, dat, file_info);
        const key1 = "key" + inst_tag + key;
        this.metadata[key1] = {
          dat: dat,
          pub: pub,
          orig: orig,
          life: life
        };
      }
    }
    this.print();
  }

  print() {
    //console.log(this.metadata);
    const json = JSON.stringify(this.metadata, null, 4);
    fs.writeFile("publish.json", json, err => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
}
