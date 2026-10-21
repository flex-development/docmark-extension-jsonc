/**
 * @file Type Tests - Options
 * @module docmark-extension-jsonc/interfaces/tests/unit-d/Options
 */

import type { LanguageOptions } from '@flex-development/docmark-util-types'
import type { Nilable, OptionalKeys } from '@flex-development/tutils'
import { describe, expectTypeOf, it } from 'vitest'
import type TestSubject from '../options.mts'

describe('unit-d:interfaces/Options', () => {
  it('should extend LanguageOptions', () => {
    expectTypeOf<TestSubject>().toExtend<LanguageOptions>()
  })

  it('should have all optional keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<OptionalKeys<TestSubject>>()
  })

  it('should match [comments?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('comments')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [docs?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('docs')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
