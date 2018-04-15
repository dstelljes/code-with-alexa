'use strict'

const isValueObject = require('immutable').isValueObject
const test = require('ava').test

const Character = require('./character')

test('accepts code point values', t => {
  t.true(Character(97) instanceof Character)
  t.true(Character(97).equals(Character('a')))
})

test('accepts single-character strings', t => {
  t.true(Character('a') instanceof Character)
  t.true(Character('a').equals(Character(97)))
})

test('accepts existing Characters', t => {
  t.true(Character(Character('a')) instanceof Character)
  t.true(Character(Character('a')).equals(Character('a')))
})

test('rejects out-of-range code points', t => {
  t.throws(() => Character(-1), TypeError)
  t.throws(() => Character(1114112), TypeError)
  t.throws(() => Character(97.5), TypeError)
})

test('rejects out-of-range strings', t => {
  t.throws(() => Character(''), TypeError)
  t.throws(() => Character('aa'), TypeError)
})

test('rejects other objects', t => {
  t.throws(() => Character({}), TypeError)
  t.throws(() => Character(null), TypeError)
  t.throws(() => Character(undefined), TypeError)
})

test('identifies Characters', t => {
  t.true(Character.isCharacter(Character('a')))
})

test('identifies non-Characters', t => {
  t.false(Character.isCharacter(97))
  t.false(Character.isCharacter('a'))
  t.false(Character.isCharacter({}))
  t.false(Character.isCharacter(null))
})

test('does not equate different values', t => {
  t.false(Character('a').equals(Character(1)))
})

test('does not equate non-Characters', t => {
  t.false(Character('a').equals(97))
})

test('implements ValueObject', t => {
  t.true(isValueObject(Character('a')))
})
