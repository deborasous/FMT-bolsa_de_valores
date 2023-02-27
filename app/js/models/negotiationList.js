export class NegotiatiosList {
  #negotiations = [];

  addNegotiation(newNegotiation) {
    this.#negotiations.push(newNegotiation);
  }
}
