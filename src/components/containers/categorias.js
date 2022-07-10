import React  from 'react';
import { Card } from "react-bootstrap";
import { useState } from "react";
import { productos } from './datos/datos';




export const categoriaBazar = () => {


        return(
            <>
                    <div className="card">
        {
        productos.map(cardProductos  =>
        <div  className='col-md-4 p-4' key={cardProductos.id}>
            <div>
                <div className='card w-80 mt-5'>
                    <div className='card-header'>
                        <Card.Title>{cardProductos.nombre}</Card.Title>
                        <Card.Img variant="top" src={cardProductos.img} className='w-50'/>
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
            </>
        )
    }