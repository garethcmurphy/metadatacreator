import { DatasetLifecycle, OrigDatablock, PublishedData, RawDataset } from "../shared/sdk/models";
import { DefaultInstrument, InstrumentFactory } from "./instrument";
import { FilesInfo } from "./filesinfo";
import { hostname } from "os";
import { ThumbnailImage } from "./ThumbnailImage"

const fs = require("fs");

export class MetadataCreator {
  metadata: Object;
  pb: PublishedData;
  ds: RawDataset;
  orig: OrigDatablock;
  lc: DatasetLifecycle;
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

  getPublish(
    inst: DefaultInstrument,
    tag,
    dat: RawDataset,
    fileInfo: FilesInfo
  ) {
    this.pb = new PublishedData();
    this.pb.creator = inst.creator;
    this.pb.doi = inst.doi_prefix + "/" + inst.abbreviation + tag;
    this.pb.publisher = inst.publisher;
    this.pb.affiliation = inst.affiliation;
    this.pb.publicationYear = inst.publicationYear;
    this.pb.pidArray = inst.pidArray;
    this.pb.title = inst.title;
    this.pb.url = inst.url_fragment + encodeURIComponent(dat.pid);
    console.log(" gm ", this.pb.url);
    this.pb.dataDescription = inst.dataDescription;
    this.pb.thumbnail = this.image;
    this.pb.resourceType = inst.resourceType;
    this.pb.numberOfFiles = fileInfo.fileNumber;
    this.pb.sizeOfArchive = fileInfo.totalFileSize;
    this.pb.abstract = inst.abstract;
    this.pb.authors = inst.authors;
    this.pb.pidArray = [inst.pid_prefix + "/" +  dat.pid];
    this.pb.doiRegisteredSuccessfullyTime =
      inst.doiRegisteredSuccessfullyTime;
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
    this.orig.updatedAt = inst.updatedAt;
    return this.orig;
  }

  getLifeCycle(inst: DefaultInstrument, dataset: RawDataset) {
    this.lc = new DatasetLifecycle();
    this.lc.isOnDisk = inst.isOnDisk;
    this.lc.isOnTape = inst.isOnTape;
    this.lc.archivable = inst.archivable;
    this.lc.retrievable = inst.retrievable;
    this.lc.archiveStatusMessage = inst.archiveStatusMessage;
    this.lc.retrieveStatusMessage = inst.retrieveStatusMessage;
    this.lc.lastUpdateMessage = inst.lastUpdateMessage;
    this.lc.archiveReturnMessage = inst.archiveReturnMessage;
    this.lc.dateOfLastMessage = inst.dateOfLastMessage;
    this.lc.dateOfDiskPurging = inst.dateOfDiskPurging;
    this.lc.archiveRetentionTime = inst.archiveRetentionTime;
    this.lc.isExported = inst.isExported;
    this.lc.exportedTo = inst.exportedTo;
    this.lc.dateOfPublishing = inst.dateOfPublishing;
    this.lc.ownerGroup = inst.ownerGroup;
    this.lc.accessGroups = inst.accessGroups;
    this.lc.createdBy = inst.createdBy;
    this.lc.updatedBy = inst.updatedBy;
    this.lc.id =  dataset.pid;
    this.lc.rawDatasetId = this.lc.id;
    this.lc.datasetId = this.lc.id;
    this.lc.derivedDatasetId = this.lc.datasetId;
    this.lc.createdAt = dataset.createdAt;
    this.lc.updatedAt = inst.updatedAt;
    return this.lc;
  }

  pid_with_prefix( abbrev:string, tag:string){
    return this.pidPrefix + "/BRIGHTNESS/" + abbrev + tag;
  }

  pid_without_prefix(abbrev, tag){
    return "BRIGHTNESS/" + abbrev + tag;
  }


  getDataset(inst: DefaultInstrument, tag: string, file_info: FilesInfo) {
    this.ds = new RawDataset();
    this.ds.pid =
    this.pid_with_prefix(  inst.abbreviation, tag);
    this.ds.principalInvestigator = inst.principalInvestigator;
    this.ds.endTime = file_info.experimentDateTime;
    this.ds.owner = inst.creator;
    this.ds.ownerEmail = inst.ownerEmail;
    this.ds.orcidOfOwner = inst.orcidOfOwner;
    this.ds.contactEmail = inst.contactEmail;
    this.ds.sourceFolder = file_info.sourceFolder;
    this.ds.size = file_info.totalFileSize;
    this.ds.packedSize = this.ds.size;
    this.ds.creationTime = file_info.experimentDateTime;
    this.ds.type = inst.type;
    this.ds.validationStatus = inst.validationStatus;
    this.ds.keywords = inst.keywords;
    this.ds.description = inst.dataDescription;
    this.ds.userTargetLocation = inst.userTargetLocation;
    this.ds.creationLocation = inst.creationLocation;
    this.ds.classification = inst.classification;
    this.ds.license = inst.license;
    this.ds.version = inst.version;
    this.ds.doi = inst.doi_prefix + "/" + inst.abbreviation + tag;
    this.ds.isPublished = inst.isPublished;
    this.ds.ownerGroup = inst.ownerGroup;
    this.ds.accessGroups = inst.accessGroups;
    this.ds.createdBy = inst.createdBy;
    this.ds.updatedBy = inst.updatedBy;
    this.ds.createdAt = file_info.experimentDateTime;
    this.ds.updatedAt = inst.updatedAt;
    if (tag in inst.metadata_object) {
      this.ds.scientificMetadata = inst.metadata_object[tag];
    } else {
      this.ds.scientificMetadata = inst.scientificMetadata;
    }
    this.ds.proposalId = inst.proposal;
    this.ds.sampleId = inst.sampleId;
    return this.ds;
  }

  mainloop() {
    console.log('Starting reading');
    console.time('test');
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

      for (const key of Object.keys(inst.source_folder_array)) {
        const machine_name = hostname();
        let source_folder = "./demo";
        if (machine_name == "r1n4.esss.dk") {
          source_folder = this.basename + inst.source_folder_array[key];
        }

        console.log("gm source", source_folder);
        const file_info = new FilesInfo(source_folder);
        const dat = this.getDataset(inst, key, file_info);
        const life = this.getLifeCycle(inst, dat);
        const orig = this.getOrig(inst, dat, file_info);
        const pub = this.getPublish(inst, key, dat, file_info);
        const key1 = "key" + instTag + key;
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
