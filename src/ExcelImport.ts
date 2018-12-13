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

  print() {
    fs.writeFile("nmx.json", JSON.stringify(this.json_data, null, 2), function(err) {
      if (err) {
        console.log(err);
      }
    });
  }
}


if (require.main === module) {
  const a = new ExcelImport();
  a.get_file("./20161101_measurements.xlsx");
  a.print();
}
