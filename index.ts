import { PublishedData } from "./PublishedData";
import { Dataset } from "./Dataset";
import { OrigDatablock } from "./OrigDatablock";
import { DatasetLifecycle } from "./DatasetLifecycle";
var fs = require("fs");

class MetadataCreator {
  metadata: Object;
  publish: PublishedData;
  dataset: Dataset;
  orig: OrigDatablock;
  lifecycle: DatasetLifecycle;

  constructor() {
  }

  getPublish(){
    this.publish = new PublishedData();
    this.publish.creator = "J Smith";
    this.publish.publisher = "ESS";
    this.publish.affiliation = "ESS";
    this.publish.publicationYear = 2018;
    this.publish.pidArray = ["J Smith"];
    this.metadata = this.publish;
  }

  getOrig(){

  }

  getDataset(){
    this.dataset = new Dataset();
    this.dataset.contactEmail = "test@new.com";
  }

  mainloop() {
    for (let i = 0; i < 5; i++) {
      console.log(i);
      this.getDataset();
      this.getPublish();
    }
  }

  get_file_info() {
    // fs.readdirSync();
  }

  print() {
    console.log(this.publish);
    const json = JSON.stringify(this.publish);
    fs.writeFile("publish.json", json, function(err) {
      if (err) throw err;
      console.log("Saved!");
    });
  }
}

const met = new MetadataCreator();
met.print();
