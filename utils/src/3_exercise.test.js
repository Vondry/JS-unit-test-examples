import { describe, it, expect } from 'vitest';
import { swapItems } from './3_exercise';

// TODO: remove .skip one by one as you progress in your implementation to enable tests
describe(swapItems.name, () => {
    it.skip('swaps items at given indexes', () => {
        const arr = [1, 2, 3, 4];
        const result = swapItems(arr, 1, 3);
        expect(result).toStrictEqual([1, 4, 3, 2]);
    });

    it.skip('handles swapping the same index', () => {
        const arr = [1, 2, 3, 4];
        const result = swapItems(arr, 2, 2);

        expect(result).toStrictEqual([1, 2, 3, 4]);
    });

    it.skip('handles swapping first and last items', () => {
        const arr = [1, 2, 3, 4];
        const result = swapItems(arr, 0, 3);
        expect(result).toStrictEqual([4, 2, 3, 1]);
    });

    it.skip('does not mutate original array', () => {
        const arr = [1, 2, 3, 4];
        const arrCopy = structuredClone(arr);

        swapItems(arr, 0, 3);
        expect(arr).toStrictEqual(arrCopy);
    });

    it.skip('throws an error if the input is not an array', () => {
        expect(() => swapItems('not an array', 1, 2)).toThrow('Input should be an array');
    });

    it.skip('throws an error if the first index is out of bounds', () => {
        const arr = [1, 2, 3, 4];
        expect(() => swapItems(arr, -1, 2)).toThrow('Index out of bounds');
        expect(() => swapItems(arr, 4, 2)).toThrow('Index out of bounds');
    });

    it.skip('throws an error if the second index is out of bounds', () => {
        const arr = [1, 2, 3, 4];
        expect(() => swapItems(arr, 1, -1)).toThrow('Index out of bounds');
        expect(() => swapItems(arr, 1, 4)).toThrow('Index out of bounds');
    });
});

// TODO write here unit tests for containsDuplicates function and find 2 mistakes that are in the implementation (and try to fix the code)
