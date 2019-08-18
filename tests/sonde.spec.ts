import { expect } from "chai";
import "mocha";
import { Sonde } from "../src/Sonde";

describe("check sonde", () => {
  it("should have property contactemail", () => {
    const result = new Sonde();
    expect(result).to.have.property("contactEmail");
  });
});
