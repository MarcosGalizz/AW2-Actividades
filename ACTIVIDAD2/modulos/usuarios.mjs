//Exporto las funciones
export {obtenerDatos};

// Obtengo los datos desde la API y los formateo para quedarme con el id, email y name de cada usuarios
async function obtenerDatos(){
    try{
        const respuesta = await fetch("https://api.escuelajs.co/api/v1/users");
        const datos = await respuesta.json();
        const usuariosFormateados = datos.map((usuario) =>{
            const usuarioCambiado ={
                id: usuario.id,
                email: usuario.email,
                name: usuario.name
            }
            return usuarioCambiado;
        })
        return usuariosFormateados;
    }
    catch(error){
        console.log(error);

    }
}
