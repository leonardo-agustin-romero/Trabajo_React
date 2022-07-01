import React from 'react';



const Image = (props)=>{

    return(
            <img src={props.src} alt={props.alt} style={{display: 
            props.src.length > 0 ? 'block' : 'none'}}/>
    )
}

export default Image;

