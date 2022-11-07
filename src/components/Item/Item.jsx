import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    return (
        <div>
            <div className="card cardProducto" style={{width: '18rem'}}>
                  <div className="containerImg">
                  <img className="card-img-top" src={`../img/${prod.img}`} alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">Marca: {prod.marca}</p>
                    <p className="card-text">Modelo: {prod.modelo}</p>
                    <p className="card-text">Precio: ${prod.precio}</p>
                    <p className="card-text">Stock: {prod.stock}</p>
                    <button className='btn btn-dark'><Link className="nav-link" to={`/product/${prod.id}`}>Ver producto</Link></button>
                  </div>
                </div>
        </div>
    );
}

export default Item;
