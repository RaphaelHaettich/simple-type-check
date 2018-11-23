/* eslint-disable no-undef */
const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const simpleTypeCheck = require('../src');

const dom = new JSDOM(`<!DOCTYPE html><p id="testId">Hello world</p>`);

describe('check type HTMLElement', () => {
    it('HTMLElement is detected as HTMLElement', () => {
        const expectedResult = true;
        const value = dom.window.document.querySelector("#testId");
        const type = dom.window.HTMLElement;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('array is detected as not a HTMLElement', () => {
        const expectedResult = false;
        const value = [];
        const type = dom.window.HTMLElement;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('number is detected as not a HTMLElement', () => {
        const expectedResult = false;
        const value = 123;
        const type = dom.window.HTMLElement;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('function is detected as not a HTMLElement', () => {
        const expectedResult = false;
        const value = () => { };
        const type = dom.window.HTMLElement;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('bool is detected as not a HTMLElement', () => {
        const expectedResult = false;
        const value = true;
        const type = dom.window.HTMLElement;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('object is detected as not a HTMLElement', () => {
        const expectedResult = false;
        const value = {};
        const type = dom.window.HTMLElement;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('string is detected as not a HTMLElement', () => {
        const expectedResult = false;
        const value = 'asdf';
        const type = dom.window.HTMLElement;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('undefined is detected as not a HTMLElement', () => {
        const expectedResult = false;
        const value = undefined;
        const type = dom.window.HTMLElement;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('null is detected as not a HTMLElement', () => {
        const expectedResult = false;
        const value = null;
        const type = dom.window.HTMLElement;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });

    it('NaN is detected as not a HTMLElement', () => {
        const expectedResult = false;
        const value = NaN;
        const type = dom.window.HTMLElement;
        const receivedResult = simpleTypeCheck(value, type, false);
        expect(receivedResult).to.be.equal(expectedResult);
    });
});
