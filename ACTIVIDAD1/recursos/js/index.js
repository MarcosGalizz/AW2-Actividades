const prodContainer = document.getElementById("contenedor");
const estado = document.getElementById("estado");

async function obtenerDatos(){
    try{
        const response = await fetch("recursos/datos/productos.json");
        console.log(response);
        const data = await response.json();
        // Obtengo el objeto 'Response' y lo convierto a JSON para usar su información.
        data.forEach(producto => {
            prodContainer.innerHTML += `
            <article class="producto">
                <h3 class="nombre">${producto.nombre}</h3>
                <data class="precio" value="100">Precio: $${producto.precio}</data>
                <data class="stock" value="10">Stock: ${producto.stock}</data>
            </article>
            `
        })
        estado.textContent = "Datos cargados con éxito";
        estado.style.color = "green";

    }
    catch(error){
        estado.textContent = "Error al cargar los datos";
        estado.style.color = "red";
    }
}

document.addEventListener("DOMContentLoaded", obtenerDatos);

/*
Objeto Response:

body: ReadableStream
bodyUsed: true
headers: Headers
[[Prototype]]: Headers
ok: true
redirected: false
status: 200
statusText: "OK"
type: "basic"
url: "http://127.0.0.1:5500/ACTIVIDAD1/recursos/datos/productos.json"
[[Prototype]]: Response

*/