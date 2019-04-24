import { readdirSync } from "fs";
import { Dataset } from "../shared/sdk";
class GetNewFiles {
  names: Array<string>;
  basename = "demo/";
  directoryName = "v20/2019_04_05/";
  readDirectory() {
    this.names = readdirSync(this.basename + this.directoryName);
    console.log(this.names.slice(0, 3));
  }

  loopFiles() {
    //const ds = new Dataset();
    const indexStart = 45;
    let fileObject = {};
    for (let i = 0; i < this.names.length; i++) {
      let newIndex = indexStart + i;
      fileObject[newIndex.toString().padStart(4, "0")] =
        this.directoryName + this.names[i];
    }
    console.log(JSON.stringify(fileObject, null, 2));
  }
}

if (require.main === module) {
  const get = new GetNewFiles();
  get.readDirectory();
  get.loopFiles();
}
