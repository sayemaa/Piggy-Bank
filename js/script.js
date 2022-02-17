const income = document.getElementById("income-input");
const balance = document.getElementById("balance");

// Calculate Button
const calculateButton = document
  .getElementById("calculate-btn")
  .addEventListener("click", function () {
    const food = document.getElementById("food-input");
    const rent = document.getElementById("rent-input");
    const clothes = document.getElementById("clothes-input");

    // Total Expenses
    const totalExpenses = document.getElementById("total-expenses");
    totalExpenses.innerText =
      parseFloat(food.value) +
      parseFloat(rent.value) +
      parseFloat(clothes.value);

    // Balance
    const balance = document.getElementById("balance");
    balance.innerText =
      parseFloat(income.value) - parseFloat(totalExpenses.innerText);
  });

// Save Button
const saveButton = document
  .getElementById("save-btn")
  .addEventListener("click", function () {
    const save = document.getElementById("save-input");
    const savingAmount = document.getElementById("saving-amount");
    savingAmount.innerText =
      parseFloat(income.value) * parseFloat(save.value / 100);
    const remainingBalance = document.getElementById("remaining-balance");
    remainingBalance.innerText =
      parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);
  });
