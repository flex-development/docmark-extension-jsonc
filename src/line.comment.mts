/**
 * @file lineComment
 * @module docmark-extension-jsonc/lineComment
 */

import { factoryMarkers } from '@flex-development/docmark-factory-markers'
import { factorySpace } from '@flex-development/docmark-factory-space'
import { trailingWhitespace } from '@flex-development/docmark-grammar'
import {
  codes,
  constants,
  kind,
  lang,
  tt
} from '@flex-development/docmark-util-symbol'
import type {
  Code,
  ContinuableConstruct,
  Effects,
  NamedConstruct,
  State,
  TokenizeContext
} from '@flex-development/docmark-util-types'
import { whitespace } from '@flex-development/mark-util-character'
import { ok as assert } from 'devlop'

/**
 * The JSONC line comment construct.
 *
 * This construct is expected to run at the `source` content level.
 *
 * @const {ContinuableConstruct & NamedConstruct} lineComment
 */
const lineComment: ContinuableConstruct & NamedConstruct = {
  continuation: { tokenize: tokenizeLineCommentContinuation },
  exit: exitLineComment,
  name: `${tt.comment}:${lang.jsonc}:${kind.line}`,
  tokenize: tokenizeLineComment
}

export default lineComment

/**
 * Exit the comment container.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @return {undefined}
 */
function exitLineComment(this: TokenizeContext, effects: Effects): undefined {
  return void effects.exit(tt.comment)
}

/**
 * Tokenize the first line of a line comment or a continued line.
 *
 * The first line opens the comment container before capturing the comment line
 * prefix.\
 * Continued lines reuse this tokenizer through the continuation construct.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeLineComment(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  /**
   * The tokenization context.
   *
   * @const {TokenizeContext} self
   */
  const self: TokenizeContext = this

  return startComment

  /**
   * Attempt to begin or continue a line comment.
   *
   * The comment container is opened when it is not already open.
   * Continued lines reuse this state through the continuation construct.
   *
   * > 👉 **Note**: `␊` represents a line ending.
   *
   * @example
   *  ```markdown
   *  > |// "allowJs": true,␊
   *     ^
   *  > |// "alwaysStrict": true,␊
   *  > |"customConditions": ["docmark-extension-jsonc", "development"],␊
   *  ```
   *
   * @example
   *  ```markdown
   *  > |// "allowJs": true,␊
   *  > |// "alwaysStrict": true,␊
   *     ^
   *  > |"customConditions": ["docmark-extension-jsonc", "development"],␊
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function startComment(this: void, code: Code): State | undefined {
    // cannot start a line comment.
    if (code !== codes.slash) return nok(code)
    assert(self.containerState, 'expected `containerState` inside comment')

    // open the comment container if not already open.
    if (!self.containerState.open) {
      effects.enter(tt.comment, { kind: kind.line, lang: lang.jsonc })
      self.containerState.open = true
    }

    // begin comment line prefix.
    effects.enter(tt.commentLinePrefix)

    // try capturing comment markers.
    return factoryMarkers(effects, checkBlankLine, nok, [
      [codes.slash, undefined, { _open: true }],
      [codes.slash, undefined, { _close: true }]
    ])(code)
  }

  /**
   * Check for a blank line.
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function checkBlankLine(this: void, code: Code): State | undefined {
    // cannot be a prefixed blank line.
    if (!whitespace(code)) return endPrefix(code)

    // check for prefixed blank line.
    // if found, delegate to `source` initializer.
    // otherwise capture optional comment padding.
    // note: the `trailingWhitespace` construct is used because the `blankLine`
    // construct expects the previous code to be the beginning of stream code
    // or a line ending.
    return effects.check(
      trailingWhitespace,
      endPrefix,
      factorySpace(
        effects,
        endPrefix,
        tt.commentPadding,
        constants.commentPaddingSizeMin
      )
    )(code)
  }

  /**
   * After comment line markers and optional padding.
   *
   * The comment line prefix ends immediately before comment content.
   *
   * > 👉 **Note**: `␊` represents a line ending.
   *
   * @example
   *  ```markdown
   *  > |// "allowJs": true,␊
   *        ^
   *  > |// "alwaysStrict": true,␊
   *  > |"customConditions": ["docmark-extension-jsonc", "development"],␊
   *  ```
   *
   * @example
   *  ```markdown
   *  > |// "allowJs": true,␊
   *  > |// "alwaysStrict": true,␊
   *        ^
   *  > |"customConditions": ["docmark-extension-jsonc", "development"],␊
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function endPrefix(this: void, code: Code): State | undefined {
    effects.exit(tt.commentLinePrefix)
    return ok(code)
  }
}

/**
 * Continue tokenizing a line comment.
 *
 * A continuation line may contain optional padding before
 * a comment line prefix.\
 * The comment container remains open while the {@linkcode lineComment}
 * construct is attempted again.
 *
 * @this {TokenizeContext}
 *
 * @param {Effects} effects
 *  The context object used to transition the state machine
 * @param {State} ok
 *  The successful tokenization state
 * @param {State} nok
 *  The failed tokenization state
 * @return {State}
 *  The initial state
 */
function tokenizeLineCommentContinuation(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
): State {
  return lineStart

  /**
   * Begin a continued comment line.
   *
   * > 👉 **Note**: `␊` represents a line ending.
   *
   * @example
   *  ```markdown
   *  > |    // "allowJs": true,␊
   *  > |    // "alwaysStrict": true,␊
   *     ^
   *  > |    "customConditions": ["docmark-extension-jsonc", "development"],␊
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function lineStart(this: void, code: Code): State | undefined {
    return factorySpace(effects, afterLineStart, tt.commentPadding)(code)
  }

  /**
   * Attempt to tokenize comment line markers.
   *
   * The {@linkcode lineComment} construct is attempted from the current point
   * after optional padding.
   *
   * > 👉 **Note**: `␊` represents a line ending.
   *
   * @example
   *  ```markdown
   *  > |    // "allowJs": true,␊
   *  > |    // "alwaysStrict": true,␊
   *         ^
   *  > |    "customConditions": ["docmark-extension-jsonc", "development"],␊
   *  ```
   *
   * @this {void}
   *
   * @param {Code} code
   *  The current character code
   * @return {State | undefined}
   *  The next state
   */
  function afterLineStart(this: void, code: Code): State | undefined {
    return effects.attempt(lineComment, ok, nok)(code)
  }
}
