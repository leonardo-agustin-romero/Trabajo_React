import React from 'react'

const Task = new Promise( (resolve, reject) => {
    let condicion = true
    if(condicion) {
        resolve ('200 promesa ok')
    }else{
        reject ('404 promesa error')
    }
    


});

const Promesa = () => {
    Task
    .then((results) => console.log (results));
    return (
        <> 
        
        </>)
}

export default Promesa;