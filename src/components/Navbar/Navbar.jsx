import './navbar.css'
import Dropdown from './Dropdown/Dropdown'
import CartWidget from '../CartWidget/CartWidget'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (

            <>

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="#">UW Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
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

                    <ul className='navbar-nav me-auto'>
                      <li className='nav-item'>
                        <a className='nav-link' href="#"><button className='btn white'><FontAwesomeIcon icon={faCartShopping}/></button></a>
                      </li>
                    </ul>
                  </div>
                </nav>
                </>
        )
    }

    export default Navbar