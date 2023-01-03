import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function() {
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerHTML = Math.round(currentAmount *100)/100;
});

document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  if(document.getElementById("input-amount").value.length  != 0){
    await dbank.topUp(inputAmount);
  }

  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerHTML = Math.round(currentAmount *100)/100;

  button.removeAttribute("disabled");
});