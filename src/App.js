import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import NarBar from './components/NavBar';
import NuevoFooter from './components/footer';
import Saludo from './components/Saludo';
import ItemListContainer from './components/containers/ItemListContainer';
import Item from './components/containers/item';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Promesa from './components/containers/promesa';
import { Cards } from './components/containers/card';
import { Promesa2 } from './components/containers/promesa2';
import { categoriaBazar } from './components/containers/categorias';
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      <NarBar />
          {/* <Routes>
            <Route index path='/' element={<Saludo />} />
            <Route path='/bazar.HTML' element={<categoriaBazar /> }/>
            <Route path='/billuteri.HTML' element={<ItemListContainer prop='PRACTICANDO PROP'/>} />
          </Routes>
        <Item /> */}
        {/* <Cards /> */}
        {/* <Promesa /> */}
        <Promesa2 />
        <NuevoFooter />
      </div>
    </BrowserRouter>
  );
}

// import React from 'react';
// import { useEffect } from 'react';
// import './style.css';

// export default function App() {
//   async function get() {
//     try {
//       const result = await fetch(
//         'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10'
//       );
//       const data = await result.json();
//       console.log(data.results);
//     } catch {
//       console.log('Error');
//     }
//   }
//   useEffect(() => {
//     get();
//   }, []);
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }


export default App;
