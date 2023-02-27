export class Negotiation {
  #code;
  #date;
  #numberOfShare;
  #price;

  constructor(codes, dates, numberShares, prices) {
    this.#code = codes;
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

  get codes() {
    return this.#code;
  }
}
