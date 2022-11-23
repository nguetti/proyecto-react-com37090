// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,//, // esta linea no subirla al github (enviar por privado para entregarla)
  authDomain: "react-2022-23b08.firebaseapp.com",
  projectId: "react-2022-23b08",
  storageBucket: "react-2022-23b08.appspot.com",
  messagingSenderId: "1014287983694",
  appId: "1:1014287983694:web:dde161e2fc3255c986cf1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
      await addDoc(collection(db, "productos"), {  //esta linea genera el archivo en Firebase
        nombre: prod.nombre,
        marca: prod.marca,
        modelo: prod.modelo,
        idCategoria: prod.idCategoria,
        stock: prod.stock,
        precio: prod.precio,
        img: prod.img
      })
  })
}
//CRUD PRODUCTOS
// REAd
const getProductos = async() => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(prod => {return { id: prod.id, ...prod.data() }})
  return items
}

const getProducto = async(id) => {
  const prod = await getDoc(doc(db, "productos", id))
  let item
  if(prod.data()){
    item = { id: prod.id, ...prod.data() }
  } else {
  item = "Producto no encontrado"
}
  return item
}

// CREATE PRODUCTS
const createProducto = async (objProducto) => {
  const estado = await addDoc(collection(db, "productos"), {  //esta linea genera el archivo en Firebase
    nombre: objProducto.nombre,
    marca: objProducto.marca,
    modelo: objProducto.modelo,
    idCategoria: objProducto.idCategoria,
    stock: objProducto.stock,
    precio: objProducto.precio,
    img: objProducto.img
  })

  return estado
}

//UPDATE Prducto
const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, 'productos', id), info)
  return estado
}

const deleteProducto = async (id) => {
  const estado = await deleteDoc(doc(db, 'productos', id))
  return estado
}

//CREATE AND READ ORDENES DE COMPRA
const createOrdenCompra = async (cliente, preTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {  //esta linea genera el archivo en Firebase
    nombre: cliente.nombre,
    apellido: cliente.apellido,
    email: cliente.email,
    dni: cliente.dni,
    direccion: cliente.direccion,
    precioTotal: preTotal,
    fecha: fecha,
    
  })

  return ordenCompra
}

const getOrdenCompra = async (id) => {
  const item = await getDoc(doc(db, "ordenCompra", id))
  const ordenCompra = {...item.data(), id:item.id}
  return ordenCompra
}

export {cargarBDD, getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}  //la exportamos para importarla desde funciones.js