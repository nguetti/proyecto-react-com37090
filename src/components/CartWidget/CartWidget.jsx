import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const CartWidget = () => {
    return (
        <div>
            <ul className='navbar-nav me-auto'>
                      <li className='nav-item'>
                        <Link className="nav-link" to='/cart'>
                            <button className='btn white' ><FontAwesomeIcon icon={faCartShopping}/> </button>

                        </Link>
                        
                      </li>
            </ul>
        </div>
    );
}

export default CartWidget;
