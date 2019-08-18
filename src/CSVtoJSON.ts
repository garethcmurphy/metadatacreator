import csv = require("csvtojson");
import fs = require("fs");

class CSVtoJSON {
  public filename: string;
  public jsonData: any[];

  public setFilename(filename: string) {
    this.filename = filename;
  }

  public getUnits(valueName: string) {
    let units = "nounits";
    if (valueName.includes("Speed")) {
      units = "Hz";
    }
    if (valueName.includes("Energy")) {
      units = "MeV";
    }
    if (valueName.includes("Charge")) {
      units = "C";
    }
    if (valueName.includes("attenuator")) {
      units = "mm";
    }
    if (valueName.includes("chtrans")) {
      units = "mm";
    }
    return units;
  }

  public async translateFile() {
    const jsonArray = await csv().fromFile(this.filename);

    this.jsonData = [];
    jsonArray.forEach(element => {
      const element2 = {};
      for (const key of Object.keys(element)) {
        const units = this.getUnits(key);
        const tmp = { u: units, v: element[key] };
        // console.log(key);
        // element[key]= tmp;

        element2[key] = tmp;
        if (tmp.u === "nounits") {
          element2[key] = element[key];
        }
      }
      this.jsonData.push(element2);
    });
    // console.log(this.jsonData);
    const fileName = "output/x.json";
    fs.writeFile(fileName, JSON.stringify(this.jsonData, null, 2), err => {
      if (err) {
        // console.log(err);
      }
    });
  }

  public loopfile() {
    const files2 = fs.readdirSync("input");
    const files3 = files2.filter(file => file.includes("scan_"));
    // console.log(files3);
    const jsonArray2 = [];

    files3.map(a => {
      return this.sync_read("input/" + a, jsonArray2);
    });
    JSON.stringify(jsonArray2, null, 2);
  }

  public sync_read(fileName: string, jsonArray2: object[]) {
    const jsonArray = [];
    const newObject = { key: 25 };
    const fileContents = fs.readFileSync(fileName);
    // console.log("reading", fileName);
    // console.log("split files by newline");
    const lines = fileContents.toString().split("\n");
    // console.log("split head by comma");
    const headers = lines[0].toString().split(",");

    // console.log("split string by comma");
    for (let i = 1; i < lines.length; i++) {
      // console.log("line number", i, lines[i]);
      const obj = {};
      const currentline = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      if (currentline.length > headers.length) {
        for (let k = headers.length; k < currentline.length; k++)
          obj[headers[j - 1]] += currentline[k];
      }

      jsonArray2.push(obj);
    }

    return jsonArray;
  }

  public print(fileName: string) {
    fs.writeFile(fileName, JSON.stringify(this.jsonData, null, 2), err => {
      if (err) {
        throw err;
        // console.log(err);
      }
    });
  }
}

if (require.main === module) {
  const a = new CSVtoJSON();
  const inputDirectory = "./input/";
  const fileName = "./input/scan_5800.csv";
  a.loopfile();
}
