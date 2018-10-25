const fs = require("fs");
var scraper = require("table-scraper");
const url = "https://stf02.nuclear.lu.se/SoNDe+Testbeams/";
scraper
  .get(url)
  .then(function(tableData) {


    fs.writeFileSync("./results.json", JSON.stringify(tableData, null, 2), (err) => {
      console.log("Dumped news bits to file");
    });
    /*
       tableData ===
        [
          [
            { State: 'Minnesota', 'Capital City': 'Saint Paul', 'Pop.': '3' },
            { State: 'New York', 'Capital City': 'Albany', 'Pop.': 'Eight Million' }
          ]
        ]
    */
  });
