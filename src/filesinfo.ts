import { GetH5Info } from "./GetH5Info";

import { lstatSync, readdirSync, statSync } from "fs";

export class FilesInfo {
  files = [];
  fileNumber = 22;
  experimentDateTime = new Date();
  totalFileSize = 12345654;
  sourceFolder = "source_folder";

  constructor(source_folder: string) {
    this.getDirInfo(source_folder);
  }

  checkIfDirectory(path: string) {
    const stats = lstatSync(path);
    if (stats.isDirectory()) {
      console.log("is dir");
      this.getDirInfo(path);
    } else {
      console.log("is file");
      this.getFileInfo(path);
    }
  }

  getDirInfo(source_folder: string) {
    const file_names = readdirSync(source_folder);
    console.log(source_folder);
    console.log(file_names);

    let file_number = 0;
    let file_size = 0;
    let date = new Date();

    for (const file of file_names) {
      file_number += 1;
      const longName = source_folder + "/" + file;
      const file_entry = this.getFileInfo(longName);
      file_size += file_entry.size;
      this.files.push(file_entry);
      if (file_number > 1000) {
        break;
      }
      const fileName: string = file;
      if (fileName.endsWith(".nxs")) {
        console.log("NeXus");
        // const h5 = new GetH5Info();
        // const obj = h5.getInfo(longName);
        // console.log(obj);
      }
    }
    // console.log (this.files);

    this.fileNumber = file_number;
    this.totalFileSize = file_size;
    this.sourceFolder = source_folder;
    console.log(this.fileNumber);
  }

  private getFileInfo(longName: string) {
    const stats = statSync(longName);
    const relativeName = longName.replace("/users/detector", "/static");
    this.experimentDateTime = new Date(stats.mtime);
    const file_entry = {
      path: relativeName,
      size: stats.size,
      time: stats.mtime,
      chk: "string",
      uid: stats.uid,
      gid: stats.gid,
      perm: "755"
    };
    return file_entry;
  }
}
