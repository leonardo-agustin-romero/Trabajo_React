import React from 'react';
import { productos} from './datos';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';





export const Cards = () => {
    const [loading, setLoading] = useState(false);

    return (
    <div className="card">
        {loading ? <h2>cargando . . .</h2>
        :  
        productos.map(cardProductos =>
        <div  className='col-md-4 p-1' key={cardProductos.id}>
            <div>
                <div className='w-100 mt-5'>
                    <div className='card-header'>
                        <Card.Img variant="top" src={cardProductos.img}/>
                        <Card.Title>{cardProductos.nombre}</Card.Title>
                        <div className='card-body'>
                            
                    <b className="card-footer">${cardProductos.precio}   stock {cardProductos.stock} unidad</b>
                        <button className="btn btn-primary">COMPRAR</button>
                        </div>
                    </div>
                <div>
                </div>
                </div>
            </div>
        </div>
        )}
        
    </div>
    );
}


