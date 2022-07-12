
import React from 'react';
import { useEffect } from 'react';
import Ejecucion from './itemDetail';

const ItemDetailContainer = () =>{
    async function get() {
        try {
            const result = await fetch(
                'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10'
                );
                const data = await result.json();
                console.log(data.results);
                return (data.results);
            } catch {
                console.log('Error');
            }
        }
        useEffect(() => {
            get();
        }, []);
        return (
            <div>
        <Ejecucion />
    </div>
    );

}

export default ItemDetailContainer;


