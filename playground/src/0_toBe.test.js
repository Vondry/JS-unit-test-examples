import { describe, it, expect } from 'vitest';

/**
 * @see https://vitest.dev/api/expect.html#tobe
 *
 * toBe can be used to assert if primitives are equal or that objects share the same reference
 *
 * 💡toBe() matcher is using for comparing values function Object.is(some_value, expected_value);
 *    - Object.is(some_value, expected_value); <=> expect(some_value).toBe(expected_value);
 *
 *   @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#comparing_equality_methods
 */

describe('Playing with toBe and not toBe assertions', () => {
    it('asserts equal primitive data types', () => {
        expect(5 + 2).toBe(7);

        expect('Hello' + ' ' + 'world!').toBe('Hello world!');

        let declaredVariable;
        expect(declaredVariable).toBe(undefined);

        expect(Number('This is Not a Number')).toBe(NaN);

        // TODO: Try to add some assertions form the table 'Comparing equality methods' as shared above
    });

    it('asserts not equal primitive data types', () => {
        expect(+0).not.toBe(-0);
        expect(-0).not.toBe(+0);
    });

    it('asserts same object reference', () => {
        const car = { name: 'Volkswagen' };
        const anotherCar = car;

        expect(car).toBe(anotherCar);

        //❓Will the following assertion be true after uncommenting? Why or why not?
        /*
       anotherCar.name = "BMW";
       expect(car).toBe(anotherCar);
     */
    });

    it('asserts different object reference but same value', () => {
        const car = { name: 'Audi' };
        const anotherCar = { name: 'Audi' };

        // Observer how same values are not equal (because they are different objects in memory => different reference)
        expect(car).not.toBe(anotherCar);
    });
});

describe('Playing with boolean assertions', () => {
    it("asserts 'falsy' values with toBeFalsy", () => {
        expect(0).toBeFalsy();
        expect('').toBeFalsy();
        // ❓ Which other 4 values in JavaScript are falsy? Complete the assertions:
    });

    it("asserts 'truthy' values with toBeTruthy", () => {
        expect(-1).toBeTruthy();
        expect(' ').toBeTruthy();
        expect(true).toBeTruthy();
        expect([]).toBeTruthy();
        expect({}).toBeTruthy();
        // There is infinitive number of truthy values...
    });

    it("asserts 'null' vs. 'undefined' values", () => {
        expect(null).toBeNull();
        expect(undefined).toBeUndefined();

        // toBeDefined can be used to check whether values is not undefined
        let age;
        expect(age).not.toBeDefined();
        expect(age).toBeUndefined();

        age = 44;
        expect(age).toBeDefined();
        expect(age).not.toBeUndefined();
    });
});

describe('Playing with numbers assertions', () => {
    it('asserts less than or greater than for numbers', () => {
        const age = 18;

        expect(age).toBeLessThan(19); // ?
        expect(age).toBeLessThanOrEqual(18); // ?

        expect(age).toBeGreaterThan(17); // ?
        expect(age).toBeGreaterThanOrEqual(18); // ?
    });

    it('asserts equality for floating points numbers (decimal places)', () => {
        // 💡 Closely inspect the line below -> it should be equal, but it is not...
        //    @see https://medium.com/@stheodorejohn/demystifying-floating-point-arithmetic-in-javascript-0-1-0-2-exploring-precision-challenges-4fa8852ab7cb
        expect(0.2 + 0.1).not.toBe(0.3);

        // For comparing numbers with decimal places, you should use following:
        expect(0.2 + 0.1).toBeCloseTo(0.3);
    });
});

describe('Playing with string assertions', () => {
    it('asserts substring', () => {
        const sentence = 'Today is nice weather!';
        expect(sentence).toContain(' is nice ');
    });

    it('asserts regex', () => {
        const phoneNumberRegex = /^\d{3} ?\d{3} ?\d{3}$/;

        const phoneNumberWithSpaces = '123 456 789';
        expect(phoneNumberWithSpaces).toMatch(phoneNumberRegex);

        const phoneNumberWithoutSpaces = '123456789';
        expect(phoneNumberWithoutSpaces).toMatch(phoneNumberRegex);
    });
});
