'use strict'

const Integer = require('../types/integer')

/**
 * @module language/library/math
 */

/**
 * Returns the absolute value of the argument.
 *
 * @alias module:language/library/math.'absolute value'
 *
 * @param {module:language/types.Integer} n
 *
 * @throws {external:TypeError}
 * If the argument is not numeric.
 *
 * @returns {module:language/types.Integer}
 */
module.exports['absolute value'] = function (n) {
  if (Integer.isInteger(n)) {
    return n.absoluteValue()
  }

  throw new TypeError('Expected a number.')
}

/**
 * Returns the sum of the first and second arguments.
 *
 * @alias module:language/library/math.'add'
 *
 * @param {module:language/types.Integer} a
 * @param {module:language/types.Integer} b
 *
 * @throws {external:TypeError}
 * If either argument is not numeric.
 *
 * @returns {module:language/types.Integer}
 */
module.exports['add'] = function (a, b) {
  if (Integer.isInteger(a) && Integer.isInteger(b)) {
    return a.add(b)
  }

  throw new TypeError('Expected numbers.')
}

/**
 * Returns the first argument modulo the second argument.
 *
 * @alias module:language/library/math.'modulo'
 *
 * @param {module:language/types.Integer} a
 * @param {module:language/types.Integer} b
 *
 * @throws {external:TypeError}
 * If either argument is not numeric.
 *
 * @returns {module:language/types.Integer}
 */
module.exports['modulo'] = function (a, b) {
  if (Integer.isInteger(a) && Integer.isInteger(b)) {
    return a.modulo(b)
  }

  throw new TypeError('Expected numbers.')
}

/**
 * Returns the product of the first and second arguments.
 *
 * @alias module:language/library/math.'multiply'
 *
 * @param {module:language/types.Integer} a
 * @param {module:language/types.Integer} b
 *
 * @throws {external:TypeError}
 * If either argument is not numeric.
 *
 * @returns {module:language/types.Integer}
 */
module.exports['multiply'] = function (a, b) {
  if (Integer.isInteger(a) && Integer.isInteger(b)) {
    return a.multiply(b)
  }

  throw new TypeError('Expected numbers.')
}

/**
 * Returns the difference of the first and second arguments.
 *
 * @alias module:language/library/math.'subtract'
 *
 * @param {module:language/types.Integer} a
 * @param {module:language/types.Integer} b
 *
 * @throws {external:TypeError}
 * If either argument is not numeric.
 *
 * @returns {module:language/types.Integer}
 */
module.exports['subtract'] = function (a, b) {
  if (Integer.isInteger(a) && Integer.isInteger(b)) {
    return a.subtract(b)
  }

  throw new TypeError('Expected numbers.')
}
