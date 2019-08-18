import * as moment from "moment";
import { BeamInstrumentationMetadata } from "./BeamInstrumentationMetadata";
import { DSCMetadata } from "./DSCMetadata";
import { FilesInfo } from "./filesinfo";
import { MultibladeMetadata } from "./MultibladeMetadata";
import { MultigridMetadata } from "./MultigridMetadata";
import { NMXMetadata } from "./NMXMetadata";
import { SondeMetadata } from "./SondeMetadata";
import { V20Metadata } from "./V20Metadata";

class DefaultInstrument {
public  doiPlainPrefix = "10.17199/";
public  doiPrefix = "10.17199/BRIGHTNESS";
public  pidPrefix = "20.500.12269";
public  urlFragment = "https://scicat.esss.se/datasets/";
public  principalInvestigator: string;
public  endTime = new Date();
public  creationLocation: string;
public  scientificMetadata: object;
public  pid: string;
public  owner: string;
public  ownerEmail: string;
public  orcidOfOwner: string;
public  contactEmail: string;
public  sourceFolder: string;
public  packedSize = 33;
public  userTargetLocation: string;
public  classification: string;
public  creationTime = this.endTime;
public  type = "raw";
public  validationStatus = "valid";
public  keywords = ["valid"];
public  license = "ESS";
public  version = "3.01";
public  doi: string;
public  isPublished = true;
public  ownerGroup = "ess";
public  accessGroups = ["brightness", "ess"];
public  createdBy = "ingestor";
public  updatedBy = "ingestor";
public  createdAt = this.endTime;
public  updatedAt = this.endTime;
public  sampleId = this.pidPrefix + "/SAMPLE001";
public  proposal: string;
  MeasurementPeriodList = [
    {
      id: "string",
      instrument: "default",
      start: "2016-09-02T01:01:00+0000",
      end: "2019-09-22T23:59:00+0000",
      comment: "string"
    }
  ];

public  abbreviation: string;
public  creator: string;
public  affiliation = "ESS";
public  publisher = "ESS";
public  publicationYear = 2018;
public  title: string;
public  url: string;
public  dataDescription: string;
public  abstract: string;
public  resourceType: string;
public  thumbnail = "string";
public  sizeOfArchive = 22;
public  numberOfFiles = 21;
public  pidArray: string[];
public  authors: string[];
public  doiRegisteredSuccessfullyTime = this.endTime;
public  description = "";

public  sampleDescription = "Vanadium in a container";
public  sampleCharacteristics = { description: "Vanadium in a container" };

public  isOnDisk = true;
public  isOnTape = true;
public  archivable = true;
public  retrievable = false;
public  publishable = true;
public  archiveStatusMessage = "Stored on primary disk and on tape";
public  retrieveStatusMessage = "string";
public  lastUpdateMessage = "string";
public  archiveReturnMessage = { string: "string" };
public  retrieveReturnMessage = { string: "string" };
public  dateOfLastMessage = this.endTime;
public  dateOfDiskPurging = this.endTime;
public  archiveRetentionTime = this.endTime;
public  isExported = true;
public  exportedTo = "string";
public  dateOfPublishing = this.endTime;

public  embargoPeriod = 3;

public  sourceFolderArray: object;
public  metadataObject: object;

public   sampleObject = {};

  getTime(fileInfo: FilesInfo) {
    console.log("get time");

    const datetime = new Date(Date.now());
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
        id: "string",
        instrument: this.abbreviation,
        start: "2016-01-02T01:01:00+0000",
        end: "2019-09-22T23:59:00+0000",
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

      console.log("get experiment date time ", fileInfo.experimentDateTime);
      const correctyear = new Date(fileInfo.experimentDateTime).getFullYear();
      date.year(correctyear);
      console.log("correct year", correctyear);
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
    this.metadataObject = metadata.metadataObject;
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

    const datetime = new Date(Date.now());
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
