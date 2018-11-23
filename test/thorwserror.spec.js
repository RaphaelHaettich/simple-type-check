/* eslint-disable no-undef */
const { assert, expect } = require('chai');
const simpleTypeCheck = require('../src');

describe('check type array', () => {
    it('array is detected as array and throws no error', () => {
        const expectedResult = true;
        const value = [];
        const type = Array;
        const receivedResult = simpleTypeCheck(value, type);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('string is detected as not a Array and throws error', () => {
        const value = 'asdf';
        const type = Array;
        expect(() => simpleTypeCheck(value, type)).to.throw(`${value} is not of type: ${type.toString()}`);
    });
});
