import { Nmx } from "./../src/Nmx";

import { expect } from "chai";
import "mocha";

describe("check nmx", () => {
  it("should have property contactemail", () => {
    const result = new Nmx();

    expect(result).to.have.property("contactEmail");
  });
});
