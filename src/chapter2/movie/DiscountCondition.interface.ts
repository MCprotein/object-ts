import { Screening } from './domain/Screening'

export interface IDiscountCondition {
  isSatisfiedBy(screening: Screening): boolean
}
