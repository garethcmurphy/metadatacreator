const csv = require("csvtojson");

class CSVtoJSON {
  filename: string;

  setFilename(filename: string) {
    this.filename = filename;
  }

  getUnits(valueName: string){
      let units = "nounits";
      if (valueName.includes("Speed") ){
          units = "Hz";
      }
      if (valueName.includes("Energy") ){
          units = "MeV";
      }
      if (valueName.includes("Charge") ){
          units = "C";
      }
      if (valueName.includes("attenuator") ){
          units = "mm";
      }
      if (valueName.includes("chtrans") ){
          units = "mm";
      }
      return units;
  }

  async translateFile() {
    const jsonArray = await csv().fromFile(this.filename);

    const unitsArray = [];
    jsonArray.forEach(element => {
        const element2 = {};
      for (const key in element) {
         const units= this.getUnits(key);
          const tmp = {u: units, v: element[key] };
          console.log(key);
          //element[key]= tmp;
          
         element2[key]=tmp; 
          if (tmp.u  === "nounits"){
              element2[key]=element[key]; 
          }
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
