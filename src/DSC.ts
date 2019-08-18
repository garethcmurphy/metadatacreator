import { DSCMetadata } from "./DSCMetadata";
import { DefaultInstrument } from "./instrument";
export class DSC extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "DSC";
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/DSC";
    this.owner = "Heloisa Nunes Bordallo";
    this.ownerEmail = "bordallo@nbi.ku.dk";
    this.orcidOfOwner = "https://orcid.org/0000-0003-0750-0553";
    this.proposal = "NXMV08";
    this.resourceType = "CSV files";
    this.userTargetLocation = "DSC";
    this.sourceFolder = "dsc/dsc01/";
    this.authors = [this.owner, "Murillo Longo Martins"];
    this.contactEmail = this.ownerEmail;
    this.creationLocation = this.userTargetLocation;
    this.creator = this.owner;
    this.doi = this.doiPlainPrefix + this.proposal + ".  " + this.abbreviation;
    this.pidArray = [this.pid];
    this.principalInvestigator = this.owner;
    this.title =
      "Differential scanning calorimetry (DSC) data for breast cancer cells";
    this.url = this.urlFragment + this.abbreviation;
    this.keywords = [this.userTargetLocation, "neutron", "detector"];
    this.abstract =
      "Datasets from differential scanning calorimetry (DSC) data for breast cancer cells";
    this.description = this.abstract + " " + this.dataDescription;
    const metadata = new DSCMetadata();
    this.sourceFolderArray = metadata.sourceFolderArray;
    this.metadataObject = metadata.metadataObject;
    this.sampleObject = metadata.sampleObject;
  }
}
