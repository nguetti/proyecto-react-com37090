import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import './Dropdown.css'

const Dropdown = () => {
    return (
        
          <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                          </a>
                          <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" to='/category/1'>Hombre</NavLink></li>
                            <li><NavLink className="dropdown-item" to='/category/2'>Mujer</NavLink></li>
                            <li><NavLink className="dropdown-item" to='/category/3'>Unisex</NavLink></li>
                            {/* <li><hr className="dropdown-divider" /></li> */}
                           
                          </ul>
                        </li>   
        
    );
}

export default Dropdown;
