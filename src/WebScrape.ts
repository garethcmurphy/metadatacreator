import fs = require("fs");
import scraper = require("table-scraper");
const url = "https://stf02.nuclear.lu.se/SoNDe+Testbeams/";
scraper
  .get(url)
  .then((tableData) => {
    fs.writeFileSync("./results.json", JSON.stringify(tableData, null, 2), "utf-8");
  });
