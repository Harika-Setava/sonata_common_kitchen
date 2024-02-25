document.addEventListener("DOMContentLoaded", function() {
    // Function to add product to cart
    function addToCart(name, price) {
        // Check if the product is already in the cart
        const existingItemIndex = cartItems.findIndex(item => item.name === name);
        if (existingItemIndex !== -1) {
            // If the product is already in the cart, increase the quantity
            cartItems[existingItemIndex].quantity++;
        } else {
            // If the product is not in the cart, add it with a quantity of 1
            cartItems.push({ name: name, price: price, quantity: 1 });
        }
        // Update cart UI
        renderCartItems();
    }

    // Event listener for "Add to Cart" button click
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productName = this.parentNode.querySelector("h2").textContent;
            const productPrice = parseFloat(this.parentNode.querySelector(".price").textContent.replace("$", ""));
            addToCart(productName, productPrice);
        });
    });
});
