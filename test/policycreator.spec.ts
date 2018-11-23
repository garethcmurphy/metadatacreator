import { expect } from "chai";
import "mocha";
import { PolicyCreator } from "../src/Policycreator";

describe("check metadatacreator", () => {
  it("should have property metadata", () => {
    const result = new PolicyCreator();
    expect(result).to.have.own.property("metadata");
    expect(result).to.have.own.property("manager_list");
  });
});

