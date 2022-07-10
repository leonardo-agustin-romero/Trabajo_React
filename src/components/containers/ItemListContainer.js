import React from 'react';
import { itemlist } from './itemList';


const ItemListContainer = ({prop}) =>{
    
    return(
        <>
            <h2>{prop}</h2>
            {itemlist}
        </>
    )
}


export default ItemListContainer;

