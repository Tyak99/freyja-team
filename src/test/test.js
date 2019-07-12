/* eslint-disable no-undef */

/**
 * @method sumOfNums
 * @param {number} a first number
 * @param {number} b second number
 * @description returns the multiplied value of the the params
 * @returns {number} a number
 */
const sumOfnums = (a, b) => a * b;

test('should return multiplied value of the arguments passed', () => {
  const result = sumOfnums(5, 7);
  expect(result).toBe(35);
});
