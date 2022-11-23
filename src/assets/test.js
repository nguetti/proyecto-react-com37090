import { createProducto, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra } from "./firebase";

// const producto = {
//     "id": 11,
//     "idCategoria": 3,
//     "nombre": "Medias futbols",
//     "marca": "Joma ",
//     "modelo": "Art. 560",
//     "precio": 1150,
//     "stock": 30,
//     "img": "https://firebasestorage.googleapis.com/v0/b/react-2022-23b08.appspot.com/o/8.jpg?alt=media&token=a7135fbd-f718-4020-864f-d6a9ed1662a2"
// }

//createProducto(producto).then(mensaje => console.log(mensaje))

//"gqHM19EpWAl4ddbHL9sE"

// getProducto("gqHM19EpWAl4ddbHL9sE").then(prod => {
//     prod.stock -= 10
//     updateProducto("gqHM19EpWAl4ddbHL9sE", prod)
    
// })

// deleteProducto("gqHM19EpWAl4ddbHL9sE").then(mensaje=> console.log(mensaje))

//"RVOFDlHBzTICzKTntKkG"
const cliente = {
    nombre: "Pedro",
    apellido : "Gonzalez",
    email : "pedritogonzalez@gonzalez.com",
    dni: "23331113",
    direccion: "Calle Falsa 142"
}

//createOrdenCompra(cliente,12500, Date.Now()).then(orden=> console.log(orden))

getOrdenCompra("RVOFDlHBzTICzKTntKkG").then(orden=> console.log(orden))