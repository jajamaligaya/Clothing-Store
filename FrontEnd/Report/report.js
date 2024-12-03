// JavaScript logic for modal handling, table updates, etc.

// Sample logic for handling filter application
document.getElementById('applyFiltersBtn').addEventListener('click', function() {
    const month = document.getElementById('modalFilterMonth').value;
    const year = document.getElementById('modalFilterYear').value;

    console.log(`Filters applied: Month - ${month}, Year - ${year}`);
    $('#filterModal').modal('hide');
});

// Add Expense Form Submission Logic
document.getElementById('addExpenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const expenseType = document.getElementById('expenseType').value;
    const expenseAmount = document.getElementById('expenseAmount').value;

    if (expenseType && expenseAmount) {
        const table = document.getElementById('expensesTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${expenseType}</td>
            <td>${expenseAmount}</td>
            <td>
                <button class="btn btn-sm btn-edit" style="color: green;" data-toggle="modal" data-target="#editExpenseModal">
                    <i class="bi bi-pencil-square"></i> Edit
                </button>
                <button class="btn btn-sm btn-delete" style="color: red;">
                    <i class="bi bi-trash3"></i> Delete
                </button>
            </td>
        `;

        // Clear the form fields
        document.getElementById('expenseType').value = '';
        document.getElementById('expenseAmount').value = '';
        $('#addExpenseModal').modal('hide');
    }
});

// Edit Expense Form Logic
document.getElementById('editExpenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement logic for saving changes
});

// Sample logic for handling filter application
document.getElementById('applyFiltersBtn').addEventListener('click', function() {
    const month = document.getElementById('modalFilterMonth').value;
    const year = document.getElementById('modalFilterYear').value;

    console.log(`Filters applied: Month - ${month}, Year - ${year}`);
    $('#filterModal').modal('hide');
});

// Add Expense Form Submission Logic
document.getElementById('addExpenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const expenseType = document.getElementById('expenseType').value;
    const expenseAmount = document.getElementById('expenseAmount').value;

    if (expenseType && expenseAmount) {
        const table = document.getElementById('expensesTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${expenseType}</td>
            <td>${expenseAmount}</td>
            <td>
                <button class="btn btn-sm btn-edit" style="color: green;" data-toggle="modal" data-target="#editExpenseModal">
                    <i class="bi bi-pencil-square"></i> Edit
                </button>
                <button class="btn btn-sm btn-delete" style="color: red;">
                    <i class="bi bi-trash3"></i> Delete
                </button>
            </td>
        `;

        // Clear the form fields
        document.getElementById('expenseType').value = '';
        document.getElementById('expenseAmount').value = '';
        $('#addExpenseModal').modal('hide');
    }
});

// Delete Button Logic
document.querySelector('#expensesTable').addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-delete')) {
        const row = event.target.closest('tr');
        if (row) {
            row.remove();
        }
    }
});

// Edit Expense Form Logic
document.getElementById('editExpenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement logic for saving changes
});
// JavaScript logic for modal handling, table updates, etc.

// Add Expense Form Submission Logic
document.getElementById('addExpenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const expenseType = document.getElementById('expenseType').value;
    const expenseAmount = document.getElementById('expenseAmount').value;

    if (expenseType && expenseAmount) {
        const table = document.getElementById('expensesTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${expenseType}</td>
            <td>${expenseAmount}</td>
            <td>
                <button class="btn btn-sm btn-edit" style="color: green;" data-toggle="modal" data-target="#editExpenseModal">
                    <i class="bi bi-pencil-square"></i> Edit
                </button>
                <button class="btn btn-sm btn-delete" style="color: red;">
                    <i class="bi bi-trash3"></i> Delete
                </button>
            </td>
        `;

        // Clear the form fields
        document.getElementById('expenseType').value = '';
        document.getElementById('expenseAmount').value = '';
        $('#addExpenseModal').modal('hide');
    }
});

// Edit Expense Logic
let currentRow = null;

document.querySelector('#expensesTable').addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-edit')) {
        currentRow = event.target.closest('tr');
        if (currentRow) {
            const cells = currentRow.getElementsByTagName('td');
            document.getElementById('editExpenseType').value = cells[0].textContent;
            document.getElementById('editExpenseAmount').value = cells[1].textContent;
            $('#editExpenseModal').modal('show');
        }
    }

    if (event.target.classList.contains('btn-delete')) {
        const row = event.target.closest('tr');
        if (row) {
            row.remove();
        }
    }
});

// Save Changes Logic
document.getElementById('editExpenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (currentRow) {
        const expenseType = document.getElementById('editExpenseType').value;
        const expenseAmount = document.getElementById('editExpenseAmount').value;

        if (expenseType && expenseAmount) {
            currentRow.cells[0].textContent = expenseType;
            currentRow.cells[1].textContent = expenseAmount;
            $('#editExpenseModal').modal('hide');
            currentRow = null; // Reset after saving changes
        }
    }
});
// Function to calculate and update the total expenses
function calculateTotalExpenses() {
    const table = document.getElementById('expensesTable');
    const expenseCells = table.querySelectorAll('.expense-amount');
    let totalExpenses = 0;

    // Loop through each expense cell and add up the values
    expenseCells.forEach(cell => {
        totalExpenses += parseFloat(cell.textContent) || 0; // Handle non-numeric values gracefully
    });

    // Update the total expenses value in the footer or a designated cell
    const totalElement = document.getElementById('totalExpenses');
    if (totalElement) {
        totalElement.textContent = totalExpenses.toFixed(2);
    } else {
        // If there's no total element in the table, create and append it
        const footerRow = document.createElement('tr');
        footerRow.innerHTML = `
            <td colspan="2" class="text-right"><strong>Total</strong></td>
            <td id="totalExpenses">${totalExpenses.toFixed(2)}</td>
        `;
        table.appendChild(footerRow);
    }
}

// Event listener for "Add Expense" button (assuming modal logic handles adding new rows)
document.querySelector('#addExpenseModal').addEventListener('submit', (event) => {
    event.preventDefault();

    // Assuming you have form inputs with IDs 'expenseType' and 'expenseAmount' for new expense details
    const expenseType = document.querySelector('#expenseType').value; 
    const totalExpense = parseFloat(document.querySelector('#totalExpense').value);

    if (expenseType && !isNaN(totalExpense)) {
        // Create a new row with the given data
        const table = document.getElementById('expensesTable').querySelector('tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${expenseType}</td>
            <td class="expense-amount">${totalExpense.toFixed(2)}</td>
            <td>
                <button class="btn btn-sm btn-edit" style="color: green;">
                    <i class="bi bi-pencil-square"></i> Edit
                </button>
                <button class="btn btn-sm btn-delete" style="color: red;">
                    <i class="bi bi-trash3"></i> Delete
                </button>
            </td>
        `;
        table.appendChild(newRow);

        // Recalculate total after adding new data
        calculateTotalExpenses();
    } else {
        alert("Please enter valid data for the expense type and amount.");
    }
});

// Function to handle editing expenses
document.addEventListener('click', (event) => {
    if (event.target.matches('.btn-edit')) {
        const row = event.target.closest('tr');
        if (row) {
            const currentAmount = parseFloat(row.querySelector('.expense-amount').textContent);
            const newAmount = parseFloat(prompt("Enter the updated expense amount:", currentAmount.toFixed(2)));

            if (!isNaN(newAmount)) {
                row.querySelector('.expense-amount').textContent = newAmount.toFixed(2);
                calculateTotalExpenses();
            } else {
                alert("Please enter a valid number for the amount.");
            }
        }
    }
});

// Function to handle deleting expenses
document.addEventListener('click', (event) => {
    if (event.target.matches('.btn-delete')) {
        const row = event.target.closest('tr');
        if (row) {
            row.remove(); 
            calculateTotalExpenses();
        }
    }
});

// Recalculate total expenses when the page loads
window.onload = calculateTotalExpenses;
// Function to calculate the total expenses
function calculateTotalExpenses() {
    const rows = document.querySelectorAll('#expensesTable .expense-amount');
    let totalExpenses = 0;

    rows.forEach(cell => {
        totalExpenses += parseFloat(cell.textContent) || 0;
    });

    document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);
}

// Function to handle the addition of a new expense
document.querySelector('#addExpenseModal').addEventListener('submit', (e) => {
    e.preventDefault();
    const expenseType = document.querySelector('#expenseType').value; // Ensure this ID exists in your form
    const expenseAmount = parseFloat(document.querySelector('#expenseAmount').value).toFixed(2); // Ensure this ID exists in your form

    if (expenseType && !isNaN(expenseAmount)) {
        const table = document.getElementById('expensesTable');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${expenseType}</td>
            <td class="expense-amount">${expenseAmount}</td>
            <td>
                <button class="btn btn-sm btn-edit" style="color: green;">
                    <i class="bi bi-pencil-square"></i> Edit
                </button>
                <button class="btn btn-sm btn-delete" style="color: red;">
                    <i class="bi bi-trash3"></i> Delete
                </button>
            </td>
        `;
        table.querySelector('tbody').appendChild(newRow);
        calculateTotalExpenses();
    }
});

// Function to handle editing an expense
document.querySelector('#expensesTable').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-edit')) {
        const row = e.target.closest('tr');
        const expenseAmountCell = row.querySelector('.expense-amount');
        const newAmount = prompt('Enter the new expense amount:', expenseAmountCell.textContent);
        
        if (newAmount && !isNaN(newAmount)) {
            expenseAmountCell.textContent = parseFloat(newAmount).toFixed(2);
            calculateTotalExpenses();
        }
    }

    // Handle deleting an expense
    if (e.target.classList.contains('btn-delete')) {
        const row = e.target.closest('tr');
        row.remove();
        calculateTotalExpenses();
    }
});

// Initial calculation when the page loads
window.onload = calculateTotalExpenses;
$(document).ready(function() {
    // Example function to calculate total sales and expenses
    function updateSummary() {
        let totalSales = 0;
        let totalExpenses = 0;

        // Calculate total sales from the product table
        $('#productTable tr').each(function() {
            const profit = parseFloat($(this).find('td:eq(4)').text()) || 0;
            totalSales += profit;
        });

        // Calculate total expenses from the expenses table
        $('#expensesTable tr').each(function() {
            const expenseAmount = parseFloat($(this).find('td:eq(1)').text()) || 0;
            totalExpenses += expenseAmount;
        });

        $('#summaryTotalInvestment').text(totalExpenses);
        $('#summaryTotalSales').text(totalSales);
        $('#summaryTotalProfit').text(totalSales - totalExpenses);
    }

    // Initial call to update summary on page load
    updateSummary();

    // Event listener for 'Add Expense' form submission
    $('#addExpenseForm').submit(function(event) {
        event.preventDefault();
        const expenseType = $('#expenseType').val();
        const expenseAmount = parseFloat($('#expenseAmount').val());

        if (expenseType && !isNaN(expenseAmount)) {
            // Append new expense to the table
            $('#expensesTable tbody').append(`
                <tr>
                    <td>${expenseType}</td>
                    <td class="expense-amount">${expenseAmount}</td>
                    <td>
                        <button class="btn btn-sm btn-edit" style="color: green;" data-toggle="modal" data-target="#editExpenseModal">
                            <i class="bi bi-pencil-square"></i> Edit
                        </button>
                        <button class="btn btn-sm btn-delete" style="color: red;">
                            <i class="bi bi-trash3"></i> Delete
                        </button>
                    </td>
                </tr>
            `);
            // Clear form fields after submission
            $('#expenseType').val('');
            $('#expenseAmount').val('');
            updateSummary();
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    // Event listener for 'Edit Expense' modal save changes
    $('#editExpenseForm').submit(function(event) {
        event.preventDefault();
        const editedExpenseType = $('#editExpenseType').val();
        const editedExpenseAmount = parseFloat($('#editExpenseAmount').val());

        if (editedExpenseType && !isNaN(editedExpenseAmount)) {
            // Update selected expense row with new values 
            $('#expensesTable tr').each(function() {
                if ($(this).find('td:eq(0)').text() === editedExpenseType) {
                    $(this).find('td:eq(1)').text(editedExpenseAmount);
                }
            });
            $('#editExpenseModal').modal('hide');
            updateSummary();
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    // Event listener for deleting an expense
    $('#expensesTable').on('click', '.btn-delete', function() {
        $(this).closest('tr').remove();
        updateSummary();
    });

    // Event listener for editing an expense
    $('#expensesTable').on('click', '.btn-edit', function() {
        const row = $(this).closest('tr');
        const expenseType = row.find('td:eq(0)').text();
        const expenseAmount = parseFloat(row.find('td:eq(1)').text());

        // Pre-fill the modal form
        $('#editExpenseType').val(expenseType);
        $('#editExpenseAmount').val(expenseAmount);
    });
});


$(document).ready(function() {
    // Apply filters when "Apply Filters" button is clicked
    $('#applyFiltersBtn').click(function() {
        const selectedMonth = $('#modalFilterMonth').val();
        const selectedYear = $('#modalFilterYear').val();
        
        // Logic for filtering content based on selected values
        console.log(`Selected Month: ${selectedMonth}, Year: ${selectedYear}`);
    });

    $('#openFilterModal').click(function() {
        $('#modalFilterMonth').val('All');
        $('#modalFilterYear').val('');
    });
});