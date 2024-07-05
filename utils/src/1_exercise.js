/**
 * Reverses the digits of a number, preserving its sign.
 *
 * @example
 * // returns 321
 * reverseNumber(123);
 * // returns -321
 * reverseNumber(-123);
 *
 * @param {number} n The number to reverse.
 * @returns {number} The reversed number with the sign preserved.
 */
export const reverseNumber = (n) => {
    const isNegative = n < 0;

    const positiveNumber = Math.abs(n);
    const reversedPositiveNumber = `${positiveNumber}`.split('').reverse().join('');

    return Number(isNegative ? `-${reversedPositiveNumber}` : reversedPositiveNumber);
};

/**
 * Checks if the given value is a palindrome.
 * A palindrome is a word or number that reads the same backwards as forwards.
 *
 * @example
 * // returns true
 * isPalindrome(212);
 * // returns false
 * isPalindrome(345);
 * // returns true
 * isPalindrome('Anna');
 * // returns false
 * isPalindrome('Petr');
 *
 * @param {string|number} value - The value to check for palindrome.
 * @returns {boolean} True if the value is a palindrome, false otherwise.
 */
export const isPalindrome = (value) => {
    // TODO implement and add tests (💡 take inspiration from reverseNumber to solve this problem)
};

/**
 * Sums the even numbers in the given array of numbers.
 *
 * @example
 * // returns 6
 * sumEvenNumbers([1, 2, 3, 4]);
 *
 * @param {number[]} numbers - The array of numbers to sum.
 * @returns {number} The sum of the even numbers in the array.
 */
export const sumEvenNumbers = (numbers) => {
    // TODO implement and add tests
};

/**
 * Get the Body Mass Index (BMI) category based on weight and height.
 *
 * BMI is calculated using the formula:
 *    BMI = weight / (height * height)
 *
 * Categories for BMI are:
 * - "Underweight" if BMI ∈ (0, 18.5)
 * - "Normal weight" if BMI ∈ <18.5, 24.9>
 * - "Overweight" if BMI ∈ <25, 29.9>
 * - "Obesity" if BMI ∈ <30, ∞)
 *
 * @param {number} weight - The weight of the person in kilograms.
 * @param {number} height - The height of the person in meters.
 * @returns {"Underweight"|"Normal weight"|"Overweight"|"Obesity"} The calculated BMI category
 */
export const getBMICategory = (weight, height) => {
    // TODO implement this function based on docs and test specifications.
    //      - also do not forget to remove .skip to enable already written tests
};

/* 🔥 -------- BONUS -------- 🔥 */

/**
 * TODO add tests for this function
 *
 * Calculate the net monthly income from an annual interest rate on a savings account.
 *
 * @example
 * // Returns 269.2 (Kč) if amount is in Kč and annualInterestRate is 3.8 %
 * monthlyIncomeFromInterestRate(100_000, 3.8);
 *
 * @param {number} amount - The amount of money on which the interest rate applies.
 * @param {number} annualInterestRate - Annual interest rate specified in percentage.
 * @returns {number} The net monthly income in the same currency units as 'amount'.
 */
export const monthlyIncomeFromInterestRate = (amount, annualInterestRate) => {
    // 1. Calculate monthlyInterestRate = annualInterestRate / 12 (monthly percentage interest rate)
    const monthlyInterestRate = annualInterestRate / 12;

    // 2. Calculate monthlyRate = monthlyInterestRate / 100 (monthly decimal interest rate for calculations)
    const monthlyRate = monthlyInterestRate / 100;

    // 3. Calculate grossIncome = amount * monthlyRate (gross income before taxes/fees)
    const grossIncome = amount * monthlyRate;

    // 4. Calculate netIncome = grossIncome * 0.85 (net income after subtracting 15 % taxes)
    const netIncome = grossIncome * 0.85;

    return netIncome;
};
