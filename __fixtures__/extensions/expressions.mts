/**
 * @file Extensions - expressions
 * @module fixtures/extensions/expressions
 */

import arrayExpression from '#fixtures/constructs/array.expression'
import booleanExpression from '#fixtures/constructs/boolean.expression'
import nullExpression from '#fixtures/constructs/null.expression'
import numberExpression from '#fixtures/constructs/number.expression'
import objectExpression from '#fixtures/constructs/object.expression'
import stringExpression from '#fixtures/constructs/string.expression'
import { codes, constants, tt } from '@flex-development/docmark-util-symbol'
import type { NormalizedExtension } from '@flex-development/docmark-util-types'

/**
 * The JSONC expressions extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} expressions
 */
const expressions: NormalizedExtension = {
  [constants.contentTypeExpression]: {
    [codes.quotationMark]: stringExpression, // string
    [codes.plusSign]: numberExpression, // number (explicit positive)
    [codes.dash]: numberExpression, // number (negative)
    [codes.digit0]: numberExpression, // number
    [codes.digit1]: numberExpression, // number
    [codes.digit2]: numberExpression, // number
    [codes.digit3]: numberExpression, // number
    [codes.digit4]: numberExpression, // number
    [codes.digit5]: numberExpression, // number
    [codes.digit6]: numberExpression, // number
    [codes.digit7]: numberExpression, // number
    [codes.digit8]: numberExpression, // number
    [codes.digit9]: numberExpression, // number
    [codes.leftSquareBracket]: arrayExpression, // array
    [codes.lowercaseF]: booleanExpression, // false
    [codes.lowercaseN]: nullExpression, // null
    [codes.lowercaseT]: booleanExpression, // true
    [codes.leftCurlyBrace]: objectExpression // object
  },
  [constants.extensionFieldDisable]: { null: [tt.summary] }
}

export default expressions
