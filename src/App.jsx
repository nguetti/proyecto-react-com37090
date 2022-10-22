import React from 'react';
import Navbar from './components/Navbar/Navbar'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'

const App = () => {
    return (
      <>
        <Navbar/>
        <ItemListContainer greeting="" />
      </>
    )
}

export default App;
