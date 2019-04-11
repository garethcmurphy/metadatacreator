export class DSCMetadata {
    metadata_object: Object;
    sourceFolderArray: Object;

    constructor() {
        this.metadata_object = {
            "0001": {
                minimumTemperature: { u: "C", v: "-100" },
                maximumTemperature: { u: "C", v: "37" },
                sample_description: "Samples were taken from storage at -80°C, 30mg of each was immediately mounted in sealed aluminum crucibles"
            }
        };
        this.sourceFolderArray = {
            "0001": "dsc/dsc01",
        }
    }

}
