import { createProducto, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra } from "./firebase";

const cliente = {
    nombre: "Pedro",
    apellido : "Gonzalez",
    email : "pedritogonzalez@gonzalez.com",
    dni: "23331113",
    direccion: "Calle Falsa 142"
}

//createOrdenCompra(cliente,12500, Date.Now()).then(orden=> console.log(orden))

getOrdenCompra("RVOFDlHBzTICzKTntKkG").then(orden=> console.log(orden))