import { Money } from '../../money/domain/Money'
import { IDiscountPolicy } from '../DiscountPolicy.interface'
import { Screening } from './Screening'

export class Movie {
  constructor(
    private title: string,
    private runningTime: string,
    private fee: Money,
    private discountPolicy: IDiscountPolicy
  ) {}

  get getFee(): Money {
    return this.fee
  }

  calculateMovieFee(screening: Screening): Money {
    return this.fee.minus(this.discountPolicy.calculdateDiscountAmount(screening))
  }
}
