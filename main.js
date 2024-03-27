// Initialize inventory
let inventory = [
    { id: 1, name: "Product A", price: 10, quantity: 5 },
    { id: 2, name: "Product B", price: 20, quantity: 3 },
    { id: 3, name: "Product C", price: 15, quantity: 8 }
];

// Function to add a new product
function addProduct() {
    let id = parseInt(prompt("Enter product ID:"));
    let name = prompt("Enter product name:");
    let price = parseFloat(prompt("Enter product price:"));
    let quantity = parseInt(prompt("Enter product quantity:"));

    let newProduct = { id, name, price, quantity };
    inventory.push(newProduct);
}

// Function to remove a product
function removeProduct() {
    let idToRemove = parseInt(prompt("Enter the ID of the product to remove:"));
    let indexToRemove = inventory.findIndex(product => product.id === idToRemove);
    if (indexToRemove !== -1) {
        inventory.splice(indexToRemove, 1);
        console.log("Product removed successfully.");
    } else {
        console.log("Product not found.");
    }
}

// Function to display inventory
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

// Main menu options
const menuOptions = [
    addProduct,
    removeProduct,
    displayInventory,
    calculateTotalValue,
    () => console.log("Exiting program.")
];

// Main menu
function mainMenu() {
    let choice = parseInt(prompt(
        "Select an option:\n1. Add Product\n2. Remove Product\n3. Display Inventory\n4. Calculate Total Value\n5. Exit"
    ));

    if (choice >= 1 && choice <= menuOptions.length) {
        menuOptions[choice - 1]();
        mainMenu(); // Recursively call mainMenu for continuous operation
    } else {
        console.log("Invalid choice. Please try again.");
        mainMenu(); // Prompt again if the choice is invalid
    }
}

// Start the program
mainMenu();