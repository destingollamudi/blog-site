const apiUrl = 'http://localhost:3000/api/products'; // Update this to your API URL

document.addEventListener('DOMContentLoaded', fetchProducts);

document.getElementById('productForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, quantity, price, image })
    });

    if (response.ok) {
        fetchProducts(); // Refresh the list of products
        document.getElementById('productForm').reset(); // Clear the form
    } else {
        alert('Error creating product');
    }
});

async function fetchProducts() {
    const response = await fetch(apiUrl);
    const products = await response.json();
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Quantity: ${product.quantity}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            ${product.image ? `<img src="${product.image}" alt="${product.name}" style="max-width: 100px;">` : ''}
        `;
        productsContainer.appendChild(productDiv);
    });
}
