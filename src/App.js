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
