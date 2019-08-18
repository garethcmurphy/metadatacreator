import { expect } from "chai";
import "mocha";

import { FilesInfo } from "../src/filesinfo";
import { Multigrid } from "../src/Multigrid";

describe("check multigrid", () => {
  it("should have parse time", () => {
    const result = new Multigrid();
    const sourceFolder =
      "/users/detector/experiments/multigrid/data/raw/SNS_Aug18/efu_dump/9-2 15-00 US_White";
    const fileInfo = new FilesInfo("demo");
    fileInfo.experimentDateTime = new Date("2018-07-05T03:00:00.000Z");
    fileInfo.sourceFolder = sourceFolder;
    expect(result.getTime(fileInfo)).to.equal("2018-09-02T15:00:00.000Z");
  });

  it("should parse old time", () => {
    const result = new Multigrid();
    const sourceFolder =
      "/users/detector/experiments/multigrid/data/raw/MG_CNCS/07_11/beamOn_resetOn";
    const fileInfo = new FilesInfo("demo");
    fileInfo.experimentDateTime = new Date("2018-07-05T13:00:00.000Z");
    fileInfo.sourceFolder = sourceFolder;
    expect(result.getTime(fileInfo)).to.equal("20180801");
  });
});
