import { expect, test } from 'vitest'
import { getFutreDate } from './get-future-date'

test('increases date with one yeras', () => {
  const year = "2023"
  expect(getFutreDate(`${year}-02-16`).getFullYear()).toEqual(2024)
})