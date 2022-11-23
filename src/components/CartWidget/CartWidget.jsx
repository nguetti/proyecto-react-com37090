import {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {CartContext} from "../../context/CartContext"
const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <div>
            <ul className='navbar-nav me-auto'>
                      <li className='nav-item'>
                        <Link className="nav-link" to='/cart'>
                            <p>{getItemQuantity()}</p>
                            <button className='btn white' ><FontAwesomeIcon icon={faCartShopping}/> </button>

                        </Link>
                        
                      </li>
            </ul>
        </div>
    );
}

export default CartWidget;
