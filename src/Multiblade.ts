import { DefaultInstrument } from "./instrument";
import { FilesInfo } from "./filesinfo";
import { MultibladeMetadata } from "./MultibladeMetadata";
export class Multiblade extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "MB";
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/Zaba";
    this.orcidOfOwner = "https://orcid.org/0000-0002-0325-4407";
    this.owner = "Francesco Piscitelli";
    this.ownerEmail = "Francesco.Piscitelli@esss.se";
    this.proposal = "23PTEG";
    this.resourceType = "lst1 files";
    this.sourceFolder =
      "multiblade/data/brightness/2017_06_BNC_MB16T_ElectronicsTests/DATA";
    this.userTargetLocation = "multiblade";
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
      id: 3
    };
    const metadata = new MultibladeMetadata();
    this.sourceFolderArray = metadata.sourceFolderArray;
    this.metadataObject = metadata.metadataObject;
  }
  public getTime(fileInfo: FilesInfo) {
    {
      // console.log("get mulitblade time");
    }
    const str = "";
    return str;
  }
}
