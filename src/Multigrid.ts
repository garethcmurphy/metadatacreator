import { DefaultInstrument } from "./instrument";
import { FilesInfo } from "./filesinfo";
import { MultigridMetadata } from "./MultigridMetadata";

import * as moment from "moment";
export class Multigrid extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "MG";
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/Multigrid-Data-Format-I";
    this.orcidOfOwner = "https://orcid.org/0000-0002-8421-1184";
    this.owner = "Anton Khaplanov";
    this.ownerEmail = "anton.khaplanov@esss.se";
    this.proposal = "439YZU";
    this.resourceType = "raw binary files in Multigrid format";
    this.sourceFolder = "multigrid/data/raw/MG_CNCS/07_14";
    this.userTargetLocation = "multigrid";
    this.authors = [this.owner];
    this.contactEmail = this.ownerEmail;
    this.creationLocation = this.userTargetLocation;
    this.creator = this.owner;
    this.doi = this.doiPrefix + "/" + this.abbreviation;
    this.pidArray = [this.pid];
    this.principalInvestigator = this.owner;
    this.principalInvestigator = this.owner;
    this.title = "Sample Data from " + this.userTargetLocation;
    this.url = this.urlFragment + this.abbreviation;
    this.keywords = [this.userTargetLocation, "neutron", "detector"];
    this.MeasurementPeriodList = [
      {
        comment: "string",
        end: "2019-09-22T23:59:00+0000",
        id: "string",
        instrument: this.abbreviation,
        start: "2016-01-02T01:01:00+0000",
      }
    ];
    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.description = this.abstract + " " + this.dataDescription;
    this.scientificMetadata = {
      id: 3
    };
    const metadata = new MultigridMetadata();
    this.sourceFolderArray = metadata.sourceFolderArray;
    this.metadataObject = metadata.metadataObject;
  }
  public getTime(fileInfo: FilesInfo) {
    {
      const filestring = fileInfo.sourceFolder;
      if (filestring == null) {
        // console.log("unable to extcract srouce folder");
        return "20180801";
      }
      const basename = filestring.split("/").reverse()[0];
      const date = moment.utc(basename, "M-D HH-mm");
      if (!date.isValid()) {
        // return fileInfo.experimentDateTime.toISOString();
        // console.log("unable to extract date");
        return "20180801";
      }
      // console.log("moment date ", date.toISOString());
      // console.log("get experiment date time ", fileInfo.experimentDateTime);
      const correctyear = new Date(fileInfo.experimentDateTime).getFullYear();
      date.year(correctyear);
      // console.log("correct year", correctyear);
      const newDate = new Date(correctyear, date.month(), date.date(), date.hour(), date.minute());
      const dateString = date.toISOString();
      console.log(filestring, dateString);
      return dateString;
    }
  }
}
