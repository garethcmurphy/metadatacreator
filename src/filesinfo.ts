import { GetH5Info } from "./GetH5Info";

import { lstatSync, readdirSync, statSync } from "fs";

export class FilesInfo {
  public files = [];
  public fileNumber = 1;
  public experimentDateTime = new Date();
  public totalFileSize = 0;
  public sourceFolder = "source_folder";

  constructor(sourceFolder: string) {
    this.sourceFolder = sourceFolder;
    this.checkIfDirectory(sourceFolder);
  }

  public checkIfDirectory(path: string) {
    const stats = lstatSync(path);
    if (stats.isDirectory()) {
      // console.log("is dir");
      this.getDirInfo(path);
    } else {
      // console.log("is file");
      const fileEntry = this.getFileInfo(path);
      this.files.push(fileEntry);
      this.totalFileSize = fileEntry.size;
      this.fileNumber = 1;
    }
  }

  public getDirInfo(sourceFolder: string) {
    const fileNames = readdirSync(sourceFolder);
    // console.log(sourceFolder);
    // console.log(file_names);

    let fileNumber = 0;

    for (const file of fileNames) {
      fileNumber += 1;
      const longName = sourceFolder + "/" + file;
      const fileEntry = this.getFileInfo(longName);
      this.totalFileSize += fileEntry.size;
      this.files.push(fileEntry);
      if (fileNumber > 1000) {
        break;
      }
      const fileName: string = file;
      if (fileName.endsWith(".nxs")) {
        // console.log("NeXus");
        // const h5 = new GetH5Info();
        // const obj = h5.getInfo(longName);
        // console.log(obj);
      }
    }

    this.fileNumber = fileNumber;
    // console.log(this.fileNumber);
  }

  private getFileInfo(longName: string) {
    const stats = statSync(longName);
    const relativeName = longName.replace("/users/detector", "/static");
    this.experimentDateTime = new Date(stats.mtime);
    const fileEntry = {
      chk: "string",
      gid: stats.gid,
      path: relativeName,
      perm: "755",
      size: stats.size,
      time: stats.mtime,
      uid: stats.uid,
    };
    return fileEntry;
  }
}
