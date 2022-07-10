import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/esm/ProgressBar';
import '../containers/datos/cars.css'
import { useState } from 'react';
import { productos } from './datos/datos';
import { productosBazar } from './datos/datosBazar';




export const Cards = () => {
    const [loading, setLoading] = useState(false);

    return (
    <div className="card">
        {loading ? <h2>cargando . . .</h2>
        :  
        productosBazar.map(cardProductos =>
        <div key={cardProductos.id}>
            <div>
                <div className='w-100 mt-5 img'>
                        <Card.Img variant="top" src={cardProductos.img}/>
                    </div>
                    </div>
                    <div className='card-header'>
                        <Card.Title>{cardProductos.nombre}</Card.Title>
                <div>
                        <div className='card-body'>
                            
                    <b className="card-footer">${cardProductos.precio}   stock {cardProductos.stock} unidad</b>
                </div>
                        <button className="btn btn-primary">COMPRAR</button>
                        </div>
                </div>
            </div>
        )}
        
    </div>
    );
}


