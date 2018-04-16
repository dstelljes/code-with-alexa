'use strict'

const BigInteger = require('big-integer')
const hash = require('immutable').hash

module.exports = Integer

const _sentinel = Symbol('Integer sentinel')
const _value = Symbol('Integer value')

const wrap = function (value) {
  const instance = Object.create(Integer.prototype)
  instance[_sentinel] = true
  instance[_value] = value

  return instance
}

/**
 * @class
 * @classdesc
 * An Integer represents an integer of any size.
 *
 * @memberof module:language/types
 *
 * @param {*} value
 * The value of the Integer represented as a number or a string.
 *
 * @throws {external:TypeError}
 * If the value is a number and contains a fractional component.
 *
 * @throws {external:TypeError}
 * If the value is a string and is not able to be parsed as an integer.
 *
 * @throws {external:TypeError}
 * If the value is not a number, a string, or an {@link module:language/types.Integer|Integer}.
 *
 * @returns {module:language/types.Integer}
 */
function Integer (value) {
  if (Integer.isInteger(value)) {
    return value
  }

  let integer

  try {
    if (typeof value === 'number') {
      integer = BigInteger(value)
    } else if (typeof value === 'string' && value.trim().length > 0) {
      integer = BigInteger(value)
    } else {
      throw new TypeError()
    }
  } catch (error) {
    throw new TypeError(`Expected integer: ${value}`)
  }

  return wrap(integer)
}

/**
 * Tests whether the provided object is an Integer.
 *
 * @param {*} maybeInteger
 * The object to test.
 *
 * @returns {boolean}
 */
Integer.isInteger = function isInteger (maybeInteger) {
  return !!(maybeInteger && maybeInteger[_sentinel])
}

Integer.prototype.constructor = Integer

/**
 * Returns the absolute value of the Integer.
 *
 * @returns {module:language/types.Integer}
 */
Integer.prototype.absoluteValue = function absoluteValue () {
  return wrap(this[_value].abs())
}

/**
 * Adds the value of another Integer.
 *
 * @param {module:language/types.Integer} other
 *
 * @returns {module:language/types.Integer}
 */
Integer.prototype.add = function add (other) {
  return wrap(this[_value].add(other[_value]))
}

/**
 * Tests whether the Integer and the provided object have value equality.
 *
 * @param {*} other
 * The object to test.
 *
 * @returns {boolean}
 */
Integer.prototype.equals = function equals (other) {
  return Integer.isInteger(other)
    ? this[_value].eq(other[_value])
    : false
}

/**
 * Computes the Integer's hash identity.
 *
 * @returns {number}
 */
Integer.prototype.hashCode = function hashCode () {
  return hash(this[_value].toString())
}

/**
 * Divides by the value of another Integer and returns the remainder, discarding
 * the quotient.
 *
 * @param {module:language/types.Integer} other
 *
 * @returns {module:language/types.Integer}
 */
Integer.prototype.modulo = function modulo (other) {
  return wrap(this[_value].mod(other[_value]))
}

/**
 * Multiplies by the value of another Integer.
 *
 * @param {module:language/types.Integer} other
 *
 * @returns {module:language/types.Integer}
 */
Integer.prototype.multiply = function multiply (other) {
  return wrap(this[_value].multiply(other[_value]))
}

/**
 * Subtracts the value of another Integer.
 *
 * @param {module:language/types.Integer} other
 *
 * @returns {module:language/types.Integer}
 */
Integer.prototype.subtract = function subtract (other) {
  return wrap(this[_value].subtract(other[_value]))
}

/**
 * Returns a string representation of the Integer.
 *
 * @returns {string}
 */
Integer.prototype.toString = function toString () {
  return `Integer ${this[_value].toString()}`
}
