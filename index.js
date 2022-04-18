let description = document.getElementById("desInput");
let amount = document.getElementById("numberInput");
let date = document.getElementById("date");
let expenses = document.getElementById("expenses");
let button = document.getElementById("addButton");

function addExpense(event) {
  event.preventDefault();

  let text = description.value;
  let number = amount.value;
  let expenseDate = date.value;

  if (text === "" && number === "" && expenseDate === "") {
    return;
  }

  let tr = document.createElement("tr");

  let expenseDesc = document.createElement("td");
  expenseDesc.classList.add("expenseDesc");
  expenseDesc.textContent = text;

  let expenseAmount = document.createElement("td");
  expenseAmount.classList.add("expenseAmount");
  expenseAmount.textContent = "$" + number;

  let expensesDate = document.createElement("td");
  expensesDate.classList.add("expensesDate");
  expensesDate.textContent = expenseDate;

  tr.appendChild(expenseDesc);
  tr.appendChild(expenseAmount);
  tr.appendChild(expensesDate);
  expenses.appendChild(tr);

  description.value = "";
  amount.value = "";
  date.value = "";
}

button.addEventListener("click", addExpense);
