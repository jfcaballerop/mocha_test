var assert = require("chai").assert;
var calculator = require("../src/calc/calculator");

describe("Calcultator tests using ASSERT interface from CHAI module: ", function () {
    describe("Check addTested Function: ", function () {
        it("Check the returned value using: assert.equal(value,'value'): ", function () {
            result = calculator.addTested("text");
            assert.equal(result, "text tested");
        });
        it("Check the returned value using: assert.typeOf(value,'value'): ", function () {
            result = calculator.addTested("text");
            assert.typeOf(result, "string");
        });
        it("Check the returned value using: assert.lengthOf(value,'value'): ", function () {
            result = calculator.addTested("text");
            assert.lengthOf(result, 11);
        });
    });




});

describe.only('Test SUM function', () => {
    it('Return false if P1 is INT', () => {
        let result = calculator.sum("1", 1);
        assert.typeOf(result, "number");

    });
    it('Return false if P2 is INT', () => {
        let result = calculator.sum(1, "1");
        assert.typeOf(result, "number");

    });

});