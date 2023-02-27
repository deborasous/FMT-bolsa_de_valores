export class NegotiationViews {
  updateTable(code, date, numberOfShare, price) {
    let tbody = document.getElementById("tbody");

    if (tbody) {
      let tr_Rows = tbody.insertRow(0);
      let td_CellCode = tr_Rows.insertCell(0);
      let td_CellDate = tr_Rows.insertCell(1);
      let td_CellNumberShare = tr_Rows.insertCell(2);
      let td_CellPrice = tr_Rows.insertCell(3);

      td_CellCode.innerHTML = code;
      td_CellDate.innerHTML = date;
      td_CellNumberShare.innerHTML = numberOfShare;
      td_CellPrice.innerHTML = price;
    }
  }
}
