// Socket comunica con servidor
const socket = io();

//acá pondré los productos que me pasa el cliente
const container = document.getElementById('container');

socket.on('showProducts', data => {
    container.innerHTML = ``

    data.forEach(products => {
        container.innerHTML += `
            <ul>
                <li>titulo: ${products.title}</li> 
                <li>descripcion: ${products.description}</li>
                <li>code: ${products.code}</li>
                <li>precio: ${products.price}</li>
                <li>thumbnail: ${products.status}</li>
                <li>stock: ${products.stock}</li>
                <li>category: ${products.category}</li>
                <li>id: ${products.id}</li>
            </ul>
        `
    })
})