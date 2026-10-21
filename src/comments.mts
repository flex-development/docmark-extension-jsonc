/**
 * @file comments
 * @module docmark-extension-jsonc/comments
 */

import { codes, constants, lang } from '@flex-development/docmark-util-symbol'
import type { NormalizedExtension } from '@flex-development/docmark-util-types'
import blockComment from './constructs/block.comment.mts'
import lineComment from './constructs/line.comment.mts'

/**
 * The JSON comments syntax extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} comments
 */
const comments: NormalizedExtension = {
  [constants.contentTypeComments]: {
    [codes.slash]: [blockComment, lineComment]
  },
  [constants.extensionFieldSettings]: {
    [lang.json]: { [constants.contentTypeComments]: true }
  }
}

export default comments
