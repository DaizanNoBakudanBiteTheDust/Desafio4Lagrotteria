// Socket comunica con servidor
const socket = io();

//AGREGAR
const agregarForm = document.getElementById('agregarForm');
const productoInput = document.getElementById('producto');

agregarForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nuevoProducto = productoInput.value;

    // Enviar el nuevo producto al servidor a través de sockets
    socket.emit('agregarProducto', nuevoProducto);

    // Limpiar el campo de entrada
    productoInput.value = '';
});


//ELIMINAR
const eliminarForm = document.getElementById('eliminarForm');
const productIdInput = document.getElementById('productId');

eliminarForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const productId = productIdInput.value;

    // Enviar el ID del producto al servidor a través de sockets
    socket.emit('eliminarProducto', productId);

    // Limpiar el campo de entrada
    productIdInput.value = '';
});

//acá pondré los productos que me pasa el cliente
const container = document.getElementById('container');

socket.on('showProducts', data => {
    container.innerHTML = ``

    data.forEach(product => {
        container.innerHTML += `
            <ul>
                <li>titulo: ${product.titulo}</li> 
                <li>descripcion: ${product.descripcion}</li>
                <li>code: ${product.code}</li>
                <li>precio: ${product.precio}</li>
                <li>thumbnail: ${product.status}</li>
                <li>stock: ${product.stock}</li>
                <li>category: ${product.category}</li>
                <li>id: ${product.id}</li>
            </ul>
        `
    })
})