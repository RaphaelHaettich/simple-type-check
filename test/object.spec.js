/* eslint-disable no-undef */
const { expect } = require('chai');
const simpleTypeCheck = require('../src');

describe('check type object', () => {
    it('object is detected as object', () => {
        const expectedResult = true;
        const value = {};
        const type = 'object';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('null is detected as object', () => {
        const expectedResult = true;
        const value = null;
        const type = 'object';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('array is detected as object', () => {
        const expectedResult = true;
        const value = [];
        const type = 'object';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('number is detected as not a object', () => {
        const expectedResult = false;
        const value = 123;
        const type = 'object';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('function is detected as not a object', () => {
        const expectedResult = false;
        const value = () => { };
        const type = 'object';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('bool is detected as not a object', () => {
        const expectedResult = false;
        const value = true;
        const type = 'object';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('string is detected as not a object', () => {
        const expectedResult = false;
        const value = 'asdf';
        const type = 'object';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('undefined is detected as not a object', () => {
        const expectedResult = false;
        const value = undefined;
        const type = 'object';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('NaN is detected as not a object', () => {
        const expectedResult = false;
        const value = NaN;
        const type = 'object';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });
});
