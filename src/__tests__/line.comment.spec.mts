/**
 * @file Unit Tests - lineComment
 * @module docmark-extension-jsonc/tests/unit/lineComment
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../line.comment.mts'

describe('unit:lineComment', () => {
  it('should be comment construct', () => {
    expect(testSubject).to.have.property('continuation')
    expect(testSubject).toMatchSnapshot()
  })
})
