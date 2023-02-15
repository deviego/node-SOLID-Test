import { Appointment } from "../entities/appointments";

interface CreateAppointmentRequest {
  customer: string;
  startAt: Date,
  endsAt:Date
}

type CreateAppointmentResponse = Appointment


export class CreateAppointment{
  async execute({
    customer,
    startAt,
    endsAt
  }: CreateAppointmentRequest):Promise <CreateAppointmentResponse> {
    const appointment = new Appointment({
      customer,
      startAt,
      endsAt

    })
    return appointment
  }
}