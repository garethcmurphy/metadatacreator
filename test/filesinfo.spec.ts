import { expect } from "chai";
import "mocha";
import { FilesInfo } from "../src/filesinfo";

describe("check files", () => {
  it("should have property files", () => {
    const result = new FilesInfo('demo');
    expect(result).to.have.own.property("files");
  });
});
