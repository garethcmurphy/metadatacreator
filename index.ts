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

  getOrig(inst: DefaultInstrument) {
    this.orig = new OrigDatablock();
    this.orig.createdAt = new Date();
    this.orig.size = inst.sizeOfArchive;
    this.orig.dataFileList = ["file1"];
    this.orig.ownerGroup = "ingestor";
    this.orig.accessGroups = ["ingestor"];
    this.orig.createdBy = "ingestor";
    this.orig.updatedBy = "ingestor";
    this.orig.datasetId = "ingestor";
    this.orig.rawDatasetId = "ingestor";
    this.orig.derivedDatasetId = "ingestor";
    this.orig.createdAt = new Date();
    this.orig.updatedAt = new Date();
    return this.orig;
  }

  getLifeCycle(inst: DefaultInstrument) {
    this.lifecycle = new DatasetLifecycle();
    this.lifecycle.archivable = true;
    return this.lifecycle;
  }

  getDataset(inst: DefaultInstrument) {
    this.dataset = new Dataset();
    this.dataset.contactEmail = "test@new.com";
    this.dataset.pid =" string ";
    this.dataset.owner = inst.creator;
    this.dataset.ownerEmail =" string ";
    this.dataset.orcidOfOwner =" string ";
    this.dataset.contactEmail =" string ";
    this.dataset.sourceFolder =" string ";
    this.dataset.size = inst.sizeOfArchive;
    this.dataset.packedSize = inst.sizeOfArchive;
    this.dataset.creationTime = new Date();
    this.dataset.type =" string ";
    this.dataset.validationStatus =" string ";
    this.dataset.keywords =["vanadium"];
    this.dataset.description =" string ";
    this.dataset.userTargetLocation =" string ";
    this.dataset.classification =" string ";
    this.dataset.license =" string ";
    this.dataset.version =" string ";
    this.dataset.doi =" string ";
    this.dataset.isPublished =true;
    this.dataset.ownerGroup =" string ";
    this.dataset.accessGroups =["string"];
    this.dataset.createdBy =" string ";
    this.dataset.updatedBy =" string ";
    this.dataset.createdAt = new Date();
    this.dataset.updatedAt = new Date();
    return this.dataset;
  }

  mainloop() {
    const inst_array = ["sonde", "nmx"];
    for (const inst_tag of inst_array) {
      console.log(inst_tag);
      const inst_fact = new InstrumentFactory();

      const inst = inst_fact.createInstrument(inst_tag);
      console.log(inst.abbreviation);
      const dat = this.getDataset(inst);
      const life =this.getLifeCycle(inst);
      const pub = this.getPublish(inst);
      const orig= this.getOrig(inst);
      const key1 = "key" + inst;

      this.metadata[key1] = {
        dat: dat,
        pub: pub,
        orig: orig,
        life: life
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
