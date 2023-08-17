import { Money } from '../money/domain/Money'
import { Screening } from './domain/Screening'

export interface IDiscountPolicy {
  calculdateDiscountAmount(screening: Screening): Money
}
