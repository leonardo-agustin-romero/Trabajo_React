import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/esm/ProgressBar';
import '../datos/cars.css'
import { useState } from 'react';
import productosBelleza from '../datos/datosBelleza'





export const CardsBelleza = () => {
    const [loading, setLoading] = useState(false);

    return (
    <div className="card">
        {loading ? <h2>cargando . . .</h2>
        :  
        productosBelleza.map(cardProductos =>
        <div key={cardProductos.id}>
            <div>
                <div className='w-100 mt-5'>
                        <Card.Img variant="top" src={cardProductos.img} className=' img'/>
                    </div>
                    </div>
                    <div className='card-header'>
                        <Card.Title>{cardProductos.nombre}</Card.Title>
                </div>
                <div>
                        <div className='card-body'>
                            
                    <b className="card-footer">precio${cardProductos.precio}</b>
                </div>
                        <button className="btn btn-primary">COMPRAR</button>
                        </div>
            </div>
        )}
        
    </div>
    );
}