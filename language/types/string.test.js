'use strict'

const isValueObject = require('immutable').isValueObject
const test = require('ava').test

const String = require('./string')

test('accepts strings', t => {
  t.true(String('string') instanceof String)
})

test('accepts existing Strings', t => {
  t.true(String(String('string')) instanceof String)
  t.true(String(String('string')).equals(String('string')))
})

test('does not equate different values', t => {
  t.false(String('abc').equals(String('cba')))
})

test('does not equate non-Strings', t => {
  t.false(String('string').equals('string'))
})

test('implements ValueObject', t => {
  t.true(isValueObject(String('string')))
})
