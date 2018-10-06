class DefaultInstrument {
  email: string;
  abbreviation: string;
  doi: string;
  affiliation: string;
  creator: string;
  publisher: string;
  publicationYear: number;
  title: string;
  url: string;
  dataDescription: string;
  abstract: string;
  resourceType: string;
  sizeOfArchive: number;
  numberOfFiles: number;
  pidArray: string[];
  authors: string[];
  doiRegisteredSuccessfullyTime: string;
  scientificMetadata: Object;
  proposal: string;
  isOnDisk: boolean;
  isOnTape: boolean;
  archivable: boolean;
  retrievable: boolean;
  archiveStatusMessage: string;
  retrieveStatusMessage: string;
  lastUpdateMessage: string;
  archiveReturnMessage: string;
  dateOfLastMessage: Date;
  dateOfDiskPurging: Date;
  archiveRetentionTime: Date;
  isExported: boolean;
  exportedTo: string;
  dateOfPublishing: Date;

  source_folder_array: string[];
  doi_prefix = "10.17199";
  url_fragment = "https://doi.esss.se/";
}

class Multigrid extends DefaultInstrument {
  constructor() {
    super();
    this.email = "test@kjd.com";
    this.abbreviation = "SONDE";
    this.doi = this.doi_prefix + this.abbreviation;
    this.affiliation = "ESS";
    this.creator = "Ramsey Al Jebali";
    this.publisher = "ESS";
    this.publicationYear = 2018;
    this.title = "Sample Data from SONDE";
    this.url = this.url_fragment + this.abbreviation;
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/SONDE";
    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.resourceType = "Comma Separated Variable (csv) files";
    this.sizeOfArchive = 33.1;
    this.numberOfFiles = 11;
    this.pidArray = ["string"];
    this.authors = ["string"];
    this.doiRegisteredSuccessfullyTime = "2018";
    this.scientificMetadata = {
      id: 3
    };
    this.proposal = "2018ESS2";
    this.isOnDisk = true;
    this.isOnTape = true;
    this.archivable = true;
    this.retrievable = true;
    this.archiveStatusMessage = "string";
    this.retrieveStatusMessage = "string";
    this.lastUpdateMessage = "string";
    this.archiveReturnMessage = "string";
    this.dateOfLastMessage = new Date();
    this.dateOfDiskPurging = new Date();
    this.archiveRetentionTime = new Date();
    this.isExported = true;
    this.exportedTo = "string";
    this.dateOfPublishing = new Date();

    this.source_folder_array = [];
  }
}

class Multiblade extends DefaultInstrument {
  constructor() {
    super();
    this.email = "test@kjd.com";
    this.abbreviation = "SONDE";
    this.doi = this.doi_prefix + this.abbreviation;
    this.affiliation = "ESS";
    this.creator = "Ramsey Al Jebali";
    this.publisher = "ESS";
    this.publicationYear = 2018;
    this.title = "Sample Data from SONDE";
    this.url = this.url_fragment + this.abbreviation;
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/SONDE";
    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.resourceType = "Comma Separated Variable (csv) files";
    this.sizeOfArchive = 33.1;
    this.numberOfFiles = 11;
    this.pidArray = ["string"];
    this.authors = ["string"];
    this.doiRegisteredSuccessfullyTime = "2018";
    this.scientificMetadata = {
      id: 3
    };
    this.proposal = "2018ESS2";
    this.isOnDisk = true;
    this.isOnTape = true;
    this.archivable = true;
    this.retrievable = true;
    this.archiveStatusMessage = "string";
    this.retrieveStatusMessage = "string";
    this.lastUpdateMessage = "string";
    this.archiveReturnMessage = "string";
    this.dateOfLastMessage = new Date();
    this.dateOfDiskPurging = new Date();
    this.archiveRetentionTime = new Date();
    this.isExported = true;
    this.exportedTo = "string";
    this.dateOfPublishing = new Date();

    this.source_folder_array = [];
  }
}

class Sonde extends DefaultInstrument {
  constructor() {
    super();
    this.email = "test@kjd.com";
    this.abbreviation = "SONDE";
    this.doi = this.doi_prefix + this.abbreviation;
    this.affiliation = "ESS";
    this.creator = "Ramsey Al Jebali";
    this.publisher = "ESS";
    this.publicationYear = 2018;
    this.title = "Sample Data from SONDE";
    this.url = this.url_fragment + this.abbreviation;
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/SONDE";
    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.resourceType = "Comma Separated Variable (csv) files";
    this.sizeOfArchive = 33.1;
    this.numberOfFiles = 11;
    this.pidArray = ["string"];
    this.authors = ["string"];
    this.doiRegisteredSuccessfullyTime = "2018";
    this.scientificMetadata = {
      id: 3
    };
    this.proposal = "2018ESS2";
    this.isOnDisk = true;
    this.isOnTape = true;
    this.archivable = true;
    this.retrievable = true;
    this.archiveStatusMessage = "string";
    this.retrieveStatusMessage = "string";
    this.lastUpdateMessage = "string";
    this.archiveReturnMessage = "string";
    this.dateOfLastMessage = new Date();
    this.dateOfDiskPurging = new Date();
    this.archiveRetentionTime = new Date();
    this.isExported = true;
    this.exportedTo = "string";
    this.dateOfPublishing = new Date();

    this.source_folder_array = [];
  }
}

class Nmx extends DefaultInstrument {
  constructor() {
    super();
    this.email = "test@kjd.com";
    this.abbreviation = "SONDE";
    this.doi = this.doi_prefix + this.abbreviation;
    this.affiliation = "ESS";
    this.creator = "Ramsey Al Jebali";
    this.publisher = "ESS";
    this.publicationYear = 2018;
    this.title = "Sample Data from SONDE";
    this.url = this.url_fragment + this.abbreviation;
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/SONDE";
    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.resourceType = "Comma Separated Variable (csv) files";
    this.sizeOfArchive = 33.1;
    this.numberOfFiles = 11;
    this.pidArray = ["string"];
    this.authors = ["string"];
    this.doiRegisteredSuccessfullyTime = "2018";
    this.scientificMetadata = {
      id: 3
    };
    this.proposal = "2018ESS2";
    this.isOnDisk = true;
    this.isOnTape = true;
    this.archivable = true;
    this.retrievable = true;
    this.archiveStatusMessage = "string";
    this.retrieveStatusMessage = "string";
    this.lastUpdateMessage = "string";
    this.archiveReturnMessage = "string";
    this.dateOfLastMessage = new Date();
    this.dateOfDiskPurging = new Date();
    this.archiveRetentionTime = new Date();
    this.isExported = true;
    this.exportedTo = "string";
    this.dateOfPublishing = new Date();

    this.source_folder_array = [];
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
    } else if (instrument === "nmx") {
      const inst = new Nmx();
      return inst;
    }
  }
}

export {Multiblade, Multigrid, Sonde, Nmx, InstrumentFactory };
