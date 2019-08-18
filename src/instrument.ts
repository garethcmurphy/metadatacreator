import { FilesInfo } from "./filesinfo";

export class DefaultInstrument {
  public doiPlainPrefix = "10.17199/";
  public doiPrefix = "10.17199/BRIGHTNESS";
  public pidPrefix = "20.500.12269";
  public urlFragment = "https://scicat.esss.se/datasets/";
  public principalInvestigator: string;
  public endTime = new Date();
  public creationLocation: string;
  public scientificMetadata: object;
  public pid: string;
  public owner: string;
  public ownerEmail: string;
  public orcidOfOwner: string;
  public contactEmail: string;
  public sourceFolder: string;
  public packedSize = 33;
  public userTargetLocation: string;
  public classification: string;
  public creationTime = this.endTime;
  public type = "raw";
  public validationStatus = "valid";
  public keywords = ["valid"];
  public license = "ESS";
  public version = "3.01";
  public doi: string;
  public isPublished = true;
  public ownerGroup = "ess";
  public accessGroups = ["brightness", "ess"];
  public createdBy = "ingestor";
  public updatedBy = "ingestor";
  public createdAt = this.endTime;
  public updatedAt = this.endTime;
  public sampleId = this.pidPrefix + "/SAMPLE001";
  public proposal: string;
  public MeasurementPeriodList = [
    {
      comment: "string",
      end: "2019-09-22T23:59:00+0000",
      id: "string",
      instrument: "default",
      start: "2016-09-02T01:01:00+0000",
    },
  ];

  public abbreviation: string;
  public creator: string;
  public affiliation = "ESS";
  public publisher = "ESS";
  public publicationYear = 2018;
  public title: string;
  public url: string;
  public dataDescription: string;
  public abstract: string;
  public resourceType: string;
  public thumbnail = "string";
  public sizeOfArchive = 22;
  public numberOfFiles = 21;
  public pidArray: string[];
  public authors: string[];
  public doiRegisteredSuccessfullyTime = this.endTime;
  public description = "";

  public sampleDescription = "Vanadium in a container";
  public sampleCharacteristics = { description: "Vanadium in a container" };

  public isOnDisk = true;
  public isOnTape = true;
  public archivable = true;
  public retrievable = false;
  public publishable = true;
  public archiveStatusMessage = "Stored on primary disk and on tape";
  public retrieveStatusMessage = "string";
  public lastUpdateMessage = "string";
  public archiveReturnMessage = { string: "string" };
  public retrieveReturnMessage = { string: "string" };
  public dateOfLastMessage = this.endTime;
  public dateOfDiskPurging = this.endTime;
  public archiveRetentionTime = this.endTime;
  public isExported = true;
  public exportedTo = "string";
  public dateOfPublishing = this.endTime;

  public embargoPeriod = 3;

  public sourceFolderArray: object;
  public metadataObject: object;

  public sampleObject = {};

  public getTime(fileInfo: FilesInfo) {
    // console.log("get time");

    const datetime = new Date(Date.now());
    const str = datetime.toISOString();
    return str;
  }
}
