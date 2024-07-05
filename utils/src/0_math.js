/**
 * Adds two numbers.
 *
 * @param {number} a The first number to add.
 * @param {number} b The second number to add.
 * @returns {number} The sum of `a` and `b`.
 */
export const add = (a, b) => a + b;

/**
 * Factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n.
 *
 * @param {number} n The number for which to calculate the factorial.
 * @throws {Error} Throws an error if n is negative.
 * @returns {number} The factorial of n.
 */
export function factorial(n) {
    if (n < 0) throw new Error('Factorial of a negative number is not defined.');

    return n <= 1 ? 1 : n * factorial(n - 1);
}

/**
 * Checks if a number is a prime number.
 *
 * @param {number} n The number to check.
 * @returns {boolean} True if n is a prime number, false otherwise.
 */
export function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

/**
 * Checks if a number is odd.
 *
 * @param {number} value The number to check.
 * @returns {boolean} True if the value is odd, false if it is even.
 */
export const isOdd = (value) => value % 2 !== 0;
