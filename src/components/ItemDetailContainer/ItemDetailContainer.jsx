
import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getProductos} from '../../assets/firebase'
import { getProducto } from '../../assets/firebase';
import { Link } from 'react-router-dom';

import { consultarBDD } from '../../assets/funciones';
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState([])
    const {id} = useParams() 

    useEffect(() => {
        getProducto(id).then(prod => {
            
            setProducto(prod)
        
        })
    },[])
    
    return (
        <>
        { producto != "Producto no encontrado" ?
        
            <div className='detalleContainer'>
                <div className=" card mb-3 container detalleProducto">
                    <ItemDetail producto={producto}/>
                </div>
            </div>
        
        :
        
        <h1 className='notFound'>Producto no encontrado</h1>}
        
        </>
    );
}
    

export default ItemDetailContainer;
