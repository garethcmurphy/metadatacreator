const csv = require("csvtojson");
import fs = require("fs");

class CSVtoJSON {
  filename: string;
  json_data: Array<any>;

  setFilename(filename: string) {
    this.filename = filename;
  }

  getUnits(valueName: string) {
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

  async translateFile() {
    const jsonArray = await csv().fromFile(this.filename);

    this.json_data = [];
    jsonArray.forEach(element => {
      const element2 = {};
      for (const key in element) {
        const units = this.getUnits(key);
        const tmp = { u: units, v: element[key] };
        console.log(key);
        //element[key]= tmp;

        element2[key] = tmp;
        if (tmp.u === "nounits") {
          element2[key] = element[key];
        }
      }
      this.json_data.push(element2);
    });
    console.log(this.json_data);
    const fileName = "output/x.json";
    fs.writeFile(fileName, JSON.stringify(this.json_data, null, 2), function(
      err
    ) {
      if (err) {
        console.log(err);
      }
    });
  }

  loopfile() {
    const files2 = fs.readdirSync("input");
    const files3 = files2.filter(file => file.includes("scan_"));
    // console.log(files3);
    const json_array2 = [];

    const new_files = files3.map(a => {
      console.log(a);
      return this.sync_read("input/" + a, json_array2);
    });
    const json_str=JSON.stringify(json_array2, null, 2);
    console.log(json_str);
  }

  sync_read(fileName: string, json_array2: Array<Object>) {
    const json_array = [];
    const new_obj = { key: 25 };
    var fileContents = fs.readFileSync(fileName);
    console.log("reading", fileName);
    console.log("split files by newline");
    var lines = fileContents.toString().split("\n");
    console.log("split head by comma");
    const headers = lines[0].toString().split(",");

    console.log("split string by comma");
    for (var i = 1; i < lines.length; i++) {
      console.log("line number", i, lines[i]);
      const obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      if (currentline.length > headers.length) {
        for (var k = headers.length ; k < currentline.length; k++)
          obj[headers[j-1]] += currentline[k];
      }

      json_array2.push(obj);
    }

    return json_array;
  }

  print(fileName: string) {
    fs.writeFile(fileName, JSON.stringify(this.json_data, null, 2), function(
      err
    ) {
      if (err) {
        console.log(err);
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
