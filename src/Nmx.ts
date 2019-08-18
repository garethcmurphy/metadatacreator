import { NMXMetadata } from "./NMXMetadata";
import { DefaultInstrument } from "./instrument";
export class Nmx extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "NMX";
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/NMX";
    this.owner = "Dorothea Pfeiffer";
    this.ownerEmail = "Dorothea.Pfeiffer@esss.se";
    this.orcidOfOwner = "https://orcid.org/0000-0003-3893-2308";
    this.proposal = "2LG2QT";
    this.resourceType = "hdf5 files";
    this.userTargetLocation = "NMX";
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
    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.description = this.abstract + " " + this.dataDescription;
    this.scientificMetadata = {
      id: 3,
    };
    const metadata = new NMXMetadata();
    this.sourceFolderArray = metadata.sourceFolderArray;
    this.metadataObject = metadata.metadataObject;
  }
}
