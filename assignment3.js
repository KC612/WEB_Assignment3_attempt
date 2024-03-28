//Initialize inventory
let inventory = [
    { id: 1, name: "Product 1", price: 10, quantity: 5 },
    { id: 2, name: "Product 2", price: 20, quantity: 3 },
    { id: 3, name: "Product 3", price: 15, quantity: 8 }
];

// Add Product Functionality
function addProduct(id, name, price, quantity) {
    let existingProduct = inventory.find(product => product.id === id);
    if (existingProduct) {
        console.log("Product ID already exists. Please enter a unique ID.");
        return;
    }

    let newProduct = { id, name, price, quantity };
    inventory.push(newProduct);
    console.log("Product added successfully.");
}

// Remove Product Functionality
function removeProduct(id) {
    let indexToRemove = inventory.findIndex(product => product.id === id);
    if (indexToRemove !== -1) {
        inventory.splice(indexToRemove, 1);
        console.log("Product removed successfully.");
    } else {
        console.log("Product not found.");
    }
}

// Display inventory function
function displayInventory() {
    console.log("Inventory:");
    inventory.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}`);
    });
}

// Function to calculate total value of inventory
function calculateTotalValue() {
    let totalValue = 0;
    inventory.forEach(product => {
        totalValue += product.price * product.quantity;
    });
    console.log("Total inventory value: $" + totalValue);
}

// Function for displaying low stock alerts
function displayLowStockAlerts() {
    console.log("Low Stock Alerts:");
    inventory.forEach(product => { //for each iterates through inventory array
        if (product.quantity < 5) {
            console.log(`Low stock for ${product.name}. Current quantity: ${product.quantity}`);
        }
    });
}

// Expose functions globally, allows interaction in the console
window.addProduct = addProduct;
window.removeProduct = removeProduct;
window.displayInventory = displayInventory;
window.calculateTotalValue = calculateTotalValue;
window.displayLowStockAlerts = displayLowStockAlerts;
