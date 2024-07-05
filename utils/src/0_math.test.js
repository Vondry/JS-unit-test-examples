import { expect, it, describe } from 'vitest';
import { add, factorial, isPrime, isOdd } from './0_math';

describe(add.name, () => {
    it('sums positive numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(40000, 20000)).toBe(60000);
        expect(add(0.5, 1.23)).toBe(1.73);
    });

    it('sums negative numbers', () => {
        expect(add(-1, -2)).toBe(-3);
        expect(add(-40000, -20000)).toBe(-60000);
        expect(add(-0.5, -1.23)).toBe(-1.73);
    });

    it("concatenates 'hello' + ' world' to be 'hello world'", () => {
        expect(add('hello', ' world')).toBe('hello world');
    });
});

describe(factorial.name, () => {
    it('throws error when value < 0', () => {
        //💡 When testing error cases, function needs to be wrapper inside callback so that the error can be caught
        expect(() => factorial(-0.1)).toThrow('Factorial of a negative number is not defined.');
    });

    it('factors 0 and 1 to be 1', () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
    });

    it('factors positive numbers', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(15)).toBe(1307674368000);
    });
});

describe(isPrime.name, () => {
    //💡If there is same outcome for different values, then repeating assertions can be reduced with .each(...)
    // @see https://vitest.dev/api/#test-each
    it.each([2, 3, 5, 7, 11, 13, 17, 19, 23])('%i is a prime number', (value) => {
        expect(isPrime(value)).toBe(true);
        // ❓ What if we replace `toBe(true)` with `toBeTruthy()` ?
    });

    it.each([0, 1, 4, 6, 8, 9, 10, 15, 21])('%i is not a prime number', (value) => {
        expect(isPrime(value)).toBe(false);
    });
});

describe(isOdd.name, () => {
    it.each([1, 3, 5, 7, 9, 11])('%i is a odd number', (value) => {
        // @see https://vitest.dev/api/expect.html#tosatisfy
        expect(value).toSatisfy(isOdd);
        // ❓ What is the another way to test this without `toSatisfy` ?
    });

    it.each([0, 2, 4, 6, 8, 10])('%i is a even number', (value) => {
        expect(value).not.toSatisfy(isOdd);
    });
});
