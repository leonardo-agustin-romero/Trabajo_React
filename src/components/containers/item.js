import React from 'react';
import { useEffect } from 'react';


export default function Item() {
    async function get() {
        try {
        const result = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10'
    );
    const data = await result.json();
    console.log(data.results);
    } catch {
    console.log('Error');
    }
}
useEffect(() => {
    get();
    }, []);
    return (
    <div>
        <h1>api pokemon</h1>

    </div>
    );
}