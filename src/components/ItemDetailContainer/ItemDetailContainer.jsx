
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { consultarBDD } from '../../assets/funciones';
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState([])
    const {itemId} = useParams() 


    useEffect(() => {
        consultarBDD('../../json/productos.json').then(productos=>{
            const prod = productos.find(productoArray => productoArray.id === parseInt(itemId))
            setProducto(prod)
        })
    },[])
    
    return (
        <div className='detalleContainer'>
            <div className=" card mb-3 container detalleProducto">
                <ItemDetail producto={producto}/>
            </div>
        </div>
    );
}
    

export default ItemDetailContainer;
