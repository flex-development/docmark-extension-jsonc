/**
 * @file Internal - skipComment
 * @module docmark-extension-jsonc/internal/skipComment
 */

import type { TokenizeContext } from '@flex-development/docmark-util-types'
import { ok } from 'devlop'

/**
 * Check whether a comment is allowed at the current position.
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @return {boolean}
 *  Whether a comment is not allowed
 */
function skipComment(this: TokenizeContext): boolean {
  ok(this.parser.constructs.settings, 'expected parser settings')

  // comments not allowed.
  if (!this.parser.constructs.settings.json?.comments) return true

  // comment not allowed at the current position.
  return !!this.parser.skipComment
}

export default skipComment
