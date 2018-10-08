import { expect } from "chai";
import "mocha";
import { MetadataCreator } from "../src/metadatacreator";

describe("check metadatacreator", () => {
  it("should have property metadata", () => {
    const result = new MetadataCreator();
    expect(result).to.have.own.property("metadata");
  });
});
