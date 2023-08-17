import { Money } from '../../money/domain/Money'
import { Customer } from './Customer'
import { Movie } from './Movie'
import { Reservation } from './Reservation'

export class Screening {
  constructor(
    private movie: Movie,
    private sequence: number,
    private whenScreened: Date
  ) {}

  get getStartTime(): Date {
    return this.whenScreened
  }

  isSequence(sequence: number): boolean {
    return this.sequence === sequence
  }

  get getMovieFee(): Money {
    return this.movie.getFee
  }

  reserve(customer: Customer, audienceCount: number): Reservation {
    return new Reservation(customer, this, this.calcaulateFee(audienceCount), audienceCount)
  }

  private calcaulateFee(audienceCount: number): Money {
    return this.movie.calculateMovieFee(this).times(audienceCount)
  }
}
