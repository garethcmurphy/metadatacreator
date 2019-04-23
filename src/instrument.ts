import { SondeMetadata } from "./SondeMetadata";
import { NMXMetadata } from "./NMXMetadata";
import { MultibladeMetadata } from "./MultibladeMetadata";
import { MultigridMetadata } from "./MultigridMetadata";
import { BeamInstrumentationMetadata } from "./BeamInstrumentationMetadata";
import { V20Metadata } from "./V20Metadata";
import * as moment from "moment";
import { FilesInfo } from "./filesinfo";
import { DatasetLifecycle } from "./DatasetLifecycle";
import { DSCMetadata } from "./DSCMetadata";

class DefaultInstrument {
  doiPlainPrefix = "10.17199/";
  doiPrefix = "10.17199/BRIGHTNESS";
  pidPrefix = "20.500.12269";
  urlFragment = "https://scicat.esss.se/datasets/";
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
  version = "3.01";
  doi: string;
  isPublished = true;
  ownerGroup = "ess";
  accessGroups = ["brightness", "ess"];
  createdBy = "ingestor";
  updatedBy = "ingestor";
  createdAt = this.endTime;
  updatedAt = this.endTime;
  sampleId = this.pidPrefix + "/SAMPLE001";
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
  description = "";

  sampleDescription = "Vanadium in a container";
  sampleCharacteristics = { description: "Vanadium in a container" };

  isOnDisk = true;
  isOnTape = true;
  archivable = true;
  retrievable = true;
  publishable = true;
  archiveStatusMessage = "Stored on primary disk and on tape";
  retrieveStatusMessage = "string";
  lastUpdateMessage = "string";
  archiveReturnMessage = { string: "string" };
  retrieveReturnMessage = { string: "string" };
  dateOfLastMessage = this.endTime;
  dateOfDiskPurging = this.endTime;
  archiveRetentionTime = this.endTime;
  isExported = true;
  exportedTo = "string";
  dateOfPublishing = this.endTime;

  embargoPeriod = 3;

  sourceFolderArray: Object;
  metadataObject: Object;
  sampleObject = {};

  getTime(fileInfo: FilesInfo) {
    console.log("get time");


    const datetime= new Date(Date.now());
    const str = datetime.toISOString();
    return str;
  }
}

class Multigrid extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "MG";
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/Multigrid-Data-Format-I";
    this.orcidOfOwner = "https://orcid.org/0000-0002-8421-1184";
    this.owner = "Anton Khaplanov";
    this.ownerEmail = "anton.khaplanov@esss.se";
    this.proposal =  "439YZU";
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
    this.metadataObject = metadata.metadata_object;
  }

  getTime(fileInfo: FilesInfo) {
    {
      const filestring = fileInfo.sourceFolder;
      if (filestring == null) {
        console.log("unable to extcract srouce folder");
        return "20180801";
      }
      const basename = filestring.split("/").reverse()[0];
      const date = moment.utc(basename, "M-D HH-mm");
      if (!date.isValid()) {
        //return fileInfo.experimentDateTime.toISOString();
        console.log("unable to extract date");
        return "20180801";
      }
      console.log("moment date ", date.toISOString());
      

      console.log("get experiment date time ",fileInfo.experimentDateTime);
      const correctyear = new Date(fileInfo.experimentDateTime).getFullYear();
      date.year(correctyear);
      console.log('correct year',correctyear);
      const newDate = new Date(
        correctyear,
        date.month(),
        date.date(),
        date.hour(),
        date.minute()
      );


      const dateString = date.toISOString();
      console.log(filestring, dateString);
      return dateString;
    }
  }
}

class Multiblade extends DefaultInstrument {
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
    this.metadataObject = metadata.metadata_object;
  }

  getTime(fileInfo: FilesInfo) {
    {
      console.log("get mulitblade time");
    }
    const str = "";
    return str;
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
    this.metadataObject = metadata.metadata_object;
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
      id: 3
    };
    const metadata = new NMXMetadata();
    this.sourceFolderArray = metadata.sourceFolderArray;
    this.metadataObject = metadata.metadata_object;
  }
}

class DSC extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "DSC";
    this.dataDescription = "https://github.com/ess-dmsc/ess_file_formats/wiki/DSC";
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
    this.doi = this.doiPlainPrefix + this.proposal + ".  "+ this.abbreviation;
    this.pidArray = [this.pid];
    this.principalInvestigator = this.owner;
    this.title = "Differential scanning calorimetry (DSC) data for breast cancer cells" ;
    this.url = this.urlFragment + this.abbreviation;
    this.keywords = [this.userTargetLocation, "neutron", "detector"];
    
    this.abstract = "Datasets from differential scanning calorimetry (DSC) data for breast cancer cells";
    this.description = this.abstract + " " + this.dataDescription;

    const metadata = new DSCMetadata();
    this.sourceFolderArray = metadata.sourceFolderArray;
    this.metadataObject = metadata.metadata_object;
    this.sampleObject = metadata.sampleObject;
  }
}
class V20 extends DefaultInstrument {
  constructor() {
    super();
    this.abbreviation = "V20";
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/HDF5";
    this.owner = "Jonas Nilsson";
    this.ownerEmail = "Jonas.Nilsson@esss.se";
    this.orcidOfOwner = "https://orcid.org/0000-0003-3893-2308";
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
    this.metadataObject = metadata.metadata_object;
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
    //this.orcidOfOwner = "https://orcid.org/0000-0000-0000-0000";
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
      id: 3
    };
    const metadata = new BeamInstrumentationMetadata();
    this.sourceFolderArray = metadata.sourceFolderArray;
    this.metadataObject = metadata.metadata_object;
  }

  getTime(fileInfo: FilesInfo) {
    console.log("get time");


    const datetime= new Date(Date.now());
    const str = datetime.toISOString();
    return str;
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
    } else if (instrument === "dsc") {
      const inst = new DSC();
      return inst;
    } else if (instrument === "v20") {
      const inst = new V20();
      return inst;
    }
  }
}

export {
  Multiblade,
  Multigrid,
  Sonde,
  Nmx,
  V20,
  DSC,
  BeamInstrumentation,
  InstrumentFactory,
  DefaultInstrument
};
