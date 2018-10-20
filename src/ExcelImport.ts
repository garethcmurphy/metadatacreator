import * as XLSX from "xlsx";
import { utils } from "xlsx";

const {
  read,
  utils: { sheet_to_json }
} = XLSX;

export class ExcelImport {
  constructor() {
    const data = "./20161101_measurements.xlsx";
    const wb: XLSX.WorkBook = XLSX.readFile(data);
    var sheet_name_list = wb.SheetNames;
    console.log(sheet_name_list);
    const ws: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[0]];
    const xls_json = utils.sheet_to_json(ws, { header: 1, raw: true });
    console.log(xls_json);
  }
}
