// Socket comunica con servidor
const socket = io();

socket.on('showProducts', data => {
    container.innerHTML = ``

    data.forEach(prod => {
        container.innerHTML += `
            <ul>
                <li>titulo: ${prod.title}</li> 
                <li>descripcion: ${prod.description}</li>
                <li>code: ${prod.code}</li>
                <li>precio: ${prod.price}</li>
                <li>thumbnail: ${prod.status}</li>
                <li>stock: ${prod.stock}</li>
                <li>category: ${prod.category}</li>
                <li>id: ${prod.id}</li>
            </ul>
        `
    })
})