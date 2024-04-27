// Obtener el carrito de la memoria local o inicializarlo como un array vacío
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para mostrar los elementos del carrito
function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito');
    carritoContainer.innerHTML = '';

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>El carrito está vacío.</p>';
        return;
    }

    carrito.forEach(item => {
        const itemHTML = `
            <div>
                <p>${item.nombre} - $${item.precio}</p>
                <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
            </div>
        `;
        carritoContainer.innerHTML += itemHTML;
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Mostrar el carrito al cargar la página
mostrarCarrito();
