/* eslint-disable no-undef */
const { expect } = require('chai');
const simpleTypeCheck = require('../src');

describe('check type array', () => {
    it('array is detected as array', () => {
        const expectedResult = true;
        const value = [];
        const type = Array;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('number is detected as not a array', () => {
        const expectedResult = false;
        const value = 123;
        const type = Array;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('function is detected as not a array', () => {
        const expectedResult = false;
        const value = () => { };
        const type = Array;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('bool is detected as not a array', () => {
        const expectedResult = false;
        const value = true;
        const type = Array;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('object is detected as not a array', () => {
        const expectedResult = false;
        const value = {};
        const type = Array;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('string is detected as not a array', () => {
        const expectedResult = false;
        const value = 'asdf';
        const type = Array;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('undefined is detected as not a array', () => {
        const expectedResult = false;
        const value = undefined;
        const type = Array;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('null is detected as not a array', () => {
        const expectedResult = false;
        const value = null;
        const type = Array;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('NaN is detected as not a array', () => {
        const expectedResult = false;
        const value = NaN;
        const type = Array;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });
});
