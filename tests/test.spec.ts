import { expect } from "chai";
import "mocha";
import { Sonde } from "../src/instrument";

describe("check sonde", () => {
  it("should have property contactemail", () => {
    const result = new Sonde();
    expect(result).to.have.property("contactEmail");
  });
});
