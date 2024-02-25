document.addEventListener("DOMContentLoaded", function() {
    // Array to store cart items
    let cartItems = [];

    // Function to calculate total price and update UI
    function updateTotalPrice() {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        document.getElementById("total-price").textContent = "$" + totalPrice.toFixed(2);
    }

    // Function to render cart items in UI
    function renderCartItems() {
        const cartContainer = document.getElementById("cart-items");
        cartContainer.innerHTML = ""; // Clear previous content

        cartItems.forEach(item => {
            const cartItemDiv = document.createElement("div");
            cartItemDiv.classList.add("cart-item");

            const itemDetailsDiv = document.createElement("div");
            itemDetailsDiv.classList.add("item-details");
            itemDetailsDiv.innerHTML = `
                <h2>${item.name}</h2>
                <p class="price">$${item.price.toFixed(2)}</p>
            `;
            cartItemDiv.appendChild(itemDetailsDiv);

            const itemActionsDiv = document.createElement("div");
            itemActionsDiv.classList.add("item-actions");
            itemActionsDiv.innerHTML = `
                <input type="number" value="${item.quantity}" min="1" class="quantity-input">
                <button class="remove-btn">Remove</button>
            `;
            cartItemDiv.appendChild(itemActionsDiv);

            cartContainer.appendChild(cartItemDiv);
        });

        updateTotalPrice();
    }

    // Function to handle removing items from the cart
    function removeItem(index) {
        cartItems.splice(index, 1);
        renderCartItems();
    }

    // Event listener for quantity input change
    document.getElementById("cart-items").addEventListener("change", function(event) {
        if (event.target.classList.contains("quantity-input")) {
            const index = Array.from(event.target.parentNode.parentNode.parentNode.children).indexOf(event.target.parentNode.parentNode);
            const quantity = parseInt(event.target.value);
            cartItems[index].quantity = quantity;
            renderCartItems();
        }
    });

    // Event listener for remove button click
    document.getElementById("cart-items").addEventListener("click", function(event) {
        if (event.target.classList.contains("remove-btn")) {
            const index = Array.from(event.target.parentNode.parentNode.parentNode.children).indexOf(event.target.parentNode.parentNode);
            removeItem(index);
        }
    });

    // Sample items (replace with your actual items)
    cartItems.push({ name: "Product 1", price: 10.00, quantity: 1 });
    cartItems.push({ name: "Product 2", price: 15.00, quantity: 1 });
    cartItems.push({ name: "Product 3", price: 20.00, quantity: 1 });

    // Initial rendering of cart items
    renderCartItems();
});
