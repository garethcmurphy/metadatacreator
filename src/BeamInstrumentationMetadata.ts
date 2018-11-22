export class BeamInstrumentationMetadata {
  metadata_object: Object;
  source_folder_array: Object;

  constructor() {
    this.metadata_object = {
      "0001": { wavelength: 2, comment: "xxx" },
      "0002": { wavelength: 2, comment: "xxx" }
    };
    this.source_folder_array = {
      "0001": "beamInstrumentation/bandwidth",
      "0002": "beamInstrumentation/tee"
    };
  }
}
