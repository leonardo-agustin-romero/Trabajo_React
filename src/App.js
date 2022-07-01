import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import NarBar from './components/NavBar';
import NuevoFooter from './components/footer';
import Saludo from './components/saludo';
import titulosPrincipal from './components/containers/ItemListContainer.js';

function App() {
  
  return (
    <div className="App">
      <NarBar />
      <Saludo />
      <titulosPrincipal />
      <NuevoFooter />
    </div>
  );
}

export default App;
