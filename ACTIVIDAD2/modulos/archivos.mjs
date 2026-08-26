// Importo fs de node para escribir y leer archivos
import fsp from "node:fs/promises";

//Exporto las funciones.
export {escribirJson, leerJson};

// Escribo el .json
async function escribirJson(usuariosFormateados){
    try{
        const ruta = "./usuariosFormateados.json";
        await fsp.writeFile(ruta, JSON.stringify(usuariosFormateados, null, 2));
    }
    catch(error){
        console.log(error);
    }
}
// Leo el .json
const leerJson= async ()=>{
    try{
        const ruta = "./usuariosFormateados.json";
        const datosUsuarios = await fsp.readFile(ruta, "utf-8")
        return JSON.parse(datosUsuarios);
    }
    catch(error){
        console.log(error);
    }
}
