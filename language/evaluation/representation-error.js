'use strict'

/**
 * Thrown when an expression tree is unable to be evaluated due to invalid
 * representation.
 *
 * Additional details may be included in the error message.
 *
 * @memberof module:language/evaluation
 */
class RepresentationError extends Error {

}

module.exports = RepresentationError
