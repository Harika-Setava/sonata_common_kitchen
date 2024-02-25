// Function to add item to cart
function addItemToCart(itemName, price) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push({ name: itemName, price: price });
    localStorage.setItem('cart', JSON.stringify(cartItems));
    window.location.href = 'cart.html'; // Redirect to cart page
}

// Function to load cart items and calculate total amount
function loadCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let totalAmount = 0;
    let cartContainer = document.getElementById('cart-items');

    cartItems.forEach(item => {
        cartContainer.innerHTML += `<div>${item.name} - $${item.price}</div>`;
        totalAmount += item.price;
    });

    document.getElementById('total-amount').innerText = '$' + totalAmount.toFixed(2);
}
