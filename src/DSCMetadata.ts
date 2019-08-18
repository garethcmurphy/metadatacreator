export class DSCMetadata {
    public metadata_object: object;
    public sourceFolderArray: object;
    public sampleObject: object;

    constructor() {
        this.metadata_object = {
            "0001": {
                maximumTemperature: { u: "C", v: "37" },
                minimumTemperature: { u: "C", v: "-100" }
            }
        };
        this.sourceFolderArray = {
            "0001": "dsc/dsc01",
        };
        this.sampleObject = {
            "0001": {
                description: "Samples were taken from storage at -80°C, 30mg of each was immediately mounted in sealed aluminum crucibles",
                sampleCharacteristics: {
                    mass: "30mg",
                    temperature: "-80 C"
                }
            } 
        }
    }

}
