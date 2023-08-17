import { Money } from '../../money/domain/Money'
import { Customer } from './Customer'
import { Screening } from './Screening'

export class Reservation {
  constructor(
    private customer: Customer,
    private screening: Screening,
    private fee: Money,
    private audienceCount: number
  ) {}
}
