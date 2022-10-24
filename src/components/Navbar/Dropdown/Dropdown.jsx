import React from 'react';
import './Dropdown.css'

const Dropdown = () => {
    return (
        
          <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                          </a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Hombre</a></li>
                            <li><a className="dropdown-item" href="#">Mujer</a></li>
                            <li><a className="dropdown-item" href="#">Unisex</a></li>
                            {/* <li><hr className="dropdown-divider" /></li> */}
                           
                          </ul>
                        </li>   
        
    );
}

export default Dropdown;
