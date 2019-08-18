import { expect } from "chai";
import "mocha";
import { MetadataCreator } from "../src/metadatacreator";

import { FilesInfo } from "./../src/filesinfo";
import { Sonde } from "./../src/Sonde";

describe("check metadatacreator", () => {
  it("should have property metadata", () => {
    const result = new MetadataCreator();
    expect(result).to.have.property("metadata");
    const instrument = new Sonde();
    const tag = "string";
    const sourceFolder = "demo/";

    const filesInfo = new FilesInfo(sourceFolder);
    result.getDataset(instrument, tag, filesInfo);
  });
});
