import {
  OrigDatablock,
  PublishedData,
  RawDataset,
  Sample
} from "../shared/sdk/models";
import { DatasetLifecycle} from "./DatasetLifecycle"
import { DefaultInstrument, InstrumentFactory } from "./instrument";
import { FilesInfo } from "./filesinfo";
import { hostname } from "os";
import { ThumbnailImage } from "./ThumbnailImage";

const fs = require("fs");

export class MetadataCreator {
  metadata: Object;
  pb: PublishedData;
  ds: RawDataset;
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
  ) {
    this.sample.description = inst.sampleDescription;
    this.sample.sampleCharacteristics = inst.sampleCharacteristics;
    this.sample.samplelId = tag;
    this.sample.ownerGroup = inst.ownerGroup;
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
    this.lc.dateOfDiskPurging = inst.dateOfDiskPurging;
    this.lc.archiveRetentionTime = inst.archiveRetentionTime;
    this.lc.exportedTo = inst.exportedTo;
    this.lc.dateOfPublishing = inst.dateOfPublishing;
    return this.lc;
  }

  pid_with_prefix(abbrev: string, tag: string) {
    return this.pidPrefix + "/BRIGHTNESS/" + abbrev + tag;
  }

  pid_without_prefix(abbrev: string, tag: string) {
    return "BRIGHTNESS/" + abbrev + tag;
  }

  getDataset(inst: DefaultInstrument, tag: string, file_info: FilesInfo) {
    this.ds = new RawDataset();
    this.ds.pid = this.pid_with_prefix(inst.abbreviation, tag);
    this.ds.principalInvestigator = inst.principalInvestigator;
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
    this.ds.creationLocation = inst.creationLocation;
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
    let experimentDateTime=file_info.experimentDateTime;
    if (this.ds.scientificMetadata.file_time){
      experimentDateTime= this.ds.scientificMetadata.file_time;
    }
    this.ds.endTime =experimentDateTime; 
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
      "sonde",
      "nmx",
      "multiblade",
      "multigrid",
      "v20",
      "beaminstrumentation"
    ];
    // this.instArray = ["beaminstrumentation"];
    for (const instTag of this.instArray) {
      console.log(instTag);
      const inst_fact = new InstrumentFactory();
      const inst = inst_fact.createInstrument(instTag);
      console.log(inst.abbreviation);

      for (const key of Object.keys(inst.sourceFolderArray)) {
        const machine_name = hostname();
        let source_folder = "./demo";
        if (machine_name == "r1n2.esss.dk") {
          source_folder = this.basename + inst.sourceFolderArray[key];
        }

        console.log("gm source", source_folder);
        const file_info = new FilesInfo(source_folder);
        const dat = this.getDataset(inst, key, file_info);
        const life = this.getLifeCycle(inst, dat);
        dat.datasetlifecycle = life;
        const orig = this.getOrig(inst, dat, file_info);
        const pub = this.getPublish(inst, key, dat, file_info);
        this.getSample(inst, key);
        const key1 = "key" + instTag + key;
        this.metadata[key1] = {
          dataset: dat,
          published: pub,
          sample: this.sample,
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
