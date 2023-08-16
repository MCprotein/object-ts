/**
 * 예제코드 Money amount -> money: Money
 */
export class Money {
  constructor(private amount: number) {}

  static wons(amount: number): Money {
    return new Money(amount)
  }

  static get ZERO(): Money {
    return Money.wons(0)
  }

  plus(money: Money): Money {
    return new Money(this.amount + money.amount)
  }

  minus(money: Money): Money {
    return new Money(Math.abs(this.amount - money.amount))
  }

  times(percent: number): Money {
    return new Money(this.amount * percent)
  }

  isLessThan(money: Money): boolean {
    return this.amount < money.amount
  }

  isGreaterThanOrEqual(money: Money): boolean {
    return this.amount >= money.amount
  }

  equals(object: Object): boolean {
    if (this === object) return true

    if (!(object instanceof Money)) return false

    const other = object as Money
    return this.amount === other.amount
  }

  hashCode(): number {
    return this.hash(this.amount)
  }

  hash(value: number): number {
    const randomNumber = String(Math.floor(Math.random() * 1000000))
    return Number(randomNumber.slice(0, 3)) + value + Number(randomNumber.slice(4, 6))
  }

  toString(): string {
    return String(this.amount) + '원'
  }
}
