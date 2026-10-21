/**
 * @file Constructs - blockComment
 * @module docmark-extension-jsonc/constructs/blockComment
 */

import skipComment from '#internal/skip-comment'
import { factoryBlockComment } from '@flex-development/docmark-factory-block'
import { codes, ev, kind, tt } from '@flex-development/docmark-util-symbol'
import type {
  ContinuableConstruct,
  Event,
  MarkerSequence,
  MarkersPack,
  TokenizeContext
} from '@flex-development/docmark-util-types'
import { ok } from 'devlop'

/**
 * The JSONC block comment construct.
 *
 * This construct is expected to run at the `comments` content level.
 *
 * @see {@linkcode ContinuableConstruct}
 *
 * @const {ContinuableConstruct} blockComment
 */
const blockComment: ContinuableConstruct = factoryBlockComment({
  construct: { resolve: resolveBlockComment },
  fields: { info: undefined },
  markers,
  skipComment
})

export default blockComment

/**
 * Create a comment markers configuration.
 *
 * @internal
 *
 * @this {TokenizeContext}
 *
 * @return {MarkersPack}
 *  The markers configuration
 */
function markers(this: TokenizeContext): MarkersPack {
  ok(this.parser.constructs.settings, 'expected parser settings')

  /**
   * The comment opener sequence.
   *
   * @const {MarkerSequence} opener
   */
  const opener: MarkerSequence = [
    { code: codes.slash, type: null },
    { code: codes.asterisk, type: null }
  ]

  // add an optional marker to support documentation comments.
  if (this.parser.constructs.settings.json?.docs) {
    opener.push({ code: codes.asterisk, optional: true, type: null })
  }

  return {
    closer: opener.slice(0, 2).toReversed() as MarkerSequence,
    line: codes.asterisk,
    opener
  }
}

/**
 * Determine if any `comment` tokens represent docblocks.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {Event[]} events
 *  The current list of events
 * @return {Event[]}
 *  The list of changed events
 */
function resolveBlockComment(this: void, events: Event[]): Event[] {
  /**
   * The index of the current event.
   *
   * @var {number} index
   */
  let index: number = -1

  while (++index < events.length) {
    ok(events[index], 'expected `events[index]`')
    const [event, token, self] = events[index]!

    // determine if a block comment is a docblock.
    if (
      event === ev.enter &&
      token.type === tt.comment &&
      token.kind === kind.block
    ) {
      ok(self.containerState, 'expected persistent comment state')
      ok(self.containerState.opener, 'expected comment opener token')

      const { opener } = self.containerState

      // a docblock comment opener contains three characters.
      // any other block comment opener contains two characters.
      token.info = opener.end.offset - opener.start.offset === 3
      if (!token.info) delete token.info
    }
  }

  return events
}
