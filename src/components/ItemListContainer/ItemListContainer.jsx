//import {} from 'react';
import {useState, useEffect, useContext} from 'react';
import ItemList from '../ItemList/ItemList'
import {getProductos} from '../../assets/firebase.js'
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()


    useEffect(() => {
        if(category) {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.idCategoria === parseInt(category))
                console.log(productsList)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            getProductos().then(productsList => {
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
        
    },[category]);
    
    return (
        <div className='row' >
            {productos}
        </div>
       
    );
}

export default ItemListContainer;

