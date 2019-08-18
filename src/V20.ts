import { V20Metadata } from "./V20Metadata";
import { DefaultInstrument } from "./instrument";
export class V20 extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "V20";
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/HDF5";
    this.owner = "Tobias Richter";
    this.ownerEmail = "Tobias.Richter@esss.se";
    this.orcidOfOwner = "https://orcid.org/0000-0002-7774-8995";
    this.proposal = "67JH32";
    this.resourceType = "hdf5 files";
    this.userTargetLocation = "V20";
    this.sourceFolder = "nmx/data/h5/analyzed/dead200dead600/IFE_2015_Feb";
    this.authors = [this.owner];
    this.contactEmail = this.ownerEmail;
    this.creationLocation = this.userTargetLocation;
    this.creator = this.owner;
    this.doi = this.doiPrefix + this.abbreviation;
    this.pidArray = [this.pid];
    this.principalInvestigator = this.owner;
    this.title = "Sample Data from " + this.userTargetLocation;
    this.url = this.urlFragment + this.abbreviation;
    this.keywords = [this.userTargetLocation, "neutron", "detector"];
    this.MeasurementPeriodList = [
      {
        id: "string",
        instrument: "V20",
        start: "2018-01-02T01:01:00+0000",
        end: "2019-06-01T23:59:00+0000",
        comment: "string"
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
    const metadata = new V20Metadata();
    this.sourceFolderArray = metadata.sourceFolderArray;
    this.metadataObject = metadata.metadataObject;
  }
}
