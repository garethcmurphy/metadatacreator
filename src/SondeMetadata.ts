export class SondeMetadata {
  public metadataObject: object;
  public sourceFolderArray: object;

  constructor() {
    this.metadataObject = {
      "0001": {
        "elog_id": "242",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/242",
        "date": "2018-06-06T15:05:00+02:00",
        "author": "Emil Rofors",
        "beamline": "IFE R2D2",
        "type": "Status",
        "category": "Measurement",
        "run": "S1",
        "subject": "First automated scan",
        "comments": "A test-scan at the centers of 3*3 pixels. Attached figure shows the beam at P29.Total number of points to scan: 9Total time: ca 2 min----- Settings and configuration ---------------------------------------------------",
        "Time per pos": "10 s",
        "Step size": "6 mm",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "ACRO",
        "SoNDe threshold": "10",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0002": {
        "MAPMT": "ZA0250 @ 900 V",
        "Optical coupling": "Dryfit",
        "Scintillator": "GS20 (plain, polished)",
        "SoNDe acqu_ mode": "ACRO",
        "SoNDe module": "7053-1-008",
        "SoNDe threshold": "10",
        "author": "Nicholai Mauritzson",
        "beamline": "IFE R2D2",
        "category": "Measurement",
        "comments": "An automated central scan of all pixels.The following parameters are used:X_pos = 23.65 mm to 65.65 mmY_pos = 34.65 mm to 76.65 mmStepsize = 6 mmCounting time = 20 sTotal number of points to scan: 64Total time: ca 22 min----- Settings and configuration ---------------------------------------------------",
        "date": "2018-06-06T16:11:00+02:00",
        "elog_id": "245",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/245",
        "run": "S2",
        "subject": "Automatic scan: center of all pixels",
        "type": "Start/Stop",
      },
      "0003": {
        "elog_id": "256",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/256",
        "date": "2018-06-07T14:49:00+02:00",
        "author": "Nicholai Mauritzson",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S5",
        "subject": "Central measurement of P19 @ 2.0\u00c5",
        "comments": "A central measurement of P19 with 2.0\u00c5 neutrons.Counting time = 30 s----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "ACRO",
        "SoNDe threshold": "10",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0004": {
        "elog_id": "258",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/258",
        "date": "2018-06-07T15:22:00+02:00",
        "author": "Emil Rofors",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S6",
        "subject": "Cs-137 gamma test",
        "comments": "To test the gamma sensitivity of the detector, the beam was turned off and an Cs-137 source was placed in the same position as the beam on the last collimator (see image).Attached is an image of the setup and 2D plot of the accumulated triggers for all 64 pixels. In the plot we can see that the highest gain pixels are have a higher rate, asexpected.Runtime: 17 minDistance source to scintillator: 9.5 cm----- Settings and configuration ---------------------------------------------------Attachment 2 shows a heatmap of the integrated 17 minutes triggers, as shown in daquri.",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "ACRO",
        "SoNDe threshold": "10",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0005": {
        "elog_id": "270",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/270",
        "date": "2018-06-07T17:40:00+02:00",
        "author": "Nicholai Mauritzson",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S8",
        "subject": "Automated 14x14 mm2 scan (2.0 \u00c5)",
        "comments": "Scan with 1mm collimated neutron beam on a 14x14 mm2 pixel.Relative scan area.X: -1 to 13Y: 20 to 34----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "ACRO",
        "SoNDe threshold": "10",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0006": {
        "elog_id": "280",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/280",
        "date": "2018-06-08T13:57:00+02:00",
        "author": "Nicholai Mauritzson",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S15",
        "subject": "TOF mode, /w mask, thrs: 30",
        "comments": "The slits were opened up to maximum, HeBoSint and Mirrobor collimation was removed and another HeBoSint (with rectangular slits) was added directly onto the front of thedetector enclosure.Beam size: 68x68 mm2 (centered on detector)Counting time: 30 s----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "TOF",
        "SoNDe threshold": "30",
        "Evts/package": "250",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0007": {
        "elog_id": "274",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/274",
        "date": "2018-06-08T11:12:00+02:00",
        "author": "Emil Rofors",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S11",
        "subject": "TOF mode, no collimation, pixelated, thrs: 50",
        "comments": "The slits were opened up to maximum, HeBoSint and Mirrobor collimation was removed. Plain scinitillator switched for pixelated scintillator.Counting time: 60 sBeam size: 68x68 mm2 (centered on detector)----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "TOF",
        "SoNDe threshold": "50",
        "Evts/package": "250",
        "Scintillator": "GS20 (pixelated, polished)",
        "Optical coupling": "Dryfit"
      },
      "0008": {
        "elog_id": "275",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/275",
        "date": "2018-06-08T11:13:00+02:00",
        "author": "Nicholai Mauritzson",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S12",
        "subject": "TOF mode, no collimation, plain, thrs: 50",
        "comments": "The slits were opened up to maximum, HeBoSint and Mirrobor collimation was removed. Plain scintillator used from now on.Beam size: 68x68 mm2 (centered on detector)Counting time: 60 s----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "TOF",
        "SoNDe threshold": "50",
        "Evts/package": "250",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0009": {
        "elog_id": "281",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/281",
        "date": "2018-06-08T13:59:00+02:00",
        "author": "Nicholai Mauritzson",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S16",
        "subject": "TOF mode, /w mask, thrs: 10",
        "comments": "The slits were opened up to maximum, HeBoSint and Mirrobor collimation was removed and another HeBoSint (with rectangular slits) was added directly onto the front of thedetector enclosure.Beam size: 68x68 mm2 (centered on detector)Counting time: 30 s----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "TOF",
        "SoNDe threshold": "10",
        "Evts/package": "250",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0010": {
        "elog_id": "273",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/273",
        "date": "2018-06-08T10:51:00+02:00",
        "author": "Nicholai Mauritzson",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S14",
        "subject": "TOF mode, /w mask, thrs: 50",
        "comments": "The slits were opened up to maximum, HeBoSint and Mirrobor collimation was removed and another HeBoSint (with rectangular slits) was added directly onto the front of thedetector enclosure.Beam size: 68x68 mm2 (centered on detector)Counting time: 34 s----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "TOF",
        "SoNDe threshold": "50",
        "Evts/package": "250",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0011": {
        "elog_id": "271",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/271",
        "date": "2018-06-08T08:55:00+02:00",
        "author": "Nicholai Mauritzson",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S9",
        "subject": "Beam through lead, 2.0\u00c5",
        "comments": "A lead brick (25 mm thick) as been placed in front of the detector and the beam was scannedvertically from 1mm above center of P19 to 1 mm below center of P27. Distance from lead to scintillator is 15 mm and distance between slit 2 and lead is 72 mm.This data can then directly be compared with the same area which was scanned for runS8 without lead.Stepsize: 0.5 mmCounting time: 40 s----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "ACRO",
        "SoNDe threshold": "10",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0012": {
        "elog_id": "248",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/248",
        "date": "2018-06-06T17:39:00+02:00",
        "author": "Nicholai Mauritzson",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S3",
        "subject": "Automatic scan: all pixels, 1 mm step",
        "comments": "A millimeter scan across the entire surface of the detector.The scan includes a 2 mm border outside of the detector. Scan area 52x52 mm2.The following parameters are used:X_pos = 17.65 mm to 70.65 mmY_pos = 27.65 mm to 81.65 mmStepsize = 1 mmCounting time = 15 sTotal number of points to scan: 2704Total time: ca 15 h----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "ACRO",
        "SoNDe threshold": "10",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0013": {
        "elog_id": "277",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/277",
        "date": "2018-06-08T13:26:00+02:00",
        "author": "Emil Rofors",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S13",
        "subject": "ACRO mode, no collimation, plain, thrs: 10",
        "comments": "The slits were opened up to maximum, HeBoSint and Mirrobor collimation was removed. Plain scintillator used.Beam size: 68x68 mm2 (centered on detector)Counting time: 60 s----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "ACRO",
        "SoNDe threshold": "10",
        "Evts/package": "250",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0014": {
        "elog_id": "251",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/251",
        "date": "2018-06-07T11:14:00+02:00",
        "author": "Nicholai Mauritzson",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S4",
        "subject": "Automated 8x8 mm2 scan (2.4 \u00c5)",
        "comments": "A 0.5 mm millimeter scan across a 8x8 mm2 surface, centered on the corner of P18, P19, P26 and P27.Neutron energy @ 2.4 \u00c5.The following parameters are used:X_pos = 52.65 mm to 60.65 mmY_pos = 45.65 mm to 53.65 mmStepsize = 0.5 mmCounting time = 15 sTotal number of points to scan: 256Total time: ca 1 h----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "ACRO",
        "SoNDe threshold": "10",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0015": {
        "elog_id": "282",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/282",
        "date": "2018-06-08T14:06:00+02:00",
        "author": "Nicholai Mauritzson",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S17",
        "subject": "ACRO mode, /w mask, thrs: 10",
        "comments": "The slits were opened up to maximum, HeBoSint and Mirrobor collimation was removed and another HeBoSint (with rectangular slits) was added directly onto the front of thedetector enclosure.Beam size: 68x68 mm2 (centered on detector)Counting time: 30 s----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "ACRO",
        "SoNDe threshold": "10",
        "Evts/package": "250",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0016": {
        "elog_id": "259",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/259",
        "date": "2018-06-07T15:25:00+02:00",
        "author": "Emil Rofors",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S7",
        "subject": "Co-60 gamma test",
        "comments": "Similar as previous test (S6) but we changed the source to Co-60 instead.Runtime: 17 minDistance source to scintillator: 4 cm----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "ACRO",
        "SoNDe threshold": "10",
        "Scintillator": "GS20 (plain, polished)",
        "Optical coupling": "Dryfit"
      },
      "0017": {
        "elog_id": "272",
        "elog_url": "https://stf02.nuclear.lu.se/SoNDe+Testbeams/272",
        "date": "2018-06-08T10:44:00+02:00",
        "author": "Nicholai Mauritzson",
        "beamline": "IFE R2D2",
        "type": "Start/Stop",
        "category": "Measurement",
        "run": "S10",
        "subject": "Pixelated scintillator scan, 2.0\u00c5",
        "comments": "Neutron energy: 2.0\u00c5We changed the GS20 scintillator to the pixelated version. We scanned between the borders of two adjacent 6x6 mm2 scintillator pieces.Stepsize: 0.5 mmCounting time: 30 s----- Settings and configuration ---------------------------------------------------",
        "MAPMT": "ZA0250 @ 900 V",
        "SoNDe module": "7053-1-008",
        "SoNDe acqu_ mode": "ACRO",
        "SoNDe threshold": "10",
        "Scintillator": "GS20 (pixelated, polished)",
        "Optical coupling": "Dryfit"
      },
      "0018": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      },
      "0019": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      },
      "0020": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      },
      "0021": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      },
      "0022": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      },
      "0023": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      },
      "0024": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      },
      "0025": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      },
      "0026": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      },
      "0027": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      },
      "0028": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      },
      "0029": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      },
      "0030": {
        "beamline": "IFE R2D2",
        "category": "Measurement"
      }
    };
    this.sourceFolderArray = {
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
      "0021":
        "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/CZTCam",
      "0022":
        "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/Default",
      "0023":
        "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/Galao-IDE3380_SIPHRA",
      "0024":
        "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/Galao-IDE3380_SIPHRA/reg_conf",
      "0025":
        "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/Galao-VATA64HDR16",
      "0026":
        "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/GammaProcessor",
      "0027":
        "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/INX-500",
      "0028":
        "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/ROSMAP-MP",
      "0029":
        "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/conf/XCS-1000",
      "0030":
        "sonde/IFE_oct_2017/from_lenovo_laptop/IDEASTestbench_BETA_V0_24-x86-ALL/logs"
    };


  }
}