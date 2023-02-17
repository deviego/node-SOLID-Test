export interface AppointmentProps{
  customer: string,
  startAt: Date,
  endsAt: Date,
}


export class Appointment { 
  private props: AppointmentProps

  get customer(): string {
    return this.props.customer
  }

  get startAt() {
    return this.props.startAt
  }

  get endsAt(){
    return this.props.endsAt
  }

  constructor (props: AppointmentProps) {
    const {startAt,endsAt} = props
  
    if(startAt <= new Date()){
      throw new Error('invalid start date')
    }

    if(endsAt <= startAt){
      throw new Error('invalid end date')
      
    }

    this.props = props
  }
}