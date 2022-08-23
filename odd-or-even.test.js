const oddishOrEvenish = require('./odd-or-even');

describe('To check whether the function works or not by inputting random numbers', () => {
    test('test case for number 43', () => {
        expect(oddishOrEvenish(43)).toBe("Odd")
    })
    test('test case for number 373', () => {
        expect(oddishOrEvenish(373)).toBe("Odd")
    })
    test('test case for number 4433', () => {
        expect(oddishOrEvenish(4433)).toBe("Even")
    })
})