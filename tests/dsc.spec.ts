import { expect } from "chai";
import "mocha";
import { DSC } from "../src/DSC";

describe("check sonde", () => {
  it("should have property contactemail", () => {
    const result = new DSC();
    expect(result).to.have.property("contactEmail");
  });
});
