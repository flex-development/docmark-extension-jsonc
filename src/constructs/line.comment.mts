/**
 * @file Constructs - lineComment
 * @module docmark-extension-jsonc/constructs/lineComment
 */

import skipComment from '#internal/skip-comment'
import { factoryLineComment } from '@flex-development/docmark-factory-line'
import { codes } from '@flex-development/docmark-util-symbol'
import type {
  ContinuableConstruct
} from '@flex-development/docmark-util-types'

/**
 * The JSONC line comment construct.
 *
 * This construct is expected to run at the `comments` content level.
 *
 * @see {@linkcode ContinuableConstruct}
 *
 * @const {ContinuableConstruct} lineComment
 */
const lineComment: ContinuableConstruct = factoryLineComment({
  markers: [
    { code: codes.slash, fields: { _open: true } },
    { code: codes.slash, fields: { _close: true } }
  ],
  skipComment
})

export default lineComment
