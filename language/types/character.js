'use strict'

const hash = require('immutable').hash

module.exports = Character

const _sentinel = Symbol('Character sentinel')
const _value = Symbol('Character value')

/**
 * @class
 * @classdesc
 * A Character represents a single UTF-8 character.
 *
 * @memberof language.types
 *
 * @param {*} value
 * The value of the Character represented as a one-character string or a code
 * point.
 *
 * @throws {external:TypeError}
 * If the value is a number outside of the code point range.
 *
 * @throws {external:TypeError}
 * If the value is a string longer or shorter than a single character.
 *
 * @throws {external:TypeError}
 * If the value is not a number, a string, or a {@link language.types.Character|Character}.
 *
 * @returns {language.types.Character}
 */
function Character (value) {
  if (Character.isCharacter(value)) {
    return value
  }

  let character

  if (typeof value === 'number' && value >= 0 && value < 1114112 && value % 1 === 0) {
    character = value
  } else if (typeof value === 'string' && value.length === 1) {
    character = value.codePointAt(0)
  } else {
    throw new TypeError(`Expected character: ${value}`)
  }

  const instance = Object.create(Character.prototype)
  instance[_sentinel] = true
  instance[_value] = character

  return instance
}

/**
 * Tests whether the provided object is a Character.
 *
 * @param {*} maybeCharacter
 * The object to test.
 *
 * @returns {boolean}
 */
Character.isCharacter = function isCharacter (maybeCharacter) {
  return !!(maybeCharacter && maybeCharacter[_sentinel])
}

Character.prototype.constructor = Character

/**
 * Tests whether the Character and the provided object have value equality.
 *
 * @param {*} other
 * The object to test.
 */
Character.prototype.equals = function equals (other) {
  return Character.isCharacter(other)
    ? this[_value] === other[_value]
    : false
}

/**
 * Computes the Character's hash identity.
 *
 * @returns {number}
 */
Character.prototype.hashCode = function hashCode () {
  return hash(this[_value])
}

/**
 * Returns a string representation of the Character.
 *
 * @returns {string}
 */
Character.prototype.toString = function toString () {
  return `Character '${String.fromCodePoint(this[_value])}'`
}
