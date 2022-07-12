import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/esm/ProgressBar';
import '../containers/datos/cars.css'
import { useState } from 'react';
import Pago from './itemDetailContainer';





export const ItemDetail = () => {
    const [loading, setLoading] = useState(false);

    return (
    <div className="card">
        {loading ? <h2>cargando . . .</h2>
        :  
        Pago.map(cardProductos =>
        <div>
            <div>
                    </div>
                    <div className='card-header'>
                        <Card.Title>{cardProductos.nome}</Card.Title>
                <div>
                        <div className='card-body'>
                            
                    <b className="card-footer">${cardProductos.url}</b>
                </div>
                        <button className="btn btn-primary">COMPRAR</button>
                        </div>
                </div>
            </div>
        )}
        
    </div>
    );
}