import { expect } from "chai";
import { Sonde} from "../instrument";
import "mocha";

describe("Hello function", () => {
  it("should return hello world", () => {
    const result = new Sonde();
    expect(result).to.have.own.property("contactEmail");
  });
});
