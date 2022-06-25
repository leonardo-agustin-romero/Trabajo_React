
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { isDOMComponent } from 'react-dom/test-utils';
import NarBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NarBar />
    </div>
  );
}

export default App;
