/**
 * @file lineComment
 * @module docmark-extension-jsonc/lineComment
 */

import { factoryLineComment } from '@flex-development/docmark-factory-line'
import { codes, kind, lang, tt } from '@flex-development/docmark-util-symbol'
import type {
  ContinuableConstruct,
  NamedConstruct
} from '@flex-development/docmark-util-types'

/**
 * The JSONC line comment construct.
 *
 * This construct is expected to run at the `source` content level.
 *
 * @const {ContinuableConstruct & NamedConstruct} comment
 */
const comment: ContinuableConstruct & NamedConstruct = factoryLineComment({
  construct: { name: `${tt.comment}:${lang.jsonc}:${kind.line}` },
  fields: { lang: lang.jsonc },
  markers: [
    { code: codes.slash, fields: { _open: true } },
    { code: codes.slash, fields: { _close: true } }
  ]
})

export default comment
