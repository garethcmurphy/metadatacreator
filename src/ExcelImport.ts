import fs = require("fs");
import * as XLSX from "xlsx";

export class ExcelImport {
  public jsonData: object;

  public get_file(filename: string) {
    const workbook = XLSX.readFile(filename);
    const sheetNameList = workbook.SheetNames;
    // console.log(sheet_name_list);
    this.jsonData = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheetNameList[0]],
    );
  }

  public print(fileName: string) {
    fs.writeFile(fileName, JSON.stringify(this.jsonData, null, 2), function(
      err
    ) {
      if (err) {
        // console.log(err);
      }
    });
  }
}

if (require.main === module) {
  const a = new ExcelImport();
  const inputDirectory = "./input/";
  const fileName = "./input/20161101_measurements.xlsx";
  const outputFileName = fileName.replace("xlsx", "json");
  a.get_file(fileName);
  a.print(outputFileName);
}
