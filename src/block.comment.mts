/**
 * @file blockComment
 * @module docmark-extension-jsonc/blockComment
 */

import { factoryBlockComment } from '@flex-development/docmark-factory-block'
import { codes, kind, lang, tt } from '@flex-development/docmark-util-symbol'
import type {
  ContinuableConstruct,
  NamedConstruct
} from '@flex-development/docmark-util-types'

/**
 * The JSONC block comment construct.
 *
 * This construct is expected to run at the `source` content level.
 *
 * @const {ContinuableConstruct & NamedConstruct} comment
 */
const comment: ContinuableConstruct & NamedConstruct = factoryBlockComment({
  construct: { name: `${tt.comment}:${lang.jsonc}:${kind.block}` },
  fields: { lang: lang.jsonc },
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
