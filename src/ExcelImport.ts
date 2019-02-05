import * as XLSX from "xlsx";
import fs = require("fs");


export class ExcelImport {
  json_data: Object;

  constructor() {
  }

  get_file(filename: string) {
    const workbook = XLSX.readFile(filename);
    const sheet_name_list = workbook.SheetNames;
    console.log(sheet_name_list);
    this.json_data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    
  }



  print(fileName: string) {
    fs.writeFile(fileName, JSON.stringify(this.json_data, null, 2), function(err) {
      if (err) {
        console.log(err);
      }
    });
  }
}


if (require.main === module) {
  const a = new ExcelImport();
  const inputDirectory = "./input/"
  const fileName = "./input/experiment_log_June20.xlsx"
  const outputFileName = fileName.replace("xlsx","json");
  a.get_file(fileName);
  a.print(outputFileName);
}
