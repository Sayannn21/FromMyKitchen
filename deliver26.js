// Simulated order data
const orders = [
];

// Function to populate the order list
function populateOrderList() {
    const ordersElement = document.getElementById("orders");
    ordersElement.innerHTML = "";

    orders.forEach(order => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${order.name}</strong>: ${order.youraddress} <strong>To</strong> ${order.deliveryaddress} : ${order.fooditem}`;
        ordersElement.appendChild(listItem);
    });
}

// Function to handle the form submission
function handleFormSubmission(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const fooditemin = document.getElementById("fooditem");
    const deliveryadd = document.getElementById("deliveryaddress");
    const youradd = document.getElementById("youraddress");
    const contact = document.getElementById("contact");
    
    const order = {
        name: nameInput.value,
        fooditem: fooditemin.value,
        deliveryaddress: deliveryadd.value,
        youraddress: youradd.value,
        contact:contact.value,
    };

    orders.push(order);
    populateOrderList();

    // Clear the form inputs
    nameInput.value = "";
    deliveryadd.value = "";
    fooditemin.value = "";
    youradd.value = "";
    contact.value = "";
}

// Event listener for form submission
document.getElementById("delivery-form").addEventListener("submit", handleFormSubmission);

// Populate the initial order list
populateOrderList();
