import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown/Dropdown'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = React.memo(() => {
    return (

            <>

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                  <div className="container-fluid">
                    <Link className='navbar-brand' to="/">
                        <button className='btn btn-secondary'>UW Store</button>                      
                      </Link>
                                               
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Dropdown/>
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Ventas mayoristas</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Quiénes somos</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Contacto</a>
                        </li>
                        
                        
                      </ul>                       
                    </div>

                    <CartWidget />
                    
                  </div>
                </nav>
                </>
        )
    })

    export default Navbar