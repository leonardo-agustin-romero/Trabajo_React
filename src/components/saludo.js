import React from 'react';
import { useState } from 'react';

const Saludo =() => {

    const [count, setCount] = useState(0);

    const Aumentar = () => {
    setCount(count + 1);

    };
    return (
        <div>
            {Date()}
            <h1>contador:{count}</h1>
            <button onClick={Aumentar}>contador</button>
            <h1>bienvenidos a react</h1>
        </div>
    );
}

export default Saludo;