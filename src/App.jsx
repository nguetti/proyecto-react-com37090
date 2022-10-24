import React from 'react';
import Navbar from './components/Navbar/Navbar'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'
import ItemCount from './components/ItemCount/ItemCount';

const App = () => {
    return (
      <>
        <Navbar/>
        <ItemListContainer greeting="Texto ItemListCointainer" />
        <ItemCount/>
      </>
    )
}

export default App;
