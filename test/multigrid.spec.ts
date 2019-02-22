import { expect } from "chai";
import { Multigrid} from "../src/instrument";
import "mocha";
import { FilesInfo } from "../src/filesinfo";

describe("check multigrid", () => {
  it("should have parse time", () => {
    const result = new Multigrid();
    const sourceFolder = "/users/detector/experiments/multigrid/data/raw/SNS_Aug18/efu_dump/9-2 15-00 US_White";
    const fileInfo = new FilesInfo("demo");
    fileInfo.experimentDateTime = new Date("2018-07-05T13:00:00.000Z");
    fileInfo.sourceFolder = sourceFolder;
    expect(result.getTime(fileInfo)).to.equal("2018-09-01T13:00:00.000Z");
  });
});
