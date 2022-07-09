import datos from "./DataObjetos.json"

export const Promesa2 = () => {
    setTimeout(() =>{
    // let url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10';
    let url = {datos}
    console.log(url.datos.Datos);
    fetch(url.datos.Datos)
    .then((res)=>res.json())
    .then((data)=>{
        return console.log(data.datos);
    })
},1000);    
}

