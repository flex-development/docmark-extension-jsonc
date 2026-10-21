/**
 * @file Unit Tests - lineComment
 * @module docmark-extension-jsonc/constructs/tests/unit/lineComment
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../line.comment.mts'

describe('unit:constructs/lineComment', () => {
  it('should be comment construct', () => {
    expect(testSubject).to.have.property('continuation')
    expect(testSubject).toMatchSnapshot()
  })
})
