'use strict'

const Integer = require('../types/integer')
const List = require('../types/list')
const math = require('./math')
const test = require('ava').test

test('non-numeric arguments', t => {
  t.throws(() => math['add'](Integer(2), List()), TypeError)
  t.throws(() => math['add'](List(), Integer(2)), TypeError)
  t.throws(() => math['add'](List(), List()), TypeError)

  t.throws(() => math['absolute value'](List()), TypeError)

  t.throws(() => math['modulo'](List()), TypeError)

  t.throws(() => math['multiply'](Integer(2), List()), TypeError)
  t.throws(() => math['multiply'](List(), Integer(2)), TypeError)
  t.throws(() => math['multiply'](List(), List()), TypeError)

  t.throws(() => math['subtract'](Integer(2), List()), TypeError)
  t.throws(() => math['subtract'](List(), Integer(2)), TypeError)
  t.throws(() => math['subtract'](List(), List()), TypeError)
})

test('Integer + Integer', t => {
  t.true(math['add'](Integer(2), Integer(4)).equals(Integer(6)))
})

test('|Integer|', t => {
  t.true(math['absolute value'](Integer(2)).equals(Integer(2)))
  t.true(math['absolute value'](Integer(-2)).equals(Integer(2)))
})

test('Integer % Integer', t => {
  t.true(math['modulo'](Integer(5), Integer(2)).equals(Integer(1)))
})

test('Integer * Integer', t => {
  t.true(math['multiply'](Integer(3), Integer(6)).equals(Integer(18)))
})

test('Integer - Integer', t => {
  t.true(math['subtract'](Integer(8), Integer(6)).equals(Integer(2)))
})
