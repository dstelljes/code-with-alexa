'use strict'

const isValueObject = require('immutable').isValueObject
const test = require('ava').test

const Integer = require('./integer')

test('accepts numbers', t => {
  t.true(Integer(-10) instanceof Integer)
  t.true(Integer(-10).equals(Integer('-10')))

  t.true(Integer(0) instanceof Integer)
  t.true(Integer(0).equals(Integer('0')))
  t.true(Integer(0).equals(Integer('-0')))

  t.true(Integer(10) instanceof Integer)
  t.true(Integer(10).equals(Integer('10')))
})

test('accepts strings', t => {
  t.true(Integer('-10') instanceof Integer)
  t.true(Integer('-10').equals(Integer(-10)))

  t.true(Integer('0') instanceof Integer)
  t.true(Integer('0').equals(Integer(0)))
  t.true(Integer('-0').equals(Integer(0)))

  t.true(Integer('10') instanceof Integer)
  t.true(Integer('10').equals(Integer(10)))
})

test('accepts existing Integer instances', t => {
  t.true(Integer(Integer(0)) instanceof Integer)
  t.true(Integer(Integer(0)).equals(Integer(0)))
})

test('rejects non-integral numbers', t => {
  t.throws(() => Integer(-0.5), TypeError)
  t.throws(() => Integer(0.5), TypeError)
})

test('rejects non-numeric/non-integral strings', t => {
  t.throws(() => Integer(' '), TypeError)
  t.throws(() => Integer('0.5'), TypeError)
  t.throws(() => Integer('a'), TypeError)
})

test('rejects other objects', t => {
  t.throws(() => Integer({}), TypeError)
  t.throws(() => Integer(null), TypeError)
  t.throws(() => Integer(undefined), TypeError)
})

test('identifies Integers', t => {
  t.true(Integer.isInteger(Integer(10)))
})

test('identifies non-Integers', t => {
  t.false(Integer.isInteger(10))
  t.false(Integer.isInteger(' '))
  t.false(Integer.isInteger({}))
  t.false(Integer.isInteger(null))
})

test('does not equate different values', t => {
  t.false(Integer(10).equals(Integer(-10)))
})

test('does not equate non-Integers', t => {
  t.false(Integer(0).equals(0))
})

test('implements ValueObject', t => {
  t.true(isValueObject(Integer(0)))
})

test('computes absolute value', t => {
  t.true(Integer(10).absoluteValue().equals(Integer(10)))
  t.true(Integer(0).absoluteValue().equals(Integer(0)))
  t.true(Integer(-10).absoluteValue().equals(Integer(10)))
})

test('adds', t => {
  t.true(Integer(2).add(Integer(-2)).equals(Integer(0)))
})

test('mods', t => {
  t.true(Integer(5).modulo(Integer(3)).equals(Integer(2)))
  t.true(Integer(6).modulo(Integer(3)).equals(Integer(0)))
  t.true(Integer(-5).modulo(Integer(3)).equals(Integer(-2)))
  t.true(Integer(5).modulo(Integer(-3)).equals(Integer(2)))
})

test('multiplies', t => {
  t.true(Integer(2).multiply(Integer(-2)).equals(Integer(-4)))
})

test('subtracts', t => {
  t.true(Integer(2).subtract(Integer(-2)).equals(Integer(4)))
})
