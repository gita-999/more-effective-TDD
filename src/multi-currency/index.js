export default class Dollar {
  constructor(amount) {
    this.amount = amount
  }

  times(multiplications) {
    this.amount = this.amount * multiplications
  }
}
