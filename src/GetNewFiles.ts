import { readdirSync } from "fs";
class GetNewFiles {
  readDirectory() {
    const directoryName = "demo/v20/";
    const names = readdirSync(directoryName);
      console.log(names);
  }
}

if (require.main === module) {
    const get = new GetNewFiles();
    get.readDirectory();
}
