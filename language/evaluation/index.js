'use strict'

/**
 * @module language/evaluation
 */
module.exports = {
  RepresentationError: require('./representation-error'),
  evaluate: require('./expression').evaluate
}
