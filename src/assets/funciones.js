import { cargarBDD, getProductos } from "./firebase"   //importa la funcion de carga de base de datos

export const consultarBDD = async (ruta) => {
    
    const promise = await fetch(ruta)
    const productos = await promise.json() 
    return productos
     
        }

//cargarBDD()  //ejecuta la funcion de carga de base de datos para luego importarla en index.js
getProductos().then(data=> {console.log(data)})
