import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

//Context
import { CartContextProvider } from './context/CartContext'

//Components
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Checkout from './components/Checkout/Checkout';
const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}></Route> 
          </Routes>
          <ToastContainer/>
          </CartContextProvider>   
      </BrowserRouter>
      
    </>
   
  );
}

export default App;




 {/* <ItemListContainer greeting="Texto ItemListCointainer" />               COMPONENTE ItemListContainer */}
 {/* <ItemDetailContainer id={4}/>                                           COMPONENTE ItemDetailContainer*/}