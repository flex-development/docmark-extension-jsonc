/**
 * @file Unit Tests - blockComment
 * @module docmark-extension-jsonc/tests/unit/blockComment
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../block.comment.mts'

describe('unit:blockComment', () => {
  it('should be named comment construct', () => {
    expect(testSubject).to.have.property('continuation')
    expect(testSubject).to.have.property('name').be.a('string')
    expect(testSubject).toMatchSnapshot()
  })
})
