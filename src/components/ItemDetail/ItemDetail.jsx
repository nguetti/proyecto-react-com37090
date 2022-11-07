import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
const ItemDetail = ({producto}) => {
    return (
        
        
        <div width="50%" className="row g-0">
            
            <div className="col-md-4 ">
                <img src={`/img/${producto.img}`} className=" rounded-start img-fluid" />

            </div>
            <div className='col-md-8'>
                <div className="card-body">
                    <h5 className='card-title'> {producto.nombre} </h5>
                    <p className="card-text">Marca: {producto.marca}</p>
                    <p className="card-text">Modelo: {producto.modelo}</p>
                    <p className="card-text">Precio: ${producto.precio}</p>
                    <p className="card-text">Stock: {producto.stock}</p>
                    <p className="card-text">Cantidad:</p><ItemCount initial={1} stock={producto.stock}></ItemCount>
                    <hr></hr>
                    <button className='btn btn-dark'>Agregar al carrito</button>

                </div>


            </div>


        </div>
       
    );
}

export default ItemDetail;



