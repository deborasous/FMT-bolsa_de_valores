import { NegotiationController } from "./negotiationController.js";

const controller = new NegotiationController();
document.getElementById("form").addEventListener("submit", () => {
  

  controller.createNegotiation();
});
