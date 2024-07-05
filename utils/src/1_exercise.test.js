import { describe, it, expect } from 'vitest';
import { reverseNumber, getBMICategory, monthlyIncomeFromInterestRate } from './1_exercise';

describe(reverseNumber.name, () => {
    it('reverses whole positive numbers', () => {
        expect(reverseNumber(123)).toBe(321);
    });

    it('reverses whole negative numbers', () => {
        expect(reverseNumber(-98765)).toBe(-56789);
    });

    it('reverses positive fractional numbers', () => {
        expect(reverseNumber(123.456)).toBe(654.321);
    });

    it('reverses negative fractional numbers', () => {
        expect(reverseNumber(-98765.432)).toBe(-234.56789);
    });
});

// TODO create isPalindrome test suite

// TODO create sumEvenNumbers test suite

// TODO: remove .skip one by one as you progress in your implementation to enable tests
describe(getBMICategory.name, () => {
    it.skip('returns "Underweight" for BMI values less than 18.5', () => {
        expect(getBMICategory(50, 1.75)).toBe('Underweight');
        expect(getBMICategory(55, 1.8)).toBe('Underweight');
    });

    it.skip('returns "Normal weight" for BMI values between 18.5 and 24.9', () => {
        expect(getBMICategory(65, 1.75)).toBe('Normal weight');
        expect(getBMICategory(70, 1.8)).toBe('Normal weight');
    });

    it.skip('returns "Overweight" for BMI values between 25 and 29.9', () => {
        expect(getBMICategory(85, 1.75)).toBe('Overweight');
        expect(getBMICategory(90, 1.8)).toBe('Overweight');
    });

    it.skip('returns "Obesity" for BMI values 30 and above', () => {
        expect(getBMICategory(100, 1.75)).toBe('Obesity');
        expect(getBMICategory(110, 1.8)).toBe('Obesity');
    });

    // Edge cases and error handling
    it.skip('throws an error if weight or height is not a positive number', () => {
        expect(() => getBMICategory(0, 1.75)).toThrow('Weight and height must be positive numbers');
        expect(() => getBMICategory(-70, 1.8)).toThrow('Weight and height must be positive numbers');
        expect(() => getBMICategory(70, -1.8)).toThrow('Weight and height must be positive numbers');
        expect(() => getBMICategory(-70, -1.8)).toThrow('Weight and height must be positive numbers');
    });
});

// TODO remove .skip from describe after first test is written (otherwise throws an error if there is nothing)
describe.skip(monthlyIncomeFromInterestRate.name, () => {
    // 💸 Find out your favorite banks (Moneta, Raiffeisenbank, Komerční banka, ...) for the current interest rates for saving accounts
});
