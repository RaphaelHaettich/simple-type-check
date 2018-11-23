/* eslint-disable no-undef */
const { expect } = require('chai');
const simpleTypeCheck = require('../src');

describe('check type string', () => {
    it('string is detected as string', () => {
        const expectedResult = true;
        const value = 'my string';
        const type = 'string';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('number is detected as not a string', () => {
        const expectedResult = false;
        const value = 123;
        const type = 'string';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('function is detected as not a string', () => {
        const expectedResult = false;
        const value = () => { };
        const type = 'string';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('bool is detected as not a string', () => {
        const expectedResult = false;
        const value = true;
        const type = 'string';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('object is detected as not a string', () => {
        const expectedResult = false;
        const value = {};
        const type = 'string';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });
    
    it('Array is detected as not a string', () => {
        const expectedResult = false;
        const value = [];
        const type = 'string';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });
});
