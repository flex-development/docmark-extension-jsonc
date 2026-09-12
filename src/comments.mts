/**
 * @file comments
 * @module docmark-extension-jsonc/comments
 */

import { codes } from '@flex-development/docmark-util-symbol'
import type { NormalizedExtension } from '@flex-development/docmark-util-types'
import lineComment from './line.comment.mts'

/**
 * The JSON comment syntax extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} comments
 */
const comments: NormalizedExtension = {
  source: { [codes.slash]: [lineComment] }
}

export default comments
