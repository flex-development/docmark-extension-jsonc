/**
 * @file Unit Tests - blockComment
 * @module docmark-extension-jsonc/constructs/tests/unit/blockComment
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../block.comment.mts'

describe('unit:constructs/blockComment', () => {
  it('should be comment construct', () => {
    expect(testSubject).to.have.property('continuation')
    expect(testSubject).toMatchSnapshot()
  })
})
