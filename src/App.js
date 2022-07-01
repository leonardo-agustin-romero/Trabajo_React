import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import NarBar from './components/NavBar';
import NuevoFooter from './components/footer';
import titulosPrincipal from './components/containers/ItemListContainer';
import saludo from './components/saludo';
function App() {
  
  return (
    <div className="App">
      <NarBar />
      <NuevoFooter />
    </div>
  );
}

export default App;
