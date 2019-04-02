export class MultigridMetadata {
  metadata_object: Object;
  sourceFolderArray: Object;
  dateTime: Date;

  getDateTime(filename: string) {
    // get string filename
    // check for date
    // generate dateTime;
    this.dateTime = new Date();
    return this.getDateTime;
  }

  constructor() {
    this.metadata_object = {
      "0001": {},
      "0016": {
        Time: "2018-09-02 16:40:31.596",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154380.0",
        "BL17:Chop:Skf1:EnergyReq": { u: "MeV", v: "250.0" },
        "BL17:Chop:Skf1:SpeedReq": { u: "Hz", v: "30.0" },
        "BL17:Chop:Skf2:EnergyReq": { u: "MeV", v: "250.0" },
        "BL17:Chop:Skf2:SpeedReq": { u: "Hz", v: "120.0" },
        "BL17:Chop:Skf3:EnergyReq": { u: "MeV", v: "250.0" },
        "BL17:Chop:Skf3:SpeedReq": { u: "Hz", v: "120.0" },
        "BL17:Det:PCharge:C": { u: "C", v: "1.0000709428200283" },
        "BL17:Mot:Sample:Axis1": "0.0",
        "BL17:Mot:attenuator1": { u: "mm", v: "0.1" },
        "BL17:Mot:attenuator2": { u: "mm", v: "93.4" },
        "BL17:Mot:chtrans": { u: "mm", v: "-182.0" },
        "BL17:SMS:RunInfo:RunTitle": "5x5 van",
        field16: "White beam",
        field17: "Ei set to 250meV T0=30"
      },
      "0017": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0018": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0019": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0020": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0021": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0022": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0023": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0024": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0025": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0026": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0027": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0028": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0029": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0030": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0031": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      },
      "0032": {
        Time: "2018-09-03 08:53:33.788",
        "BL17:CS:IPTS": "21308.0",
        "BL17:CS:RunControl:LastRunNumber": "154430.0",
        "BL17:Chop:Skf1:EnergyReq": "250.0",
        "BL17:Chop:Skf1:SpeedReq": "30.0",
        "BL17:Chop:Skf2:EnergyReq": "250.0",
        "BL17:Chop:Skf2:SpeedReq": "120.0",
        "BL17:Chop:Skf3:EnergyReq": "250.0",
        "BL17:Chop:Skf3:SpeedReq": "120.0",
        "BL17:Det:PCharge:C": "1.0000804411400301",
        "BL17:Mot:Sample:Axis1": "120.0",
        "BL17:Mot:attenuator1": "0.1",
        "BL17:Mot:attenuator2": "93.4",
        "BL17:Mot:chtrans": "-182.0",
        "BL17:SMS:RunInfo:RunTitle":
          "US crystal White beam Ei set to 250meV T0=30"
      }
    };
    this.sourceFolderArray = {
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
      "0015": "multigrid/data/raw/MG_CNCS/11_29",
      "0016":
        "multigrid/data/raw/SNS_Aug18/efu_dump/8-23 16-16 Source_and_Bckgd",
      "0017": "multigrid/data/raw/SNS_Aug18/efu_dump/8-27 09-47 V_3x3",
      "0018": "multigrid/data/raw/SNS_Aug18/efu_dump/8-29 20-35 V3_3_HR_HF",
      "0019": "multigrid/data/raw/SNS_Aug18/efu_dump/8-29 22-28 V3_3_fail",
      "0020": "multigrid/data/raw/SNS_Aug18/efu_dump/8-30 13-10 Si",
      "0021": "multigrid/data/raw/SNS_Aug18/efu_dump/8-30 17-30 Si_WHITE",
      "0022": "multigrid/data/raw/SNS_Aug18/efu_dump/8-30 18-30 Water",
      "0023": "multigrid/data/raw/SNS_Aug18/efu_dump/8-30 21-46 Water_fail",
      "0024": "multigrid/data/raw/SNS_Aug18/efu_dump/8-31 15-13 US",
      "0025": "multigrid/data/raw/SNS_Aug18/efu_dump/8-31 22-32 C4H2I2S",
      "0026": "multigrid/data/raw/SNS_Aug18/efu_dump/9-1 20-04 V5x5_cold",
      "0027": "multigrid/data/raw/SNS_Aug18/efu_dump/9-2 15-00 US_White",
      "0028": "multigrid/data/raw/SNS_Aug18/efu_dump/9-2 15-52 V5x5",
      "0029":
        "multigrid/data/raw/SNS_Aug18/efu_dump/9-2 16-43 V5x5_8_50_160meV_300K",
      "0030":
        "multigrid/data/raw/SNS_Aug18/efu_dump/9-3 08-42 US_White_rotation",
      "0031":
        "multigrid/data/raw/SNS_Aug18/efu_dump/9-3 10-57 V5x5_25_80meV_300K",
      "0032": "multigrid/data/raw/SNS_Aug18/efu_dump/9-3 14-36 Si_Crystal"
    };
  }
}
