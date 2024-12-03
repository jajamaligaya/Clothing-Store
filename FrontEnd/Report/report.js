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
