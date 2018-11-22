const fs = require("fs");

export class FilesInfo {
  files = [];
  file_number = 22;
  experiment_date_time = new Date();
  total_file_size = 12345654;
  source_folder = "source_folder";

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
    }
    // console.log (this.files);

    this.file_number = file_number;
    this.experiment_date_time = date;
    this.total_file_size = file_size;
    this.source_folder = source_folder;
    console.log(this.file_number);
  }
}
