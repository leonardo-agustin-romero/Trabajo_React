
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { isDOMComponent } from 'react-dom/test-utils';
import NarBar from './components/NavBar';
import NuevoFooter from './components/footer';
import titulos from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NarBar />
      <titulos />
      <NuevoFooter />
    </div>
  );
}

export default App;
