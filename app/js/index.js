function vender() {
  let date = document.getElementById("date").value;
  let soldAmount = Number(document.getElementById("soldAmount").value);
  let valueShare = parseFloat(document.getElementById("valueShare").value);

  console.log(date, soldAmount, valueShare);
}
