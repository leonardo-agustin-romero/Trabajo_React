import React from 'react';
import { productos } from './datos';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';






export const Cards = () => {

    return (
    <div className="card">
        {productos.map(cardProductos =>
        <div  className='col-md-4 p-1' key={cardProductos.id}>
            <Card>
                <div className='card w-100 mt-5'>
                <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body className='w-50'>
                    <Card.Title>{cardProductos.nombre}</Card.Title>
                    <Card.Text>
                        ${cardProductos.precio}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{cardProductos.categoria}</small>
                </Card.Footer>
                </div>
            </Card>
        </div>
        )}

    </div>
    );
}


