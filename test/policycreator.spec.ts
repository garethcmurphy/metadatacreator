import { expect } from "chai";
import "mocha";
import { PolicyCreator } from "../src/Policycreator";

describe("check policycreator", () => {
  it("should have property manager_list", () => {
    const result = new PolicyCreator();
    expect(result).to.have.own.property("manager_list");
  });
});

