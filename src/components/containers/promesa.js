import React from 'react'
import { productos } from './datos/datos';
import { Cards } from './card';


const Task = new Promise( (resolve, reject) => {
    let condicion = true
    if(condicion) {
        resolve (productos);
    }else{
        reject ('404 promesa error')
    }
});





const Promesa = () => {
    setTimeout(() => {
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
        
        console.log("productos simulacion 3 segundos")
    }, 3000);
    setTimeout(() => {
        Task
        .then((results) => {
            return results;
        })
        .catch((err) => console.log (err))
        .then((res) => {
            console.log (res);
        })
        .finally(() => console.log('finalizado'))
        
        .catch((error) => console.log(error));
        console.log("producto simulacion 6 segundos")
    }, 6000);
    
    return (
        <> 
            {Cards()}
        </>)
}

export default Promesa;