const expect = require('chai').expect
const simpleTypeCheck = require('../src')

describe('check type string', () => {
    it('string is detected as string', () => {
        const expectedResult = true
        const attr = 'my string'
        const type = 'string'
        const receivedResult = simpleTypeCheck(attr, type, false)
        expect(receivedResult).to.be.equal(expectedResult)
    })

    it('number is detected as not a string', () => {
        const expectedResult = false
        const attr = 123
        const type = 'string'
        const receivedResult = simpleTypeCheck(attr, type, false)
        expect(receivedResult).to.be.equal(expectedResult)
    })

    it('function is detected as not a string', () => {
        const expectedResult = false
        const attr = () => { }
        const type = 'string'
        const receivedResult = simpleTypeCheck(attr, type, false)
        expect(receivedResult).to.be.equal(expectedResult)
    })

    it('bool is detected as not a string', () => {
        const expectedResult = false
        const attr = true
        const type = 'string'
        const receivedResult = simpleTypeCheck(attr, type, false)
        expect(receivedResult).to.be.equal(expectedResult)
    })

    it('object is detected as not a string', () => {
        const expectedResult = false
        const attr = {}
        const type = 'string'
        const receivedResult = simpleTypeCheck(attr, type, false)
        expect(receivedResult).to.be.equal(expectedResult)
    })
})