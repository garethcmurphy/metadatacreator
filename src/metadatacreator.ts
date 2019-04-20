import {
  OrigDatablock,
  PublishedData,
  RawDataset,
  Sample,
  DerivedDataset
} from "../shared/sdk/models";
import { DatasetLifecycle } from "./DatasetLifecycle"
import { DefaultInstrument, InstrumentFactory } from "./instrument";
import { FilesInfo } from "./filesinfo";
import { hostname } from "os";
import { ThumbnailImage } from "./ThumbnailImage";
import moment = require("moment");

const fs = require("fs");

export class MetadataCreator {
  metadata: Object;
  pb: PublishedData;
  ds: any;
  orig: OrigDatablock;
  lc: DatasetLifecycle;
  sample: Sample;
  instArray: string[];
  urlPick: any;
  basename = "/users/detector/experiments/";
  doiPrefix = "10.5072";
  pidPrefix = "20.500.12269";
  image: string;

  constructor() {
    this.metadata = {};
    const im = new ThumbnailImage();
    this.image = im.image;
  }

  getSample(
    inst: DefaultInstrument,
    tag: string,
    key: string,
    dat: RawDataset,
    file_info: FilesInfo
  ) {
    this.sample = new Sample();
    this.sample.description = inst.sampleDescription;
    this.sample.sampleCharacteristics = inst.sampleCharacteristics;
    if (dat.scientificMetadata.sample_description) {
      this.sample.description = dat.scientificMetadata.sample_description;
      this.sample.sampleCharacteristics = { "description": this.sample.description };
    }
    if (inst.sampleObject.hasOwnProperty(key)) {
      this.sample.description = inst.sampleObject[key].description;
      this.sample.sampleCharacteristics = inst.sampleObject[key].sampleCharacteristics;
    }
    this.sample.samplelId = tag + key;
    this.sample.owner = inst.owner;
    this.sample.ownerGroup = inst.ownerGroup;
    this.sample.createdAt = file_info.experimentDateTime;
    return this.sample;
  }

  getPublish(
    inst: DefaultInstrument,
    tag: string,
    dat: RawDataset,
    fileInfo: FilesInfo
  ) {
    this.pb = new PublishedData();
    this.pb.creator = inst.creator;
    this.pb.doi = inst.doiPrefix + "/" + inst.abbreviation + tag;
    if (inst.abbreviation === "DSC") {
      this.pb.doi = inst.doiPlainPrefix + inst.proposal + "." + inst.abbreviation + tag;
    }
    this.pb.publisher = inst.publisher;
    this.pb.affiliation = inst.affiliation;
    this.pb.publicationYear = inst.publicationYear;
    this.pb.pidArray = inst.pidArray;
    this.pb.title = inst.title;
    this.pb.url = inst.urlFragment + encodeURIComponent(dat.pid);
    console.log(" gm ", this.pb.url);
    this.pb.dataDescription = inst.dataDescription;
    this.pb.thumbnail = this.image;
    this.pb.resourceType = inst.resourceType;
    this.pb.numberOfFiles = fileInfo.fileNumber;
    this.pb.sizeOfArchive = fileInfo.totalFileSize;
    this.pb.abstract = inst.abstract;
    this.pb.authors = inst.authors;
    this.pb.pidArray = [inst.pidPrefix + "/" + dat.pid];
    this.pb.doiRegisteredSuccessfullyTime = inst.doiRegisteredSuccessfullyTime;
    return this.pb;
  }

  getOrig(inst: DefaultInstrument, dataset: RawDataset, fileInfo: FilesInfo) {
    this.orig = new OrigDatablock();
    this.orig.size = fileInfo.totalFileSize;
    this.orig.dataFileList = fileInfo.files;
    this.orig.ownerGroup = inst.ownerGroup;
    this.orig.accessGroups = inst.accessGroups;
    this.orig.createdBy = inst.createdBy;
    this.orig.updatedBy = inst.updatedBy;
    this.orig.datasetId = dataset.pid;
    this.orig.rawDatasetId = this.orig.datasetId;
    this.orig.derivedDatasetId = this.orig.datasetId;
    this.orig.createdAt = fileInfo.experimentDateTime;
    this.orig.updatedAt = this.orig.createdAt;
    return this.orig;
  }

  getLifeCycle(inst: DefaultInstrument, dataset: RawDataset) {
    this.lc = new DatasetLifecycle();
    this.lc.archivable = inst.archivable;
    this.lc.retrievable = inst.retrievable;
    this.lc.archiveStatusMessage = inst.archiveStatusMessage;
    this.lc.retrieveStatusMessage = inst.retrieveStatusMessage;
    this.lc.archiveReturnMessage = inst.archiveReturnMessage;
    this.lc.retrieveReturnMessage = inst.retrieveReturnMessage;
    const endTime = dataset.endTime;
    console.log("endTime", endTime);
    let purgeDate = moment(dataset.endTime).add(10, "year");
    this.lc.dateOfDiskPurging = purgeDate.toDate();
    this.lc.archiveRetentionTime = purgeDate.toDate();
    this.lc.exportedTo = inst.exportedTo;
    let publishDate = moment(dataset.endTime).add(3, "year");
    this.lc.dateOfPublishing = publishDate.toDate();
    return this.lc;
  }

  pid_with_prefix(abbrev: string, tag: string) {
    return this.pidPrefix + "/BRIGHTNESS/" + abbrev + tag;
  }

  pid_without_prefix(abbrev: string, tag: string) {
    return "BRIGHTNESS/" + abbrev + tag;
  }

  plain_pid_with_prefix(abbrev: string, tag: string) {
    return this.pidPrefix + "/" + abbrev + "." + tag;
  }

  getDataset(inst: DefaultInstrument, tag: string, file_info: FilesInfo) {
    this.ds = new RawDataset();
    let type = "raw";
    if (inst.metadataObject.hasOwnProperty(tag)) {
      if ( inst.metadataObject[tag].hasOwnProperty("type")) {
        if (inst.metadataObject[tag].type === 'derived') {
          this.ds = new DerivedDataset;
          type = "derived";
        }
      }
    }
    this.ds.pid = this.pid_with_prefix(inst.abbreviation, tag);
    if (inst.abbreviation === 'DSC') {
      this.ds.pid = this.plain_pid_with_prefix(inst.proposal, tag);
    }
    if (type === "raw") {
      this.ds.principalInvestigator = inst.principalInvestigator;
      this.ds.creationLocation = inst.creationLocation;
    }
    this.ds.owner = inst.creator;
    this.ds.ownerEmail = inst.ownerEmail;
    this.ds.orcidOfOwner = inst.orcidOfOwner;
    this.ds.contactEmail = inst.contactEmail;
    this.ds.sourceFolder = file_info.sourceFolder;
    this.ds.size = file_info.totalFileSize;
    this.ds.packedSize = this.ds.size;
    this.ds.type = inst.type;
    this.ds.validationStatus = inst.validationStatus;
    this.ds.keywords = inst.keywords;
    this.ds.description = inst.description;
    this.ds.classification = inst.classification;
    this.ds.license = inst.license;
    this.ds.version = inst.version;
    this.ds.isPublished = inst.isPublished;
    this.ds.ownerGroup = inst.ownerGroup;
    this.ds.accessGroups = inst.accessGroups;
    this.ds.createdBy = inst.createdBy;
    this.ds.updatedBy = inst.updatedBy;
    this.ds.updatedAt = this.ds.createdAt;
    if (tag in inst.metadataObject) {
      this.ds.scientificMetadata = inst.metadataObject[tag];
    } else {
      this.ds.scientificMetadata = inst.scientificMetadata;
    }
    this.ds.datasetName = inst.title + " " + parseInt(tag).toString();
    if (this.ds.scientificMetadata.subject) {
      this.ds.datasetName = this.ds.scientificMetadata.subject;
    }
    if (this.ds.scientificMetadata.title) {
      if (this.ds.scientificMetadata.title !== "") {
        this.ds.datasetName = this.ds.scientificMetadata.title;
      }
    }
    if (type === "derived") {
      this.ds.type = "derived";
      delete this.ds.scientificMetadata.type;
      this.ds.investigator = inst.principalInvestigator;
      this.ds.inputDatasets = [];
      this.ds.jobParameters = {};
      this.ds.jobLogData = "executed";
    }
    let experimentDateTime = file_info.experimentDateTime;
    console.log('datetime ', file_info.experimentDateTime);
    if (this.ds.scientificMetadata.file_time) {
      console.log('fileTime ', this.ds.scientificMetadata.file_time);
      experimentDateTime = this.ds.scientificMetadata.file_time;
    }
    this.ds.endTime = experimentDateTime;
    this.ds.creationTime = experimentDateTime;
    this.ds.createdAt = experimentDateTime;
    this.ds.proposalId = inst.proposal;
    this.ds.sampleId = inst.sampleId;
    return this.ds;
  }

  mainloop() {
    console.log("Starting reading");
    console.time("test");
    this.instArray = [
      "nmx",
      "sonde",
      "multiblade",
      "multigrid",
      "v20",
      "dsc",
      "beaminstrumentation"
    ];
    //this.instArray = ["nmx"];
    for (const instTag of this.instArray) {
      console.log(instTag);
      const inst_fact = new InstrumentFactory();
      const inst = inst_fact.createInstrument(instTag);
      console.log(inst.abbreviation);

      let source_folder = "./demo";
      let sourceFolderBase = "./demo/";
      const machine_name = hostname();
      if (machine_name == "r1n2.esss.dk") {
        sourceFolderBase = this.basename;
      }
      for (const key of Object.keys(inst.sourceFolderArray)) {
        source_folder = sourceFolderBase + inst.sourceFolderArray[key];
        console.log("gm source", source_folder);
        const file_info = new FilesInfo(source_folder);
        const datetime = inst.getTime(file_info);

        const dat = this.getDataset(inst, key, file_info);
        dat.scientificMetadata["datetime"] = datetime;
        const life = this.getLifeCycle(inst, dat);
        dat.datasetlifecycle = life;
        const orig = this.getOrig(inst, dat, file_info);
        const pub = this.getPublish(inst, key, dat, file_info);
        const sample = this.getSample(inst, "sample" + instTag, key, dat, file_info);
        dat.sampleId = sample.samplelId;
        const key1 = "key" + instTag + key;
        this.metadata[key1] = {
          dataset: dat,
          published: pub,
          sample: sample,
          orig: orig
        };
      }
    }
    this.print();
    console.timeEnd("test");
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
