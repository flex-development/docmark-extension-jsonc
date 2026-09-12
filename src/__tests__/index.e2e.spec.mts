/**
 * @file E2E Tests - api
 * @module docmark-extension-jsonc/tests/e2e/api
 */

import * as testSubject from '@flex-development/docmark-extension-jsonc'
import { describe, expect, it } from 'vitest'

describe('e2e:docmark-extension-jsonc', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
