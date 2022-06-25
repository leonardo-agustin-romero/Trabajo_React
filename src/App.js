
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { isDOMComponent } from 'react-dom/test-utils';
import NarBar from './components/NavBar';
import NuevoFooter from './components/footer';
import titulosPrincipal from './components/containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NarBar />
      <div>
        <titulosPrincipal />
      </div>
      <NuevoFooter />
    </div>
  );
}

export default App;
