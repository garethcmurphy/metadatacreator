class ConvertJSONtoUnits {
    init_json: Object

    constructor(){
        this.init_json = {
            "pressure" : "1",
            "temp" : "2"
        }
    }

    convertToUnits(jsonObject:Object){
        const unitsObject = {};
        for (var key in jsonObject) {
            if (jsonObject.hasOwnProperty(key)) {
                unitsObject[key] = {
                    "v": jsonObject[key],
                    "u": this.units_lookup(key)
                }
            }
        }
        console.log(unitsObject);
        return unitsObject;
    }

    units_lookup(key: string) {
        console.log("gm", key);
        let units = "unknown";
        switch (key){
            case "pressure":
                units = "Pascale";
                break;
            case "temperature":
                units = "Kelvin";
                break;
            case "temp":
                units = "Kelvin";
                break;
            default:
                units = "unknown";
        }
        return units;
    }
}

if (require.main === module) {
    const conv = new ConvertJSONtoUnits()
    conv.convertToUnits(conv.init_json);
}