import { describe, it, test, expect } from 'vitest';

/**
 * @see https://vitest.dev/api/expect.html#toequal
 *
 *  toEqual asserts if the actual value is equal to the received one or has the same structure, if it is an object (compares them recursively).
 */
describe('Playing with toEqual assertion', () => {
    it('correctly assert object values', () => {
        const car = { name: 'Audi' };
        const anotherCar = { name: 'Audi' };

        // `toEqual` cares only about value (does not care about reference as `toBe` does)
        expect(car).toEqual(anotherCar);

        //❓Will the following assertion be true after uncommenting? Why or why not?
        /*
      anotherCar.name = "BMW"
      expect(car).toEqual(anotherCar);
    */
    });

    it('correctly assert object values -> key order does not matter', () => {
        const car = { name: 'Audi', weight: 1000 };
        const anotherCar = { weight: 1000, name: 'Audi' };

        // `toEqual` cares only about value (does not care about reference as `toBe` does)
        expect(car).toEqual(anotherCar);
    });

    it('correctly assert array values', () => {
        const numbers = [1, 2, 3, 4];
        const anotherNumbers = [1, 2, 3, 4];

        expect(numbers).toEqual(anotherNumbers);
    });

    // ❗ Following 3 cases are correct for toStrict (but would fail if there would be toStrictEqual instead)
    test('Case 1: keys with value of undefined are not used', () => {
        const tomas1 = { name: 'Tomas', age: 27, gender: undefined };
        const tomas2 = {
            name: 'Tomas',
            age: 27,
            birthPlace: undefined,
            salary: undefined
        };

        expect(tomas1).toEqual(tomas2);
    });

    test('Case 2: Object types (not checking equality for constructor)', () => {
        class Animal {
            constructor(name) {
                this.name = name;
            }
        }

        expect(new Animal('dog')).toEqual({ name: 'dog' });
    });

    test('Case 3: Sparse arrays (treats empty spaces as undefined)', () => {
        // Sparse array is an array with "holes" (some indexes might hold nothing -> reducing memory usage)
        expect([, 1]).toEqual([undefined, 1]);
        expect([1, , , 3]).toEqual([1, undefined, undefined, 3]);
    });
});

/**
 * @see https://vitest.dev/api/expect.html#tostrictequal
 *
 *  toStrictEqual asserts if the actual value is equal to the received one or has the same structure, if it is an object (compares them recursively), and of the same type.
 *
 */
describe('Playing with toStrictEqual assertion', () => {
    test('Case 1: keys with value of undefined ARE used', () => {
        const user1 = { name: 'Tomas', age: 27 };
        const user2 = { name: 'Tomas', age: 27, birthPlace: undefined };

        expect(user1).not.toStrictEqual(user2);

        // 👷 Make it right for toStrictEqual
        user1.birthPlace = undefined;
        expect(user1).toStrictEqual(user2);
    });

    test('Case 2: Object types (checking equality for constructor)', () => {
        class Animal {
            constructor(name) {
                this.name = name;
            }
        }

        expect(new Animal('dog')).not.toStrictEqual({ name: 'dog' });

        // 👷 Make it right for toStrictEqual
        expect(new Animal('dog')).toStrictEqual(Object.assign(new Animal(), { name: 'dog' }));
    });

    // In CI/CI pipeline the groupBy function is not available, skip this test (in real life I would add polyfill from core-js)
    const isGroupByNotAvailable = !Object.groupBy;
    test.skipIf(isGroupByNotAvailable)('Case 2: Object types (checking equality for constructor)', () => {
        const products = [
            { id: 1, name: 'Laptop', category: 'Electronics' },
            { id: 2, name: 'Shirt', category: 'Clothes' },
            { id: 3, name: 'Phone', category: 'Electronics' },
            { id: 4, name: 'Pants', category: 'Clothes' },
            { id: 5, name: 'Tablet', category: 'Electronics' }
        ];

        const productsByCategory = Object.groupBy(products, ({ category }) => category);

        const correctlyGroupedProducts = {
            Clothes: [
                { id: 2, category: 'Clothes', name: 'Shirt' },
                { id: 4, category: 'Clothes', name: 'Pants' }
            ],
            Electronics: [
                { id: 1, category: 'Electronics', name: 'Laptop' },
                { id: 3, category: 'Electronics', name: 'Phone' },
                { id: 5, category: 'Electronics', name: 'Tablet' }
            ]
        };

        // 🤔 Data are correctly grouped based on `toEqual`, but what is wrong with `toStrictEqual`???
        expect(productsByCategory).toEqual(correctlyGroupedProducts);
        expect(productsByCategory).not.toStrictEqual(correctlyGroupedProducts);

        // 💡 If you check documentation for groupBy https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
        //      - you will find out that this method returns: "A null-prototype object ..."

        // 👷 Make it right for toStrictEqual (option 1.)
        expect({ ...productsByCategory }).toStrictEqual(correctlyGroupedProducts);

        // 👷 Make it right for toStrictEqual (option 2.)
        expect(Object.setPrototypeOf(productsByCategory, {})).toStrictEqual(correctlyGroupedProducts);
    });

    test('Case 3: Sparse arrays (holes are not comparable to undefined)', () => {
        expect([, 1]).toStrictEqual([, 1]);
        expect([1, , , 3]).toStrictEqual([1, , , 3]);
    });
});

/**
 * toEqual and toStrictEqual are both comparing arrays/objects based on value (deep equality).
 *
 * When you can use to toEqual:
 *    - if undefined attributes on the objects are not a problem
 *    - if you do not execute any methods on objects/classes (you do not need object constructor/prototype)
 *    - if you do not work with sparse arrays
 *
 * otherwise use toStrictEqual
 */
