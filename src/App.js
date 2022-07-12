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
import { CardsBijuteri } from './components/containers/cards/cardBijureri';
import { CardsBazar } from './components/containers/cards/cardsBazar';
import { CardsTecnologia } from './components/containers/cards/cardTecnologia';
import { CardsJuguetes } from './components/containers/cards/cardJuguetes';
import { CardsBelleza } from './components/containers/cards/cardBelleza';
import ItemListContainer from './components/containers/ItemListContainer';
import Item from './components/containers/item';
import Pago from './components/containers/itemDetailContainer';
import { ItemDetail } from './components/containers/itemDetail';



function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      <NarBar />
          <Routes>
            <Route index path='/' element={<Saludo />} />
            <Route path='/bazar.HTML' element={<CardsBazar/> }/>
            <Route path='/bijuteri.html' element={<CardsBijuteri/>} />
            <Route path='/tecnologia.html' element={<CardsTecnologia/>} />
            <Route path='/juguetes.html' element={<CardsJuguetes/>} />
            <Route path='/belleza.html' element={<CardsBelleza/>} />
            <Route path='/api.html' element={<Pago />} />
          </Routes>
          <Item />
          <ItemDetail />
        <Promesa2 />
        <NuevoFooter />
      </div>
    </BrowserRouter>
  );
}




export default App;
