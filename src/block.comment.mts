/**
 * @file blockComment
 * @module docmark-extension-jsonc/blockComment
 */

import { factoryBlockComment } from '@flex-development/docmark-factory-block'
import { codes } from '@flex-development/docmark-util-symbol'
import type { ContinuableConstruct } from '@flex-development/docmark-util-types'

/**
 * The JSONC block comment construct.
 *
 * This construct is expected to run at the `source` content level.
 *
 * @see {@linkcode ContinuableConstruct}
 *
 * @const {ContinuableConstruct} comment
 */
const comment: ContinuableConstruct = factoryBlockComment({
  markers: {
    closer: [
      { code: codes.asterisk, type: null },
      { code: codes.slash, type: null }
    ],
    line: codes.asterisk,
    opener: [
      { code: codes.slash, type: null },
      { code: codes.asterisk, type: null }
    ]
  }
})

export default comment
