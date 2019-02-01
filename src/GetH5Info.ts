import { stringify } from "querystring";
import { groupBy } from "rxjs/operators";

const hdf5 = require("hdf5").hdf5;
const h5lt = require("hdf5").h5lt;

const Access = require("hdf5/lib/globals").Access;

var HLType = require('hdf5/lib/globals.js').HLType;

export class GetH5Info {
  filename: string;
  constructor() {
    this.filename = "V20_ESSIntegration_2018-12-10_1009.nxs";
  }
  getInfo(fileName: string) {
    const file = new hdf5.File(fileName, Access.ACC_RDONLY);
    let nexusInfo = {
      title: "",
      description: "",
      owners: [""]
    };
    const rootGroups = file.getMemberNames();
    console.log("rootGroups", rootGroups);
    if (rootGroups.includes("entry")) {
      let group = file.openGroup("/entry/");
      let members = group.getMemberNames();

      
      if (members.includes("sample")) {
        const sampleGroup = group.openGroup("sample");
        const sampleMembers = sampleGroup.getMemberNames();
        console.log (sampleMembers)

        let myvar = "description";
          if (sampleMembers.includes(myvar)) {
            console.log("there is ", myvar);
              // nexusInfo.description = h5lt.readDataset(sampleGroup.id, "description");
            var hlType= sampleGroup.getDatasetType (myvar) ;
            switch(hlType){
              case HLType.HL_TYPE_TEXT:
                  console.dir("I'm a text.");
                  break;
              case HLType.HL_TYPE_IMAGE:
                  console.dir("I'm a table.");
                  break;
              case HLType.HL_TYPE_TABLE:
                  console.dir("I'm a table.");
                  break;
              case HLType.HL_TYPE_PACKET_TABLE:
                  console.dir("I'm a table.");
                  break;
              case HLType.HL_TYPE_DIMENSION_SCALES:
                  console.dir("I'm a table.");
                  break;
              case HLType.HL_TYPE_OPTIMIZED_FUNCTIONS:
                  console.dir("I'm a table.");
                  break;
              case HLType.HL_TYPE_EXTENSIONS:
                  console.dir("I'm a table.");
                  break;
              default: //HL_TYPE_UNKNOWN
                  break;
          }
            var array= h5lt.readDataset (sampleGroup.id, myvar );
            console.dir(array.length);
    if(array.constructor.name==='Array'){
        for(var mIndex=0;mIndex<array.length;mIndex++){
            console.dir(array[mIndex]);
        }
    }
                console.log("description", array) ;
          }
          else {
              console.log("no description ");
          }
      }
    } else {
      console.log("no field called entry in nxs groups");
    }
    file.close();
    return nexusInfo;
  }
}

if (require.main === module) {
  const h5 = new GetH5Info();
  h5.getInfo("demo/v20-2018-12-19T08:17:32+0100.nxs");
}
