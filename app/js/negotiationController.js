import { Negotiation } from "./models/negotiation.js";
import { NegotiatiosList } from "./models/negotiationList.js";
import { NegotiationViews } from "./views/negotiationsViews.js";

export class NegotiationController {
  #fieldCode;
  #fieldDate;
  #fieldNumberShare;
  #fieldPrice;
  #negotiationList = new NegotiatiosList();
  #negotiationView = new NegotiationViews();

  constructor() {
    this.#fieldDate = document.getElementById("date");
    this.#fieldNumberShare = document.getElementById("soldAmount");
    this.#fieldPrice = document.getElementById("priceShare");
    this.#fieldCode = document.getElementById("code");
  }

  //metodo para interagir com os atributos e pegar o valor digitado nos inputs
  createNegotiation() {
    let date = this.#fieldDate.value;
    let code = this.#fieldCode.value;
    let numberOfShare = this.#fieldNumberShare.value;
    let price = this.#fieldPrice.value;

    let negotiation = new Negotiation(code, date, numberOfShare, price);
    this.#negotiationList.addNegotiation(negotiation);
    this.#negotiationView.updateTable(code, date, numberOfShare, price);

    // console.log(this.#negotiationList, "teste");
  }
}
