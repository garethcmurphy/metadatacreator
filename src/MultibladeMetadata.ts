export class MultibladeMetadata {
  metadata_object: Object;
  source_folder_array: Object;

  constructor() {
    this.metadata_object = {};
    const folder_prefix = "multiblade/data/brightness/";
    this.source_folder_array = {
"0001":
        folder_prefix +
        "/2016_12_STF_MB15_GammaSensitivity/20161210_gammaSensData",
      "0002":
        folder_prefix +
        "/2017_04_STF_MB15_FastNeutronSensitivity/data_FastNeutron",
      "0003": folder_prefix + "/2017_06_BNC_MB16T_ElectronicsTests/DATA",
      "0004":
        folder_prefix + "/2017_06_BNC_MB16T_ElectronicsTests/DATA_011_images",
      "0005": folder_prefix + "/2017_06_BNC_MB16T_ElectronicsTests/prove0620",
      "0006": folder_prefix + "/2017_06_BNC_MB16T_ElectronicsTests/prove0621",
      "0007":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/02_1_provaFirmware",
      "0008":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_10_F_V_test",
      "0009":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_11_G_plexi_test",
      "0010":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_1_provaFirmware",
      "0011":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_2_A_Ni",
      "0012":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_3_B_DirectBeamTests",
      "0013":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_4_B_DirectBeam",
      "0014":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_5_C_DirectBeam_5mmAl",
      "0015":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_6_D_Ir_align",
      "0016":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_7_E_Ir_collimated",
      "0017":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_8_E_Ir_slit",
      "0018":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03_9_E_Ir_test",
      "0019":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/03N_12_G_plexi",
      "0020":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_10_I2_Si_divergent",
      "0021":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_11_L_FeSi_test",
      "0022":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_1_E_Ir_test",
      "0023":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_2_E1_Ir_collimated",
      "0024":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_3_H_Si_test",
      "0025":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_4_H_Si_collimated",
      "0026":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_5_H1_Si_collimated_HVtests",
      "0027":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_6_I_FeSi_test",
      "0028":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_7_I_FeSi_divergent",
      "0029":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_8_I1_FeSi_divergent_magnet",
      "0030":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04_9_I2_Si_divergent_test",
      "0031":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/04N_12_L_FeSi_collimated_OffSpec",
      "0032":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_10_P_mask",
      "0033":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_11_Q_Si_divergent_highQ_test",
      "0034":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_1_M_FeSi_collimated_magnet_test",
      "0035":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_2_M_FeSi_collimated_magnet",
      "0036":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_3_N_ResW_test",
      "0037":
        folder_prefix + "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_4_N_ResW",
      "0038":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_5_N1_ResW_longRun",
      "0039":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_6_O_PosStrip_test",
      "0040":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_7_O_PosStrip_linkN1",
      "0041":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_8_O1_ResStrip",
      "0042":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05_9_P_mask_test",
      "0043":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05N_12_Q_Si_divergent_highQ",
      "0044":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/05N_13_Q_Si_divergent_highQ_BeamOff",
      "0045":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/06_1_R_Efficiency_50Hz_test",
      "0046":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/06_2_R_Efficiency_50Hz",
      "0047":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/06_3_R12_Efficiency_25Hz_test",
      "0048":
        folder_prefix +
        "/2017_10_ISIS_MB16S_ReflectometryAtCRISP/06_4_R2_Efficiency_25Hz"

    };
  }
}