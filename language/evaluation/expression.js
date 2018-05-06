'use strict'

const RepresentationError = require('./representation-error')

/**
 * Language expressions are represented as flattened trees in prefix order
 * (pretty much just S-expressions without the parens). The language doesn't
 * support variadic functions.
 *
 * @example
 * // sin(2θ)
 * const expression = [Math.sin, (a, b) => a * b, 2, θ]
 *
 * @memberof module:language/evaluation
 * @typedef {Array.<*>} ExpressionTree
 */

/**
 * Evaluates an expression.
 *
 * @alias evaluate
 * @memberof module:language/evaluation
 * @static
 *
 * @param {module:language/evaluation.ExpressionTree} expression
 *
 * @throws {module:language/evaluation.RepresentationError}
 * If the expression is not a valid tree.
 *
 * @returns {*}
 * The value of the expression.
 */
module.exports.evaluate = function (expression) {
  const stack = []

  for (let i = expression.length - 1; i >= 0; i--) {
    let object = expression[i]

    if (typeof object === 'function') {
      if (stack.length < object.length) {
        throw new RepresentationError(`Not enough operands in the stack for ${object.name} (arity ${object.length}).`)
      }

      const operands = []

      for (let j = object.length - 1; j >= 0; j--) {
        operands.push(stack.pop())
      }

      object = object(...operands)
    }

    stack.push(object)
  }

  if (stack.length !== 1) {
    throw new RepresentationError(`Expected 1 remaining value in stack; found ${stack.length} (${stack}).`)
  }

  return stack[0]
}
