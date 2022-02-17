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

    // Error Message
    const errorString = document.getElementById("error-string");
    const errorNegativeNumber = document.getElementById("error-negative");
    const insufficientIncome = document.getElementById("insufficient-income");
    if (
      income.value < 0 ||
      food.value < 0 ||
      rent.value < 0 ||
      clothes.value < 0
    ) {
      errorNegativeNumber.style.display = "block";
      errorString.style.display = "none";
      insufficientIncome.style.display = "none";
      totalExpenses.innerText = 0;
      balance.innerText = 0;
    } else if (
      isNaN(income.value) ||
      isNaN(food.value) ||
      isNaN(rent.value) ||
      isNaN(clothes.value)
    ) {
      errorString.style.display = "block";
      errorNegativeNumber.style.display = "none";
      insufficientIncome.style.display = "none";
      totalExpenses.innerText = 0;
      balance.innerText = 0;
    } else if (totalExpenses.innerText > income.value) {
      insufficientIncome.style.display = "block";
      errorNegativeNumber.style.display = "none";
      errorString.style.display = "none";
    } else {
      errorNegativeNumber.style.display = "none";
      errorString.style.display = "none";
      insufficientIncome.style.display = "none";
    }
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

    // Error Message
    const saveErrorString = document.getElementById("save-error-string");
    const saveErrorNegative = document.getElementById("save-error-negative");
    const insufficientBalance = document.getElementById("insufficient-balance");
    if (save.value < 0) {
      saveErrorNegative.style.display = "block";
      saveErrorString.style.display = "none";
      insufficientBalance.style.display = "none";
      savingAmount.innerText = 0;
      remainingBalance.innerText = 0;
    } else if (isNaN(save.value)) {
      saveErrorString.style.display = "block";
      saveErrorNegative.style.display = "none";
      insufficientBalance.style.display = "none";
      savingAmount.innerText = 0;
      remainingBalance.innerText = 0;
    } else if (savingAmount.innerText > remainingBalance.innerText) {
      insufficientBalance.style.display = "block";
      saveErrorNegative.style.display = "none";
      saveErrorString.style.display = "none";
      savingAmount.innerText = 0;
      remainingBalance.innerText = 0;
    } else {
      saveErrorNegative.style.display = "none";
      saveErrorString.style.display = "none";
      insufficientBalance.style.display = "none";
    }
  });
