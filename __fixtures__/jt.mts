/**
 * @file Fixtures - jt
 * @module fixtures/jt
 */

/**
 * The token type dictionary.
 *
 * @enum {string}
 */
const jt = {
  arrayExpression: 'arrayExpression',
  arrayMarker: 'arrayMarker',
  booleanExpression: 'booleanExpression',
  fieldSeparator: 'fieldSeparator',
  nullExpression: 'nullExpression',
  numberExpression: 'numberExpression',
  objectExpression: 'objectExpression',
  objectMarker: 'objectMarker',
  stringExpression: 'stringExpression',
  stringMarker: 'stringMarker',
  unexpectedValue: 'unexpectedValue',
  valueSeparator: 'valueSeparator'
} as const

export default jt
