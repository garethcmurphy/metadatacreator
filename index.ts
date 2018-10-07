import { PublishedData } from "./PublishedData";
import { Dataset } from "./Dataset";
import { OrigDatablock } from "./OrigDatablock";
import { DatasetLifecycle } from "./DatasetLifecycle";
import { DefaultInstrument, InstrumentFactory } from "./instrument";

const fs = require("fs");

class FilesInfo {
  files = [];
  file_number = 22;
  experiment_date_time = "2017";
  total_file_size = 12345654;
  source_folder = "source_folder";
  base_name = "base_name";
}

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
    this.publish.title = inst.title;
    this.publish.url = inst.url;
    this.publish.authors = inst.authors;
    return this.publish;
  }

  getOrig(inst: DefaultInstrument) {
    this.orig = new OrigDatablock();
    this.orig.createdAt = new Date();
    this.orig.size = inst.sizeOfArchive;
    this.orig.dataFileList = ["file1"];
    this.orig.ownerGroup = "ingestor";
    this.orig.accessGroups = ["ingestor"];
    this.orig.createdBy = inst.createdBy;
    this.orig.updatedBy = inst.updatedBy;
    this.orig.datasetId = "ingestor";
    this.orig.rawDatasetId = "ingestor";
    this.orig.derivedDatasetId = "ingestor";
    this.orig.createdAt = inst.createdAt;
    this.orig.updatedAt = inst.updatedAt;
    return this.orig;
  }

  getLifeCycle(inst: DefaultInstrument) {
    this.lifecycle = new DatasetLifecycle();
    this.lifecycle.isOnDisk = inst.isOnDisk;
    this.lifecycle.isOnTape = inst.isOnTape;
    this.lifecycle.archivable = inst.archivable;
    this.lifecycle.retrievable = inst.retrievable;
    this.lifecycle.archiveStatusMessage = inst.archiveStatusMessage;
    this.lifecycle.retrieveStatusMessage = inst.retrieveStatusMessage;
    this.lifecycle.lastUpdateMessage = inst.lastUpdateMessage;
    this.lifecycle.archiveReturnMessage = inst.archiveReturnMessage;
    this.lifecycle.dateOfLastMessage = new Date();
    this.lifecycle.dateOfDiskPurging = new Date();
    this.lifecycle.archiveRetentionTime = new Date();
    this.lifecycle.isExported = true;
    this.lifecycle.exportedTo = " string ";
    this.lifecycle.dateOfPublishing = new Date();
    this.lifecycle.ownerGroup = inst.ownerGroup;
    this.lifecycle.accessGroups = inst.accessGroups;
    this.lifecycle.createdBy = inst.createdBy;
    this.lifecycle.updatedBy = inst.updatedBy;
    this.lifecycle.datasetId = " string ";
    this.lifecycle.rawDatasetId = " string ";
    this.lifecycle.derivedDatasetId = " string ";
    this.lifecycle.createdAt = inst.createdAt;
    this.lifecycle.updatedAt = inst.updatedAt;
    return this.lifecycle;
  }

  getDataset(inst: DefaultInstrument) {
    this.dataset = new Dataset();
    this.dataset.contactEmail = "test@new.com";
    this.dataset.pid = " string ";
    this.dataset.owner = inst.creator;
    this.dataset.ownerEmail = inst.ownerEmail;
    this.dataset.orcidOfOwner = inst.orcidOfOwner;
    this.dataset.contactEmail = inst.contactEmail;
    this.dataset.sourceFolder = inst.sourceFolder;
    this.dataset.size = inst.sizeOfArchive;
    this.dataset.packedSize = inst.sizeOfArchive;
    this.dataset.creationTime = new Date();
    this.dataset.type = "raw";
    this.dataset.validationStatus = " string ";
    this.dataset.keywords = ["vanadium"];
    this.dataset.description = inst.dataDescription;
    this.dataset.userTargetLocation = inst.userTargetLocation;
    this.dataset.classification = inst.classification;
    this.dataset.license = inst.license;
    this.dataset.version = inst.version;
    this.dataset.doi = inst.doi;
    this.dataset.isPublished = inst.isPublished;
    this.dataset.ownerGroup = inst.ownerGroup;
    this.dataset.accessGroups = inst.accessGroups;
    this.dataset.createdBy = inst.createdBy;
    this.dataset.updatedBy = inst.updatedBy;
    this.dataset.createdAt = inst.createdAt;
    this.dataset.updatedAt = inst.updatedAt;
    return this.dataset;
  }

  mainloop() {
    const inst_array = ["sonde", "nmx", "multiblade", "multigrid"];
    for (const inst_tag of inst_array) {
      console.log(inst_tag);
      const inst_fact = new InstrumentFactory();
      const inst = inst_fact.createInstrument(inst_tag);
      console.log(inst.abbreviation);

      for (const source_folder of inst.source_folder_array) {
        const file_info = this.get_file_info(source_folder);
        const dat = this.getDataset(inst);
        const life = this.getLifeCycle(inst);
        const pub = this.getPublish(inst);
        const orig = this.getOrig(inst);
        const key1 = "key" + inst_tag;
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

  get_file_info(source_folder: string) {
    const file_names = fs.readdirSync("demo");
    console.log(source_folder);
    const files_info = new FilesInfo();

    const file_number =0;
    const file_size =0;
    const date = new Date();
    const rel_path ="demo";

    for (const file of file_names){
      file_number = +1;
      const file_entry ={
          "path": rel_path,
        "size": file_size,
        "time": date,
        "chk": "string",
        "uid": "string",
        "gid": "string",
        "perm": "string"
      }

    }

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
