export class NegotiationController {
  #fieldDate;
  #fieldNumberShare;
  #fieldPrice;

  constructor() {
    this.#fieldDate = document.getElementById("date");
    this.#fieldNumberShare = document.getElementById("soldAmount");
    this.#fieldPrice = document.getElementById("priceShare");
  }

  //metodo para interagir com os atributos e pegar o valor digitado nos inputs
  createNegotiation() {
    let date = new Date();
    date = this.#fieldDate.value;
    let numberShare = this.#fieldNumberShare.value;
    let price = this.#fieldPrice.value;

  }
}
