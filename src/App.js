import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import NarBar from './components/NavBar';
import NuevoFooter from './components/footer';
import Saludo from './components/Saludo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Promesa from './components/containers/promesa';
import { Cards } from './components/containers/card';
import { Promesa2 } from './components/containers/promesa2';
import { categoriaBazar } from './components/containers/categorias';
import ItemListContainer from './components/containers/ItemListContainer';



function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      <NarBar />
          <Routes>
            <Route index path='/' element={<Saludo />} />
            <Route path='/bazar.HTML' element={<categoriaBazar /> }/>
            <Route path='/billuteri.HTML' element={<ItemListContainer prop='PRACTICANDO PROP'/>} />
          </Routes>
        <Cards />
        <Promesa2 />
        <NuevoFooter />
      </div>
    </BrowserRouter>
  );
}




export default App;
