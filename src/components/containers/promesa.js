import React from 'react'

const Task = new Promise( (resolve, reject) => {
    let condicion = true
    if(condicion) {
        resolve ('200 promesa ok')
    }else{
        reject ('404 promesa error')
    }
    


});

setTimeout(() => {
    
}, 3000);

const Promesa = () => {
    Task
    .then((results) => {
        //throw new Error('se rompio todo') // error se rompio todo
        //console.log (results)
        return results;
    })
    .catch((err) => console.log (err))
    .then((res) => {
        console.log (res)
    })
    .finally(() => console.log('finalizado'))

    return (
        <> 
        'hola'
        </>)
}

export default Promesa;