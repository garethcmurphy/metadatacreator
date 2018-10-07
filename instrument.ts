class DefaultInstrument {
  email: string;
  owner: string;
  ownerEmail: string;
  orcidOfOwner: string;
  contactEmail: string;
  principalInvestigator: string;
  userTargetLocation: string;
  sourceFolder: string;
  creationLocation: string;
  abbreviation: string;
  classification: string;
  license = "ESS";
  version = "version";
  isPublished = true;
  ownerGroup = "brightness";
  accessGroups = ["brightness", "ess"];
  createdBy = "ingestor";
  updatedBy = "ingestor";
  createdAt = new Date();
  updatedAt = new Date();
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
  thumbnail ="string";
  sizeOfArchive= 22;
  numberOfFiles= 21;
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

  source_folder_array: Object;
  doi_prefix = "10.17199";
  pid_prefix = "20.500.12269";
  url_fragment = "https://sciat.esss.se/datasets/";
}

class Multigrid extends DefaultInstrument {
  constructor() {
    super();
    this.owner = "Anton Khaplanov";
    this.ownerEmail = "anton.khaplanov@esss.se";
    this.orcidOfOwner = "0000-0002-8421-1184";
    this.contactEmail = this.ownerEmail;
    this.principalInvestigator = this.owner;
    this.userTargetLocation = "multigrid";
    this.sourceFolder = "multigrid/data/raw/MG_CNCS/07_14";
    this.creationLocation = this.userTargetLocation;
    this.email = "test@kjd.com";
    this.abbreviation = "Multigrid";
    this.classification = " string ";
    this.license = "ESS";
    this.version = " string ";
    this.isPublished = true;
    this.ownerGroup = "string";
    this.accessGroups = ["string"];
    this.createdBy = " string ";
    this.updatedBy = " string ";
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.doi = this.doi_prefix + this.abbreviation;
    this.affiliation = "ESS";
    this.creator = this.owner;
    this.publisher = "ESS";
    this.publicationYear = 2018;
    this.title = "Sample Data from " + this.abbreviation;
    this.url = this.url_fragment + this.abbreviation;
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/SONDE";
    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.resourceType = "Comma Separated Variable (csv) files";
    this.pidArray = ["string"];
    this.authors = [this.owner];
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

    this.source_folder_array = {
      "0001": "multigrid/data/raw/MG_CNCS/07_11/beamOn_resetOn",
      "0002": "multigrid/data/raw/MG_CNCS/07_11/no_reset",
      "0003": "multigrid/data/raw/MG_CNCS/07_12_background",
      "0004": "multigrid/data/raw/MG_CNCS/07_13_12A",
      "0005": "multigrid/data/raw/MG_CNCS/07_13_12A_Vanadium_powder",
      "0006": "multigrid/data/raw/MG_CNCS/07_13_4p96A",
      "0007": "multigrid/data/raw/MG_CNCS/07_13_7p2A",
      "0008": "multigrid/data/raw/MG_CNCS/07_13_7p2A/1_t0_timing",
      "0009": "multigrid/data/raw/MG_CNCS/07_14",
      "0010": "multigrid/data/raw/MG_CNCS/07_15",
      "0011": "multigrid/data/raw/MG_CNCS/07_25",
      "0012": "multigrid/data/raw/MG_CNCS/08_16",
      "0013": "multigrid/data/raw/MG_CNCS/09_29",
      "0014": "multigrid/data/raw/MG_CNCS/10_13",
      "0015": "multigrid/data/raw/MG_CNCS/11_29"
    };
  }
}

class Multiblade extends DefaultInstrument {
  constructor() {
    super();
    this.owner = "Francesco Piscitelli";
    this.ownerEmail = "Francesco.Piscitelli@esss.se";
    this.orcidOfOwner = "0000-0002-0325-4407";
    this.contactEmail = this.ownerEmail;
    this.principalInvestigator = this.owner;
    this.userTargetLocation = "multiblade";
    this.sourceFolder =
      "multiblade/data/brightness/2017_06_BNC_MB16T_ElectronicsTests/DATA";
    this.creationLocation = this.userTargetLocation;
    this.email = "test@kjd.com";
    this.abbreviation = "Multiblade";
    this.doi = this.doi_prefix + this.abbreviation;
    this.affiliation = "ESS";
    this.creator = this.owner;
    this.publisher = "ESS";
    this.publicationYear = 2018;
    this.title = "Sample Data from " + this.abbreviation;
    this.url = this.url_fragment + this.abbreviation;
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/SONDE";
    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.resourceType = "lst1 files";
    this.pidArray = ["string"];
    this.authors = [this.owner];
    this.doiRegisteredSuccessfullyTime = "2018";
    this.scientificMetadata = {
      id: 3
    };
    this.proposal = "2018ESS1";
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

    const folder_prefix = "multiblade/data/brightness/";
    this.source_folder_array = {
      "0001":
        folder_prefix + "/2016_12_STF_MB15_GammaSensitivity/20161210_gammaSensData",
      "0002":
        folder_prefix + "/2017_04_STF_MB15_FastNeutronSensitivity/data_FastNeutron",
      "0003":
        folder_prefix + "/2017_06_BNC_MB16T_ElectronicsTests/DATA",
      "0004":
        folder_prefix + "/2017_06_BNC_MB16T_ElectronicsTests/DATA_011_images",
      "0005":
        folder_prefix + "/2017_06_BNC_MB16T_ElectronicsTests/prove0620",
      "0006":
        folder_prefix + "/2017_06_BNC_MB16T_ElectronicsTests/prove0621",
      "0007":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/02_1_provaFirmware",
      "0008":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_10_F_V_test",
      "0009":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_11_G_plexi_test",
      "0010":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_1_provaFirmware",
      "0011":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_2_A_Ni",
      "0012":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_3_B_DirectBeamTests",
      "0013":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_4_B_DirectBeam",
      "0014":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_5_C_DirectBeam_5mmAl",
      "0015":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_6_D_Ir_align",
      "0016":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_7_E_Ir_collimated",
      "0017":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_8_E_Ir_slit",
      "0018":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_9_E_Ir_test",
      "0019":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03N_12_G_plexi",
      "0020":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_10_I2_Si_divergent",
      "0021":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_11_L_FeSi_test",
      "0022":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_1_E_Ir_test",
      "0023":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_2_E1_Ir_collimated",
      "0024":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_3_H_Si_test",
      "0025":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_4_H_Si_collimated",
      "0026":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_5_H1_Si_collimated_HVtests",
      "0027":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_6_I_FeSi_test",
      "0028":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_7_I_FeSi_divergent",
      "0029":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_8_I1_FeSi_divergent_magnet",
      "0030":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_9_I2_Si_divergent_test",
      "0031":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04N_12_L_FeSi_collimated_OffSpec",
      "0032":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_10_P_mask",
      "0033":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_11_Q_Si_divergent_highQ_test",
      "0034":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_1_M_FeSi_collimated_magnet_test",
      "0035":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_2_M_FeSi_collimated_magnet",
      "0036":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_3_N_ResW_test",
      "0037":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_4_N_ResW",
      "0038":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_5_N1_ResW_longRun",
      "0039":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_6_O_PosStrip_test",
      "0040":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_7_O_PosStrip_linkN1",
      "0041":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_8_O1_ResStrip",
      "0042":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_9_P_mask_test",
      "0043":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05N_12_Q_Si_divergent_highQ",
      "0044":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05N_13_Q_Si_divergent_highQ_BeamOff",
      "0045":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/06_1_R_Efficiency_50Hz_test",
      "0046":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/06_2_R_Efficiency_50Hz",
      "0047":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/06_3_R12_Efficiency_25Hz_test",
      "0048":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/06_4_R2_Efficiency_25Hz"
    };
  }
}

class Sonde extends DefaultInstrument {
  constructor() {
    super();
    this.owner = "Ramsey Al Jebali";
    this.ownerEmail = "ramsey.aljebali@esss.se";
    this.orcidOfOwner = "0000-0000-0000-0000";
    this.contactEmail = this.ownerEmail;
    this.principalInvestigator = this.owner;
    this.userTargetLocation = "multiblade";
    this.sourceFolder =
      "sonde/IFE_june_2018/data/S13";
    this.creationLocation = this.userTargetLocation;
    this.email = "test@kjd.com";
    this.abbreviation = "SONDE";
    this.doi = this.doi_prefix + this.abbreviation;
    this.affiliation = "ESS";
    this.creator = this.owner;
    this.publisher = "ESS";
    this.publicationYear = 2018;
    this.title = "Sample Data from " + this.abbreviation;
    this.url = this.url_fragment + this.abbreviation;
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/SONDE";
    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.resourceType = "Comma Separated Variable (csv) files";
    this.pidArray = ["string"];
    this.authors = [this.owner];
    this.doiRegisteredSuccessfullyTime = "2018";
    this.scientificMetadata = {
      id: 3
    };
    this.proposal = "2018ESS2";
    this.isOnDisk = true;
    this.isOnTape = true;
    this.archivable = true;
    this.retrievable = true;
    this.archiveStatusMessage = "Stored on primary disk and on tape";
    this.retrieveStatusMessage = "Stored on primary disk and on tape";
    this.lastUpdateMessage = "string";
    this.archiveReturnMessage = "string";
    this.dateOfLastMessage = new Date();
    this.dateOfDiskPurging = new Date();
    this.archiveRetentionTime = new Date();
    this.isExported = true;
    this.exportedTo = "string";
    this.dateOfPublishing = new Date();

    this.source_folder_array = {
      "0001": "sonde/IFE_june_2018/data/S1",
      "0002": "sonde/IFE_june_2018/data/S2",
      "0003": "sonde/IFE_june_2018/data/S5",
      "0004": "sonde/IFE_june_2018/data/S6",
      "0005": "sonde/IFE_june_2018/data/S8",
      "0006": "sonde/IFE_june_2018/data/S15",
      "0007": "sonde/IFE_june_2018/data/S11",
      "0008": "sonde/IFE_june_2018/data/S12",
      "0009": "sonde/IFE_june_2018/data/S16",
      "0010": "sonde/IFE_june_2018/data/S14",
      "0011": "sonde/IFE_june_2018/data/S9",
      "0012": "sonde/IFE_june_2018/data/S3",
      "0013": "sonde/IFE_june_2018/data/S13",
      "0014": "sonde/IFE_june_2018/data/S4",
      "0015": "sonde/IFE_june_2018/data/S17",
      "0016": "sonde/IFE_june_2018/data/S7",
      "0017": "sonde/IFE_june_2018/data/S10",
      "0018": "sonde/IFE_june_2018/data/temp/t50",
      "0019": "sonde/IFE_oct_2017/from_EFU_PC/EFU_data",
      "0020": "sonde/IFE_oct_2017/from_lenovo_laptop/gamma/test_saved_data",
      "0021": "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/CZTCam",
      "0022": "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/Default",
      "0023": "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/Galao-IDE3380_SIPHRA",
      "0024": "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/Galao-IDE3380_SIPHRA/reg_conf",
      "0025": "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/Galao-VATA64HDR16",
      "0026": "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/GammaProcessor",
      "0027": "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/INX-500",
      "0028": "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/ROSMAP-MP",
      "0029": "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/XCS-1000",
      "0030": "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/logs"

    };
  }
}

class Nmx extends DefaultInstrument {
  constructor() {
    super();
    this.owner = "Dorothea Pfeiffer";
    this.ownerEmail = "Dorothea.Pfeiffer@esss.se";
    this.orcidOfOwner = "0000-0003-3893-2308";
    this.contactEmail = this.ownerEmail;
    this.principalInvestigator = this.owner;
    this.userTargetLocation = "NMX";
    this.sourceFolder = "nmx/data/h5/analyzed/dead200dead600/IFE_2015_Feb";
    this.creationLocation = this.userTargetLocation;
    this.email = "test@kjd.com";
    this.abbreviation = "NMX";
    this.doi = this.doi_prefix + this.abbreviation;
    this.affiliation = "ESS";
    this.creator = this.owner;
    this.publisher = "ESS";
    this.publicationYear = 2018;
    this.title = "Sample Data from " + this.abbreviation;
    this.url = this.url_fragment + this.abbreviation;
    this.dataDescription =
      "https://github.com/ess-dmsc/ess_file_formats/wiki/SONDE";
    this.abstract =
      "This data was collected as part of BrightnESS, funded by the European Union \
                        Framework Programme for Research and Innovation Horizon 2020, under grant \
                        agreement 676548. It consists of test data for the detector.";
    this.resourceType = "Comma Separated Variable (csv) files";
    this.pidArray = ["string"];
    this.authors = [this.owner];
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

    this.source_folder_array = {
      "0001": "nmx/data/h5/analyzed/dead200dead600/IFE_2015_Feb",
      "0002": "nmx/data/h5/analyzed/parameters",
      "0003": "nmx/data/h5/analyzed/thresh100_150",
      "0004": "nmx/data/h5/analyzed/thresh100_150/IFE_2015_Feb",
      "0005": "nmx/data/h5/analyzed/thresh100_150/IFE_2016_Jun",
      "0006": "nmx/data/h5/analyzed/thresh100_150/IFE_2016_Nov",
      "0007": "nmx/data/h5/analyzed/thresh100_150/IFE_2016_Nov/APZ_threshold_scan",
      "0010": "nmx/data/h5/analyzed/thresh100_150/IFE_2016_Nov/Calibration",
      "0011": "nmx/data/h5/analyzed/thresh100_150/IFE_2016_Nov/Efficiency",
      "0012": "nmx/data/h5/analyzed/thresh100_150/IFE_2016_Nov/Pattern",
      "0013": "nmx/data/h5/analyzed/thresh100_150/IFE_2016_Nov/Scattering",
      "0014": "nmx/data/h5/apv2vmm/IFE_2015_Feb",
      "0015": "nmx/data/h5/apv2vmm/IFE_2016_Jun",
      "0016": "nmx/data/h5/apv2vmm/IFE_2016_Nov",
      "0017": "nmx/data/h5/apv2vmm/IFE_2016_Nov/APZ_threshold_scan",
      "0020": "nmx/data/h5/apv2vmm/IFE_2016_Nov/Calibration",
      "0021": "nmx/data/h5/apv2vmm/IFE_2016_Nov/Efficiency",
      "0022": "nmx/data/h5/apv2vmm/IFE_2016_Nov/Pattern",
      "0023": "nmx/data/h5/apv2vmm/IFE_2016_Nov/Scattering",
      "0024": "nmx/data/h5/raw/IFE_2015_Feb",
      "0025": "nmx/data/h5/raw/IFE_2016_Jun",
      "0026": "nmx/data/h5/raw/IFE_2016_Nov",
      "0027": "nmx/data/h5/raw/IFE_2016_Nov/APZ_threshold_scan",
      "0030": "nmx/data/h5/raw/IFE_2016_Nov/Calibration",
      "0031": "nmx/data/h5/raw/IFE_2016_Nov/Efficiency",
      "0032": "nmx/data/h5/raw/IFE_2016_Nov/Pattern",
      "0033": "nmx/data/h5/raw/IFE_2016_Nov/Scattering",
      "0034": "nmx/data/h5/unclustered/IFE_2015_Feb",
      "0035": "nmx/data/h5/unclustered/IFE_2016_Jun",
      "0036": "nmx/data/h5/unclustered/IFE_2016_Nov",
      "0037": "nmx/data/h5/unclustered/IFE_2016_Nov/APZ_threshold_scan",
      "0040": "nmx/data/h5/unclustered/IFE_2016_Nov/Calibration",
      "0041": "nmx/data/h5/unclustered/IFE_2016_Nov/Efficiency",
      "0042": "nmx/data/h5/unclustered/IFE_2016_Nov/Pattern",
      "0043": "nmx/data/h5/unclustered/IFE_2016_Nov/Scattering"
    };
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

export {
  Multiblade,
  Multigrid,
  Sonde,
  Nmx,
  InstrumentFactory,
  DefaultInstrument
};
