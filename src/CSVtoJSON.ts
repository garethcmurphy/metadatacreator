const csv = require("csvtojson");

class CSVtoJSON {
  filename: string;

  setFilename(filename: string) {
    this.filename = filename;
  }

  async translateFile() {
    const jsonArray = await csv().fromFile(this.filename);

    const unitsArray = [];
    jsonArray.forEach(element => {
        const element2 = {};
      for (const key in element) {
          const tmp = {u: "Hz", v: element[key] };
          console.log(key);
          //element[key]= tmp;
          
         element2[key]=tmp; 
      }
      unitsArray.push(element2);
    });
    console.log(unitsArray);
  }
}

if (require.main === module) {
  const a = new CSVtoJSON();
  const inputDirectory = "./input/";
  const fileName = "./input/scan_5800.csv";
  const outputFileName = fileName.replace("xlsx", "json");
  a.setFilename(fileName);
  a.translateFile();
  //a.get_file(fileName);
}
