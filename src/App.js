import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import NarBar from './components/NavBar';
import NuevoFooter from './components/footer';
import Saludo from './components/saludo';
import ItemListContainer from './components/containers/ItemListContainer';
import Item from './components/containers/item';
function App() {
  
  return (
    <div className="App">
      <NarBar />
      <Saludo />
      <ItemListContainer prop='PRACTICANDO PROP'/>
      <NuevoFooter />
      <Item />
    </div>
  );
}

export default App;
