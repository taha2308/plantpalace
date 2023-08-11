
function addToCart() {
    const product = {
        name: "Product Name",
        price: 29.99,
    };

    // Create a new cart item element
    const cartItem = document.createElement("li");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `${product.name} - $${product.price.toFixed(2)}`;

    // Add the item to the cart
    const cartItems = document.getElementById("cart-items");
    cartItems.appendChild(cartItem);

    // Update the cart total
    updateCartTotal(product.price);

    // Show the cart after adding an item
    showCart();
}

// Function to update the cart total
function updateCartTotal(price) {
    const cartTotalElement = document.getElementById("cart-total");
    const cartTotal = parseFloat(cartTotalElement.innerText.replace("$", ""));
    const newTotal = cartTotal + price;
    cartTotalElement.innerText = "$" + newTotal.toFixed(2);
}

// Function to show/hide the cart
function showCart() {
    const cart = document.getElementById("cart");
    const cartToggle = document.getElementById("cart-toggle");
    if (cart.style.display === "none") {
        cart.style.display = "block";
        cartToggle.innerText = "Hide Cart";
    } else {
        cart.style.display = "none";
        cartToggle.innerText = "Show Cart";
    }
}

// Add an event listener to the "Add to Cart" button
document.getElementById("add-to-cart").addEventListener("click", addToCart);

// Add an event listener to the cart toggle button
document.getElementById("cart-toggle").addEventListener("click", showCart);
