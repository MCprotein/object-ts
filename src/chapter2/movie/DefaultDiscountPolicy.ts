import { Money } from '../money/domain/Money'
import { IDiscountCondition } from './DiscountCondition.interface'
import { IDiscountPolicy } from './DiscountPolicy.interface'
import { Screening } from './domain/Screening'

export abstract class DefaultDiscountPolicy implements IDiscountPolicy {
  private conditions: IDiscountCondition[] = []
  constructor(...condition: IDiscountCondition[]) {
    this.conditions = condition
  }

  calculdateDiscountAmount(screening: Screening): Money {
    for (const each of this.conditions) {
      if (each.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening)
      }
    }

    return Money.ZERO
  }

  protected abstract getDiscountAmount(screening: Screening): Money
}
