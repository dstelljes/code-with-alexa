'use strict'

const hash = require('immutable').hash

module.exports = String

const _sentinel = Symbol('String sentinel')
const _value = Symbol('String value')

/**
 * @class
 * @classdesc
 * A String represents text.
 *
 * @memberof module:language/types
 *
 * @param {*} value
 * The value of the String represented as a string.
 *
 * @throws {external:TypeError}
 * If the value is not a string or a {@link module:language/types.String|String}.
 *
 * @returns {module:language/types.String}
 */
function String (value) {
  if (String.isString(value)) {
    return value
  }

  let string

  if (typeof value === 'string') {
    string = value
  } else {
    throw new TypeError(`Expected string: ${value}`)
  }

  const instance = Object.create(String.prototype)
  instance[_sentinel] = true
  instance[_value] = string

  return instance
}

/**
 * Tests whether the provided object is a String.
 *
 * @param {*} maybeString
 * The object to test.
 *
 * @returns {boolean}
 */
String.isString = function isString (maybeString) {
  return !!(maybeString && maybeString[_sentinel])
}

String.prototype.constructor = String

/**
 * Tests whether the String and the provided object have value equality.
 *
 * @param {*} other
 * The object to test.
 */
String.prototype.equals = function equals (other) {
  return String.isString(other)
    ? this[_value] === other[_value]
    : false
}

/**
 * Computes the String's hash identity.
 *
 * @returns {number}
 */
String.prototype.hashCode = function hashCode () {
  return hash(this[_value])
}

/**
 * Returns a string representation of the String.
 *
 * @returns {string}
 */
String.prototype.toString = function toString () {
  return `String "${this[_value]}"`
}
