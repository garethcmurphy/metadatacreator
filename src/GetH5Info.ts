import { stringify } from "querystring";
import { groupBy } from "rxjs/operators";

const hdf5 = require("hdf5").hdf5;
const h5lt = require("hdf5").h5lt;

const Access = require("hdf5/lib/globals").Access;

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
          owners: [""],
      };
    const  rootGroups = file.getMemberNames();
      console.log("rootGroups",rootGroups);
      if (rootGroups.includes("entry") ) {

    let group = file.openGroup("/entry/");
    let members = group.getMemberNames();
    // console.log(members);
    
    if (members.includes("title")) {
        nexusInfo.title= h5lt.readDataset(group.id, "title"); 
    }
    if (members.includes("ESS_users") ) {
      group = file.openGroup("/entry/ESS_users/");
      members = group.getMemberNames();
      // console.log(members);
      const array = h5lt.readDataset(group.id, "name");
        nexusInfo.owners = array;
      console.log(array);
    } else {
        console.log("no ESS_Users");
    }

          if (members.includes("sample")) {
      const sampleGroup = file.openGroup("/entry/sample/");
      const sampleMembers = sampleGroup.getMemberNames();

              if (sampleMembers.includes("sample")) {
                  nexusInfo.description = h5lt.readDataset(group.id, "description");
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
  h5.getInfo("f.nxs");
}
