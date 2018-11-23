/* eslint-disable no-undef */
const { expect } = require('chai');
const simpleTypeCheck = require('../src');

describe('check type bool', () => {
    it('bool is detected as bool', () => {
        const expectedResult = true;
        const value = true;
        const type = 'boolean';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('number is detected as not a bool', () => {
        const expectedResult = false;
        const value = 123;
        const type = 'boolean';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('function is detected as not a bool', () => {
        const expectedResult = false;
        const value = () => { };
        const type = 'boolean';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('array is detected as not a bool', () => {
        const expectedResult = false;
        const value = [];
        const type = 'boolean';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('object is detected as not a bool', () => {
        const expectedResult = false;
        const value = {};
        const type = 'boolean';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('string is detected as not a bool', () => {
        const expectedResult = false;
        const value = 'asdf';
        const type = 'boolean';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('undefined is detected as not a bool', () => {
        const expectedResult = false;
        const value = undefined;
        const type = 'boolean';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('null is detected as not a bool', () => {
        const expectedResult = false;
        const value = null;
        const type = 'boolean';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('NaN is detected as not a bool', () => {
        const expectedResult = false;
        const value = NaN;
        const type = 'boolean';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });
});
