/**
 * Swaps items in an array at the given indexes.
 *
 * @template T the type parameter
 *
 * @param {Array<T>} arr - The array in which items will be swapped.
 * @param {number} index1 - The first index.
 * @param {number} index2 - The second index.
 * @returns {Array<T>} - New array with the items swapped.
 * @throws {Error} - If either index is out of bounds or if the input is not an array.
 */
export function swapItems(arr, index1, index2) {
    // TODO implement this function based on docs and test specifications.
    //      - also do not forget to remove .skip to enable already written tests
}

/**
 * TODO check implementation and write unit tests for it. There are 2 mistakes left in the implementation!
 *      Find those 2 mistakes with unit tests and try to fix them :)
 *
 * Check if an array contains any duplicate strings or numbers.
 *
 * @param {Array<string|number>} arr - The array of strings or numbers to check.
 * @returns {boolean} - True if the array contains duplicates, false otherwise.
 */
export function containsDuplicates(arr) {
    let seen = {};

    for (let i = 0; i < arr.length - 1; i++) {
        const item = arr[i];

        if (seen[item]) {
            return true;
        } else {
            seen[item] = true;
        }
    }
    return false;
}
