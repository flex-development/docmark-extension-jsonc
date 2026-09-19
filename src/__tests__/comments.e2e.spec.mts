/**
 * @file E2E Tests - comments
 * @module docmark-extension-jsonc/tests/e2e/comments
 */

import snapshot from '#tests/utils/snapshot-events'
import { parse, postprocess, preprocess } from '@flex-development/docmark'
import testSubject from '@flex-development/docmark-extension-jsonc'
import type {
  Chunk,
  FileLike,
  ParseOptions
} from '@flex-development/docmark-util-types'
import pathe from '@flex-development/pathe'
import { readSync as read } from 'to-vfile'
import { beforeAll, describe, expect, it } from 'vitest'

describe('e2e:comments', () => {
  let options: ParseOptions

  beforeAll(() => {
    options = { extensions: [testSubject] }
  })

  it.each<[path: string]>([
    ['source/01.txt'],
    ['source/02.txt']
  ])('should parse json comments (%j)', path => {
    // Arrange
    const file: FileLike = read(pathe.join('__fixtures__', path))
    const slice: Chunk[] = preprocess()(file, undefined, true)

    // Act
    const result = postprocess(parse(options).source().write(slice))

    // Expect
    expect(snapshot(result)).toMatchSnapshot()
  })
})
