const { expect } = require('chai');
const plusOne = require('./index');

describe('GIVEN plusOne function', () => {
    describe('AND the input is an array of integers representing an integer', () => {
        it('SHOULD add one to the integer and return it represented as an array', () => {
            const inputArray = [1, 2, 3];
            const output = plusOne(inputArray);

            expect(output).to.be.eql([1, 2, 4]);
        });

        it('SHOULD add one to the integer and return it represented as an array', () => {
            const inputArray = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
            const output = plusOne(inputArray);

            expect(output).to.be.eql([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
        });
    });
});
