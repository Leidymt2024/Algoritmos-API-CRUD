
const API_URL = 'https://dummyjson.com/products';
const productList = document.getElementById('product-list');

// Función para obtener productos de la API "GET"
async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Error al obtener los productos');
    const data = await response.json();
    renderProducts(data.products);
  } catch (error) {
    console.error('Error:', error);
    alert('Hubo un problema al cargar los productos.');
  }
}

// Función para renderizar productos en la página
  function renderProducts(products) {
  productList.innerHTML = '';
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-item');

    const title = document.createElement('h2');
    title.textContent = product.title;

    const price = document.createElement('p');
    price.textContent = `Precio: $${product.price}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => deleteProduct(product.id));

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Actualizar';
    updateBtn.addEventListener('click', () => updateProduct(product.id));

    productElement.appendChild(title);
    productElement.appendChild(price);
    productElement.appendChild(deleteBtn);
    productElement.appendChild(updateBtn);
    
    productList.appendChild(productElement);
  });
}

// Agregar nuevo producto
document.getElementById('addProductBtn').addEventListener('click', async () => {
  const title = prompt('Nombre del producto:');
  const price = prompt('Precio del producto:');

  if (!title || !price || isNaN(price)) {
    alert('Ingresa un valor válido.');
    return;
  }

  const newProduct = { title, price: parseFloat(price) };

  try {
    const response = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) throw new Error('Error al agregar el producto');

    const data = await response.json();
    console.log('Producto añadido:', data);
    fetchProducts();
  } catch (error) {
    console.error('Error:', error);
    alert('Hubo un problema al agregar el producto.');
  }
});

// Actualizar producto
  async function updateProduct(id) {
  const title = prompt('Nuevo nombre del producto:');
  const price = prompt('Nuevo precio del producto:');

  if (!title || !price || isNaN(price)) {
    alert('Ingresa un valor válido.');
    return;
  }

  const updatedProduct = { title, price: parseFloat(price) };

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) throw new Error('Error al actualizar el producto');

    const data = await response.json();
    console.log('Producto actualizado:', data);
    fetchProducts();
  } catch (error) {
    console.error('Error:', error);
    alert('Hubo un problema al actualizar el producto.');
  }
}

// Eliminar producto
async function deleteProduct(id) {
  if (!confirm('¿Estás seguro de eliminar este producto?')) return;

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Error al eliminar el producto');

    const data = await response.json();
    console.log('Producto eliminado:', data);
    fetchProducts();
  } catch (error) {
    console.error('Error:', error);
    alert('Hubo un problema al eliminar el producto.');
  }
}

// Cargar los productos al iniciar
fetchProducts();
