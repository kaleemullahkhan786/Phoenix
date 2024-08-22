// JavaScript for Phoenix Shopping Service

// DOMContentLoaded event ensures the script runs after the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Mobile Navigation Toggle (if you have a mobile menu)
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Add to Cart Button Functionality
    const cartButtons = document.querySelectorAll('.btn');

    cartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const productName = this.parentElement.querySelector('h4').textContent;
            const productPrice = this.parentElement.querySelector('p').textContent;
            addToCart(productName, productPrice);
        });
    });

    // Function to Add Items to Cart
    function addToCart(name, price) {
        alert(`${name} has been added to your cart for ${price}.`);
        // Code to add the item to the shopping cart (can be expanded with actual cart functionality)
    }

    // Example: Scroll to top button (optional)
    const scrollTopButton = document.querySelector('.scroll-top');
    
    if (scrollTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        });

        scrollTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Example: Product Filter (if you have categories or search functionality)
    const filterInput = document.querySelector('#filterInput');

    if (filterInput) {
        filterInput.addEventListener('keyup', function() {
            const filterValue = filterInput.value.toLowerCase();
            const products = document.querySelectorAll('.product-item');

            products.forEach(product => {
                const productName = product.querySelector('h4').textContent.toLowerCase();
                if (productName.includes(filterValue)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }

});


