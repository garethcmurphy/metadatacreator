import { expect } from "chai";
import { Sonde} from "../src/instrument";
import "mocha";

describe("check sonde", () => {
  it("should have property contactemail", () => {
    const result = new Sonde();
    expect(result).to.have.property("contactEmail");
  });
});
