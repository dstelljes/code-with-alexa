'use strict'

const RepresentationError = require('./representation-error')
const evaluate = require('./expression').evaluate
const test = require('ava').test

test('invalid trees', t => {
  t.throws(() => evaluate([]), RepresentationError)
  t.throws(() => evaluate([1, 2]), RepresentationError)
  t.throws(() => evaluate([Math.log]), RepresentationError)
  t.throws(() => evaluate([Math.pow, 4, 2, 1]), RepresentationError)
})

test('single terminals', t => {
  t.is(evaluate([24]), 24)
  t.is(evaluate(['string']), 'string')
  t.is(evaluate([undefined]), undefined)
  t.is(evaluate([[1, 2, 4]]).length, 3)
})

test('single nonterminals', t => {
  t.is(evaluate([Math.sqrt, 4]), 2)
  t.is(evaluate([Math.pow, 2, 3]), 8)
  t.is(typeof evaluate([Math.random]), 'number')
})

test('complex trees', t => {
  t.is(evaluate([Math.min, Math.max, 4, 2, 6]), 4)
  t.is(evaluate([Math.sqrt, Math.pow, 3, 2]), 3)
  t.is(evaluate([(a, b, c) => a + b + c, 'c', String.fromCharCode, 97, 't']), 'cat')
})
