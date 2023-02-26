export class NegociationController {
  #fieldDate;
  #fieldNumberShare;
  #fieldPrice;

  constructor() {
    this.#fieldDate = document.getElementById("date").value;
    this.#fieldNumberShare = Number(
      document.getElementById("soldAmount").value
    );
    this.#fieldPrice = parseFloat(document.getElementById("valueShare").value);
  }
}
