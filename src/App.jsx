import React from 'react';
import Navbar from './components/Navbar/Navbar'
import FormBusqueda from './components/FormBusqueda/FormBusqueda';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'

const App = () => {
    return (
      <>
        <Navbar/>
        <FormBusqueda busqueda={"Buscar usuarios"} />
        <ItemListContainer greeting="info del detalle" />
      </>
    )
}

export default App;
