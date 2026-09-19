/**
 * @file comments
 * @module docmark-extension-jsonc/comments
 */

import { codes } from '@flex-development/docmark-util-symbol'
import type { NormalizedExtension } from '@flex-development/docmark-util-types'
import blockComment from './block.comment.mts'
import lineComment from './line.comment.mts'

/**
 * The JSON comments syntax extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} comments
 */
const comments: NormalizedExtension = {
  source: { [codes.slash]: [blockComment, lineComment] }
}

export default comments
