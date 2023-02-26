import { Negotiation } from "./models/negotiation.js";
import { NegotiatiosList } from "./models/negotiationList.js";

export class NegotiationController {
  #fieldDate;
  #fieldNumberShare;
  #fieldPrice;
  #negotiationList = new NegotiatiosList();

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

    let negotiation = new Negotiation(date, numberShare, price);
    this.#negotiationList.addNegotiation(negotiation);

    console.log(negotiation);
  }
}
