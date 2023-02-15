
import {expect, test} from 'vitest'
import { Appointment } from './appointments'

test('creat an appointment', () => {
  const startAt = new Date()
  const endsAt = new Date()

  endsAt.setDate(endsAt.getDate() +1)
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