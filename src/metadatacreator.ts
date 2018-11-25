import { DatasetLifecycle, OrigDatablock, PublishedData, RawDataset } from "../shared/sdk/models";
import { DefaultInstrument, InstrumentFactory } from "./instrument";
import { FilesInfo } from "./filesinfo";
import { hostname } from "os";
import { ThumbnailImage } from "./ThumbnailImage"

const fs = require("fs");

export class MetadataCreator {
  metadata: Object;
  publish: PublishedData;
  dataset: RawDataset;
  orig: OrigDatablock;
  lifecycle: DatasetLifecycle;
  inst_array: string[];
  url_pick: any;
  basename = "/users/detector/experiments/";
  doi_prefix =  "10.5072";
  image : string;

  constructor() {
    this.metadata = {};
    const im = new ThumbnailImage();
    this.image = im.image;
  }

  getPublish(
    inst: DefaultInstrument,
    tag,
    dat: RawDataset,
    file_info: FilesInfo
  ) {
    this.publish = new PublishedData();
    this.publish.creator = inst.creator;
    this.publish.doi = inst.doi_prefix + "/"+ inst.abbreviation + tag;
    this.publish.publisher = inst.publisher;
    this.publish.affiliation = inst.affiliation;
    this.publish.publicationYear = inst.publicationYear;
    this.publish.pidArray = inst.pidArray;
    this.publish.title = inst.title;
    this.publish.url = inst.url + "%2F" + tag;
    this.publish.dataDescription = inst.dataDescription;
    this.publish.thumbnail = this.image;
    this.publish.resourceType = inst.resourceType;
    this.publish.numberOfFiles = file_info.file_number;
    this.publish.sizeOfArchive = file_info.total_file_size;
    this.publish.abstract = inst.abstract;
    this.publish.authors = inst.authors;
    this.publish.pidArray = [dat.pid];
    this.publish.doiRegisteredSuccessfullyTime =
      inst.doiRegisteredSuccessfullyTime;
    return this.publish;
  }

  getOrig(inst: DefaultInstrument, dataset: RawDataset, file_info: FilesInfo) {
    this.orig = new OrigDatablock();
    this.orig.size = file_info.total_file_size;
    this.orig.dataFileList = file_info.files;
    this.orig.ownerGroup = inst.ownerGroup;
    this.orig.accessGroups = inst.accessGroups;
    this.orig.createdBy = inst.createdBy;
    this.orig.updatedBy = inst.updatedBy;
    this.orig.datasetId = dataset.pid;
    this.orig.rawDatasetId = dataset.pid;
    this.orig.derivedDatasetId = dataset.pid;
    this.orig.createdAt = inst.createdAt;
    this.orig.updatedAt = inst.updatedAt;
    return this.orig;
  }

  getLifeCycle(inst: DefaultInstrument, dataset: RawDataset) {
    this.lifecycle = new DatasetLifecycle();
    this.lifecycle.isOnDisk = inst.isOnDisk;
    this.lifecycle.isOnTape = inst.isOnTape;
    this.lifecycle.archivable = inst.archivable;
    this.lifecycle.retrievable = inst.retrievable;
    this.lifecycle.archiveStatusMessage = inst.archiveStatusMessage;
    this.lifecycle.retrieveStatusMessage = inst.retrieveStatusMessage;
    this.lifecycle.lastUpdateMessage = inst.lastUpdateMessage;
    this.lifecycle.archiveReturnMessage = inst.archiveReturnMessage;
    this.lifecycle.dateOfLastMessage = inst.dateOfLastMessage;
    this.lifecycle.dateOfDiskPurging = inst.dateOfDiskPurging;
    this.lifecycle.archiveRetentionTime = inst.archiveRetentionTime;
    this.lifecycle.isExported = inst.isExported;
    this.lifecycle.exportedTo = inst.exportedTo;
    this.lifecycle.dateOfPublishing = inst.dateOfPublishing;
    this.lifecycle.ownerGroup = inst.ownerGroup;
    this.lifecycle.accessGroups = inst.accessGroups;
    this.lifecycle.createdBy = inst.createdBy;
    this.lifecycle.updatedBy = inst.updatedBy;
    this.lifecycle.datasetId = dataset.pid;
    this.lifecycle.id = dataset.pid;
    this.lifecycle.rawDatasetId = this.lifecycle.datasetId;
    this.lifecycle.derivedDatasetId = this.lifecycle.datasetId;
    this.lifecycle.createdAt = inst.createdAt;
    this.lifecycle.updatedAt = inst.updatedAt;
    return this.lifecycle;
  }

  getDataset(inst: DefaultInstrument, tag: string, file_info: FilesInfo) {
    this.dataset = new RawDataset();
    this.dataset.pid =
      inst.pid_prefix + "/BRIGHTNESS/" + inst.abbreviation + tag;
    this.dataset.principalInvestigator = inst.principalInvestigator;
    this.dataset.endTime = inst.endTime;
    this.dataset.owner = inst.creator;
    this.dataset.ownerEmail = inst.ownerEmail;
    this.dataset.orcidOfOwner = inst.orcidOfOwner;
    this.dataset.contactEmail = inst.contactEmail;
    this.dataset.sourceFolder = inst.sourceFolder;
    this.dataset.size = file_info.total_file_size;
    this.dataset.packedSize = this.dataset.size;
    this.dataset.creationTime = new Date();
    this.dataset.type = inst.type;
    this.dataset.validationStatus = inst.validationStatus;
    this.dataset.keywords = inst.keywords;
    this.dataset.description = inst.dataDescription;
    this.dataset.userTargetLocation = inst.userTargetLocation;
    this.dataset.creationLocation = inst.creationLocation;
    this.dataset.classification = inst.classification;
    this.dataset.license = inst.license;
    this.dataset.version = inst.version;
    this.dataset.doi = inst.doi_prefix + "/" + inst.abbreviation + tag;
    this.dataset.isPublished = inst.isPublished;
    this.dataset.ownerGroup = inst.ownerGroup;
    this.dataset.accessGroups = inst.accessGroups;
    this.dataset.createdBy = inst.createdBy;
    this.dataset.updatedBy = inst.updatedBy;
    this.dataset.createdAt = inst.createdAt;
    this.dataset.updatedAt = inst.updatedAt;
    if (tag in inst.metadata_object) {
      this.dataset.scientificMetadata = inst.metadata_object[tag];
    } else {
      this.dataset.scientificMetadata = inst.scientificMetadata;
    }
    this.dataset.proposalId = inst.proposal;
    this.dataset.sampleId = inst.sampleId;
    return this.dataset;
  }

  mainloop() {
    console.log('Starting reading');
    console.time('test');
    this.inst_array = [
      "sonde",
      "nmx",
      "multiblade",
      "multigrid",
      "beaminstrumentation"
    ];
    // this.inst_array = ["beaminstrumentation"];
    for (const inst_tag of this.inst_array) {
      console.log(inst_tag);
      const inst_fact = new InstrumentFactory();
      const inst = inst_fact.createInstrument(inst_tag);
      console.log(inst.abbreviation);

      for (const key of Object.keys(inst.source_folder_array)) {
        const machine_name = hostname();
        let source_folder = "./demo";
        if (machine_name == "r1n4.esss.dk") {
          source_folder = this.basename+inst.source_folder_array[key];
        }

        console.log("gm source", source_folder);
        const file_info = new FilesInfo(source_folder);
        const dat = this.getDataset(inst, key, file_info);
        const life = this.getLifeCycle(inst, dat);
        const orig = this.getOrig(inst, dat, file_info);
        const pub = this.getPublish(inst, key, dat, file_info);
        const key1 = "key" + inst_tag + key;
        this.metadata[key1] = {
          dataset: dat,
          published: pub,
          orig: orig,
          lifecycle: life
        };
      }
    }
    this.print();
    console.timeEnd('test');
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
