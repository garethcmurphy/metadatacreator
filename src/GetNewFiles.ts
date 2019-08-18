import { readdirSync } from "fs";
import { Dataset } from "../shared/sdk";
class GetNewFiles {
  public names: Array<string>;
  public basename = "demo/";
  public directoryName = "v20/2019_04_05/";

  public readDirectory() {
    this.names = readdirSync(this.basename + this.directoryName);
    // console.log(this.names.slice(0, 3));
  }

  public loopFiles() {
    //const ds = new Dataset();
    const indexStart = 35;
    const fileObject = {};
    for (let i = 0; i < this.names.length; i++) {
      let newIndex = indexStart + i;
      fileObject[newIndex.toString().padStart(4, "0")] =
        this.directoryName + this.names[i];
    }
    // console.log(JSON.stringify(fileObject, null, 2));
  }

  public checkHdf5Metadata(){
    // check if file is hdf5 valid
    // check if entry, instrument and other data present
    // spin out to another class to do this
    // check if hdf5 module is present and installed
  }
}

if (require.main === module) {
  const get = new GetNewFiles();
  get.readDirectory();
  get.loopFiles();
}
