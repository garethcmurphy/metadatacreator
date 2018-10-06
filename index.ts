import { PublishedData } from "./PublishedData";
import { Dataset } from "./Dataset";
import { OrigDatablock } from "./OrigDatablock";
import { DatasetLifecycle } from "./DatasetLifecycle";
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

  getPublish() {
    this.publish = new PublishedData();
    this.publish.creator = "J Smith";
    this.publish.publisher = "ESS";
    this.publish.affiliation = "ESS";
    this.publish.publicationYear = 2018;
    this.publish.pidArray = ["J Smith"];
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
    for (let i = 0; i < 5; i++) {
      console.log(i);
      const dat = this.getDataset();
      this.getLifeCycle();
      const pub = this.getPublish();
      this.getOrig();
      const key1 = "key" + i.toString();

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
