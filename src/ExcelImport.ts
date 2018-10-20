import * as XLSX from "xlsx";
import { utils } from "xlsx";

const {
  read,
  utils: { sheet_to_json }
} = XLSX;

export class ExcelImport {
  constructor() {
    const data = "./20161101_measurements.xlsx";
    const options = "r";
    const wb: XLSX.WorkBook = XLSX.read(data, options);
    const ws: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[0]];
    const xls_json = utils.sheet_to_json(ws, { header: 1, raw: true });
    console.log(xls_json);
  }
}
