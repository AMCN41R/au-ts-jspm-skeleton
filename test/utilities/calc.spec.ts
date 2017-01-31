import {expect} from "chai";
import {Calc} from "../../src/utilities/calc";

describe("calc testing", () => {
    it("adds 2 number together", () => {
        const a = 2;
        const b = 5;
        const expected = 7;
        const calc = new Calc();

        const result = calc.add(a,b);

        expect(result).to.equal(expected);
    });
});