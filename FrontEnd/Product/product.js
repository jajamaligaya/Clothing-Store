document.addEventListener('DOMContentLoaded', function() {
            // Fetch all products and populate the table
            fetch('http://localhost:4000/api/clothings/')  // Ensure this matches your backend route
                .then(response => response.json())
                .then(data => {
                    if (data.products && data.products.length > 0) {
                        const tableBody = document.getElementById('productTableBody');
                        data.products.forEach(product => {
                            const row = document.createElement('tr');
                            row.innerHTML = `
                                <th scope="row">${product.ProductName}</th>
                                <td>${product.UnitInvestment}</td>
                                <td>${product.UnitPrice}</td>
                                <td>${product.QuantityinHand}</td>
                                <td>${product.QuantityinSold}</td>
                                <td>${product.TotalInvestment}</td>
                                <td>${product.TotalSale}</td>
                                <td>${product.ProfitStatus}</td>    
                                <td>
                                    <button type="button" class="btn btn-primary btn-edit" data-product-id="${product._id}" data-toggle="modal" data-target="#editModal">
                                        <i class="bi bi-pencil-square"></i>
                                    </button>
                                </td>
                            `;
                            tableBody.appendChild(row);
                        });
                    } else {
                        console.log("No products found.");
                    }
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });

                

                document.addEventListener('DOMContentLoaded', function () {
                    const productTableBody = document.getElementById('productTableBody');
                    const modal = document.getElementById('editProduct');
                  
                    // Handle edit button click
                    productTableBody.addEventListener('click', function (event) {
                      if (event.target && event.target.classList.contains('btn-edit')) {
                        const productId = event.target.getAttribute('data-product-id');
                  
                        // Fetch product details from the server
                        fetch(`http://localhost:4000/api/clothings/${productId}`)
                          .then((response) => response.json())
                          .then((data) => {
                            const product = data.product;
                  
                            // Populate modal form fields
                            modal.querySelector('#productName').value = product.ProductName;
                            modal.querySelector('#unitInvestment').value = product.UnitInvestment;
                            modal.querySelector('#unitPrice').value = product.UnitPrice;
                            modal.querySelector('#quantityInHand').value = product.QuantityinHand;
                            modal.querySelector('#quantitySold').value = product.QuantityinSold;
                            modal.querySelector('#totalInvestment').value = product.TotalInvestment;
                            modal.querySelector('#totalsale').value = product.TotalSale;
                            modal.querySelector('#profitstatus').value = product.ProfitStatus;
                  
                            // Attach click handler to "Save Changes" button
                            const saveChangesBtn = modal.querySelector('#saveChangesBtn');
                            saveChangesBtn.onclick = function () {
                              const updatedProduct = {
                                ProductName: modal.querySelector('#productName').value,
                                UnitInvestment: modal.querySelector('#unitInvestment').value,
                                UnitPrice: modal.querySelector('#unitPrice').value,
                                QuantityinHand: modal.querySelector('#quantityInHand').value,
                                QuantityinSold: modal.querySelector('#quantitySold').value,
                                TotalInvestment: modal.querySelector('#totalInvestment').value,
                                TotalSale: modal.querySelector('#totalsale').value,
                                ProfitStatus: modal.querySelector('#profitstatus').value,
                              };
                  
                              // Send updated data to the server
                              fetch(`http://localhost:4000/api/clothings/${productId}`, {
                                method: 'PATCH',
                                headers: {
                                  'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(updatedProduct),
                              })
                                .then((response) => response.json())
                                .then((updatedData) => {
                                  // Update the corresponding row in the table
                                  const row = document.querySelector(`[data-product-id="${productId}"]`).closest('tr');
                                  row.innerHTML = `
                                    <th scope="row">${updatedData.ProductName}</th>
                                    <td>${updatedData.UnitInvestment}</td>
                                    <td>${updatedData.UnitPrice}</td>
                                    <td>${updatedData.QuantityinHand}</td>
                                    <td>${updatedData.QuantityinSold}</td>
                                    <td>${updatedData.TotalInvestment}</td>
                                    <td>${updatedData.TotalSale}</td>
                                    <td>${updatedData.ProfitStatus}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary btn-edit" data-product-id="${updatedData._id}" data-toggle="modal" data-target="#editProduct">
                                            <i class="bi bi-pencil-square"></i>
                                        </button>
                                    </td>
                                  `;
                                  // Close the modal
                                  const bootstrapModal = bootstrap.Modal.getInstance(modal);
                                  bootstrapModal.hide();
                                })
                                .catch((error) => {
                                  console.error('Error updating product:', error);
                                });
                            };
                          })
                          .catch((error) => {
                            console.error('Error fetching product details:', error);
                          });
                  
                        // Show the modal
                        const bootstrapModal = new bootstrap.Modal(modal);
                        bootstrapModal.show();
                      }
                    });
                  });
                  

            // Handle add product button click
            document.getElementById('saveProductBtn').addEventListener('click', function() {
                const productNameInput = document.getElementById('productName');
                const unitInvestmentInput = document.getElementById('unitInvestment');
                const unitPriceInput = document.getElementById('unitPrice');
                const quantityInHandInput = document.getElementById('quantityInHand');
                const quantitySoldInput = document.getElementById('quantitySold');
                const totalInvestmentInput = document.getElementById('totalInvestment');
                const totalsaleInput = document.getElementById('totalsale');
                const profitstatusInput = document.getElementById('profitstatus');
                
                const newProduct = {
                    ProductName: productNameInput.value,
                    UnitInvestment: unitInvestmentInput.value,
                    UnitPrice: unitPriceInput.value,
                    QuantityinHand: quantityInHandInput.value,
                    QuantityinSold: quantitySoldInput.value,
                    TotalInvestment: totalInvestmentInput.value,
                    TotalSale: totalsaleInput.value,
                    ProfitStatus: profitstatusInput.value
                };

                // Send POST request to create new product
                fetch('http://localhost:4000/api/clothings/new', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newProduct)
                })
                .then(response => response.json())
                .then(data => {
                    // Add the new product to the table
                    const tableBody = document.getElementById('productTableBody');
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <th scope="row">${data.ProductName}</th>
                        <td>${data.UnitInvestment}</td>
                        <td>${data.UnitPrice}</td>
                        <td>${data.QuantityinHand}</td>
                        <td>${data.QuantityinSold}</td>
                        <td>${data.TotalInvestment}</td>
                        <td>${data.TotalSale}</td>
                        <td>${data.ProfitStatus}</td>
                        <td>
                            <button type="button" class="btn btn-primary btn-edit" data-product-id="${data._id}" data-toggle="modal" data-target="#addProductModal">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                    $('#exampleModal').modal('hide'); // Hide the modal after saving
                })
                .catch(error => {
                    console.error('Error adding product:', error);
                });
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            // Reference input fields
            const unitPriceInput = document.getElementById('unitPrice');
            const quantitySoldInput = document.getElementById('quantitySold');
            const totalSaleInput = document.getElementById('totalsale');
        
            // Add event listeners to calculate Total Sale dynamically
            function calculateTotalSale() {
                const unitPrice = parseFloat(unitPriceInput.value) || 0;
                const quantitySold = parseInt(quantitySoldInput.value) || 0;
                const totalSale = unitPrice * quantitySold;
        
                totalSaleInput.value = totalSale.toFixed(2); // Format to 2 decimal places
            }
        
            // Trigger calculation on input change
            unitPriceInput.addEventListener('input', calculateTotalSale);
            quantitySoldInput.addEventListener('input', calculateTotalSale);
        });
        document.addEventListener('DOMContentLoaded', function() {
            // Reference input fields for Total Sale
            const unitPriceInput = document.getElementById('unitPrice');
            const quantitySoldInput = document.getElementById('quantitySold');
            const totalSaleInput = document.getElementById('totalsale');
        
            // Reference input fields for Total Investment
            const unitInvestmentInput = document.getElementById('unitInvestment');
            const totalInvestmentInput = document.getElementById('totalInvestment');
        
            // Add event listeners to calculate Total Sale dynamically
            function calculateTotalSale() {
                const unitPrice = parseFloat(unitPriceInput.value) || 0;
                const quantitySold = parseInt(quantitySoldInput.value) || 0;
                const totalSale = unitPrice * quantitySold;
        
                totalSaleInput.value = totalSale.toFixed(2); // Format to 2 decimal places
            }
        
            // Add event listeners to calculate Total Investment dynamically
            function calculateTotalInvestment() {
                const unitInvestment = parseFloat(unitInvestmentInput.value) || 0;
                const quantitySold = parseInt(quantitySoldInput.value) || 0;
                const totalInvestment = unitInvestment * quantitySold;
        
                totalInvestmentInput.value = totalInvestment.toFixed(2); // Format to 2 decimal places
            }
        
            // Trigger calculation for Total Sale
            unitPriceInput.addEventListener('input', calculateTotalSale);
            quantitySoldInput.addEventListener('input', calculateTotalSale);
        
            // Trigger calculation for Total Investment
            unitInvestmentInput.addEventListener('input', calculateTotalInvestment);
            quantitySoldInput.addEventListener('input', calculateTotalInvestment);
        });
   document.addEventListener('DOMContentLoaded', function() {
    // Reference input fields for Total Sale
    const unitPriceInput = document.getElementById('unitPrice');
    const quantitySoldInput = document.getElementById('quantitySold');
    const totalSaleInput = document.getElementById('totalsale');

    // Reference input fields for Total Investment
    const unitInvestmentInput = document.getElementById('unitInvestment');
    const totalInvestmentInput = document.getElementById('totalInvestment');

    // Reference input field for Profit Status
    const profitStatusInput = document.getElementById('profitStatus');

    // Calculate Total Sale
    function calculateTotalSale() {
        const unitPrice = parseFloat(unitPriceInput.value) || 0;
        const quantitySold = parseInt(quantitySoldInput.value) || 0;
        const totalSale = unitPrice * quantitySold;

        totalSaleInput.value = totalSale.toFixed(2); // Format to 2 decimal places
        calculateProfitStatus(); // Update profit status
    }

    // Calculate Total Investment
    function calculateTotalInvestment() {
        const unitInvestment = parseFloat(unitInvestmentInput.value) || 0;
        const quantitySold = parseInt(quantitySoldInput.value) || 0;
        const totalInvestment = unitInvestment * quantitySold;

        totalInvestmentInput.value = totalInvestment.toFixed(2); // Format to 2 decimal places
        calculateProfitStatus(); // Update profit status
    }

    // Calculate Profit Status
    function calculateProfitStatus() {
        const totalSale = parseFloat(totalSaleInput.value) || 0;
        const totalInvestment = parseFloat(totalInvestmentInput.value) || 0;
        const profit = totalSale - totalInvestment;

        // Determine Profit Status
        if (profit > 0) {
            profitStatusInput.value = `Profit: ${profit.toFixed(2)}`;
            profitStatusInput.style.color = 'green'; // Optional: indicate profit with color
        } else if (profit < 0) {
            profitStatusInput.value = `Loss: ${Math.abs(profit).toFixed(2)}`;
            profitStatusInput.style.color = 'red'; // Optional: indicate loss with color
        } else {
            profitStatusInput.value = 'Break-Even';
            profitStatusInput.style.color = 'black'; // Neutral color for break-even
        }
    }

    // Add event listeners to trigger calculations
    unitPriceInput.addEventListener('input', calculateTotalSale);
    quantitySoldInput.addEventListener('input', () => {
        calculateTotalSale();
        calculateTotalInvestment();
    });
    unitInvestmentInput.addEventListener('input', calculateTotalInvestment);
});
             