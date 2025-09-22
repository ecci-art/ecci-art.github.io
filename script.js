const moneyDescription = document.getElementById("description")
const moneyAmount = document.getElementById("amount")
const balanceDisplay = document.getElementById("balance-amount");
const transactionList = document.getElementById("transaction-list");

let balance = 0;

function updateBalance(amount) {
    balance += amount
    balanceDisplay.textContent = `${balance.toFixed(2)}`
}

function addDeposit() {
    const description = moneyDescription.value;
    const amount = parseFloat(moneyAmount.value);
    const timestamp = new Date().toLocaleString();

    if (moneyAmount.value === ""){
        alert("Please enter an amount")
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <span>${description}</span>
    <span>${Number(amount).toFixed(2)}</span>
    <span class="timestamp">${timestamp}</span>
    `;

    transactionList.appendChild(listItem);

    moneyAmount.value = "";
    moneyDescription.value = "";
    updateBalance(amount);

}

function addExpense() {
    const description = moneyDescription.value;
    const amount = parseFloat(moneyAmount.value);
    const timestamp = new Date().toLocaleString();

    if (moneyAmount.value === ""){
        alert("Please enter an amount")
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <span>${description}</span>
    <span style="color:red">${Number(amount).toFixed(2)}</span>
    <span class="timestamp">${timestamp}</span>
    `;

    transactionList.appendChild(listItem);

    moneyAmount.value = "";
    moneyDescription.value = "";
    updateBalance(-amount);

}