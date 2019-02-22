import { expect } from "chai";
import { Multigrid} from "../src/instrument";
import "mocha";

describe("check multigrid", () => {
  it("should have parse time", () => {
    const result = new Multigrid();
    const filestring = "/users/detector/experiments/multigrid/data/raw/SNS_Aug18/efu_dump/9-2 15-00 US_White";
    expect(result.getTime(filestring)).to.equal("2019-09-02T15:00");
  });
});
