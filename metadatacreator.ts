import { PublishedData } from "./PublishedData";
import { Dataset } from "./Dataset";
import { OrigDatablock } from "./OrigDatablock";
import { DatasetLifecycle } from "./DatasetLifecycle";
import { DefaultInstrument, InstrumentFactory } from "./instrument";

const fs = require("fs");

class FilesInfo {
  files = [];
  file_number = 22;
  experiment_date_time = new Date();
  total_file_size = 12345654;
  source_folder = "source_folder";
  base_name = "base_name";
}

export class MetadataCreator {
  metadata: Object;
  publish: PublishedData;
  dataset: Dataset;
  orig: OrigDatablock;
  lifecycle: DatasetLifecycle;

  constructor() {
    this.metadata = {};
  }

  getPublish(inst: DefaultInstrument, dat: Dataset, file_info: FilesInfo) {
    this.publish = new PublishedData();
    this.publish.creator = inst.creator;
    this.publish.publisher = inst.publisher;
    this.publish.affiliation = inst.affiliation;
    this.publish.publicationYear = inst.publicationYear;
    this.publish.pidArray = inst.pidArray;
    this.publish.title = inst.title;
    this.publish.url = inst.url;
    this.publish.abstract = inst.url;
    this.publish.dataDescription = inst.dataDescription;
    this.publish.thumbnail = inst.url;
    this.publish.resourceType = inst.resourceType;
    this.publish.numberOfFiles = file_info.file_number;
    this.publish.sizeOfArchive = file_info.total_file_size;
    this.publish.abstract = inst.abstract;
    this.publish.authors = inst.authors;
    this.publish.pidArray = [ dat.pid];
    return this.publish;
  }

  getOrig(inst: DefaultInstrument, dataset: Dataset, file_info: FilesInfo) {
    this.orig = new OrigDatablock();
    this.orig.createdAt = new Date();
    this.orig.size = file_info.total_file_size;
    this.orig.dataFileList = file_info.files;
    this.orig.ownerGroup = inst.ownerGroup;
    this.orig.accessGroups = inst.accessGroups;
    this.orig.createdBy = inst.createdBy;
    this.orig.updatedBy = inst.updatedBy;
    this.orig.datasetId = dataset.pid;
    this.orig.rawDatasetId = dataset.pid;
    this.orig.derivedDatasetId =  dataset.pid;
    this.orig.createdAt = inst.createdAt;
    this.orig.updatedAt = inst.updatedAt;
    return this.orig;
  }

  getLifeCycle(inst: DefaultInstrument, dataset: Dataset) {
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
    this.lifecycle.datasetId = dataset.pid;
    this.lifecycle.rawDatasetId = this.lifecycle.datasetId;
    this.lifecycle.derivedDatasetId =  this.lifecycle.datasetId;
    this.lifecycle.createdAt = inst.createdAt;
    this.lifecycle.updatedAt = inst.updatedAt;
    return this.lifecycle;
  }

  getDataset(inst: DefaultInstrument,tag:string, file_info: FilesInfo) {
    this.dataset = new Dataset();
    this.dataset.contactEmail = "test@new.com";
    this.dataset.pid = inst.pid_prefix + "/BRIGHTNESS/"+ inst.abbreviation+ tag;
    this.dataset.owner = inst.creator;
    this.dataset.ownerEmail = inst.ownerEmail;
    this.dataset.orcidOfOwner = inst.orcidOfOwner;
    this.dataset.contactEmail = inst.contactEmail;
    this.dataset.sourceFolder = inst.sourceFolder;
    this.dataset.size = file_info.total_file_size;
    this.dataset.packedSize = this.dataset.size;
    this.dataset.creationTime = new Date();
    this.dataset.type = "raw";
    this.dataset.validationStatus = " string ";
    this.dataset.keywords = ["vanadium"];
    this.dataset.description = inst.dataDescription;
    this.dataset.userTargetLocation = inst.userTargetLocation;
    this.dataset.classification = inst.classification;
    this.dataset.license = inst.license;
    this.dataset.version = inst.version;
    this.dataset.doi = inst.doi_prefix +'/'+ inst.abbreviation+ tag;
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

      for (const key of Object.keys(inst.source_folder_array)) {
        const source_folder = inst.source_folder_array[key];
        console.log("gm souce", source_folder);
        const file_info = this.get_file_info(source_folder);
        const dat = this.getDataset(inst,key, file_info);
        const life = this.getLifeCycle(inst, dat);
        const orig = this.getOrig(inst,dat, file_info);
        const pub = this.getPublish(inst, dat, file_info);
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

  get_file_info(source_folder: string) {
    const file_names = fs.readdirSync("demo");
    console.log(source_folder);
    const files_info = new FilesInfo();

    let file_number = 0;
    let file_size = 0;
    let date = new Date();
    let rel_path = "demo";

    for (const file of file_names) {
      file_number += 1;
      const stats =fs.statSync(rel_path+'/'+file);
      file_size += stats.size;
      const file_entry = {
        path: file,
        size: stats.size,
        time: date,
        chk: "string",
        uid: stats.uid,
        gid: stats.gid,
        perm: "755"
      };
      files_info.files.push( file_entry);
    }

    files_info.file_number = file_number;
    files_info.experiment_date_time = date;
    files_info.total_file_size = file_size;
    files_info.source_folder = source_folder;
    console.log(files_info.file_number);
    return files_info;
  }

  print() {
    //console.log(this.metadata);
    const json = JSON.stringify(this.metadata, null, 4);
    fs.writeFile("publish.json", json, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
}

