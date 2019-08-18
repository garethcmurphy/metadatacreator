import { BeamInstrumentationMetadata } from "./BeamInstrumentationMetadata";
import { FilesInfo } from "./filesinfo";
import { DefaultInstrument } from "./instrument";
export class BeamInstrumentation extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "BeamInstrumentation";
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/HDF5";
    this.owner = "Clement Derrez";
    this.ownerEmail = "Clement.Derrez@esss.se";
    // this.orcidOfOwner = "https://orcid.org/0000-0000-0000-0000";
    this.proposal = "MRV1E2";
    this.resourceType = "hdf5 files";
    this.userTargetLocation = "BeamInstrumentation";
    this.sourceFolder = "beamInstrumentation";
    this.authors = [this.owner];
    this.contactEmail = this.ownerEmail;
    this.creationLocation = this.userTargetLocation;
    this.creator = this.owner;
    this.doi = this.doiPrefix + this.abbreviation;
    this.pidArray = [this.pid];
    this.principalInvestigator = this.owner;
    this.title = "Sample Data from " + this.abbreviation;
    this.url = this.urlFragment + this.abbreviation;
    this.keywords = [this.userTargetLocation, "neutron", "detector"];
    this.abstract =
      "This data was collected as part of the beam instrumentation program";
    this.description = this.abstract + " " + this.dataDescription;
    this.scientificMetadata = {
      id: 3,
    };
    const metadata = new BeamInstrumentationMetadata();
    this.sourceFolderArray = metadata.sourceFolderArray;
    this.metadataObject = metadata.metadataObject;
  }

  public getTime(fileInfo: FilesInfo) {
    // console.log("get time");
    const datetime = new Date(Date.now());
    const str = datetime.toISOString();
    return str;
  }
}
