/* eslint-disable no-undef */
const { expect } = require('chai');
const simpleTypeCheck = require('../src');

describe('check type number', () => {
    it('number is detected as number', () => {
        const expectedResult = true;
        const value = 1234;
        const type = 'number';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('NaN is detected as number', () => {
        const expectedResult = true;
        const value = NaN;
        const type = 'number';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('Array is detected as not a number', () => {
        const expectedResult = false;
        const value = [];
        const type = 'number';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('function is detected as not a number', () => {
        const expectedResult = false;
        const value = () => { };
        const type = 'number';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('bool is detected as not a number', () => {
        const expectedResult = false;
        const value = true;
        const type = 'number';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('object is detected as not a number', () => {
        const expectedResult = false;
        const value = {};
        const type = 'number';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('string is detected as not a number', () => {
        const expectedResult = false;
        const value = 'asdf';
        const type = 'number';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('undefined is detected as not a number', () => {
        const expectedResult = false;
        const value = undefined;
        const type = 'number';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('null is detected as not a number', () => {
        const expectedResult = false;
        const value = null;
        const type = 'number';
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });
});
