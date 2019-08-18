import { Multiblade } from "./../src/Multiblade";

import { expect } from "chai";
import "mocha";

describe("check sonde", () => {
  it("should have property contactemail", () => {
    const result = new Multiblade();
    expect(result).to.have.property("contactEmail");
  });
});
