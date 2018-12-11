export class MultigridMetadata {
  metadata_object: Object;
  sourceFolderArray: Object;

  constructor() {
    this.metadata_object = {};
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
      "0015": "multigrid/data/raw/MG_CNCS/11_29"

    };
  }
}