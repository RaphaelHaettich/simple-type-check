/* eslint-disable no-undef */
const { expect } = require('chai');
const simpleTypeCheck = require('../src');

describe('check type undefined', () => {
    it('undefined is detected as undefined', () => {
        const expectedResult = true;
        const value = undefined;
        const type = undefined;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('number is detected as not a undefined', () => {
        const expectedResult = false;
        const value = 123;
        const type = undefined;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('function is detected as not a undefined', () => {
        const expectedResult = false;
        const value = () => { };
        const type = undefined;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('bool is detected as not a undefined', () => {
        const expectedResult = false;
        const value = true;
        const type = undefined;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('object is detected as not a undefined', () => {
        const expectedResult = false;
        const value = {};
        const type = undefined;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('string is detected as not a undefined', () => {
        const expectedResult = false;
        const value = 'asdf';
        const type = undefined;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('array is detected as not a undefined', () => {
        const expectedResult = false;
        const value = [];
        const type = undefined;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('null is detected as not a undefined', () => {
        const expectedResult = false;
        const value = null;
        const type = undefined;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('NaN is detected as not a undefined', () => {
        const expectedResult = false;
        const value = NaN;
        const type = undefined;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });
});
