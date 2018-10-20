export class MultibladeMetadata {
  metadata_object: Object;
  source_folder_array: Object;

  constructor() {
    this.metadata_object = {
      "0001": { wavelength: 2, comment: "xxx" },
      "0011": {
        tag: "03_2_A_Ni",
        comment:
          "reflected Beam Ni: Measurements of Ni -> magnetic (double fringe)"
      },
      "0012": {
        tag: "03_3_B_DirectBeam",
        comment: "direct Beam Measurements",
        "current Total microA": "1",
        "time ": "2 minutes",
        fileNumber: "43",
        start: "167/185",
        stop: "166"
      },
      "0013": {
        tag: "03_4_B_DirectBeamTests",
        comment:
          "reflected Beam Ni: Measurements of Ni -> magnetic (double fringe)"
      },
      "0014": {
        tag: "03_5_C_DirectBeam_5mmAl",
        comment: "direct Beam, 5 minutes Al plate in front of the window",
        time: "2 minutes",
        start: "167/2.82",
        stop: "166.6/25.92",
        start1: "166.05/1.63",
        stop1: "166/25.18"
      },
      "0015": {
        tag: "03_6_D_Ir_align",
        comment: "sample iridium",
        comment1: "centering 122 config iridium Hz fixed = -1.7"
      },
      "0016": {
        tag: "03_7_E_Ir_collimated",
        comment: "sample iridium",
        "current start": "167 / 0.47",
        "current stop": "168 / 15"
      },
      "0017": {
        tag: "03_8_E_Ir_slit",
        comment: "xxx"
      },
      "0018": {
        tag: "03_9_E_Ir_test",
        comment: "change the detector position from 0-> 10",
        comment1: "doesnt change -> its the detector",
        comment2: "beam turned off -> NO visible anymore"
      },
      "0019": {
        tag: "03N_12_G_plexi",
        comment: "plexiglass",
        comment1:
          "uniformity information: all the active area is involved because of the scattering ",
        " thickness": " 4 mm"
      },
      "0020": {
        tag: "04_10_I2_Si_divergent",
        comment: "xxx"
      },
      "0021": {
        tag: "04_11_L_FeSi_test",
        comment: "sample SM off specular",
        P: "0",
        Hz: "1.8",
        Hx: "100",
        Phi: "scan",
        "slit s1": "1.2",
        "slit s2": "0.5",
        "slit s3": "17.3"
      },
      "0022": {
        tag: "04_1_E_Ir_test",
        comment: "sample Iridium",
        "current start": "167 /0.47",
        "current stop": "168 /15"
      },
      "0023": {
        tag: "04_2_E1_Ir_collimated",
        comment: "sample iridium",
        "current start": "179.2 /0.25",
        "current stop": "168 /55.36",
        time: "10h20",
        phi: "0.3",
        "comment 0": "MB reflected iridium II",
        "current start 1": "168 /0.70",
        "current stop 1": "166.2 /165.8",
        "time 1": "10h40",
        "phi 1": "0.8",
        "comment 1": "MB reflected iridium II 68"
      },
      "0024": {
        tag: "04_3_H_Si_test",
        comment: "sample silicon"
      },
      "0025": {
        tag: "04_4_H_Si_collimated",
        comment: "sample silicon collimated beam"
      },
      "0026": {
        tag: "04_5_H1_Si_collimated_HVtests",
        comment: "HV change to see the spectrum",
        comment1: "HV lowered to 900 V from 1200 V",
        comment2:
          "HV=1000 V -> the spectrum looks more like the one at 800V with A2 /Co2 80/20 while we are using the 70/30 gas ratio "
      },
      "0027": {
        tag: "04_6_I_FeSi_test",
        comment: "first data with this set must be split - deleted"
      },
      "0028": {
        tag: "04_7_I_FeSi_divergent",
        comment: "sample super mirror divergent"
      },
      "0029": {
        tag: "04_8_I1_FeSi_divergent_magnet",
        comment:
          "magnet added to converge the Fex and reflection. We expect less H-specular"
      },
      "0030": {
        tag: "04_9_I2_Si_divergent_test",
        comment: "sample silicon divergent",
        Hz: "-6.9",
        Hx: "100",
        phi: "scan",
        comment1: "phi aligment and slide 4 low=-1.5"
      },
      "0031": {
        tag: "04N_12_L_FeSi_collimated_OffSpec",
        comment: "Off Specular (FeSi) m=3.8 collimated beam"
      },
      "0032": {
        tag: "05_10_P_mask",
        comment: "First direct beam on detector",
        comment1: "S1 max open (8mm -> saturation",
        comment2: "S1 (2mm -> partial saturation",
        comment3: "S1 (1mm -> OK"
      },
      "0033": {
        tag: "05_11_Q_Si_divergent_highQ_test",
        comment: "sample SiDiv",
        comment1: "Only  11h30 minutes acquisition then the beam is turned off",
        comment2: "Only  5h30m of the first angle phi=1.33",
        setup: "50 Hz",
        setup2: "25 Hz spike",
        setup3: "25 Hz no spike",
        chopper: "50/25 Hz"
      },
      "0034": {
        tag: "05_1_M_FeSi_collimated_magnet_test",
        comment: "super mirror magnet: same setting as L",
        comment1:
          "scan in Phi=0.2 -0.3 - 0.8 with magnet around the sample (supermirror FeSi)",
        phi: "0.8",
        time: "20 minutes",
        phi_1: "0.3",
        time_1: "10 minutes",
        phi_2: "0.2",
        time_2: "5 minutes"
      },
      "0035": {
        tag: "05_2_M_FeSi_collimated_magnet",
        comment: "super mirror magnet: same setting as L",
        comment1:
          "scan in Phi=0.2 -0.3 - 0.8 with magnet around the sample (supermirror FeSi)",
        phi: "0.8",
        time: "20 minutes",
        phi_1: "0.3",
        time_1: "10 minutes",
        phi_2: "0.2",
        time_2: "5 minutes"
      },
      "0036": {
        tag: "05_3_N_ResW_test",
        comment: "xxx"
      },
      "0037": {
        tag: "05_4_N_ResW",
        comment: "resolution wires"
      },
      "0038": {
        tag: "05_5_N1_ResW_longRun",
        comment: "pos28 long 2mm - 70 minutes, 10 minutes each file"
      },
      "0039": {
        tag: "05_6_O_PosStrip_test",
        comment: "xxx"
      },
      "0040": {
        tag: "05_7_O_PosStrip_linkN1",
        comment: "strip position right - 40 mm 5 minutes",
        comment1: "strip position left - 40 mm 5 minutes"
      },
      "0041": {
        tag: "05_8_O1_ResStrip",
        comment: "strip scan from -60 to 40"
      },
      "0042": {
        tag: "05_9_P_mask_test",
        comment: "resolution mask",
        comment2:
          "first direct beam on detector. To have a wider beam we put the supermirror with the magnet and divergent beam. We use the ESS mask"
      },
      "0043": {
        tag: "05N_12_Q_Si_divergent_highQ",
        comment: "sample Silicon Div"
      },
      "0044": {
        tag: "05N_13_Q_Si_divergent_highQ_BeamOff",
        comment: "smample silicon divergent high Q Beam Off"
      },
      "0045": {
        tag: "06_1_R_Efficiency_50Hz_test",
        comment:
          "Comparison MB vs 3He, we use the direct beam. We want to see the footprint with the MB, to be sure we have the same in both detectors. Then we can calculate the efficiency from the comparison"
      },
      "0046": {
        tag: "06_2_R_Efficiency_50Hz",
        comment: "change chopper from 50 to 25 Hz"
      },
      "0047": {
        tag: "06_3_R12_Efficiency_25Hz_test",
        comment: "3He 10 minutes 2 files 5 minutes each",
        comment1: "MB 10 minutes 2 files 5 minutes each"
      },
      "0048": {
        tag: "06_4_R2_Efficiency_25Hz"
      }
    };

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
