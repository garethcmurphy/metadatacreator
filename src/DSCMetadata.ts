export class DSCMetadata {
    metadata_object: Object;
    sourceFolderArray: Object;

    constructor() {
        this.metadata_object = {
            "0001": {
                minimumTemperature: -100,
                maximumTemperature: 37
            }
        };
        this.sourceFolderArray = {
            "0001": "dsc/dsc01",
        }
    }

}
