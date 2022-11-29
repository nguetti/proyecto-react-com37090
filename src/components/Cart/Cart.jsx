import {useContext} from 'react';
import {CartContext} from '../../context/CartContext'
import {Link} from 'react-router-dom'
import './cart.css'

const Cart = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)
    return (
        <>
        
        {cart.length === 0 ?
         <div>
            <p>Tu Carrito está vacío</p>
            <Link to={'/'}><button className='btn btn-dark'>Ir al inicio</button></Link>
         </div>
         :
         <div className='contenedorCart'>
             {cart.map((prod,indice) =><div className="card mb-3" key={indice} style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">Cantidad: {prod.cant}</p>
                            <p className="card-text">Precio unitario: ${prod.precio}</p>
                            <p className="card-text">Subtotal: ${prod.precio * prod.cant}</p>
                            <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            )}
        <div>
            <p className="totall">Total de tu compra: $ {totalPrice()}</p>

            <button className="btn btn-secondary"><Link to="/" className="nav-link">Ver más productos</Link></button>
            <button className='btn btn-danger' onClick={emptyCart}>Limpiar carrito</button>
            <Link to='/checkout'>
                <button className='btn btn-primary' >Finalizar Compra</button>
            </Link>
        </div>
         </div>
         }
        </>
    );
}

export default Cart;
