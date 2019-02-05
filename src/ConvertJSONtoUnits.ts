class ConvertJSONtoUnits {
    init_json: Object

    constructor(){
        this.init_json = {
            "pressure" : "1",
            "temp" : "2"
        }
    }

    convertToUnits(jsonObject:Object){
        for (var key in jsonObject) {
            if (jsonObject.hasOwnProperty(key)) {
                console.log(key + " -> " + jsonObject[key]);
            }
        }
    }
}

if (require.main === module) {
    const conv = new ConvertJSONtoUnits()
    conv.convertToUnits(conv.init_json);

}