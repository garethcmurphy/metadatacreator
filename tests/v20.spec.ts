import { expect } from "chai";
import "mocha";

import { V20 } from "../src/V20";

describe("check v20", () => {
  it("should have property contactemail", () => {
    const result = new V20();
    expect(result).to.have.property("contactEmail");
  });
});
