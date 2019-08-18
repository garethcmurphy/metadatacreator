import { SondeMetadata } from "./SondeMetadata";
import { DefaultInstrument } from "./instrument";
export class Sonde extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "SONDE";
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/SONDE";
    this.owner = "Ramsey Al Jebali";
    this.ownerEmail = "ramsey.aljebali@esss.se";
    this.orcidOfOwner = "https://orcid.org/0000-0000-0000-0000";
    this.proposal = "LM28IF";
    this.resourceType = "Comma Separated Variable (csv) files";
    this.userTargetLocation = "SoNDe";
    this.sourceFolder = "sonde/IFE_june_2018/data/S13";
    this.authors = [this.owner];
    this.contactEmail = this.ownerEmail;
    this.creationLocation = this.userTargetLocation;
    this.creator = this.owner;
    this.doi = this.doiPrefix + this.abbreviation;
    this.pidArray = [this.pid];
    this.principalInvestigator = this.owner;
    this.title = "Sample Data from " + this.userTargetLocation;
    this.url = this.urlFragment;
    this.keywords = [this.userTargetLocation, "neutron", "detector"];
    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.description = this.abstract + " " + this.dataDescription;
    this.scientificMetadata = {
      id: 3
    };
    const metadata = new SondeMetadata();
    this.sourceFolderArray = metadata.sourceFolderArray;
    this.metadataObject = metadata.metadataObject;
  }
}
