export class Negociation {
  #date;
  #numberOfShare;
  #price;

  constructor(dates, numberShares, prices) {
    this.#date = dates;
    this.#numberOfShare = numberShares;
    this.#price = prices;
  }

  get dates() {
    return this.#date;
  }

  get numberShares() {
    return this.#numberOfShare;
  }

  get prices() {
    return this.#price;
  }
}
