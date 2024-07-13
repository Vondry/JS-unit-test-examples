import { describe, it, expect } from 'vitest';
import { sum } from './tovon';

describe(sum.name, () => {
    it('should add 2 numbers', () => {
        expect(sum(2, 4)).toBe(6);
    });
});
