import { SondeMetadata } from "./SondeMetadata";
import { NMXMetadata } from "./NMXMetadata";
import { MultibladeMetadata } from "./MultibladeMetadata";
import { MultigridMetadata } from "./MultigridMetadata";
import { BeamInstrumentationMetadata } from "./BeamInstrumentationMetadata";

class DefaultInstrument {
  principalInvestigator: string;
  endTime = new Date();
  creationLocation: string;
  scientificMetadata: Object;
  pid: string;
  owner: string;
  ownerEmail: string;
  orcidOfOwner: string;
  contactEmail: string;
  sourceFolder: string;
  packedSize = 33;
  userTargetLocation: string;
  classification: string;
  creationTime = this.endTime;
  type = "raw";
  validationStatus = "valid";
  keywords = ["valid"];
  license = "ESS";
  version = "version";
  doi: string;
  isPublished = true;
  ownerGroup = "ess";
  accessGroups = ["brightness", "ess"];
  createdBy = "ingestor";
  updatedBy = "ingestor";
  createdAt = new Date();
  updatedAt = new Date();
  sampleId = "SAMPLE001";
  proposal: string;

  abbreviation: string;
  creator: string;
  affiliation = "ESS";
  publisher = "ESS";
  publicationYear = 2018;
  title: string;
  url: string;
  dataDescription: string;
  abstract: string;
  resourceType: string;
  thumbnail = "string";
  sizeOfArchive = 22;
  numberOfFiles = 21;
  pidArray: string[];
  authors: string[];
  doiRegisteredSuccessfullyTime = this.endTime;

  isOnDisk = true;
  isOnTape = true;
  archivable = true;
  retrievable = true;
  archiveStatusMessage = "Stored on primary disk and on tape";
  retrieveStatusMessage = "string";
  lastUpdateMessage = "string";
  archiveReturnMessage = "string";
  dateOfLastMessage = this.endTime;
  dateOfDiskPurging = this.endTime;
  archiveRetentionTime = this.endTime;
  isExported = true;
  exportedTo = "string";
  dateOfPublishing = this.endTime;

  embargoPeriod = 3;

  source_folder_array: Object;
  doi_prefix = "10.17199/";
  pid_prefix = "20.500.12269";
  url_fragment = "https://scicat.esss.se/datasets/";
  metadata_object: Object;
}

class Multigrid extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "Multigrid";
    this.dataDescription = "https://github.com/ess-dmsc/ess_file_formats/wiki/Multigrid-Data-Format-I";
    this.orcidOfOwner = "0000-0002-8421-1184";
    this.owner = "Anton Khaplanov";
    this.ownerEmail = "anton.khaplanov@esss.se";
    this.proposal = "2018ESS3";
    this.resourceType = "raw binary files in Multigrid format";
    this.sourceFolder = "multigrid/data/raw/MG_CNCS/07_14";
    this.userTargetLocation = "multigrid";

    this.authors = [this.owner];
    this.contactEmail = this.ownerEmail;
    this.creationLocation = this.userTargetLocation;
    this.creator = this.owner;
    this.doi = this.doi_prefix + this.abbreviation;
    this.pidArray = [this.pid];
    this.principalInvestigator = this.owner;
    this.principalInvestigator = this.owner;
    this.title = "Sample Data from " + this.abbreviation;
    this.url = this.url_fragment + this.abbreviation;

    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.scientificMetadata = {
      id: 3
    };

    const metadata = new MultigridMetadata();
    this.source_folder_array = metadata.source_folder_array;
    this.metadata_object = metadata.metadata_object;
  }
}

class Multiblade extends DefaultInstrument {
  constructor() {
    super();

    this.abbreviation = "Multiblade";
    this.dataDescription = "https://github.com/ess-dmsc/ess_file_formats/wiki/Zaba";
    this.orcidOfOwner = "0000-0002-0325-4407";
    this.owner = "Francesco Piscitelli";
    this.ownerEmail = "Francesco.Piscitelli@esss.se";
    this.proposal = "2018ESS1";
    this.resourceType = "lst1 files";
    this.sourceFolder = "multiblade/data/brightness/2017_06_BNC_MB16T_ElectronicsTests/DATA";
    this.userTargetLocation = "multiblade";

    this.authors = [this.owner];
    this.contactEmail = this.ownerEmail;
    this.creationLocation = this.userTargetLocation;
    this.creator = this.owner;
    this.doi = this.doi_prefix + this.abbreviation;
    this.pidArray = [this.pid];
    this.principalInvestigator = this.owner;
    this.title = "Sample Data from " + this.abbreviation;
    this.url = this.url_fragment + this.abbreviation;

    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.scientificMetadata = {
      id: 3
    };

    const metadata = new MultibladeMetadata();
    this.source_folder_array = metadata.source_folder_array;
    this.metadata_object = metadata.metadata_object;

  }
}

class Sonde extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "SONDE";
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/SONDE";
    this.owner = "Ramsey Al Jebali";
    this.ownerEmail = "ramsey.aljebali@esss.se";
    this.orcidOfOwner = "0000-0000-0000-0000";
    this.proposal = "2018ESS2";
    this.resourceType = "Comma Separated Variable (csv) files";
    this.userTargetLocation = "SoNDe";
    this.sourceFolder = "sonde/IFE_june_2018/data/S13";

    this.authors = [this.owner];
    this.contactEmail = this.ownerEmail;
    this.creationLocation = this.userTargetLocation;
    this.creator = this.owner;
    this.doi = this.doi_prefix + this.abbreviation;
    this.pidArray = [this.pid];
    this.principalInvestigator = this.owner;
    this.title = "Sample Data from " + this.abbreviation;
    this.url = this.url_fragment + this.pid_prefix + "%2F" + this.abbreviation;

    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.scientificMetadata = {
      id: 3
    };
    const metadata = new SondeMetadata();
    this.source_folder_array = metadata.source_folder_array;
    this.metadata_object = metadata.metadata_object;
  }
}


class Nmx extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "NMX";
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/NMX";
    this.owner = "Dorothea Pfeiffer";
    this.ownerEmail = "Dorothea.Pfeiffer@esss.se";
    this.orcidOfOwner = "0000-0003-3893-2308";
    this.proposal = "2018ESS4";
    this.resourceType = "hdf5 files";
    this.userTargetLocation = "NMX";
    this.sourceFolder = "nmx/data/h5/analyzed/dead200dead600/IFE_2015_Feb";

    this.authors = [this.owner];
    this.contactEmail = this.ownerEmail;
    this.creationLocation = this.userTargetLocation;
    this.creator = this.owner;
    this.doi = this.doi_prefix + this.abbreviation;
    this.pidArray = [this.pid];
    this.principalInvestigator = this.owner;
    this.title = "Sample Data from " + this.abbreviation;
    this.url = this.url_fragment + this.abbreviation;

    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.scientificMetadata = {
      id: 3
    };
    const metadata = new NMXMetadata();
    this.source_folder_array = metadata.source_folder_array;
    this.metadata_object = metadata.metadata_object;
  }
}


class BeamInstrumentation extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "BeamInstrumentation";
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/HDF5";
    this.owner = "Clement Derrez";
    this.ownerEmail = "Clement.Derrez@esss.se";
    this.orcidOfOwner = "0000-0000-0000-0000";
    this.proposal = "2018ESS5";
    this.resourceType = "hdf5 files";
    this.userTargetLocation = "BeamInstrumentation";
    this.sourceFolder = "beamInstrumentation";

    this.authors = [this.owner];
    this.contactEmail = this.ownerEmail;
    this.creationLocation = this.userTargetLocation;
    this.creator = this.owner;
    this.doi = this.doi_prefix + this.abbreviation;
    this.pidArray = [this.pid];
    this.principalInvestigator = this.owner;
    this.title = "Sample Data from " + this.abbreviation;
    this.url = this.url_fragment + this.abbreviation;

    this.abstract =
      "This data was collected as part of the beam instrumentation program";
    this.scientificMetadata = {
      id: 3
    };
    const metadata = new BeamInstrumentationMetadata();
    this.source_folder_array = metadata.source_folder_array;
    this.metadata_object = metadata.metadata_object;
  }
}


class InstrumentFactory {
  createInstrument(type: Object);
  createInstrument(type: Object): Sonde;
  createInstrument(type: Object): Nmx;

  public createInstrument(instrument): Sonde | Nmx | Multigrid | Multiblade {
    if (instrument === "sonde") {
      const inst = new Sonde();
      return inst;
    } else if (instrument === "multigrid") {
      const inst = new Multigrid();
      return inst;
    } else if (instrument === "multiblade") {
      const inst = new Multiblade();
      return inst;
    } else if (instrument === "beaminstrumentation") {
      const inst = new BeamInstrumentation();
      return inst;
    } else if (instrument === "nmx") {
      const inst = new Nmx();
      return inst;
    }
  }
}

export {
  Multiblade,
  Multigrid,
  Sonde,
  Nmx,
  BeamInstrumentation,
  InstrumentFactory,
  DefaultInstrument
};
