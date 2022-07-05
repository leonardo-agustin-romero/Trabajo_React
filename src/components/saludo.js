import React from 'react';
import { useState } from 'react';
import {useEffect} from 'react';

const Saludo =() => {

    const [count, setCount] = useState(0);
    const [bolean, setbolean] = useState(true);

    const Aumentar = () => {
    setCount(count + 1);
    }

    const CambiarEstado = () => {
        setbolean(!bolean)
    };

    useEffect(() => {
    console.log('siempre ejecuta ultimo');
    return () => {
        console.log('desmontar');
    } 
    });

    useEffect(() => {
        console.log('se carga una vez'); 
    },[]);

    useEffect(() => {  
        console.log('cambio de estado');
    },[bolean]);

    return (
        <div>
            {Date()}
            <h1>contador:{count}</h1>
            <button onClick={Aumentar}>contador</button>
            <button onClick={CambiarEstado}>cambiar estado</button>
            <h1>bienvenidos a react</h1>
        </div>
    );
}

export default Saludo;