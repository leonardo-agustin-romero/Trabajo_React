import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import NarBar from './components/NavBar';
import NuevoFooter from './components/footer';
import Saludo from './components/saludo';
import ItemListContainer from './components/containers/ItemListContainer';

function App() {
  
  return (
    <div className="App">
      <NarBar />
      <Saludo />
      <ItemListContainer prop='PRACTICANDO PROP'/>
      <NuevoFooter />
    </div>
  );
}

export default App;
