import './navbar.css'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown/Dropdown'
import CartWidget from '../CartWidget/CartWidget'

import { ButtonToggle } from 'reactstrap'
const Navbar = () => {
    return (

            <>

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                  <div className="container-fluid">
                    <Link className='navbar-brand' to="/">
                        <button className='btn btn-secondary'>UW Store</button>                      
                      </Link>
                                               
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button> */}
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
    }

    export default Navbar