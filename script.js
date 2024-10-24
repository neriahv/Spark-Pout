let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage or initialize as empty array

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product); // Add product to cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    updateCartCount(); // Update cart count
}

// Function to update the cart count display
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length; // Update the cart count display
}

// Function to display cart items in the modal
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    cartItemsDiv.innerHTML = ''; // Clear previous items
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name} - Php ${item.price}</span>
            <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    cartTotalDiv.textContent = `\nTotal: Php ${total}`; // Update total price
    document.getElementById('cart-modal').style.display = 'block'; // Show cart modal
}

// Function to delete an item from the cart
function deleteItem(index) {
    cart.splice(index, 1); // Remove item from the cart array
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    displayCart(); // Refresh the cart display
    updateCartCount(); // Update the cart count
}

// Function to close the cart modal
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none'; // Hide cart modal
}

// Function to handle the checkout process
function checkout() {
    localStorage.removeItem('cart'); // Clear cart from localStorage
    cart = []; // Reset cart array in JavaScript
    updateCartCount(); // Update cart count display
    window.location.href = 'order.html'; // Redirect to order page
}

// Function to reset the cart without redirecting
function resetCart() {
    localStorage.removeItem('cart'); // Clear cart from localStorage
    cart = []; // Reset cart array in JavaScript
    updateCartCount(); // Update cart count
    displayCart(); // Refresh cart display to show empty cart
}

// Function to load cart count and data on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount(); // Ensure the cart count is updated when the page loads
});

// Add event listener to the cart icon to show the cart modal
document.querySelector('.cart-icon').addEventListener('click', displayCart);

// Function to handle the submit button click
document.getElementById('submit-btn').addEventListener('click', function() {
    alert("Your concern has been submitted!");
});

function toggleHamburgerMenu() {
    var hamburgerMenuContent = document.querySelector('.hamburger-menu-content');
    hamburgerMenuContent.classList.toggle('show');
}
