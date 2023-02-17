import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointments";
import { CreateAppointment } from "./create-appointment";

describe("Create Appointment", () => {
  it("shuld be able to create appointment", () => {
    const startAt = new Date();
    const endsAt = new Date();
    startAt.setDate(startAt.getDate() + 1);
    endsAt.setDate(endsAt.getDate() + 2);

    const sut = new CreateAppointment();

    expect(
      sut.execute({
        customer: "John Doe",
        startAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment)
  });
});
