import { expect } from "chai";
import "mocha";

import { BeamInstrumentation } from "./../src/BeamInstrumentation";

describe("check beam", () => {
  it("should have property contactemail", () => {
    const result = new BeamInstrumentation();
    expect(result).to.have.property("contactEmail");
  });
});
