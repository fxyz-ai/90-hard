const expenses = [];
const expenseForm = document.getElementById('expense-form');
const expenseDescription = document.getElementById('expense-description');
const expenseAmount = document.getElementById('expense-amount');
const expenseCategory = document.getElementById('expense-category');
const expenseDate = document.getElementById('expense-date');
const expensesList = document.getElementById('expenses');
const totalAmount = document.getElementById('total-amount');

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const description = expenseDescription.value;
    const amount = parseFloat(expenseAmount.value);
    const category = expenseCategory.value;
    const date = expenseDate.value;

    if (!description || !amount || !date) {
        alert('Please fill in all fields');
        return;
    }

    const expense = {
        description,
        amount,
        category,
        date
    };

    expenses.push(expense);
    updateExpensesList();

    expenseDescription.value = '';
    expenseAmount.value = '';
    expenseDate.value = '';
});

function updateExpensesList() {
    expensesList.innerHTML = '';
    let total = 0;

    for (const expense of expenses) {
        const li = document.createElement('li');
        li.innerHTML = `${expense.date}: ${expense.description} - ₹${expense.amount} (${expense.category})`;
        expensesList.appendChild(li);
        total += expense.amount;
    }

    totalAmount.textContent = `₹${total.toFixed(2)}`;
}
