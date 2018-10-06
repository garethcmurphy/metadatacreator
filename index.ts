import { PublishedData } from "./PublishedData";
import { Dataset } from "./Dataset";
import { OrigDatablock } from "./OrigDatablock";
import { DatasetLifecycle } from "./DatasetLifecycle";
import { DefaultInstrument, InstrumentFactory } from "./instrument";
const fs = require("fs");

class MetadataCreator {
  metadata: Object;
  publish: PublishedData;
  dataset: Dataset;
  orig: OrigDatablock;
  lifecycle: DatasetLifecycle;

  constructor() {
    this.metadata = {};
  }

  getPublish(inst: DefaultInstrument) {
    this.publish = new PublishedData();
    this.publish.creator = inst.creator;
    this.publish.publisher = inst.publisher;
    this.publish.affiliation = inst.affiliation;
    this.publish.publicationYear = inst.publicationYear;
    this.publish.pidArray = inst.pidArray;
    return this.publish;
  }

  getOrig() {
    this.orig = new OrigDatablock();
    this.orig.createdAt = new Date();
  }

  getLifeCycle() {
    this.lifecycle = new DatasetLifecycle();
    this.lifecycle.archivable = true;
  }

  getDataset() {
    this.dataset = new Dataset();
    this.dataset.contactEmail = "test@new.com";
    return this.dataset;
  }

  mainloop() {
    const inst_array = ["sonde", "nmx"];
    for ( const inst_tag of inst_array) {
      console.log(inst_tag);
      const inst_fact = new InstrumentFactory();

      const inst = inst_fact.createInstrument(inst_tag);
      console.log(inst.abbreviation);
      const dat = this.getDataset();
      this.getLifeCycle();
      const pub = this.getPublish(inst);
      this.getOrig();
      const key1 = "key" + inst;


      this.metadata[key1] = {
        dat: dat,
        pub: pub,
        orig: pub,
        life: pub
      };
    }
    this.print();
  }

  get_file_info() {
    // fs.readdirSync();
  }

  print() {
    console.log(this.metadata);
    const json = JSON.stringify(this.metadata);
    fs.writeFile("publish.json", json, function(err) {
      if (err) throw err;
      console.log("Saved!");
    });
  }
}

const met = new MetadataCreator();
met.mainloop();
