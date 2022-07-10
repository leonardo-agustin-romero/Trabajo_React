

export const Promesa2 = () => {
    setTimeout(() =>{
    let url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10';
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        return console.log(data.results);
    })
},1000);    
}

