
import {expect, test} from 'vitest'
import { Appointment } from './appointments'

test('creat an appointment', () => {
  const startAt = new Date()
  const endsAt = new Date()

  startAt.setDate(startAt.getDate() +1)

  endsAt.setDate(endsAt.getDate() +2)
  const appointment = new Appointment({
    customer: 'John Doe',
    startAt,
    endsAt,
  })

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('John Doe')
})

test("cannot create an appointment with en date before start date", () => {
  const startAt = new Date()
  const endsAt = new Date()

  endsAt.setDate(endsAt.getDate() -1)

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startAt,
      endsAt,
    })
  }).toThrow()
})
test("cannot create an appointment with start date before now date", () => {
  const startAt = new Date()
  const endsAt = new Date()

  startAt.setDate(startAt.getDate() -1)
  endsAt.setDate(endsAt.getDate() -1)

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startAt,
      endsAt,
    })
  }).toThrow()
})