'use strict'

const bigint = require('big-integer')
const hash = require('immutable').hash

module.exports = Integer

const _sentinel = Symbol('Integer sentinel')
const _value = Symbol('Integer value')

/**
 * @class
 * @classdesc
 * An Integer represents an integer of any size.
 *
 * @memberof language.types
 *
 * @param {*} value
 * The value of the Integer represented as a number or a string.
 *
 * @throws {TypeError}
 * If the value is a number and contains a fractional component.
 *
 * @throws {TypeError}
 * If the value is a string and is not able to be parsed as an integer.
 *
 * @throws {TypeError}
 * If the value is not a number, a string, or an {@link language.types.Integer|Integer}.
 *
 * @returns {language.types.Integer}
 */
function Integer (value) {
  if (Integer.isInteger(value)) {
    return value
  }

  let integer

  try {
    if (typeof value === 'number') {
      integer = bigint(value)
    } else if (typeof value === 'string' && value.trim().length > 0) {
      integer = bigint(value)
    } else {
      throw new TypeError()
    }
  } catch (error) {
    throw new TypeError(`Expected integer: ${value}`)
  }

  const instance = Object.create(Integer.prototype)
  instance[_sentinel] = true
  instance[_value] = integer

  return instance
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
 * Tests whether the Integer and the provided object have value equality.
 *
 * @param {*} other
 * The object to test.
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
 * Returns a string representation of the Integer.
 *
 * @returns {string}
 */
Integer.prototype.toString = function toString () {
  return `Integer ${this[_value].toString()}`
}
