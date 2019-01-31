import { GetH5Info } from "./GetH5Info";

const fs = require("fs");

export class FilesInfo {
  files = [];
  fileNumber = 22;
  experimentDateTime = new Date();
  totalFileSize = 12345654;
  sourceFolder = "source_folder";

  constructor(source_folder: string) {
    this.get_file_info(source_folder);
  }

  get_file_info(source_folder: string) {
    const file_names = fs.readdirSync(source_folder);
    console.log(source_folder);
    console.log(file_names);

    let file_number = 0;
    let file_size = 0;
    let date = new Date();

    for (const file of file_names) {
      file_number += 1;
      const longName = source_folder + "/" + file;
      //console.log("longName");
      const stats = fs.statSync(longName);
      const relativeName = longName.replace("/users/detector", "/static");
      file_size += stats.size;
      this.experimentDateTime = new Date(stats.ctime);
      const file_entry = {
        path: relativeName,
        size: stats.size,
        time: stats.ctime,
        chk: "string",
        uid: stats.uid,
        gid: stats.gid,
        perm: "755"
      };
      this.files.push(file_entry);
      if (file_number > 1000) {
        break;
      }
      const fileName: string = file;
      if ( fileName.endsWith (".nxs")) {
        console.log("NeXus")
        const h5 = new GetH5Info();
        h5.getInfo(longName);
      }
    }
    // console.log (this.files);

    this.fileNumber = file_number;
    this.totalFileSize = file_size;
    this.sourceFolder = source_folder;
    console.log(this.fileNumber);
  }
}
